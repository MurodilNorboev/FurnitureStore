import styled from "styled-components";


export const FooterCon = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.footer_menus_wrapper {
    width: 100%;
    max-width: 1674px;
    display: grid;
    border: none;
}
.footer_0 {
    max-width: 572px;
    width: 100%;
    margin-top: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
} .footer_menus_0 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 82px;
} .footer_menus_01 {
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: end;
    justify-content: space-between;
    h5 {
        color: var(--dark, #AD8775);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; 
        letter-spacing: 2px;
        text-transform: uppercase;
    } 
    .tt {
        transition: transform 0.2s ease; 
  
  &:active {
    transform: scale(1.1); 
  }
    }
    .tt :hover{
    filter: drop-shadow(0px 0px 4px #afa29c);
    
    } 
}
.footer_2 {
    cursor: pointer;
    padding: 40px 0px;
    margin-top: 45px;
    border-bottom: 1px solid #D1BCB2;
    border-top: 1px solid #D1BCB2;
    max-width: 1300px;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    a {
        text-decoration: none;
    }
} .footer_3 {
    display: flex;
    max-width: 522px;
    width: 100%;
    justify-content: space-between;
    align-items: start;
    .footer_three {
        display: grid;
        align-items: center;
        justify-content: center;
        gap: 10px;
        h5 {
            margin-bottom: 16px;
        color: var(--main, #32324D);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 2px;
        text-transform: uppercase;
        } h6 {
        color: var(--dark, #AD8775);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; 
        } .imglar {
           display: flex;
           gap: 10px;
           img {
            width: 24px;
            height: 24px;
           }
        }
    }
} 
.booter4_wrap {
    display: flex;
    justify-content: space-between;
    .footer_three {
        display: none;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 10px;
        h5 {
            margin-bottom: 16px;
        color: var(--main, #32324D);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 2px;
        text-transform: uppercase;
        } h6 {
        color: var(--dark, #AD8775);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; 
        } .imglar {
           display: flex;
           gap: 10px;
           img {
            width: 24px;
            height: 24px;
           }
        }
    }
} .footer_4 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    h5 {
        color: var(--main, #32324D);
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px; /* 112.5% */
        letter-spacing: 2px;
        text-transform: uppercase;
        }
    input {
        height: 100%;
        width: 100%;
        padding: 0px 15px;
        color: var(--main, #32324D);
        width: 380px;
        height: 46px;  
        border: 1px solid var(--pastel, #D1BCB2);
        background: var(--white, #FFF);
    } h6 {
        margin: 16px 0px 30px 0px;
        color: var(--dark-grey, #666);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; 
    } .input_wrap {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            width: 24px;
            height: 24px;
        } .buttons {
                margin-left: -50px;
            }
    } 
} 
.footer_bottom {
    margin: 20px 0px;
    max-width: 1300px;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .bottom{
        display: flex;
        button {
        cursor: pointer;
        height: 50px;
        width: 50px;
        border-radius: 50px;
        border: 1px solid var(--pastel, #D1BCB2);
        background: var(--white, #FFF);
        }
        img {
            width: 24px;
            height: 24px;
        }
        h6 {
            cursor: pointer;
            color: var(--middle-grey, #999);
            font-feature-settings: 'liga' off, 'clig' off;
            font-family: Prompt;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; 
        }
    }
}

@media only screen and (max-width: 1000px) {
    .footer_2 {
        display: grid;
        grid-template-areas: "a ";
        justify-content: center;
        gap: 50px;
        .a {
            display: none;
        } .b {
            display: flex;
        } .footer_3 {
        display: grid;
        grid-template-areas: "a a ";
        gap: 90px;
        } .booter4_wrap {
            padding-right: 25px;
            gap: 30px;
        } .input_wrap {
            gap: 50px;
            input {
                padding: 0px 1px 0px 10px;
                width: 100%;
                width: 225px;
            } .buttons {
                margin-left: -100px;
            }
        } 
    } 
}
@media only screen and (max-width: 1300px) {
     .footer_2 {
        padding: 0px 40px;
    } .footer_bottom {
        display: flex;
        justify-content: space-between;
        padding: 0px 40px;
    } 
}
@media only screen and (max-width: 600px) {
     .footer_0 {
        display: flex;
        flex-direction: column;
        align-items: center;
        .footer_menus_01 {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
        }
    } 
}
@media only screen and (max-width: 480px) {
    .footer_2 {
        padding: 40px 0px;
    .footer_3 {
        display: grid;
        grid-template-areas: " a ";
       
        justify-content: center;
        .footer_three {
            display: flex;
            flex-direction: column;
            align-items: center;
            .footer_menus_2 {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
        }
    } .booter4_wrap {
       
        padding: 0%;
        display: flex;
        justify-content: center;
        .b {
            display: none;
        } .footer_4 {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }
    }
}
`