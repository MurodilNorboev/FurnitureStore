import styled from "styled-components";

/// == asosiy ! ===
export const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
  gap: 100px;
  display: flex;
  flex-direction: column;
  background-color: #F9F6F5;
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 80px;
  } .zoomConWrap {
    position: absolute;
    padding-left: 425px;
    
  } .imgwrap1 {
    display: flex;
  } .imgswrap {
    height: 100vw;
    width: auto;
    max-width: 645px;
    min-width: 130px;
    display: flex;
    max-height: 500px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  } .imgs {
    width: 90px;
    height: 90px;
    img, iframe {
      max-width: 85px;
      max-height: 85px;
      height: 100vw;
      width: 100vw;
  }
  } .imageWrapperWrap {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 615px;  
    max-height: 515px;
    height: 100vw;
    width: 100vw;
    background-color: #FFF;
    box-shadow: rgba(237, 228, 224, 0.25) 0px 24px 38px, 
            rgba(237, 228, 224, 0.22) 0px 20px 20px !important;
  }
  @media screen and (max-width: 1440px) {
    .imgwrap1 {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    } .imgswrap {
      display: grid;
      grid-template-areas: "a a a a a";
      height: 130px;
      width: 100vw;
      overflow: scroll;
      padding: 0px 10px;
    } .zoomConWrap {
    position: absolute;
    padding-left: 320px;
  }
  }
  @media screen and (max-width: 1200px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    } .RightCon {
      max-width: 600px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media screen and (max-width: 550px) {
    .right_cart {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      } .bottom_Con {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      } .midl_wrap {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      } .imgswrap {
        gap: 30px;
      }
  }
`;
/// === images ===
export const ImageWrapper = styled.div`
  position: relative;
  max-width: 600px;  
  max-height: 500px;
  width: 100vw;  
  height: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const Tab = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  cursor: pointer;

  ${(props) => props.active && `
    color: #32324D; 
    border: 0.01px solid gray;
    img, iframe {
      padding: 1.50px;
    }
    background-color: #FFF;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  `}
`;
export const Content = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? 'block' : 'none')};
`;
export const Image = styled.img`
  display: block;
  width: 100vw;  
  height: 100vw; 
  max-width: 600px;  
  max-height: 500px; 
`;
export const Iframe = styled.iframe`
  display: block;
  width: 100vw;  
  height: 100vw; 
  max-width: 600px;  
  max-height: 500px; 
`;
export const Lens = styled.div<{ x: number; y: number }>`
  position: absolute;
  width: 100px;  
  height: 100px; 
  border: 0.01px solid rgba(43, 74, 26, 0.7);
  background-color: rgba(108, 186, 87, 0.3);
  background-image: radial-gradient(circle, rgba(108, 186, 87, 0.2) 1%, transparent 80%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  background-size: 2px 2px;
  background-position: 0 0;
  cursor: pointer;

  top: ${({ y }) => `${(y / 500) * 100}%`}; 
  left: ${({ x }) => `${(x / 600) * 100}%`}; 
`;
export const ZoomedContainer = styled.div<{ x: number; y: number; bgImage: string }>`
  position: absolute;
  border-radius: 20px;
  top: 27%;    
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  background-position: ${({ x, y }) => `-${(x * 4) - 200}px -${(y * 4) - 200}px`};  
  background-size: 2400px 2000px;  
  pointer-events: none;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  background-image: url(${({ bgImage }) => bgImage});
  background-color: #FFF !important;
  z-index: 1;
`;
/// === RightContainer ===
export const RightCon = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 400px;
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
// === datail 0_2 chisi ===
export const Datail_0_2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.Containre_Chescout_Content {
    display: flex;
    padding: 0px;
}

`;
// === datail 2 chisi ===
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
// === datil 3 chisi ===
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





