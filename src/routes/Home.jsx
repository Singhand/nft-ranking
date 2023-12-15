import React, { useEffect, useState } from "react";
import { Fab } from "../components/Button";
import { MainHeader } from "../components/Header";
import HotPeople from "../components/HotPeople";
import { Wrapper } from "../components/Wrapper";
import Rank from "../components/Rank";

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
