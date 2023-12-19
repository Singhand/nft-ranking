import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DetailHeader } from "../components/Header";
import { Wrapper } from "../components/Wrapper";
import Artwork from "../components/Artwork";

const Title = styled.div`
  font-size: 20px;
  transform: rotate(0.03deg);
`;

const fetchUsers = (key) => {
  console.log("fetch", key);
  return fetch(`https://jsonplaceholder.typicode.com/${key}`).then((response) =>
    response.json()
  );
};

export default function Detail() {
  const nav = useNavigate();
  const [count, setCount] = useState(0);
  const [key, setKey] = useState("posts");
  // const { isLoading, isFetching, data, isError } = useQuery({
  //   queryKey: [key],
  //   queryFn: () => fetchUsers(key),
  //   staleTime: 30000,
  // });

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);

  return (
    <Wrapper>
      <DetailHeader
        click={() => {
          nav(-1);
        }}
      ></DetailHeader>
      <Artwork></Artwork>
      {/* {isFetching && <Title>loading...</Title>}
      {data && data.map((obj) => <Title key={obj.id}>{obj.id}</Title>)} */}
    </Wrapper>
  );
}
