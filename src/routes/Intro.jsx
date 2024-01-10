import styled from "styled-components";
import React from "react";
import { Wrapper } from "../components/common/Wrapper";
import { SecondaryButton } from "../components/common/Button";
import { useNavigate } from "react-router-dom";

const BlackGradient = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  gap: 30px;
  padding: 0 70px;
  padding-bottom: 70px;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const BgImg = styled.img`
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-size: 45px;
  font-weight: bold;
  text-align: center;
`;

export default function Intro() {
  const nav = useNavigate();
  return (
    <Wrapper>
      <BgImg src="https://images.unsplash.com/photo-1690167370262-1089a8591318?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></BgImg>
      <BlackGradient>
        <Title>Find, Collect Your Person</Title>
        <SecondaryButton
          onClick={() => {
            nav("/");
          }}
        >
          Get Started
        </SecondaryButton>
      </BlackGradient>
    </Wrapper>
  );
}
