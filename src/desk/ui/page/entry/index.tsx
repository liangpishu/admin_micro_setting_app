import React from "react";
import styled from "styled-components";
import { DeskPageFooter } from "../desk-page/desk-page-footer";
import { DeskPageHeader } from "../desk-page/desk-page-header";
import { DeskPageContent } from "../desk-page/desk-page-content";

const Entry = () => {
  return (
    <EntryStyle>
      <DeskPageHeader/>
      <DeskPageContent/>
      <DeskPageFooter/>
    </EntryStyle>
  );
};

export default Entry;

const EntryStyle = styled.div`  //撑满
  overflow: auto;
  height: 100%;
  background: #f0f2f5;

  .page-content { // 外层盒子
    padding: 0 50px;
    min-height: calc(100% - 70px - 64px);
    display: flex;
    flex-direction: column;

    .site-layout-content { // 内容区域
      flex: 1;
      min-height: 500px;
      padding: 24px;
      background: #fff;
    }
  }

  .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }
`;
