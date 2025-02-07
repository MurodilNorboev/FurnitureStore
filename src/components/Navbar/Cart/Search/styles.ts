import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchIcon = styled.div`
  cursor: pointer;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputWrapper = styled.div<{ $isOpen: boolean }>`
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

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  width: 500px;
  border: 1px solid #ccc;
  z-index: 1010;
`;

export const ResultContainer = styled.div<{ $hasResults: boolean }>`
  display: ${({ $hasResults }) => ($hasResults ? "block" : "none")};
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 500px;
  padding: 10px;
  background-color: white;
  z-index: 1010;
  min-height: 70px;
`;