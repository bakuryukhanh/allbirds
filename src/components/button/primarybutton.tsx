import React, { CSSProperties } from "react";
import BaseButton, { BaseButtonProps } from "./basebutton";
type PrimaryButtonProps = Omit<Omit<BaseButtonProps, "style">, "className"> & {
  size?: "small" | "medium" | "large" | "full";
}; //prevent changing default style
const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  const sizeStyle = (size: typeof props.size): CSSProperties => {
    switch (size) {
      case "small":
        return { height: "50px", width: "180px" };
      case "full":
        return { height: "50px", width: "100%" };
      default:
        return {};
    }
  };
  return (
    <>
      <BaseButton
        onClick={props.onClick}
        className="button button--primary"
        style={sizeStyle(props.size)}
      >
        {props.children}
      </BaseButton>
    </>
  );
};
export default PrimaryButton;
