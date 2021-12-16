import styled from "styled-components";

export const LoginStyle = styled.div`
  height: 100%;
  padding: 20px;

  .login-row {
    height: 100%;
  }

  .login-left {
    height: 100%;
    background: #4069f8;
    display: flex;
    align-items: center;

    p {
      padding: 0 10px;
      color: #fff;
    }
  }

  .login-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-form {
    width: 30%;
    min-width: 300px;
  }

  .login-form-button {
    width: 100%;
  }
`;
