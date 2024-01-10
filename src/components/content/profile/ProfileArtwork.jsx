import React from "react";
import Content from "../../common/Content";
import styled from "styled-components";
import {
  buttonColor,
  hoverTss,
  imageBorderRadius,
} from "../../../style/common";

const GridCtn = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const AwImg = styled.img`
  max-width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  ${buttonColor}
  ${imageBorderRadius}
  cursor: pointer;

  ${hoverTss}
  &:hover {
    opacity: 0.8;
  }
`;

export default function ProfileArtwork() {
  return (
    <Content title={"ARTWORK"}>
      <GridCtn>
        <AwImg src="https://images.unsplash.com/photo-1699111156364-021c7878a2cd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></AwImg>
        <AwImg src="https://images.unsplash.com/photo-1690286727405-ecdf6ab04bfc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></AwImg>
      </GridCtn>
    </Content>
  );
}
