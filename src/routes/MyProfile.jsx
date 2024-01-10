import React from "react";
import styled from "styled-components";
import { MpHeader } from "../components/header/Header";
import InputBox from "../components/common/InputBox";
import LabeledContent from "../components/common/LabeledContent";
import { Wrapper } from "../components/common/Wrapper";
import ProfileTags from "../components/content/profile/ProfileTags";
import ProfileArtwork from "../components/content/profile/ProfileArtwork";

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
