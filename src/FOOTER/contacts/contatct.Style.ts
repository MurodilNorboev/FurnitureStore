import styled from "styled-components";

export const ContactContainter = styled.div`
padding-top: 280px;
padding-bottom: 100px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #F9F6F5;
`;
export const For_PartnerConetent = styled.div`
max-width: 1300px;
padding: 80px;
background-color: #FFF;
@media screen and (max-width: 1370px) {
    display: flex;
    justify-content: center;
    width: 100%;
}
`;
export const For_PartnerCon = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: start;
gap: 50px;

.menuswraptwo {
    display: flex;
    align-items: start;
    gap: 30px;
} .menus {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    height: 100%;
    h1 {
        color: var(--main, #32324D);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px; /* 130% */
        letter-spacing: 2px;
        text-transform: uppercase;
    } h2 {
        color: var(--dark-grey, #666);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 155.556% */
    }
} .c {
    margin-top: 40px;
    margin-bottom: 40px;
    width: 100%;
    max-height: 1px;
    height: 100vw;
    background: var(--pastel, #D1BCB2);
} .a {
    width: 1px;
    max-height: 426px;
    height: 100vw;
    background: var(--pastel, #D1BCB2);
} .b {
    width: 100%;
    height: 100vw;
    max-height: 426px;
    display: grid;
    gap: 10px;
    h3 {
        color: var(--main, #32324D);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px; /* 130% */
        letter-spacing: 2px;
        text-transform: uppercase;
    } label {
        width: 100%;
        color: var(--middle-grey, #999);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 14px; /* 116.667% */
        letter-spacing: 1px;
        text-transform: uppercase;
    } input {
        display: flex;
        align-items: center;
        width: 400px;
        max-height: 46px;
        height: 100vw;
        align-self: stretch;
    } .message {
        height: 100vw;
        max-height: 80px;
    }
} .inputwrap {
    width: 100%;
    gap: 10px;
    display: grid;
    align-items: start;
    justify-content: start;
} .btnwrap {
    display: flex;
    button {
        background: var(--pastel, #D1BCB2);
        display: flex;
        max-width: 400px;
        width: 100vw;
        max-height: 60px;
        height: 100vw;
        justify-content: center;
        align-items: center;
    }
} p {
    margin-top: 0px;
    color: var(--pastel, #D1BCB2);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
}
@media screen and (max-width: 1370px) {
    display: grid;
    align-items: center;
    padding: 40px;
    width: 100%;
    justify-content: center;
    .a {
        height: 1px;
        width: 100%;
    } 
}
`;

export const Chescout_containerWrapper = styled.div`
display: flex;
gap: 25px;
    @media only screen and (max-width: 1370px){
    padding: 0px;
    .Containre_Chescout_Content {
        width: 100%;
    }
    .Chescout_Top {
        padding: 0px;
        display: grid;
        justify-content: center;
        width: 100%;
    } .Chescout_one { 
        padding: 0px;
        width: 100%;
        .LasName_Con {
            padding: 0px;
        display: flex;
        width: 100%;
        input {
            width: 40.50vw;
            box-sizing: border-box;
        } .message {
            width: 100%;
        }
    } 
    } .BottomBtn { 
        .buttonbtn {

            button {
                width: 82.40vw;
                box-sizing: border-box;
            } 
        }
    }

}
.menus {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 20px;
    height: 100%;
    h1 {
        color: var(--main, #32324D);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px; /* 130% */
        letter-spacing: 2px;
        text-transform: uppercase;
    } h2 {
        color: var(--dark-grey, #666);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 155.556% */
    }
} .a {
    width: 1px;
    max-height: 426px;
    height: 100vw;
    background: var(--pastel, #D1BCB2);
} .b {
    width: 100%;
    height: 100vw;
    max-height: 426px;
    display: grid;
    gap: 10px;
    h3 {
        color: var(--main, #32324D);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px; /* 130% */
        letter-spacing: 2px;
        text-transform: uppercase;
    } label {
        width: 100%;
        color: var(--middle-grey, #999);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 14px; /* 116.667% */
        letter-spacing: 1px;
        text-transform: uppercase;
    } input {
        display: flex;
        align-items: center;
        width: 400px;
        max-height: 46px;
        height: 100vw;
        align-self: stretch;
    } .message {
        width: 100%;
        height: 100vw;
        max-height: 80px;
    }
} .inputwrap {
    width: 100%;
    gap: 10px;
    display: grid;
    align-items: start;
    justify-content: start;
} .btnwrap {
    display: flex;
    button {
        background: var(--pastel, #D1BCB2);
        display: flex;
        max-width: 400px;
        width: 100vw;
        max-height: 60px;
        height: 100vw;
        justify-content: center;
        align-items: center;
    }
}
`;
export const Content_chesckout = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
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
.name_emailWrap {
    display: flex;
    gap: 20px;
}
.LasName_Con {
    gap: 5px;
    display: flex;
    flex-direction: column;
    input {
        border: 1px solid #D1BCB2;
        padding: 10px 15px;
        width: 300px;
    }
}
`;
export const BottomBtn = styled.div`
display: flex;
align-items: center;
.buttonbtn {
    display: flex;
    button {
    gap: 10px;
    background: var(--pastel, #D1BCB2);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 400px;
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
`;