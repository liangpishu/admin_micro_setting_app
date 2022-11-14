import { MyHeader } from "../antd/my-layout";
import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { Avatar, Dropdown, Menu } from "antd";
import { MyStorage } from "@/desk/storage";
import { DownOutlined } from "@ant-design/icons";
import { LoginPath } from "@consts/path/login";
import MyLangUtil from "@utils/my-lang-util";
import { useHistory } from "react-router";

export const DeskPageHeader: FC = (props) => {
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
    return (
      <Menu>
        <Menu.Item key="Setting" onClick={() => {}}>
          {MyLangUtil.get("Setting")}
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          key="signOut"
          onClick={() => {
            MyStorage.Account.clear();
            history.push(LoginPath.LOGIN);
          }}
        >
          {MyLangUtil.get("Sign Out")}
        </Menu.Item>
      </Menu>
    );
  }, [history]);
  return (
    <HeaderRightStyle>
      <Avatar
        style={{ backgroundColor: "#7265e6", verticalAlign: "middle" }}
        size="large"
      >
        {user}
      </Avatar>
      <Dropdown overlay={headerRightMenu} trigger={["click"]}>
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
