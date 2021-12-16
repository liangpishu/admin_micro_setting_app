import { Button } from "antd";
import { FC } from "react";
import { BaseButtonProps } from "antd/lib/button/button";

type TProps = {} & BaseButtonProps;

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
