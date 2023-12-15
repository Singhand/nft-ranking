import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components";
import {
  buttonBorderRadius,
  buttonColor,
  neutralTextColor,
  textColor,
} from "../style/common";

const SearchBoxContainer = styled.div`
  ${buttonColor}
  ${buttonBorderRadius}
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Input = styled.input`
  ${textColor}
  border: none;
  background: none;
  flex: 1;
  font-size: 16px;
  outline: none;
`;

const Form = styled.form`
  display: flex;
  flex: 1;
`;

const IconContainer = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  cursor: pointer;
  ${neutralTextColor}

  & svg {
    width: 24px;
    height: 24px;
  }
`;

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const clearInput = useCallback(() => {
    setInputValue("");
    inputRef.current.focus();
  }, []);

  const search = useCallback(
    (e) => {
      e.preventDefault();
      inputRef.current.blur();
    },
    [inputRef]
  );

  return (
    <SearchBoxContainer>
      <IconContainer className="search">
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
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </IconContainer>
      <Form onSubmit={search}>
        <Input
          placeholder="Search"
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
        />
      </Form>

      {inputValue && (
        <IconContainer className="clear" onClick={clearInput}>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconContainer>
      )}
    </SearchBoxContainer>
  );
};

export default SearchBox;
