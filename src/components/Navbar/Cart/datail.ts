import styled from "styled-components";

export const DatailCart = styled.div`
background-color: #F9F6F5;
padding: 180px 0px 100px 0px;
display: flex;
justify-content: center;
`;
export const CartContainerWrapper = styled.div`
display: flex;
gap: 50px;
.l {
        display: none;
    }
@media only screen and (max-width: 1400px) {
    display: grid;
    .CartContainer {
        max-width: 1000px;
        width: 88vw;
        max-height: auto;
    }
    .Right_Container {
        max-width: 1000px;
        width: 88vw;
    } 
}
@media only screen and (max-width: 870px){
    .CartContent {
        display: flex;
        width: 100%;
        .a {
        display: none;
    }
    } .btn {
        display: flex;
    } .RightContent {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        width: 100%;
    } .content_Cart {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
    } .nastroyki_btn {
        display: flex;
        width: 100%;
        justify-content: space-between;
    } .l {
        display: flex;
    } .tnses {
        display: grid;
        
    } .CartContainer {
        height: auto;
    } .aa {
    display: flex;
    flex-direction: column;
    align-items: start;
}
}
`;
export const CartContainer = styled.div`
/* background-color: #FFF; */
width: 1000px;
/* padding: 30px 30px 30px 30px; */
height: auto;
.CartContainterwrap {
    width: 100%;
    background-color: #FFF;
    padding: 40px;
} 
.tr {
    width: 100%;
    background-color: #D1BCB2;
    margin: 35px 0px;
    height: 1px;
}
.trs {
    height: 1px;
    width: 100%;
    background-color: #D1BCB2;
    margin: 25px 0px;
}
`;
export const CartContent = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
gap: 25px;
/* border: 1px solid red; */
.content_input_wrap {
    display: flex;
    .inputt {
        color: var(--middle-grey, #999);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 100% */
        max-width: 250px;
        padding: 5px 15px;
        border:1px solid #D1BCB2;
    } .submit {
        transform: translate(2s);
        &:active {
        transform: scale(0.98);
        }
        margin-left: -1px;
        max-width: 107px;
        padding: 5px 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--pastel, #D1BCB2);
        border: none;
        color: var(--text-white, #FFF);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        letter-spacing: 2px;
        text-transform: uppercase;
    }
} 

.content_update_bt {
    display: flex;
    transition: transform 1ms ease;
    &:active {
        transform: scale(0.98);
    }
    button {
    padding: 5px;
    border: none;
    max-width: 175px;
    color: var(--text-white, #FFF);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 2px;
    text-transform: uppercase;
    background: var(--secondary, #EDE4E0);
    }
} 
.content_update_bt :hover {
    background: #bda9a0;
}
`;
export const LeftContent = styled.div`
width: 100%;
max-width: 80px;
height: 100%;
background-color: #aaa;
max-height: 80px;
`;
export const RightContent = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
/* height: 85px; */
.content_Cart {
    display: flex;
    flex-direction: column;
    align-self: center;
    h5 {
    color: var(--accent, #DBA514);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 100% */
    letter-spacing: 1px;
    }
    h4 {
        width: 170px;
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
    h6 {
        color: var(--middle-grey, #999);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 114.286% */
    }
}
.content_Cart_sl {
    display: grid;
    grid-template-areas: " a a a";
    align-items: center;
    justify-content: center;
    gap: 10px;
    p {
        margin-bottom: -1px;
        color: #D1BCB2;
        width: 17px;
    }
} .content_btn {
    gap: 10px;
    button {
        border: 1px solid #D1BCB2;
        color: #D1BCB2;
        padding-bottom: 10px;
        display: flex;
        border-radius: 50%;
        width: 46px;
        height: 46px;
        justify-content: center;
        align-items: center;
    }
}
.content_Cart_dlete {
    button {
    border-radius: 50%;
    border: 1px solid var(--pastel, #D1BCB2);
    background: var(--white, #FFF);
    display: flex;
    width: 46px;
    height: 46px;
    justify-content: center;
    align-items: center;
    }
}
`;
//// Right_Container
export const Right_Container = styled.div`
max-width: 530px;
border-top: 2px solid #DBA514;
box-shadow: 0px 10px 20px 0px rgba(209, 188, 178, 0.25);
width: 100%;
background-color: #FFF;
/* background-color: #FFF; */
`;
export const Top_Container = styled.div`
max-height: 110px;
padding: 30px;
border-bottom: 1px solid #D1BCB2;
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
`;
export const Bottom_Container = styled.div`
padding: 30px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
h3 {
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
.checkbox_Container {
    border-bottom: 1px solid #DBA514;
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
        width:100%;
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
            background-color: #D1BCB2;
            color: var(--text-white, #FFF);
            font-feature-settings: 'liga' off, 'clig' off;
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
    h4 {
        color: var(--main, #32324D);
        text-align: center;
        font-feature-settings: 'liga' off, 'clig' off;
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