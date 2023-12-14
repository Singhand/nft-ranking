import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Fab = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;

export default function Home() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    console.log("useeff");
    const checkScrollTop = () => {
      if (!showScrollTopButton && window.scrollY > 500) {
        setShowScrollTopButton(true);
      } else if (showScrollTopButton && window.scrollY <= 500) {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScrollTopButton]);

  return (
    <Wrapper>
      {showScrollTopButton && (
        <Fab
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        ></Fab>
      )}
    </Wrapper>
  );
}
