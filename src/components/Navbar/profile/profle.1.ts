import styled from "styled-components";

export const ContainerP = styled.div`
display: flex;
`;
export const Content = styled.div`
padding: 40px 60px 60px 60px ;
width: 400px;
height: 191px;
background-color: #FFF;
.checkbox_wrap {
    margin-top: 20px;
}
`;
export const Chescout_one = styled.div`
/* display: grid;
grid-template-areas: "a a "; */
display: flex;
flex-direction: column;
gap: 20px;
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
    h6 {
        position: relative;
        margin: 0px 0px -5px -55px;
        bottom: -11px;
        color: var(--dark-grey, #666);
        text-align: right;
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
    }
    h5 {
        position: relative;
        margin: 0px 0px -5px -90px;
        bottom: -10px;
        color: var(--dark-grey, #666);
        text-align: right;
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
    }
    h4 {
        position: relative;
        margin: 0px 0px -5px -290px;
        bottom: -7px;
        color: var(--dark-grey, #666);
        text-align: right;
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
    }
    .aa {
        color: var(--main, #32324D);
        font-feature-settings: 'liga' off, 'clig' off;
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
        border-bottom: 1px solid #D1BCB2;
        display: flex;
        justify-content: space-between;
        color: var(--main, #32324D);
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 125% */
    } 
} .inputwraps {
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
        border-bottom: 1px solid #D1BCB2;
        color: var(--main, #32324D);
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 125% */
    } h6 {
        position: relative;
        margin: 0px 0px -5px -55px;
        bottom: -11px;
        color: var(--dark-grey, #666);
        text-align: right;
        font-feature-settings: 'liga' off, 'clig' off;
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
    background: var(--pastel, #D1BCB2);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    padding: 18px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: var(--text-white, #FFF);
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
    border: 1px solid #AD8775;
    background-color: #FFF;
    color: var(--dark, #AD8775);
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
    border: 1px solid #AD8775;
    background-color: #FFF;
    color: var(--dark, #AD8775);
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