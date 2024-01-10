import React from "react";
import styled from "styled-components";
import { buttonColor, hoverTss, neutralTextColor } from "../../../style/common";

const IMG_SIZE = "50px";

const Ctn = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: ${IMG_SIZE} 2fr 1fr;
  gap: 10px;
  cursor: pointer;
  ${hoverTss}
  &:hover {
    ${buttonColor}
  }
`;

const Img = styled.img`
  width: ${IMG_SIZE};
  height: ${IMG_SIZE};
  ${buttonColor}
  object-fit: cover;
  border-radius: 100px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 5px;
`;

const Name = styled.div`
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tags = styled.div`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${neutralTextColor}
`;

const Price = styled.div`
  text-align: end;
  font-size: 18px;
`;

export default function RankItem({ url, name, tags, price, id, click }) {
  return (
    <Ctn onClick={click}>
      <Img src={url}></Img>
      <TextBox>
        <Name>{name}</Name>
        <Tags>{tags}</Tags>
      </TextBox>
      <Price>₩{price.toLocaleString()}</Price>
    </Ctn>
  );
}
