import styled from "styled-components";
import { buttonBorderRadius, buttonColor, textColor } from "../style/common";

export const Button = styled.div`
  ${buttonColor}
  ${buttonBorderRadius}
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

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
