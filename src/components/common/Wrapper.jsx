import styled from "styled-components";
import { backgroundColor } from "../../style/common";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 430px;
  padding: 35px 20px;
  padding-bottom: 0;
  ${backgroundColor}
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;
