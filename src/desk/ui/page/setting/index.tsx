import { ConfigProvider } from "antd";
import { FC, useState } from "react";
import { SketchPicker } from "react-color";
const UserSetting: FC = () => {
  const [color, setColor] = useState({
    primaryColor: "#1890ff",
    errorColor: "#ff4d4f",
    warningColor: "#faad14",
    successColor: "#52c41a",
    infoColor: "#1890ff",
  });
  const onColorChange = (nextColor: Partial<typeof color>) => {
    const mergedNextColor = {
      ...color,
      ...nextColor,
    };
    setColor(mergedNextColor);
    ConfigProvider.config({
      theme: mergedNextColor,
    });
  };
  return (
    <>
      <SketchPicker
        presetColors={["#1890ff", "#25b864", "#ff6f00"]}
        color={color.primaryColor}
        onChange={({ hex }) => {
          onColorChange({
            primaryColor: hex,
          });
        }}
      />
    </>
  );
};

export default UserSetting;
