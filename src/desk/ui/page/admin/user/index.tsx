import React from "react";
import { PButton } from "desk/ui/component/antd/button";
import { MyStorage } from "desk/storage";
import { useHistory } from "react-router";
import { LoginPath } from "desk/consts/path/login";

const UserInfo = () => {
  const history = useHistory();

  return (
    <>
      user info
      <PButton onClick={() => {
        MyStorage.Account.clear();
        history.push(LoginPath.LOGIN);
      }}>
        退出
      </PButton>
    </>
  );
};

export default UserInfo;
