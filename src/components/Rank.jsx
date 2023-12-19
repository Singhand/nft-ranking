import React, { useRef, useCallback, useEffect, useState } from "react";
import Content from "./Content";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import { ToggleChip } from "./Button";
import RankItem from "./RankItem";
import { ClipLoader } from "react-spinners";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchRanks } from "../api/rank";
import { useNavigate } from "react-router-dom";

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

const LoadingBox = styled.div`
  margin: 0 auto;
`;

export default function Rank() {
  const nav = useNavigate();

  // 랭킹 검색 조건
  const [keyWord, setKeyWord] = useState("");
  const [tag, setTag] = useState("All");
  const [tagSel, setTagSel] = useState(0);

  const tags = ["All", "Influencer", "Singer", "Model", "Dancer"];

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["rank", { keyWord, tag }],
    queryFn: ({ pageParam }) => fetchRanks({ pageParam, keyWord, tag }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => pages.length,
  });

  const loadRef = useRef(null);

  // 태그 변경
  const handleTag = useCallback(
    (i) => {
      if (isFetching) return;
      setTagSel(i);
      setTag(tags[i]);
    },
    [isFetching]
  );

  useEffect(() => {
    // 랭킹 데이터 추가 로드
    if (!loadRef.current) return;
    if (isFetching) return;
    const element = loadRef.current;
    const option = { threshold: 0 };
    const handleObserver = (entries) => {
      const [target] = entries;
      if (target.isIntersecting && !isFetching) {
        fetchNextPage();
      }
    };

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [loadRef.current, isFetching]);

  return (
    <Content title={"RANK"}>
      <ColCtn>
        <SearchBox></SearchBox>
        <ChipCtn>
          {tags.map((name, i) => (
            <ToggleChip
              $select={i == tagSel}
              key={name}
              onClick={() => {
                handleTag(i);
              }}
            >
              {name}
            </ToggleChip>
          ))}
        </ChipCtn>

        {data &&
          data.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.map((item, i) => (
                <RankItem
                  {...item}
                  key={item.id}
                  click={() => {
                    nav("/detail");
                  }}
                ></RankItem>
              ))}
            </React.Fragment>
          ))}

        {(hasNextPage || isFetching) && (
          <LoadingBox ref={loadRef}>
            <ClipLoader color="#777"></ClipLoader>
          </LoadingBox>
        )}
      </ColCtn>
    </Content>
  );
}
