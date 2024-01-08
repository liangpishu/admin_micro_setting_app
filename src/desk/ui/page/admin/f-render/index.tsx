import { MyStorage } from "@/desk/storage";
import { MyLangUtil } from "@utils";
import Generator from "fr-generator";
import { useRef } from "react";

const FRender = () => {
  const genRef = useRef<any>();
  const defaultSchema = MyStorage.FRenderData.session.get("schema");
  return (
    <div style={{ height: "80vh" }}>
      <Generator
        defaultValue={defaultSchema}
        ref={genRef}
        extraButtons={[
          true,
          true,
          true,
          false,
          {
            text: MyLangUtil.get("Save"),
            onClick: () => {
              const value = genRef?.current?.getValue();
              console.log(value, "value");
              MyStorage.FRenderData.session.set("schema", value);
            },
            type: "primary",
          },
        ]}
      />
    </div>
  );
};

export default FRender;
