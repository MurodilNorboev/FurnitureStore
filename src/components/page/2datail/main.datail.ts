import styled from "styled-components";

export const Datail_container = styled.div`
border: 1px solid red;
background-color: #F9F6F5;
padding: 150px 0px 100px 0px;
display: flex;
flex-direction: column;
gap: 100px;
`;
///datail 1 chisi !
export const Datail_1 = styled.div`
display: flex;
justify-content: center;
background-color: #F9F6F5;
 .wrape {
    display: flex;
 }
`;
export const LeftCon = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

.left_datail {
width: 100px;
height: 100px;
border: 1px solid blue;
img, iframe {
   width: 100px;
height: 100px;
}
}
`;
export const MidlCon = styled.div`
padding: 0px 60px 0px 30px;
max-width: 750px;
height: 50vw;
width: 100%;
max-height: 630px;
   img {
    background-color: #FFF;
    padding: 5px;
    max-width: 900px;
    width: 100%;
    height: 100%;
    max-height: 730px;
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
            padding-bottom: 13px;
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
        padding: 6px 8px;
        background: #FFF;
        box-shadow: 0px 10px 20px 0px rgba(209, 188, 178, 0.25);
        color: var(--accent, #DBA514);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
    } .texte2 {
        padding: 6px 8px;
        background: #FFF;
        box-shadow: 0px 10px 20px 0px rgba(209, 188, 178, 0.25);
        color: var(--pastel, #D1BCB2);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
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

// datail 2 chisi !
export const Datail_2 = styled.div`
height: 484px;
border: 1px solid rebeccapurple;
`;
// datil 3 chisi ! 
export const Datail_3 = styled.div`
height: 730px;
border: 1px solid rebeccapurple;
`;
// datail 4 tinchisi ! 
export const Datail_4 = styled.div`
height: 566px;
border: 1px solid rebeccapurple;
`;