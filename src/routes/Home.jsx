import React, { useEffect, useState } from "react";
import { Fab } from "../components/common/Button";
import { MainHeader } from "../components/header/Header";
import HotPeople from "../components/content/hot/HotPeople";
import Rank from "../components/content/rank/Rank";
import { Wrapper } from "../components/common/Wrapper";
import { Navigate } from "react-router-dom";

export default function Home() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
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

  if (!window.localStorage.getItem("visited")) {
    window.localStorage.setItem("visited", "true");
    return <Navigate to="/intro"></Navigate>;
  }

  return (
    <Wrapper>
      <MainHeader></MainHeader>
      <HotPeople></HotPeople>
      <Rank></Rank>

      {showScrollTopButton && (
        <Fab onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </Fab>
      )}
    </Wrapper>
  );
}
