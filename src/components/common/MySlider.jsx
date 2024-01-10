import Slider from "react-slick";
import styled from "styled-components";

export const MySlider = styled(Slider)`
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
