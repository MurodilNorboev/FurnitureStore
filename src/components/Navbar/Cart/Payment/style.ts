import styled from "styled-components";

export const Container_Chescout = styled.div`
  padding-top: 0px;
  background-color: #f9f6f5;
  display: flex;
  justify-content: center;
  .nn {
    background-color: #fff;
    box-shadow: 0px 10px 20px 0px rgba(209, 188, 178, 0.25);
  }
`;
export const Chescout_containerWrapper = styled.div`
  display: flex;
  padding: 0px 50px;
  justify-content: space-between;
  .chescoutWrapper {
    min-width: 900px;
    width: 100%;
  }
  .dropdown {
    margin: 35px 0px 0px 0px;
    border: 1px solid #d1bcb2;
    border-left: none;
    border-right: none;
  }
  input {
    border: 1px solid #d1bcb2;
  }
  @media only screen and (max-width: 1400px) {
    gap: 30px;
    margin: none;
    display: grid;
    width: 78.2vw;
    max-width: 1000px;
    justify-content: center;
    .DatailCart {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .Containre_Chescout_Content {
      width: 100%;
    }
    .Right_Container {
      max-width: 1000px;
      width: 78.2vw;
    }
    .dropdown {
      max-width: 1000px;
      width: 78.2vw;
      position: none;
      .Accordion {
        max-width: 1000px;
      }
    }
    .Bottom_Container {
      height: auto;
      .bottom_wrape {
        height: auto;
      }
    }
  }
  @media only screen and (max-width: 1220px) {
    padding: 0px;
    .Containre_Chescout_Content {
      width: 100%;
    }
    .Chescout_Top {
      padding: 0px;
      display: grid;
      justify-content: center;
      width: 100%;
    }
    .Chescout_one {
      padding: 0px;
      width: 100%;
      .LasName_Con {
        padding: 0px;
        display: flex;
        width: 100%;
        input {
          width: 70vw;
          box-sizing: border-box;
        }
        .Accordion {
          max-width: 860px;
        }
      }
      .LasName_Con_code {
        padding: 0px;
        input {
          width: 100%;
        }
      }
    }
  }
`;
export const Containre_Chescout_Content = styled.div`
  background-color: #fff;
  width: 600px;
  margin: auto;
  padding: 50px;
  .wraper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
    .imgContent {
      display: flex;
      flex-direction: column;
      gap: 30px;
      height: auto;
      .images {
        border: 1px solid #d1bcb2;
        border-radius: 5px;
        width: 170px;
        height: 150px;
      }
    }
  }
`;
export const Content_chesckout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  tr {
    margin: 40px 0px;
    border: 1px solid #d1bcb2;
    align-self: stretch;
  }
`;
export const Chescout_Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
export const Chescout_one = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .h22 {
    position: absolute;
    width: 100%;
    h2 {
      color: var(--main, #32324d);
      font-feature-settings: "liga" off, "clig" off;
      font-family: Prompt;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 125% */
      letter-spacing: 3px;
      text-transform: uppercase;
    }
  }
  .LasName_Con {
    gap: 10px;
    display: flex;
    flex-direction: column;
    .labelv {
      color: var(--middle-grey, #999);
      font-feature-settings: "liga" off, "clig" off;
      font-family: Prompt;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 14px; /* 116.667% */
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .labels {
      color: var(--dark, #ad8775);
      font-feature-settings: "liga" off, "clig" off;
      font-family: Prompt;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    .texts {
      color: var(--middle-grey, #999);
      font-feature-settings: "liga" off, "clig" off;
      font-family: Prompt;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 125% */
    }
    input {
      padding: 10px 15px;
      width: 380px;
    }
    select {
      padding: 12px 15px;
      width: 380px;
      border: 1px solid #d1bcb2;
      color: var(--dark-grey, #666);
      font-feature-settings: "liga" off, "clig" off;
      font-family: Prompt;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }
  .LasName_Con_code {
    display: flex;
    gap: 30px;
    input {
      padding: 10px 15px;
      width: 175px;
    }
  }
`;
export const Chescout_Bottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  .labelvs {
    border: none;
    border-bottom: 1px solid #d1bcb2;
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
  .chesbox_wrap {
    display: flex;
  }
  h4 {
    margin-bottom: -1px;
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
  input {
    width: 100%;
    padding: 10px 15px;
  }
`;
export const Right_Container = styled.div`
  max-width: 530px;
  border-top: 2px solid #dba514;
  width: 100%;
  .bottomContent {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Content = styled.div`
  overflow: scroll;
  padding: 0px 20px;
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
  width: 120px;
  height: 80px;
`;
export const LeftDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .item1 {
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 150px;
    width: 100vw;
  }
  .item2 {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
  }
  .item3 {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
  }
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
`;
export const Bottom_Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  h3 {
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
  .checkbox_Container {
    border-bottom: 1px solid #dba514;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-top: 15px;
    width: 100%;
    padding-bottom: 35px;
  }
  .checkbox_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    label {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  .bottom_wrape {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    .cost {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .btn_wrape {
      display: flex;
      transition: transform 2ms ease;
      transform: translate(2s);
      &:active {
        transform: scale(0.99);
      }
      button {
        border: none;
        padding: 15px 0px;
        width: 100%;
        background-color: #d1bcb2;
        color: var(--text-white, #fff);
        font-feature-settings: "liga" off, "clig" off;
        font-family: Prompt;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 133.333% */
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }
    h5 {
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
    h4 {
      color: var(--main, #32324d);
      text-align: center;
      font-feature-settings: "liga" off, "clig" off;
      font-family: Prompt;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px; /* 130% */
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
`;
export const DatailCart = styled.form`
  padding: 180px 0px 100px 0px;
  width: 100%;
  gap: 30px;
  max-width: 1669px;

  @media only screen and (max-width: 1400px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .chescoutWrapper {
      min-width: 299px;
    }
  }
`;
export const Top_Container = styled.div`
  max-height: 110px;
  padding: 30px;
  border-bottom: 1px solid #d1bcb2;
  h2 {
    color: var(--main, #32324d);
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 125% */
    letter-spacing: 3px;
    text-transform: uppercase;
  }
`;

// form
export const Form = styled.form`
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  padding: 12px;
  background: var(--pastel, #d1bcb2);
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
