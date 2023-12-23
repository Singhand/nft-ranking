import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Artwork from "../components/Artwork";
import { DetailHeader } from "../components/Header";
import { Wrapper } from "../components/Wrapper";

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
