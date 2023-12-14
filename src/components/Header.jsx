import styled from "styled-components";
import { buttonBorderRadius, buttonColor, textColor } from "../style/common";
import { Button } from "./Button";

const HEIGHT = "50px";

const Title = styled.div`
  ${textColor}
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const IconBtn = styled(Button)`
  width: ${HEIGHT};
  height: ${HEIGHT};
`;

const HeaderCtn = styled.div`
  width: 100%;
  height: ${HEIGHT};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const IconBtnRight = styled(IconBtn)`
  position: absolute;
  top: 0;
  right: 0;
`;

const IconBtnLeft = styled(IconBtn)`
  position: absolute;
  top: 0;
  left: 0;
`;

export function MainHeader({ click }) {
  return (
    <HeaderCtn>
      <Title>NFT</Title>
      <IconBtnRight onClick={click}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </IconBtnRight>
    </HeaderCtn>
  );
}

export function DetailHeader({ click }) {
  return (
    <HeaderCtn>
      <IconBtnLeft onClick={click}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </IconBtnLeft>
    </HeaderCtn>
  );
}

export function MpHeader({ click }) {
  // my page header
  return (
    <HeaderCtn>
      <Title>MY</Title>
      <IconBtnLeft onClick={click}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </IconBtnLeft>
    </HeaderCtn>
  );
}
