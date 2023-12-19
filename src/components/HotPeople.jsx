import React from "react";
import styled from "styled-components";
import { buttonColor, hoverTss, imageBorderRadius } from "../style/common";
import Content from "./Content";

const IMG_SIZE = "200px";

const RowCtn = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  gap: 20px;
`;

const Image = styled.img`
  width: ${IMG_SIZE};
  height: ${IMG_SIZE};
  object-fit: cover;
  ${buttonColor}
  ${imageBorderRadius}
  cursor: pointer;

  ${hoverTss}
  &:hover {
    opacity: 0.8;
  }
`;

const Name = styled.div`
  font-size: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ElementBox = styled.div`
  max-width: ${IMG_SIZE};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function HotPeople() {
  const data = [
    {
      url: "https://i.pravatar.cc/200?img=10",
      name: "Ketty",
      id: 100,
    },
    {
      url: "https://i.pravatar.cc/200?img=24",
      name: "Camila",
      id: 101,
    },
    {
      url: "https://i.pravatar.cc/200?img=57",
      name: "Nathon",
      id: 102,
    },
  ];
  return (
    <Content title={"RISING"}>
      <RowCtn>
        {data.map((item) => (
          <Element {...item} key={item.id}></Element>
        ))}
      </RowCtn>
    </Content>
  );
}

function Element({ url, name, id }) {
  return (
    <ElementBox>
      <Image src={url}></Image>
      <Name>{name}</Name>
    </ElementBox>
  );
}
