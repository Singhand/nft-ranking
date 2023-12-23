import styled from "styled-components";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { buttonColor, buttonHoverColor, hoverTss } from "../style/common";
import { useState } from "react";

const HEIGHT = "50px";

const Title = styled.div`
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const IconBtn = styled(Button)`
  width: ${HEIGHT};
  height: ${HEIGHT};
  padding: 0;
`;

const HeaderCtn = styled.div`
  width: 100%;
  height: ${HEIGHT};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const DetailHeaderCtn = styled(HeaderCtn)`
  z-index: 1;
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

const DropDownCtn = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(110%);

  @keyframes menuUp {
    0% {
      transform: translateY(120%);
    }
    100% {
      transform: translateY(110%);
    }
  }
  animation: menuUp 0.2s ease;
`;

const DropDownItem = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 10px;
  gap: 10px;
  min-width: 100px;
  ${buttonColor}

  cursor: pointer;
  ${hoverTss}
  &:hover {
    ${buttonHoverColor}
  }

  & svg {
    width: 16px;
    height: 16px;
  }
`;

export function MainHeader({ click }) {
  const nav = useNavigate();
  const [menu, setMenu] = useState(false);
  return (
    <HeaderCtn>
      <Title>NFT</Title>
      <IconBtnRight
        onClick={() => {
          if (!menu) setMenu(true);
        }}
        onBlur={() => {
          setMenu(false);
        }}
        tabIndex={0}
      >
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

      {menu && (
        <DropDownCtn>
          <DropDownItem
            onMouseDown={() => {
              nav("/my");
            }}
          >
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <div>MY</div>
          </DropDownItem>
          <DropDownItem>
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
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>

            <div>LOG OUT</div>
          </DropDownItem>
        </DropDownCtn>
      )}
    </HeaderCtn>
  );
}

export function DetailHeader({ click }) {
  const nav = useNavigate();
  return (
    <DetailHeaderCtn>
      <IconBtnLeft
        onClick={() => {
          nav(-1);
        }}
      >
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
    </DetailHeaderCtn>
  );
}

export function MpHeader({ click }) {
  // my page header
  const nav = useNavigate();
  return (
    <HeaderCtn>
      <Title>MY</Title>
      <IconBtnLeft
        onClick={() => {
          nav(-1);
        }}
      >
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
