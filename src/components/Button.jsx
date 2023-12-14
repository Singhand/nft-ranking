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
