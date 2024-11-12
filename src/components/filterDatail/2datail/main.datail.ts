import styled from "styled-components";

export const Datail_container = styled.div`
background-color: #F9F6F5;
padding: 80px 0px 100px 0px;
display: flex;
flex-direction: column;
gap: 100px;
`;
///datail 1 chisi !
export const Datail_1 = styled.div`
display: flex;
justify-content: center;
background-color: #F9F6F5;
gap: 0px;
.wrape2 {
    display: none;
}
 .wrape {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    max-width: 890px;
    width: 100vw;
 }
 @media screen and (max-width: 1440px) {
        display: grid;
        justify-content: center;
        .wrape2 {
            gap: 30px;
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            .LeftCon {
            width: auto;
            overflow: scroll;
            grid-template-areas: "a a a a a";
            justify-content: space-between;
            .left_datail {
                display: grid;
                grid-template-areas: "a a a a a";
                gap: 30px;
                justify-content: space-between;
                padding: 15px; 
                height: 140px;
                max-width: 780px;
                width: 100vw; 
            } 
            } .MidlCon {
                max-width: 750px;
                img, iframe{
                    padding: 10px;
                    max-width: 750px;
                    max-height: 500px;
                    height: 100%;
                    aspect-ratio: 20/15;
                    width: 100vw;
                }
            }
        }
        .wrape {
            display: none;
            flex-direction: column-reverse;
            align-items: center;
            gap: 20px;
        } .MidlCon {
            display: flex;
            justify-content: center;
            margin: 0px;
            width: auto;
            height: auto;
            max-width: auto;
            max-height: auto;
            .imgwrap {
                height: 950px;
            }
        } .LeftCon {
            gap: 30px;
            overflow: scroll;
            grid-template-areas: "a a a a a";
            .lefta_datail_wrap {
                width: 90px;
            .left_datail {
                width: 90px;
                .Thumb {
                    width: 90px;
                }
            } 
            }
        }
        /////
        .RightCon {
            display: flex;
            max-width: 900px;
            width: 100%;
            .right_cart {
                display: flex;
                justify-content: center;
                width: 100%;
                max-width: 900px;

                .midl_wrap {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    max-width: 900px;
                .div1 {
                        width: 100%;
                        max-width: 900px;
                        display: flex;
                        justify-content: center;
                    }
                }
            }
            .bottom_Con {
                display: flex;
                justify-content: center;
                width: 100%;
                max-width: 900px;
            }
        }
 }
 /* @media screen and (max-width: 550px) {
    .right_cart {
        display: flex;
        margin-top: 10px;
        .div1 {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        .row_line {
            margin-top: 10px;
            height: 1px;
            max-width: 200px;
            width: 100%;
        }
        .bottom2 {
            display: flex;
            flex-direction: column;
        }
    }
 }
 @media screen and (max-width: 450px) {
    .LeftCon {
            display: flex;
            width: 100%;
            max-width: 350px;
            overflow: scroll;
            .left_datail {
                gap: 30px;
                display: grid;
                grid-template-areas: "a a a a a";
                justify-content: space-between;
            }
        }
 }
 @media screen and (max-width: 750px) {
    .LeftCon {
            display: flex;
            width: 100%;
            max-width: 420px;
            min-width: 350px;
            overflow: scroll;
            .left_datail {
                gap: 30px;
                display: grid;
                grid-template-areas: "a a a a a";
                justify-content: space-between;
            }
        }
 } */
`;
export const LeftCon = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 0px;
max-width: 900px;
height: 100%;

.left_datail {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   overflow: scroll;
img, iframe {
   background-color: transparent;
   padding: 3px;
   width: 90px;
   height: 90px;
   transition: transform 200ms ease-in-out;
}
}
`;
export const MidlCon = styled.div`
margin: 0px 60px 0px 30px;
max-width: 725px;
height: 35vw;
background-color: transparent;
width: 100%;
max-height: 630px;
    iframe, .imges, img {
     transition: "transform 0.3s ease";
     background-color: #FFF;
     padding: 10px;
     max-width: 700px;
     max-height: 510px;
     width: 100vw; 
     height: 100vw;
    }
