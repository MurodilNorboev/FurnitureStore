import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f6f5;
  padding: 180px 0px 100px 0px;
  display: flex;
  justify-content: center;

  .Wrapper {
    display: flex;
    gap: 25px;
    .nn {
      background-color: #fff;
      box-shadow: 0px 10px 20px 0px rgba(209, 188, 178, 0.25);
    }
    input {
      border: 1px solid #d1bcb2;
    }

    @media only screen and (max-width: 1400px) {
      margin: none;
      display: grid;
      width: 78.2vw;
      max-width: 1000px;
      justify-content: center;
      .Containre_Chescout_Content {
        width: 78.2vw;
        max-width: 1000px;
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
  }

  @media screen and (max-width: 1050px) {
    .Wrapper {
      .Content {
        padding: 0px;
        .info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          padding-bottom: 20px;
          .item1,
          .item2,
          .item3 {
            grid-column: 1;
          }

          .item4,
          .item5 {
            grid-column: 2;
            grid-row: 2;
          }

          .item1 {
            grid-row: 1;
          }
          .item2 {
            grid-row: 2;
          }
          .item3 {
            margin-top: 5px;
            grid-row: 3;
            margin-right: 5px;
          }

          .item4 {
            grid-row: 2;
            justify-self: flex-end;
          }

          .item5 {
            margin-top: 5px;
            grid-row: 3;
            margin-right: 5px;
            justify-self: end;
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .Wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .Containre_Chescout_Content {
        padding: 15px;
        .bottomContent {
          display: grid;
          gap: 5px;
        }
      }
      .Right_Container {
        min-width: 200px;
      }
    }
  }
  @media screen and (max-width: 400px) {
    .Wrapper {
      .Content {
        padding: 0px;
        .info {
          min-height: 150px;
          display: flex;
          flex-wrap: wrap;
          justify-content: start;
          align-items: center;
          column-gap: 26px;
          .item3 {
            gap: 5px;
          }
        }
      }
    }
  }
`;
export const LeftCon = styled.div`
  max-width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  .Content2 {
    padding: 50px;
    gap: 20px;
    background-color: #fff;
  }
  .empty-cart {
    color: var(--main, #32324d);
    font-feature-settings: "liga" off, "clig" off;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    padding: 20px 0px;
    line-height: 20px; /* 125% */
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .Content {
    border-bottom: 1px solid #d1bcb2;
    margin-bottom: 40px;
    min-height: 120px;
    gap: 20px;
    display: flex;
    align-items: start;
    img {
      height: 80px;
      width: 80px;
      background-color: #ede4e0;
    }
    .info {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .item1 {
        max-width: 200px;
        display: grid;
        align-items: start;
        justify-content: start;
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
        h6 {
          color: var(--middle-grey, #999);
          font-feature-settings: "liga" off, "clig" off;
          font-family: Prompt;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px; /* 114.286% */
        }
      }
      .item2 {
        max-width: 60px;
        color: var(--accent, #dba514);
        font-feature-settings: "liga" off, "clig" off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 100% */
        letter-spacing: 1px;
      }
      .item3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 150px;
        gap: 10px;
        span {
          min-width: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          border: 1px solid var(--pastel, #d1bcb2);
          width: 46px;
          height: 46px;
          border-radius: 50%;
          color: #d1bcb2;
        }
      }
      .item4 {
        max-width: 60px;
        color: var(--accent, #dba514);
        font-feature-settings: "liga" off, "clig" off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        min-width: 50px;
        letter-spacing: 1px;
      }
      .item5 {
        display: flex;
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          border: 1px solid var(--pastel, #d1bcb2);
          width: 46px;
          height: 46px;
          border-radius: 50%;
        }
        img {
          background-color: #fff;
          width: 18px;
          height: 20px;
        }
      }
    }
  }
  .bottomContent {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      .inputText {
        max-width: 250px;
        height: 35px;
        width: 100%;
        padding: 0px 15px;
      }
      .inputSubmit {
        max-width: 107px;
        width: 100vw;
        height: 35px;
        background-color: #d1bcb2;
        color: var(--text-white, #fff);
        font-feature-settings: "liga" off, "clig" off;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-left: -2px;
        &:active {
          transform: scale(0.99);
        }
      }
    }
    .right {
      display: flex;
      button {
        border: none;
        width: 150px;
        height: 35px;
        color: var(--text-white, #fff);
        font-feature-settings: "liga" off, "clig" off;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      &:active {
        transform: scale(0.99);
      }
    }
  }
`;
export const RightCon = styled.div`
  max-width: 530px;
  border-top: 2px solid #dba514;
  width: 100%;
  background-color: #fff;
`;
export const Right_in_top = styled.div`
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
export const Midl_id_con = styled.div`
  margin-top: 40px 0px;
  padding: 30px;
  border-bottom: 1px solid #d1bcb2;

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
  .inputs {
    font-weight: bold;
    color: var(--dark, #ad8775);
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 112.5% */
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .sariq {
    font-weight: bold;
    color: var(--dark, #ad8775);
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 112.5% */
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .qora {
    font-weight: bold;
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
`;
export const Right_in_bottom = styled.div`
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
