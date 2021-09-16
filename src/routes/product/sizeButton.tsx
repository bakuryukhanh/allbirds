import { FunctionComponent } from "react";
import styled from "styled-components";

interface SizeButtonProps {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
}

const SizeButton: FunctionComponent<SizeButtonProps> = (props) => {
  return (
    <Wrapper>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        id={props.value}
        defaultChecked={props.checked}
      />
      <label htmlFor={props.value}>{props.label}</label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  & input {
    display: none;
  }
  & label {
    cursor: pointer;
    display: block;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: solid 1px var(--text-gray);
  }
  & input:checked + label {
    background-color: black;
    color: white;
  }
  & + & {
    margin-left: 10px;
  }
`;

export default SizeButton;
