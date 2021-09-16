import { FunctionComponent } from "react";
import styled from "styled-components";

interface ColorButtonProps {
  onClick: React.MouseEventHandler;
  colorCode: string;
  colorSlug: string;
  className: string;
  selected?: boolean;
}

const ColorButton: FunctionComponent<ColorButtonProps> = (props) => {
  return (
    <Wrapper
      color={props.colorCode}
      data-color={props.colorSlug}
      onClick={props.onClick}
      className={props.className}
      selected={props.selected}
    ></Wrapper>
  );
};

const Wrapper = styled.div<{ color: string; selected: boolean | undefined }>`
  cursor: pointer;
  background-color: ${(props) => props.color};
  height: 50px;
  width: 50px;
  display: inline-block;
  border-radius: 50%;
  box-shadow: var(--soft-shadow);
  position: relative;

  ${(props) => (props.selected ? borderSelected : null)}
`;
const borderSelected = ` &:before {
    content: "";
    position: absolute;
    border-radius: inherit;
    inset: -4px;
    color: transparent;
    border: solid 1px black;
  }
  `;
export default ColorButton;
