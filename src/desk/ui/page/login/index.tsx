import { useForm } from "antd/es/form/Form";
import { Col, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { CommonService } from "@service/common/common-service";
import { MyStorage } from "@storage";
import { PButton } from "@ui/component/antd/button";
import { FItem, FText, FForm } from "@form-components";
import { LoginStyle } from "@ui/style/login-style";
import { MyLodashUtil, MyLangUtil } from "@utils";
import { Message } from "@/desk/service";

const Login = () => {
  const [form] = useForm();
  const history = useHistory();
  const onFinish = (values: Record<string, string>) => {
    CommonService.login({ userName: values.userName, pwd: values.pwd }).then((res) => {
      loginCallback(res, history);
    });
  };
  return (
    <LoginStyle>
      <Row className={"login-row"}>
        <Col span={12} className={"login-left"}>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur facilis fugiat, natus recusandae
            sunt tempora voluptates! Aliquam amet beatae corporis, numquam saepe tempora tenetur voluptatibus.
            Recusandae repudiandae temporibus voluptatibus.
          </p>
        </Col>
        <Col span={12} className={"login-right"}>
          <FForm onFinish={onFinish} className={"login-form"} form={form}>
            <FText
              inputProps={{
                placeholder: MyLangUtil.get("User"),
                prefix: <UserOutlined className="site-form-item-icon" />,
              }}
              propName={"userName"}
            />
            <FText
              inputProps={{
                placeholder: MyLangUtil.get("Password"),
                prefix: <LockOutlined className="site-form-item-icon" />,
                type: "password",
              }}
              propName={"pwd"}
            />
            <FItem>
              <PButton htmlType="submit" className={"login-form-button"}>
                {MyLangUtil.get("Login")}
              </PButton>
            </FItem>
          </FForm>
        </Col>
      </Row>
    </LoginStyle>
  );
};

function loginCallback(resp: { data: Record<string, unknown> }, history: ReturnType<typeof useHistory>) {
  const { data } = resp;
  const token = MyLodashUtil.get(data, "authKey");
  const userName = MyLodashUtil.get(data, "userName");

  MyStorage.Account.set("userName", userName);
  MyStorage.Account.set("authKey", token);
  Message.success({ content: MyLangUtil.get("Login successful！") });
  history.replace("/");
}

export default Login;
