import styled from "styled-components";

export const OrderChesckout = styled.div`
width: 100vw;
height: 100%;
padding: 182px;
background-color: #F9F6F5;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const ErrorContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: rgba(237, 228, 224, 0.25) 0px 14px 28px, 
            rgba(237, 228, 224, 0.22) 0px 10px 10px !important;
background-color: #FFF;
`;
export const ErrorCon = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 100px 210px;
`;
export const ErrorMidl = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h5 {
    color: var(--main, #32324D);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 112.5% */
    letter-spacing: 2px;
    text-transform: uppercase;
    border-bottom: 1px solid #DBA514;
}
h2 {
    margin: 30px 0px 16px 0px;
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
}
p {
    color: var(--dark-grey, #666);
    text-align: center;
    font-family: Prompt;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
}
.wrapper {
    margin-top: 30px;
    button {
        border: none;
        background-color: #D1BCB2;
        display: flex;
        width: 334px;
        padding: 18px 30px;
        justify-content: center;
        align-items: center;
        gap: 14px;
        color: #FFF;
        gap: 5px;
        color: var(--text-white, #FFF);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 133.333% */
        letter-spacing: 2px;
        text-transform: uppercase;
        fill: var(--white, #FFF);
    }
}
`;