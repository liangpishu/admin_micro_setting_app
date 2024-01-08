import React, { FC } from "react";
import { Form, FormProps } from "antd";

const FForm: FC<FormProps & { children?: React.ReactNode }> = (props) => {
  return <Form {...props} />;
};

export default FForm;
