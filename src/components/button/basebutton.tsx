import React from "react";
import { MouseEventHandler } from "react";
export type BaseButtonProps = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  className?: string | undefined;
};

const BaseButton: React.FC<BaseButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={props.style}
      className={props.className}
    >
      {props.children}
    </button>
  );
};
export default BaseButton;
