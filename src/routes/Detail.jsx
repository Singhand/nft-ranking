import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  font-size: 20px;
  transform: rotate(0.03deg);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  const { isLoading, isFetching, data, isError } = useQuery({
    queryKey: [key],
    queryFn: () => fetchUsers(key),
    staleTime: 30000,
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);

  return (
    <Wrapper>
      {isFetching && <Title>loading...</Title>}
      {data && data.map((obj) => <Title key={obj.id}>{obj.id}</Title>)}
    </Wrapper>
  );
}
