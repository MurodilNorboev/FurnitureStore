import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  background: white;
  max-width: 468px;
  width: 70vw;
  top: 54px;
  max-height: 600px;
  padding-top: 25px;
  right: 50px;
  z-index: 1000;
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
`;
export const Overlay = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  align-items: center;
  justify-content: space-between;
  max-height: 500px;
  padding-bottom: 10px;
  box-shadow: rgba(237, 228, 224, 0.25) 0px 14px 28px,
    rgba(237, 228, 224, 0.22) 0px 10px 10px !important;

  .bottomContent {
      padding: 10px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
  }
`;
export const Content = styled.div`
  height: 80%;
  width: 100%;
  overflow: scroll;
  padding: 0px 20px;

  .header {
    border-bottom: 1px solid #d1bcb2;
    padding: 10px 15px;
    margin-bottom: 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: "center";

    h3 {
      color: var(--main, #32324d);
      font-family: Prompt;
      font-size: 24px;
      font-style: normal;
      font-weight: bold;
      line-height: 26px; /* 108.333% */
      letter-spacing: 3px;
      text-transform: uppercase;
    }
  }
`;
export const Datails = styled.div`
  border-bottom: 1px solid #d1bcb2;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
export const Imag = styled.img`
  background-color: #ede4e0;
  width: 220px;
  height: 140px;
`;
export const LeftDiv = styled.div`
  height: 100%;
  width: 100%;

  h4 {
    margin-bottom: 5px;
    color: var(--main, #32324d);
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  h6 {
    color: var(--middle-grey, #999);
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
  .nn {
    margin-bottom: 5px;
  }
  .line {
    border: 0.3px solid #d1bcb2;
    margin: 10px 0px;
  }

  .countwrap {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    .btina,
    .btinb {
      border: 1px solid #d1bcb2;
      padding: 7px 14px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #d1bcb2;
      font-weight: bold;
    }
    .btinc {
    }
    .btindelet {
      padding: 7px 10px;
      border-radius: 50%;
      border: 1px solid #d1bcb2;
    }
  }
  .countwrap2 {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    width: 35%;
  }
`;