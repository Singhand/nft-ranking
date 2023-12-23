import React from "react";
import styled from "styled-components";
import { MpHeader } from "../components/Header";
import InputBox from "../components/InputBox";
import LabeledContent from "../components/LabeledContent";
import { Wrapper } from "../components/Wrapper";
import ProfileTags from "../components/ProfileTags";
import ProfileArtwork from "../components/ProfileArtwork";

const InfoCtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  gap: 20px;
`;

export default function MyProfile() {
  return (
    <Wrapper>
      <MpHeader></MpHeader>
      <InfoCtn>
        <LabeledContent title={"Name"}>
          <InputBox placeholder={"Name"}></InputBox>
        </LabeledContent>
        <LabeledContent title={"Youtube"}>
          <InputBox placeholder={"Link"}></InputBox>
        </LabeledContent>
        <LabeledContent title={"Instagram"}>
          <InputBox placeholder={"Link"}></InputBox>
        </LabeledContent>
        <ProfileTags></ProfileTags>
      </InfoCtn>
      <ProfileArtwork></ProfileArtwork>
    </Wrapper>
  );
}
