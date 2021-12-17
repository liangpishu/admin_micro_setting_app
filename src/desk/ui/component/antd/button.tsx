import { Button } from "antd";
import { FC } from "react";
import { ButtonProps } from "antd/lib/button/button";

type TProps = {} & ButtonProps;

/**
 * primary button
 */
const PButton:FC<TProps> = (props) => {
  return  <Button type={"primary"} {...props}/>
}

/**
 * normal button
 */
const NButton:FC<TProps> = (props) => {
  return <Button {...props}/>
}

export {
  PButton,
  NButton
}
