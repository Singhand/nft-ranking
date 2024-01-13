import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const ContentTitle = styled.div`
  transform: rotate(0.03deg);
  font-size: 16px;
`;

export default function LabeledContent({ children, title }) {
  console.log("labeled content", title);
  return (
    <ContentWrapper>
      <ContentTitle>{title}</ContentTitle>
      {children}
    </ContentWrapper>
  );
}
