import React from "react";
import { message } from "antd";
import { ArgsProps, ConfigOnClose, MessageType } from "antd/lib/message";

interface IMessage {
  content: React.ReactNode | ArgsProps;
  duration?: number | (() => void);
  onClose?: ConfigOnClose;
}

class Message {
  static success(props: IMessage): MessageType {
    return message.success(props);
  }

  static error(props: IMessage): MessageType {
    return message.error(props);
  }

  static info(props: IMessage): MessageType {
    return message.info(props);
  }
}

export default Message;
