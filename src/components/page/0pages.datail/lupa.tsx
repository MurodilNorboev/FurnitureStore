import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AnimatedButton, BtnWrap } from '../../styles/navbar';
import search from '../../../assets/search.svg';

const Container = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  position: relative; 
  width: ${({ $isOpen }) => ($isOpen ? '220px' : 'auto')}; 
  transition: width 0.5s ease; 
`;

const SearchIcon = styled.div<{ $isOpen: boolean }>`
  cursor: pointer;
  margin-left: 10px; 
  display: ${({ $isOpen }) => ($isOpen ? 'none' : 'block')}; 
`;
// const SearchIcon = styled.div<{ $active?: boolean }>`
//     background-color: ${({ $active }) => ($active ? 'blue' : 'gray')};
// `;


const Input = styled.input<{ $isOpen: boolean }>`
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  width: ${({ $isOpen }) => ($isOpen ? '200px' : '0')};
  transition: opacity 0.5s ease, width 0.5s ease; 
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  position: absolute; 
  bottom: -60px;
  z-index: 10; 
  margin-right: 180px;
  margin-left: -170px;
`;

const MultiCarousel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (isOpen && !target.closest('.search-container')) {
      setIsOpen(false); 
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <Container className="search-container" $isOpen={isOpen}>
        <BtnWrap>
          <AnimatedButton>
            <SearchIcon onClick={toggleSearch} $isOpen={isOpen} style={{
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <img src={search} alt="Search" style={{ marginBottom: '10px' }} />
            </SearchIcon>
          </AnimatedButton>
        </BtnWrap>
        <Input
          type="text"
          placeholder="Search..."
          $isOpen={isOpen}
          onFocus={() => setIsOpen(true)}
        />
      </Container>
    </>
  );
};

export default MultiCarousel;



