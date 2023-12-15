import styled from "styled-components";
import {
  backgroundColor,
  buttonBorderRadius,
  buttonColor,
  hoverTss,
  textColor,
} from "../style/common";

export const Button = styled.div`
  ${buttonColor}
  ${buttonBorderRadius}
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${hoverTss}
  &:hover {
    opacity: 0.8;
  }

  & svg {
    width: 24px;
    height: 24px;
  }
`;

export const Fab = styled(Button)`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100px;

  @media screen and (max-width: 430px) {
    right: 20px;
    bottom: 20px;
  }
`;

export const ToggleChip = styled(Button)`
  border-radius: 100px;
  padding: 10px 20px;

  ${(props) => {
    if (props.select) {
      return `
  color: black;
  background-color: white;`;
    } else {
      return `${backgroundColor} border: 1.5px solid #797979;`;
    }
  }}
`;
