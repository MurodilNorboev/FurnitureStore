import styled from "styled-components";

export interface NameT {
  name: string;
}



export const ContainerP = styled.div`
  display: flex;
`;
export const Content = styled.div`
  padding: 60px 60px 60px 60px;
  width: 400px;
  height: 191px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  background-color: #fff;
  .checkbox_wrap {
    margin-top: 20px;
  }
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
    justify-content: space-between;
    .top {
      color: var(--main, #32324d);
      font-feature-settings: "liga" off, "clig" off;
      font-family: Prompt;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px; /* 130% */
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    h6 {
      position: relative;
      margin: 0px 0px -5px -300px;
      bottom: -11px;
      color: var(--dark-grey, #666);
      text-align: right;
      font-feature-settings: "liga" off, "clig" off;
      font-family: Prompt;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 125% */
    }
    h5 {
      position: relative;
      margin: 0px 0px -5px -300px;
      bottom: -10px;
      color: var(--dark-grey, #666);
      text-align: right;
      font-feature-settings: "liga" off, "clig" off;
      font-family: Prompt;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 125% */
    }
    h4 {
      position: relative;
      margin: 0px 0px -5px -340px;
      bottom: -7px;
      color: var(--dark-grey, #666);
      text-align: right;
      font-feature-settings: "liga" off, "clig" off;
      font-family: Prompt;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 125% */
    }
    .aa {
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
      padding: 10px 50px 5px 10px;
      width: 380px;
      border: 1px solid red;
      border: none;
      border-bottom: 1px solid #d1bcb2;
      display: flex;
      justify-content: space-between;
      color: var(--main, #32324d);
      font-family: Prompt;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;

      pointer-events: none;
      outline: none;
      background-color: transparent;
      color: black;
      outline: none;
    }
  }
  .inputwraps {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .LasName_Con_code {
    display: grid;
    grid-template-areas: "a a";
    gap: 30px;
    input {
      display: flex;
      justify-content: space-between;
      padding: 10px 50px 5px 10px;
      width: 175px;
      border: 1px solid red;
      border: none;
      border-bottom: 1px solid #d1bcb2;
      color: var(--main, #32324d);
      font-family: Prompt;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }
    h6 {
      position: relative;
      margin: 0px 0px -5px -300px;
      overflow: hidden;
      bottom: -11px;
      color: var(--dark-grey, #666);
      text-align: right;
      font-feature-settings: "liga" off, "clig" off;
      font-family: Prompt;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 125% */
    }
  }
`;
export const Chescout_Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
export const BottomBtn = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  gap: 20px;
  .buttonbtn {
    display: flex;
    button {
      background: var(--pastel, #d1bcb2);
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 46px;
      padding: 18px 24px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      color: var(--text-white, #fff);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      letter-spacing: 2px;
      text-transform: uppercase;
      transition: transform 200ms ease-in-out;
      &:active {
        transform: scale(0.95);
      }
    }
  }
  .btns {
    display: flex;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 46px;
      padding: 18px 24px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border: 1px solid #ad8775;
      background-color: #fff;
      color: var(--dark, #ad8775);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      letter-spacing: 2px;
      text-transform: uppercase;
      transition: transform 200ms ease-in-out;
      &:active {
        transform: scale(0.95);
      }
    }
  }
  .s_btns {
    display: flex;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 46px;
      padding: 18px 24px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border: 1px solid #ad8775;
      background-color: #fff;
      color: var(--dark, #ad8775);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      letter-spacing: 2px;
      text-transform: uppercase;
      transition: transform 200ms ease-in-out;
      &:active {
        transform: scale(0.95);
      }
    }
  }
`;
/// acrive button
export const Tab = styled.div<{ active: boolean }>`
  width: auto;
  padding-bottom: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  color: #ad8775;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px; /* 112.5% */
  letter-spacing: 2px;
  text-transform: uppercase;

  ${(props) =>
    props.active &&
    `
font-wight: bold;
color: #32324D;
border-bottom: 2px solid #DBA514;
`}
`;
export const Contents = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? "block" : "none")};
`;

// orders
export const ContianerOrders = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .MuiSvgIcon-root {
  color: #D1BCB2;
  display: flex;
  width: 36px!important;
  height: 36px!important;
  border: 1px solid #D1BCB2;
  border-radius: 20px;
}
  .h2 {
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

  .ItemContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .item1 {
      display: flex;
      align-items: center;
      gap: 40px;
      width: "auto";
      h1 {
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
      h2 {
        color: var(--middle-grey, #999);
        font-feature-settings: "liga" off, "clig" off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
      }
    }
    .item2 {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 10px;
      margin-bottom: -7px;
      h1 {
        color: var(--accent, #dba514);
        text-align: right;
        font-feature-settings: "liga" off, "clig" off;
        font-weight: bold;
        font-size: 16px;
        font-style: oblique;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 1px;
      }
    }
  }

  .line {
    border: 1px solid #d1bcb2;
    margin: 0px 40px;
  }
`;
export const LeftContent = styled.div`
  max-height: 250px;
  overflow: scroll;
  max-width: 450px;
  width: 100vw;
  .itemContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 30px;
    height: auto;
    overflow: scroll;
    padding-bottom: 40px;
    border-bottom: 1px solid #d1bcb2;
    margin-bottom: 40px;
    img {
      height: 80px;
      width: 80px;
      background-color: #ede4e0;
    }
    .itemWrapper {
      height: auto;
      display: flex;
      align-items: start;
      justify-content: space-between;
      width: 100%;
      .item1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        h6 {
          color: var(--middle-grey, #999);
          font-feature-settings: "liga" off, "clig" off;
          font-family: Prompt;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px; /* 114.286% */
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
      }
      .item2 {
        display: flex;
        flex-direction: column;
        gap: 10px;
        h5 {
          color: var(--pastel, #d1bcb2);
          text-align: center;
          font-feature-settings: "liga" off, "clig" off;
          font-family: Prompt;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px; /* 125% */
        }
      }
      .item3 {
        display: flex;
        flex-direction: column;
        gap: 10px;
        h5 {
          color: var(--accent, #dba514);
          text-align: right;
          font-feature-settings: "liga" off, "clig" off;
          font-size: 16px;
          font-size: bold;
          font-weight: 500;
          line-height: 16px; /* 100% */
          letter-spacing: 1px;
        }
      }
    }
  }
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
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
  h2 {
    color: var(--dark-grey, #666);
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
`;
