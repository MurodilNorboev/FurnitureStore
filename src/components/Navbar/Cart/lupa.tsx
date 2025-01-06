import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { AnimatedButton, BtnWrap } from "../../styles/navbar";
import search from "../../../assets/search.svg";
import Products from "./result"; // Products komponenti

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchIcon = styled.div`
  cursor: pointer;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 80px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  gap: 1px; /* Search va result orasidagi bo'shliq */
  z-index: 1000;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  width: 500px;
  border: 1px solid #ccc;
  z-index: 1010;
`;

const ResultContainer = styled.div<{ $hasResults: boolean }>`
  display: ${({ $hasResults }) => ($hasResults ? "block" : "none")};
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 500px;
  padding: 10px;
  background-color: white;
  z-index: 1010;
  min-height: 70px;
`;

const MultiCarousel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasResults, setHasResults] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleclose = (target: EventTarget | null) => {
    if (target instanceof HTMLInputElement) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setHasResults(searchQuery.length > 0);
  }, [searchQuery]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <BtnWrap>
        <AnimatedButton>
          <SearchIcon onClick={toggleSearch}>
            <img src={search} alt="Search" />
          </SearchIcon>
        </AnimatedButton>
      </BtnWrap>

      {isOpen && (
        <InputWrapper
          ref={wrapperRef}
          $isOpen={isOpen}
          onClick={(e) => handleclose(e.target)}
        >
          <Input
            name="search"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />

          <ResultContainer $hasResults={hasResults}>
            {searchQuery ? (
              <Products searchQuery={searchQuery} />
            ) : (
              <div
                style={{ textAlign: "center", padding: "20px", color: "#aaa" }}
              >
                No results yet...
              </div>
            )}
          </ResultContainer>
        </InputWrapper>
      )}
    </Container>
  );
};

export default MultiCarousel;
