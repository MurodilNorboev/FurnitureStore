import styled from "styled-components";

//login
export const LoginCon = styled.div`
display: flex;
justify-content: center;
align-items: start;
height: 100svb;
padding-top: 100px;
background-color: #F9F6F5;
`;
export const LoginWraps = styled.form`
display: flex;
padding: 33px;
flex-direction: column;
align-items: flex-start;
justify-content: center;
max-width: 500px;
background-color: #FFF;

h2 {
    width: 100%;
    color: var(--main, #32324D);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px; /* 126.667% */
    letter-spacing: 3px;
    text-transform: uppercase;
} .loginis1 {
    color: #AD8775;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
} .loginis1 label {
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 10px;
} .loginis1 input {
    border: 1px solid #D1BCB2;
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
} .chackbox1 {
    display: flex;
    gap: 5px;
    align-items: center;
} 
.loginis3 label {
    color: #666;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
} .loginis3 h3 {
    color: var(--dark, #AD8775);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
} 
.loginis4 {
    padding-top: 25px;
    width: 100%;
} .loginis4 button {
    cursor: pointer;
    border: none;
    width: 59.5vmin;
    max-width: 434px;
    height: 50px;
    background: #D1BCB2;
    color: white;
    font-size: 15px;
    font-weight: 700;
    transform: translate(4s);
} .loginis4 :hover {
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

} .loginis5 h4 {
    padding: 0px 10px;
    color: var(--dark, #AD8775);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
} .lang {
    max-width: 120px;
    width: 100%;
    border: 0.5px solid  #D1BCB2;

}
.loginis6 {
    padding-top: 29px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
} .loginis6 img {
    width: 24px;
    height: 24px;
    border: 50%;
} .text_wrapp {
    display: flex;
    align-items: center;
    h2 {
        margin-bottom: -1px;
        color: var(--dark-grey, #666);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 125% */
        letter-spacing: 2px;
        text-transform: uppercase;
    }
} .img_wrappp {
    display: flex;
    align-items: center;
    gap: 16px;
}
.loginis7 {
    padding-top: 5px;
    width: 100%;
} .buttons {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: var(--dark, #AD8775);
    font-feature-settings: 'liga' off, 'clig' off;
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
@media only screen and (max-width: 1300px){
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
padding: 100px 0px;
background-color: #F9F6F5;
`;
export const LoginWrap = styled.form`
display: flex;
padding: 33px;
flex-direction: column;
align-items: flex-start;
justify-content: center;
max-width: 500px;
background-color: #FFF;

h2 {
    width: 100%;
    color: var(--main, #32324D);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px; /* 126.667% */
    letter-spacing: 3px;
    text-transform: uppercase;
} .loginis0 {
    color: #AD8775;
    padding-top: 15px;
    display: flex;
    gap: 10px;
} .loginis0 label {
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 4px;
} .loginis0 input {
    border: 1px solid #D1BCB2;
    background-color: transparent;
    width: 59.5vmin;
    max-width: 434px;
    padding: 10px 20px;
}
.loginis1 {
    color: #AD8775;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
} .loginis1 label {
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 4px;
} .loginis1 input {
    border: 1px solid #D1BCB2;
    background-color: transparent;
    width: 59.5vmin;
    max-width: 434px;
    padding: 10px 20px;
} 
.loginis3 {
    padding-top: 15px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
} .chackbox1 {
    display: flex;
    gap: 5px;
    align-items: center;
} 
.loginis3 label {
    color: #666;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
} .loginis3 h3 {
    color: var(--dark, #AD8775);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
} 
.loginis4 {
    padding-top: 25px;
    width: 100%;
} .loginis4 button {
    cursor: pointer;
    border: none;
    width: 59.5vmin;
    max-width: 434px;
    height: 50px;
    background: #D1BCB2;
    color: white;
    font-size: 15px;
    font-weight: 700;
    transform: translate(4s);
} .loginis4 :hover {
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

} .loginis5 h4 {
    padding: 0px 10px;
    color: var(--dark, #AD8775);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
} .lang {
    max-width: 120px;
    width: 100%;
    border: 0.5px solid  #D1BCB2;

}
.loginis6 {
    padding-top: 29px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
} .loginis6 img {
    width: 24px;
    height: 24px;
    border: 50%;
} .text_wrapp {
    display: flex;
    align-items: center;
    h2 {
        margin-bottom: -1px;
        color: var(--dark-grey, #666);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 125% */
        letter-spacing: 2px;
        text-transform: uppercase;
    }
} .img_wrappp {
    display: flex;
    align-items: center;
    gap: 16px;
}
.loginis7 {
    padding-top: 5px;
    width: 100%;
} .buttons {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: var(--dark, #AD8775);
    font-feature-settings: 'liga' off, 'clig' off;
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
@media only screen and (max-width: 1300px){
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