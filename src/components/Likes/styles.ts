import styled from "styled-components";

export const Catalog_con = styled.div`
  background: var(--main, #f9f6f5);
  padding: 181px 30px 50px 30px;
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: start;
  .SortContainer {
    display: none;
  }
  .b {
    display: none;
  }
  .aa {
    gap: 4px;
  }
  .aaa {
    &:active {
      transform: scale(0.98);
    }
  }
  @media screen and (max-width: 1230px) {
    .b {
      display: grid;
      grid-template-areas: "a a a a";
    }
  }
  @media screen and (max-width: 1000px) {
    .b {
      display: grid;
      grid-template-areas: "a a a";
    }
  }
  @media screen and (max-width: 730px) {
    .b {
      display: grid;
      grid-template-areas: "a a";
    }
  }
  @media screen and (max-width: 480px) {
    .b {
      display: grid;
      grid-template-areas: "a";
    }
  }
`;
export const SlaiderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  .Image {
    max-height: 300px;
    height: 100vw;
    padding: 5px;
  }
  @media (max-width: 5000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    .Image {
      height: 330px;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    .Image {
      height: 320px;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    .Image {
      height: 330px;
    }
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
`;
export const Imagecontent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 450px;
  height: 100%;
  min-width: 300px;
  background-color: #fff;
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
    .BtnAddCart {
      display: flex;
      height: 50px;
      padding: 11px 30px;
      justify-content: center;
      align-items: center;
      gap: 14px;
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
    .saveIcon :hover {
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
  max-height: 450px;
  width: 100%;
  height: auto;
  padding: 7px;
  transition: transform 1ms ease;
`;
