import React from "react";
import Content from "./Content";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import { ToggleChip } from "./Button";

const ColCtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const ChipCtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;

export default function Rank() {
  return (
    <Content title={"RANK"}>
      <ColCtn>
        <SearchBox></SearchBox>
        <ChipCtn>
          <ToggleChip $select={true}>All</ToggleChip>
          <ToggleChip $select={false}>Youtuber</ToggleChip>
          <ToggleChip $select={false}>Singer</ToggleChip>
        </ChipCtn>
      </ColCtn>
    </Content>
  );
}
