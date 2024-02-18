import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import {
  buttonBorderRadius,
  buttonColor,
  neutralTextColor,
  textColor,
} from "../../style/common";

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

const InputBox = ({ searchIcon, placeholder }) => {
  const [clear, setClear] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = useCallback((event) => {
    if (event.target.value) {
      setClear(true);
    } else {
      setClear(false);
    }
  }, []);

  const clearInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    inputRef.current.focus();
    setClear(false);
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
      {searchIcon && (
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
      )}
      <Form onSubmit={search}>
        <Input
          placeholder={placeholder}
          type="text"
          ref={inputRef}
          onChange={handleInputChange}
        />
      </Form>

      {clear && (
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

export default InputBox;
