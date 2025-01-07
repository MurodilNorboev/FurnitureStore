import styled from "styled-components";

//login
export const LoginCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100svb;
  padding: 100px 15px 15px 15px;
  background-color: #f9f6f5;

  @media screen and (max-width: 550px) {
    .loginis3 {
      display: flex;
      gap: 10px;
      flex-direction: column;
    }
  }
`;
export const LoginWraps = styled.form`
  display: flex;
  padding: 33px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  background-color: #fff;

  h2 {
    width: 100%;
    color: var(--main, #32324d);
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px; /* 126.667% */
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  .loginis1 {
    color: #ad8775;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
  }
  .loginis1 label {
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 10px;
  }
  .loginis1 input {
    border: 1px solid #d1bcb2;
    background-color: transparent;
    width: 59.5vmin;
    max-width: 434px;
    padding: 10px 20px;
  }
  .loginis3 {
    padding-top: 15px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .chackbox1 {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
  }
  .loginis3 label {
    color: #666;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
  .loginis3 h3 {
    margin-bottom: -1px;
    display: flex;
    justify-content: center;
    color: var(--dark, #ad8775);
    font-feature-settings: "liga" off, "clig" off;
    font-size: 16px;
    font-style: normal;
  }
  .loginis4 {
    padding-top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .loginis4 button {
    cursor: pointer;
    border: none;
    width: 59.5vmin;
    max-width: 434px;
    height: 50px;
    background: #d1bcb2;
    color: white;
    font-size: 15px;
    font-weight: 700;
    transform: translate(4s);
  }
  .loginis4 :hover {
    background: #ada099;
    &:active {
      transform: scale(0.98);
    }
  }
  .loginis5 {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loginis5 h4 {
    padding: 0px 10px;
    color: var(--dark, #ad8775);
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  .lang {
    max-width: 120px;
    width: 100%;
    border: 0.5px solid #d1bcb2;
  }
  .loginis6 {
    padding-top: 29px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .loginis6 img {
    width: 24px;
    height: 24px;
    border: 50%;
  }
  .text_wrapp {
    display: flex;
    align-items: center;
    h2 {
      margin-bottom: -1px;
      color: var(--dark-grey, #666);
      font-feature-settings: "liga" off, "clig" off;
      font-family: Prompt;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 125% */
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
  .img_wrappp {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .loginis7 {
    padding-top: 5px;
    width: 100%;
  }
  .buttons {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: var(--dark, #ad8775);
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    height: 15px;
    font-size: 12px;
    font-weight: 700;
    transform: translate(6ms);
  }
  @media only screen and (max-width: 1300px) {
    .LoginWrap {
      padding: 0px;
      margin: 0px;
    }
  }
  @media only screen and (max-width: 900px) {
    .loginis6 {
      display: grid;
      justify-content: center;
    }
    .img_wrappp {
      display: flex;
      justify-content: center;
    }
  }
`;
// login reg
export const LoginRegCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 100px 15px 15px 15px;
  background-color: #f9f6f5;

  @media screen and (max-width: 750px) {
    .loginis3 {
      display: flex;
      gap: 10px;
      flex-direction: column;
    }
    .loginis0 {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      input {
        width: 59.5vmin;
        padding: 10px 20px;
      }
      width: 100%;
    }
  }
`;
export const LoginWrap = styled.form`
  display: flex;
  padding: 33px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  background-color: #fff;

  h2 {
    width: 100%;
    color: var(--main, #32324d);
    text-align: center;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px; /* 126.667% */
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  .loginis0 {
    color: #ad8775;
    padding-top: 15px;
    display: flex;
    gap: 10px;
  }
  .loginis0 label {
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 4px;
  }
  .loginis0 input {
    border: 1px solid #d1bcb2;
    background-color: transparent;
    width: 100%;
    padding: 10px 20px;
  }
  .loginis1 {
    color: #ad8775;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
    select {
      border: 1px solid #d1bcb2;
      width: 100%;
      padding: 10px 20px;
      color: var(--dark, #666);
    }
  }
  .loginis1 label {
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 4px;
  }
  .loginis1 input {
    border: 1px solid #d1bcb2;
    background-color: transparent;
    /* width: 59.5vmin;
    max-width: 434px; */
    width: 100%;
    padding: 10px 20px;
  }
  .loginis3 {
    padding-top: 15px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .chackbox1 {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .loginis3 label {
    color: #666;
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
  .loginis3 h3 {
    color: var(--dark, #ad8775);
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
  .loginis4 {
    padding-top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .loginis4 button {
    cursor: pointer;
    border: none;
    width: 59.5vmin;
    max-width: 434px;
    height: 50px;
    background: #d1bcb2;
    color: white;
    font-size: 15px;
    font-weight: 700;
    transform: translate(4s);
  }
  .loginis4 :hover {
    background: #ada099;
    &:active {
      transform: scale(0.98);
    }
  }
  .loginis5 {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loginis5 h4 {
    padding: 0px 10px;
    color: var(--dark, #ad8775);
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  .lang {
    max-width: 120px;
    width: 100%;
    border: 0.5px solid #d1bcb2;
  }
  .loginis6 {
    padding-top: 29px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .loginis6 img {
    width: 24px;
    height: 24px;
    border: 50%;
  }
  .text_wrapp {
    display: flex;
    align-items: center;
    h2 {
      margin-bottom: -1px;
      color: var(--dark-grey, #666);
      font-feature-settings: "liga" off, "clig" off;
      font-family: Prompt;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 125% */
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
  .img_wrappp {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .loginis7 {
    padding-top: 5px;
    width: 100%;
  }
  .buttons {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: var(--dark, #ad8775);
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    height: 15px;
    font-size: 12px;
    font-weight: 700;
    transform: translate(6ms);
  }
  @media only screen and (max-width: 1300px) {
    .LoginWrap {
      padding: 0px;
      margin: 0px;
    }
  }
  @media only screen and (max-width: 900px) {
    .loginis6 {
      display: grid;
      justify-content: center;
    }
    .img_wrappp {
      display: flex;
      justify-content: center;
    }
  }
`;
