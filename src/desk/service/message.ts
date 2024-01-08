import { message } from "antd";
import { JointContent, MessageType } from "antd/es/message/interface";

interface IMessage {
  content: JointContent;
  duration?: number | VoidFunction;
  onClose?: VoidFunction;
}

class Message {
  static success(props: IMessage): MessageType {
    const { content, duration, onClose } = props;
    return message.success(content, duration, onClose);
  }

  static error(props: IMessage): MessageType {
    const { content, duration, onClose } = props;
    return message.error(content, duration, onClose);
  }

  static info(props: IMessage): MessageType {
    const { content, duration, onClose } = props;
    return message.info(content, duration, onClose);
  }
}

export default Message;