.wrape2 {
    .imgwrap, iframe, .imges, img {
     transition: "transform 0.3s ease";
     background-color: transparent;
     padding: 10px;
     max-width: 700px;
     max-height: 515px;
     min-width: 350px;
     min-height: 150px;
     width: 100vw; 
     height: 100vw;
    }
}
@media screen and (max-width: 1440px) {
    /* img, iframe {
    max-width: 900px;
    max-height: 640px;
    width: 100%; 
    height: 100%;
   } */
}
`;
export const RightCon = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 420px;
.right_cart {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 } .wrap_text {
        display: flex;
        flex-direction: column;
        align-items: center;
 } h6 {
        margin-top: 40px;
        width: 40px;
        height: 2px;
        background: var(--accent, #DBA514);
 } h3 {
        margin: 20px 0px 10px 0px;
        color: var(--main, #32324D);
        text-align: center;
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px; 
        letter-spacing: 3px;
        text-transform: uppercase;
 } h5 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: black;
 } .line {
    height: 1px;
    align-self: stretch;
    background: var(--pastel, #D1BCB2);
 } .midl_wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
 } .div1 {
    display: flex;
    max-width: 400px;
    justify-content: space-between;
    align-items: center;
 } .img_wrap_colorCon {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        .buttons {
            border: 1px solid #D1BCB2;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            padding-bottom: 3px;
            border-radius: 50%;
            background-color: #FFF;
        } .p_count {
            width: 10px;
            display: flex;
            align-items: center;
            height: 100%;
            margin-bottom: -1px;
        }
    .images :hover{
        border: 0px ;
    } .images {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        fill: #FFF;
        stroke-width: 3px;
        stroke: var(--white, #FFF);
        filter: drop-shadow(0px 10px 20px rgba(209, 188, 178, 0.25));
     img {
        width: 55px;
        height: 55px;
    }   
    } .texte1 {
      background: #FFF;
        padding: 6px 8px;
        color: var(--accent, #DBA514);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        &:active {
           transform: scale(0.98);
        }
        &:hover {
         background: #FFF;
         box-shadow: 0px 10px 20px 0px rgba(209, 188, 178, 0.25);
        }
    } .texte2 {
        padding: 6px 8px;
        background: #FFF;
        color: var(--pastel, #D1BCB2);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        &:active {
          transform: scale(0.98);
        }
        &:hover {
         background: #FFF;
         box-shadow: 0px 10px 20px 0px rgba(209, 188, 178, 0.25);
        }
    } 
 } .h2 {
        color: var(--dark-grey, #666);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; 
        letter-spacing: 2px;
        text-transform: uppercase;
 } .img_wrap_colorCon :hover {
        background-color: #FFF;
 } .str {
   display: flex;
   align-items: center;
   gap: 2px;
   img {
      margin-top: -8px;
      background-color: linear-gradient(rgba(0, 0, 0, 0.10), #D1BCB2);
   }
 }
 .imgwrapmini {
   display: flex;
   gap: 10px;
   img {
      padding: 4px;
      background-color: transparent;
      width: 60px;
      height: 60px;
      &:hover {
         background-color: #FFF;
      }
      &:active {
         transform: scale(0.98);
      }
   }
 } 
 ////
 .bottom_Con {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    width: 100%;
 } .row_line {
    margin: 0px 10px;
    width: 1px;
    height: 26px;
    background: var(--secondary, #EDE4E0);
 } .cost {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    .car_wrep {
        display: flex;
        align-items: center;
    } .h3 {
        margin-bottom: -4px;
        color: var(--red, #F66);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px; /* 130% */
        letter-spacing: 2px;
        text-transform: uppercase;
    } .h2 {
        margin-bottom: -4px;
        color: var(--pastel, #D1BCB2);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 20px; 
        letter-spacing: 1px;
        text-decoration-line: strikethrough;
        text-transform: uppercase;
    } 
 } .car_wrep {
    display: flex;
    align-items: center;
    gap: 5px;
    img {
        width: 20px;
        height: 100%;
    } h3 {
        color: var(--dark-grey, #666);
        font-size: 14px;
        margin-top: 10px;
 }
 }
 //// 
 .cons_btn {
    display: flex;
    align-items: center;
    margin-right: 20px;
    button {
    background: var(--pastel, #D1BCB2);
    width: 204px;
    height: 60px;
    border: none;
    color: var(--text-white, #FFF);
    font-size: 14px;
    text-transform: uppercase;
    &:active {
      transform: scale(0.98);
    }
    }
 } .cons_btn_like {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
    border: 1px solid  #D1BCB2;
    background: var(--white, #FFF);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    padding: 10px;   
    }
    
 }
`;
//// ===== imglar almashinuvchi div ====== 
export const Thumb = styled.img<{ active?: boolean }>`
  width: 120px;
  height: 120px;
  background-color: #FFF !important;
  padding: 7px;
  padding: ${(props) => (props.active ? '6px' : 'none')};
  box-shadow: ${(props) => (props.active ? 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;' : 'none')};
  border: ${(props) => (props.active ? '0.10px solid gray' : 'none')};
  cursor: pointer;
`;
export const Thumbs = styled.iframe<{ actives?: boolean }>`
  width: 120px;
  height: 120px;
  background-color: #FFF !important;
  padding: 3px;
  padding: ${(props) => (props.actives ? '7px' : 'none')};
  box-shadow: ${(props) => (props.actives ? 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' : 'none' )};
  border: ${(props) => (props.actives ? '0.10px solid gray' : 'none')};
  cursor: pointer;
`;
export const Tab = styled.div<{ active: boolean }>`
  padding: 3px;
  background-color: #FFF;
  cursor: pointer;

  ${(props) => props.active && `
    color: #32324D; 
    border: 0.10px solid gray;
    height: 96px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    padding: 2px;
  `}
`;
export const Content = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? 'block' : 'none')};
`;
////
export const Chescout_containerWrapper = styled.div`
background-color: transparent !important;
display: flex;
gap: 25px;
.dropdown {
    margin: 35px 0px 0px 0px;
    border: 1px solid #D1BCB2;
    border-left: none;
    border-right: none;
}
@media only screen and (max-width: 1420px){
    padding: 0px;
    .Containre_Chescout_Content {
        display: flex;
        justify-content: center;
        align-items: center;
    .Chescout_Top {
        display: grid;
        grid-template-areas: "a";
        justify-content: center;
        align-items: center;
        max-width: 1270px;
    } .Chescout_one {
        display: flex;
        justify-content: center;
        align-items: center;
        .h1 {
            width: 80vw;
        }
    .inputs {
            width: 80vw;
            box-sizing: border-box;
        } 
    }
    }
}

