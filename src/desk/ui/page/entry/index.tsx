import { Breadcrumb, Menu } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { LoginPath } from '../../../consts/path/login';
import { MyStorage } from '../../../storage';
import { PButton } from '../../component/antd/button';
import { MyLayout, MyHeader, MyContent, MyFooter } from '../../component/antd/my-layout';

const Entry = () => {
  const history = useHistory();
  return (
    <EntryStyle>
      <MyLayout className="layout">
        <MyHeader>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
        </MyHeader>
        <MyContent style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <PButton onClick={() => {
              MyStorage.Account.clear();
              history.push(LoginPath.LOGIN);
            }}>
              退出
            </PButton></div>
        </MyContent>
        <MyFooter style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</MyFooter>
      </MyLayout>
    </EntryStyle>
  );
};

export default Entry;

const EntryStyle = styled.div`
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
`;