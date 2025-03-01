import styled from "styled-components";

/// buttons mock !
export const buttons = [
  { id: 0, label: "All", filter: null },
  { id: 1, label: "Popular", filter: "Popular" },
  { id: 2, label: "Hot", filter: "Hot" },
  { id: 3, label: "New", filter: "New" },
];


// button still codlar !
export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
`;
export const TabButton = styled.button<{ $active: boolean }>`
  padding: 5px 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#32324D" : "#AD8775")};
  border-bottom: 3px solid
    ${(props) => (props.$active ? "#DBA514" : "transparent")};
  transition: all 0.3s ease-in-out;
  background-color: transparent;

  font-family: Prompt;
  font-size: 25px;
  font-style: normal;
  font-weight: bold;
  line-height: 38px;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

// content still codlari !
export const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  height: auto;
  padding: 10px;
  width: 100%;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #888;
  }
`;
export const ImageContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  max-width: 300px;
  height: 100%;
  padding: 5px;
  /* scroll-snap-align: start; */
`;
export const Imagecontent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 450px;
  height: 100%;
  background-color: #fff;
  position: relative;

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  .savebtnwrap {
    display: flex;
    width: 100%;
    position: absolute;
    justify-content: end;
    padding: 10px;
    gap: 10px;
    z-index: 99;

    button {
      border: none;
      opacity: 0;
      transition: opacity 0.3s ease;
      background-color: transparent;
    }

    .like {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .saveIcon {
      width: 36px;
      height: 36px;
      padding: 3.5px;
    }

    .saveIcon:hover {
      opacity: 1;
    }
  }

  :hover button {
    opacity: 1;
  }

  h6 {
    margin-top: 30px;
    width: 30px;
    height: 1px;
    flex-shrink: 0;
    background: var(--pastel, #d1bcb2);
  }

  h5 {
    margin-top: 5px;
    color: var(--dark-grey, #666);
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  h4 {
    margin-bottom: 35px;
    display: flex;
    align-items: center;
    color: var(--accent, #dba514);
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 1px;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  padding: 7px;
`;
export const PagesName = styled.div`
  top: 0;
  left: 0;
  margin: 12px;
  position: absolute;
  padding: 5px 16px;
  align-items: flex-start;
  background: var(--orange, #e59d49);
  color: var(--white, #fff);
  font-family: Prompt;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
