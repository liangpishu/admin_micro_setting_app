import React from 'react';
import { useHistory } from 'react-router';
import { LoginPath } from '../../../consts/path/login';
import { MyStorage } from '../../../storage';
import { PButton } from '../../component/antd/button';

const Dashborad = () => {
  const history = useHistory();
  return (
    <div>
      已登录
      <PButton onClick={() => {
        MyStorage.Account.clear();
        history.push(LoginPath.LOGIN);
      }}>
        退出
      </PButton>
    </div>
  );
};

export default Dashborad;