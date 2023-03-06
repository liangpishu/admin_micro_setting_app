import { MyStorage } from "@/desk/storage";
import { Button, Modal } from "antd";
import FormRender, { useForm } from "form-render";
export default () => {
  const form = useForm();
  const schema = MyStorage.FrenderData.get("schema");
  const onFinish = (formData: object) => {
    Modal.info({
      title: "Submit Data",
      content: JSON.stringify(formData || {}),
    });
  };
  return (
    <>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        提交
      </Button>
    </>
  );
};
