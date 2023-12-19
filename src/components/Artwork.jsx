import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageBorderRadius, secondaryTextColor } from "../style/common";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
`;

const MySlider = styled(Slider)`
  width: 100%;
  aspect-ratio: 1;

  & .slick-prev,
  .slick-next {
    display: none !important;
  }

  & .slick-dots {
    position: static;
    margin-top: 10px;
  }

  & .slick-dots li {
    width: 10px;
  }

  & .slick-dots li.slick-active {
    width: 30px;
  }

  & .slick-dots button::before {
    content: none;
  }

  & .slick-dots button {
    background-color: gray;
    width: 10px;
    border-radius: 10px;
    height: 5px;
  }

  & .slick-dots .slick-active button {
    width: 30px;
    background-color: white;
  }
`;

const SlideImg = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  ${imageBorderRadius}
`;

const VerticalPadding = "35px";

const ArtWorkInfo = styled.div`
  display: grid;
  padding: 0 ${VerticalPadding};
  width: 100%;
  margin-top: 40px;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
`;

const AwTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const AwPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding-top: 5px;
  text-align: end;
  ${secondaryTextColor}
`;

const AwCreator = styled.div`
  font-size: 16px;
`;

const ChartCtn = styled.div`
  width: 100%;
  padding: 0 ${VerticalPadding};
`;

export default function Artwork() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (current) => setActiveSlide(current),
    }),
    []
  );

  return (
    <Wrap>
      <MySlider {...settings}>
        <SlideImg src="https://images.unsplash.com/photo-1642611012881-a95922e7e373?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></SlideImg>
        <SlideImg src="https://images.unsplash.com/photo-1640973063709-4160b665d787?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></SlideImg>
        <SlideImg src="https://images.unsplash.com/photo-1649255917534-5ca5c56fca06?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></SlideImg>
      </MySlider>

      <ArtWorkInfo>
        <AwTitle>Matilda #1</AwTitle>
        <AwPrice>0.078</AwPrice>
        <AwCreator>@Matilda</AwCreator>
      </ArtWorkInfo>

      <ChartCtn></ChartCtn>
    </Wrap>
  );
}
