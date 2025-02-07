import React, { useState, useEffect, useRef } from "react";
import { AnimatedButton, BtnWrap } from "../../../styles/navbar";
import search from "../../../../assets/search.svg";
import {
  Container,
  SearchIcon,
  InputWrapper,
  Input,
  ResultContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseAPI } from "../../../../utils/constanst";

const MultiCarousel: React.FC = () => {
  const [hasResults, setHasResults] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]); 
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleSearchSubmit = async () => {
    try {
      const response = await axios.get(`${baseAPI}/product/all`, {
        params: { search: searchQuery },
      });
      setSearchResults(response.data.data);
    } catch (error) {
      console.error("Qidiruv xatosi: ", error);
    }
  };

 
  const handleResultClick = (_id: string) => {
    if (_id) {
     
      navigate(`/datailRoom/${_id}`);
     
      setSearchQuery("");
      setSearchResults([]);
      setIsOpen(false);
    } else {
      console.error("ID not found or invalid");
    }
  };

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

 
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      handleSearchSubmit();
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      handleSearchSubmit();
    }
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
            onKeyUp={handleKeyPress}
          />

          <ResultContainer $hasResults={hasResults}>
            {searchResults.length > 0 ? (
              searchResults.map((result) => {
                const resultId = result.id || result._id;

                return (
                  <div
                    key={resultId}
                    onClick={() => handleResultClick(resultId)}
                  >
                    {result.Feature} 
                  </div>
                );
              })
            ) : (
              <div style={{ textAlign: "center", padding: "20px", color: "#aaa" }}>
                No results found...
              </div>
            )}
          </ResultContainer>
        </InputWrapper>
      )}
    </Container>
  );
};

export default MultiCarousel;
