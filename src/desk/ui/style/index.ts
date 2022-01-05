import { Standard } from "./standard";
import * as StyledF from "styled-components";
import { AntdStyle } from "./antd-style";
import React from "react";

class Styles {

  getTheme(name?: string): any {
    if (name) {
      return Standard;
    } else {
      return Standard;
    }
  }

  createGlobalStyles(name: string): React.ComponentClass<any> {
    const define = this.getTheme(name);

    return StyledF.createGlobalStyle`
      ${AntdStyle(define)}
      *{
        margin: 0;
        padding: 0;
       }
      html,body{
         width: 100%;
         height: 100%;
      }
      #root{
        width:100%;
        height: 100%;
        ::after {
          content: "";
          clear: both;
          display:block;
          height:0;
          visibility:hidden;
        }
      }   
	  `;
  }
}

export default new Styles();
