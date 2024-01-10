import React, { useEffect } from "react";
import Artwork from "../components/content/artwork/Artwork";
import { Wrapper } from "../components/common/Wrapper";
import { DetailHeader } from "../components/header/Header";

export default function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);

  return (
    <Wrapper>
      <DetailHeader></DetailHeader>
      <Artwork></Artwork>
    </Wrapper>
  );
}
