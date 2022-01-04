import { useForm } from "antd/es/form/Form";
import FForm from "../../component/antd/f-form";
import { FText } from "../../component/antd/f-text";
import MyLangUtil from "../../../utils/my-lang-util";
import { LoginStyle } from "../../style/login-style";
import { Col, message, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { FItem } from "../../component/antd/f-item";
import { PButton } from "../../component/antd/button";
import { MyStorage } from "../../../storage";
import { useHistory } from "react-router";
import { UserInfo } from "../../../consts/user-info/user-info";
import MyLodashUtil from "../../../utils/my-lodash-util";
import Message from "../../../service/message";

const Login = () => {
  const [form] = useForm();
  const history = useHistory();
  const onFinish = (values: any) => {
    const findUser = UserInfo.find((item) => item.userName === values.userName && item.pwd === values.pwd);
    if (MyLodashUtil.isEmpty(findUser)) {
      Message.error({
        content: MyLangUtil.get("账号或密码错误！")
      });
    } else {
      MyStorage.Account.set("userName", values.userName);
      MyStorage.Account.set("authKey", values.userName);
      message.success("登录成功！");
      history.replace("/");
    }
  };
  return <LoginStyle>
    <Row className={"login-row"}>
      <Col span={12} className={"login-left"}>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur facilis fugiat, natus recusandae
          sunt tempora voluptates! Aliquam amet beatae corporis, numquam saepe tempora tenetur voluptatibus. Recusandae
          repudiandae temporibus voluptatibus.</p>
      </Col>
      <Col span={12} className={"login-right"}>
        <FForm onFinish={onFinish} className={"login-form"} form={form}>
          <FText
            inputProps={{
              placeholder: MyLangUtil.get("账号"),
              prefix: <UserOutlined className="site-form-item-icon" />,
            }}
            propName={"userName"} />
          <FText
            inputProps={{
              placeholder: MyLangUtil.get("密码"),
              prefix: <LockOutlined className="site-form-item-icon" />,
              type: "password",
            }}
            propName={"pwd"} />
          <FItem>
            <PButton htmlType="submit" className={"login-form-button"}>
              {MyLangUtil.get("登录")}
            </PButton>
          </FItem>
        </FForm>
      </Col>
    </Row>
  </LoginStyle>;
};

export default Login;
