import React, { FC } from "react";
import { Form, FormProps } from "antd";

const FForm: FC<FormProps> = (props) => {
  return (
    <Form {...props}/>
  );
};

export default FForm;
