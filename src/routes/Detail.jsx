import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DetailHeader } from "../components/Header";
import { Wrapper } from "../components/Wrapper";
import Artwork from "../components/Artwork";

const Title = styled.div`
  transform: rotate(0.03deg);
`;

export default function Detail() {
  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);

  return (
    <Wrapper>
      <DetailHeader
        click={() => {
          nav(-1);
        }}
      ></DetailHeader>
      <Artwork></Artwork>
    </Wrapper>
  );
}
