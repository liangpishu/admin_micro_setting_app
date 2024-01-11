import { MyHeader } from "../antd/my-layout";
import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { Avatar, Dropdown, Menu, MenuProps } from "antd";
import { MyStorage } from "@/desk/storage";
import { DownOutlined } from "@ant-design/icons";
import { LoginPath } from "@consts/path/login";
import { MyLangUtil } from "@utils";
import { useHistory } from "react-router";
import { SettingPath } from "@/desk/consts/path/setting";

enum DROP_KEY {
  SETTING = "SETTING",
  LOG_OUT = "LOG_OUT",
}

export const DeskPageHeader: FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <MyHeader className={"page-header"}>
      {props.children}
      <HeaderRight />
    </MyHeader>
  );
};

const HeaderRight: FC = () => {
  const user = MyStorage.Account.get("userName") || "";
  const history = useHistory();
  const headerRightMenu = useMemo(() => {
    return [
      {
        label: MyLangUtil.get("Setting"),
        key: DROP_KEY.SETTING,
      },
      {
        label: MyLangUtil.get("Sign Out"),
        key: DROP_KEY.LOG_OUT,
      },
    ];
  }, []);
  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === DROP_KEY.SETTING) {
      history.push(SettingPath.INDEX);
    } else if (key === DROP_KEY.LOG_OUT) {
      MyStorage.Account.clear();
      history.replace(LoginPath.LOGIN);
    }
  };
  return (
    <HeaderRightStyle>
      <Avatar style={{ backgroundColor: "#7265e6", verticalAlign: "middle" }} size="large">
        {user}
      </Avatar>
      <Dropdown menu={{ items: headerRightMenu, onClick }} trigger={["click"]}>
        <div className={"header-right-dropdown"}>
          Hi! 你好 <DownOutlined />
        </div>
      </Dropdown>
    </HeaderRightStyle>
  );
};

const HeaderRightStyle = styled.div.attrs<{ className: "string" }>({
  className: "page-header-right",
})`
  max-width: 200px;
  padding-left: 20px;

  .header-right-dropdown {
    display: inline-block;
    padding-left: 10px;
    cursor: pointer;
  }
`;