`;
export const Containre_Chescout_Content = styled.div`
padding: 0px 110px;
`;
export const Chescout_one = styled.div`
display: flex;
flex-direction: column;
gap: 20px;

.h1 {
    color: var(--dark-grey, #666);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */ 
} 
.h22 {
    position: absolute;
    width: 100%;
    h2 {
    color: var(--main, #32324D);
    font-feature-settings: 'liga' off, 'clig' off;
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
    .inputs {
        width: 380px;
        border-bottom: 1px solid #D1BCB2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h4 {
            color: var(--main, #32324D);
            font-weight: 500;
            font-size: 20px;
            font-feature-settings: 'liga' off, 'clig' off;
            text-transform: uppercase;
            letter-spacing: 2px;
        } h5 {
            color: var(--main, #32324D);
            font-feature-settings: 'liga' off, 'clig' off;
            font-size: 16px;
            font-weight: 500;
            line-height: 20px; /* 125% */
        } h6 {
            color: var(--dark-grey, #666);
            text-align: right;
            font-feature-settings: 'liga' off, 'clig' off;
            font-size: 16px;
            font-weight: 400;
            line-height: 20px; /* 125% */
        }
    }

} 
`;
// datail 0_2 chisi !
export const Datail_0_2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.Containre_Chescout_Content {
    display: flex;
    padding: 0px;
}

`;
// datail 2 chisi !
export const Datail_2 = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;

@media screen  and (max-width: 1440px){
    .DotsContainer {
        display: flex;
        padding: 0px 20px;
    }
}
`;
// datil 3 chisi ! 
export const Datail_3 = styled.div`
display: flex;
justify-content: center;
gap: 90px;
width: 100%;
.datail3_menus {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
} .a {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 780px;
    gap: 60px;
    h6 {
        width: 100%;
        height: 1px;
        border-top: 1px solid #D1BCB2;
    }
    .wrap_text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        h6 {
            width: 40px;
            height: 2px;
            background: var(--accent, #DBA514);
        } h3 {
            color: var(--main, #32324D);
            font-feature-settings: 'liga' off, 'clig' off;
            font-size: 30px;
            font-weight: 500;
            line-height: 38px; 
            letter-spacing: 3px;
            text-transform: uppercase;
        } h2 {
            color: var(--dark-grey, #666);
            text-align: center;
            font-feature-settings: 'liga' off, 'clig' off;
            font-size: 18px;
            font-weight: 400;
            line-height: 28px; /* 155.556% */
        } 
    } 
} .b {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 400px;
    gap: 30px;
    .wrap_text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        h6 {
            width: 40px;
            height: 2px;
            background: var(--accent, #DBA514);
        } h3 {
            color: var(--main, #32324D);
            font-feature-settings: 'liga' off, 'clig' off;
            font-size: 30px;
            font-style: normal;
            font-weight: 500;
            line-height: 38px; /* 126.667% */
            letter-spacing: 3px;
            text-transform: uppercase;
        }
    } .str {
        display: flex;
        width: 100%;
        justify-content: start;
        align-items: center;
        h5 {
            margin-bottom: -1px;
            margin-left: 5px;
            color: var(--main, #32324D);
            font-feature-settings: 'liga' off, 'clig' off;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px; /* 114.286% */
        } img {
            width: 30px;
            height: 30px;
        }
    } .add {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 40px;
        .tt {
            height: 80px;
        } input {
            border: 1px solid var(--pastel, #D1BCB2);
            background: var(--white, #FFF);
            padding: 0px 50px 0px 5px;
            height: 46px;
        }
    } .btnwrap {
        display: flex;
        width: 100%;
        button {
            border: none;
            background: var(--pastel, #D1BCB2);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            width: 100%;
            height: 60px;
            color: var(--secondary, #EDE4E0);
            font-feature-settings: 'liga' off, 'clig' off;
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            transition: transform 0.3s ease;
            &:active {
                transform: scale(0.98);
            }
        }
    }
} 
@media screen and (max-width: 1440px){
    display: grid;
    margin: 0px;
    width: 100%;
    .datail3_menus {
        max-width: 940px;
        width: 100vw;
        gap: 30px;
        h6 {
            max-width: 900px;
        }
        .wrap {
            br {
                display: none;
            }
        }
    } 
    ////
    .str {
        display: flex;
        align-items: center;
        gap: 2px;
    } .inputwrap {
        display: flex;
        flex-direction: column;
        max-width: 900px;
        width: 100%;
        input {
            width: 100%;
        }
    } .str {
        display: flex;
        max-width: 940px;
        width: 100%;
        padding: 0px 20px;
    } .add {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 20px;
        input {
            max-width: 900px;
            width: 100%;
        }
    } .btnwrap {
        display: flex;
        width: 100%;
        max-width: 940px;
        padding: 0px 20px;
        button {
            width: 100%;
            max-width: 900px;
        }
    }
}
`;
