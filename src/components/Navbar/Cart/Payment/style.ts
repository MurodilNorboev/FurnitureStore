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