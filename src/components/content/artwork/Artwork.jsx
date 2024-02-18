import { useQuery } from "@tanstack/react-query";
import React, { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import { fetchDetail } from "../../../api/detail";
import {
  imageBorderRadius,
  secondaryColor,
  secondaryTextColor,
} from "../../../style/common";
import { MySlider } from "../../common/MySlider";
import {
  BottomFixedButtonCtn,
  Button,
  SecondaryButton,
} from "../../common/Button";

const Wrap = styled.section`
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

const SlideImg = styled.img`
  /* aspect-ratio: 1; */
  height: 50vh;
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

  @keyframes popup {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: popup 0.7s ease;
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
  margin-top: 30px;
  padding-bottom: 70px;

  & .recharts-wrapper {
    width: 100% !important;
  }
`;

const Awbfc = styled(BottomFixedButtonCtn)`
  padding: 0 ${VerticalPadding};

  & > div {
    flex: 1;
  }
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

  const { isLoading, isFetching, data, isError } = useQuery({
    queryKey: ["detail", 1],
    queryFn: () => fetchDetail(1),
    staleTime: 30000,
  });

  console.log(data);

  return (
    <Wrap>
      <MySlider {...settings}>
        {data &&
          data.map((item) => (
            <SlideImg src={item.url} key={item.id}></SlideImg>
          ))}
      </MySlider>

      {data && (
        <ArtWorkInfo>
          <AwTitle>{data[activeSlide].title}</AwTitle>
          <AwPrice>₩{data[activeSlide].price.toLocaleString()}</AwPrice>
          <AwCreator>@Matilda</AwCreator>
        </ArtWorkInfo>
      )}

      {!isFetching && data && (
        <ChartCtn>
          <AreaChart
            width={400}
            height={250}
            data={data[activeSlide].chart}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={secondaryColor}
                  stopOpacity={0.8}
                />
                <stop offset="95%" stopColor={secondaryColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Price"
              stroke={secondaryColor}
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ChartCtn>
      )}
      <Awbfc>
        <Button>View All</Button>
        <SecondaryButton>Make Bid</SecondaryButton>
      </Awbfc>
    </Wrap>
  );
}
