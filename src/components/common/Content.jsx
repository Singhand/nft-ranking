import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  gap: 10px;
`;

const ContentTitle = styled.div`
  font-size: 24px;
`;

export default function Content({ children, title }) {
  return (
    <ContentWrapper>
      <ContentTitle>{title}</ContentTitle>
      {children}
    </ContentWrapper>
  );
}
