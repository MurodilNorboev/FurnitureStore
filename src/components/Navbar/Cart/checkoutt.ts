import styled from "styled-components";

export const Container_Chescout = styled.div`
padding-top: 0px;
.nn {
    background-color: #FFF;
    box-shadow: 0px 10px 20px 0px rgba(209, 188, 178, 0.25);
}
`;
export const Chescout_containerWrapper = styled.div`
display: flex;
gap: 25px;
.dropdown {
    margin: 35px 0px 0px 0px;
    border: 1px solid #D1BCB2;
    border-left: none;
    border-right: none;
}
input {
    border: 1px solid #D1BCB2;
}
@media only screen and (max-width: 1400px) {
    display: grid;
    width: 78.20vw;
    max-width: 1000px;
    justify-content: center;
    .Containre_Chescout_Content {
        width: 78.20vw;
        max-width: 1000px;
    }
    .Right_Container {
        max-width: 1000px;
        width: 78.20vw;
    } .dropdown {
        max-width: 1000px;
        width: 78.20vw;
        position: none;
        .Accordion {
            max-width: 1000px;
            
        }
    } .Bottom_Container {
        height: auto;
        .bottom_wrape{
            height: auto;
        }
    }
}
@media only screen and (max-width: 1220px){
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
            width: 70vw;
            box-sizing: border-box;
        }
        .Accordion {
            max-width: 860px;
        }
    } .LasName_Con_code {
        padding: 0px;
        input {
            width: 100%;
        }
    }
    } 

}

`;
export const Containre_Chescout_Content = styled.div`
background-color: #FFF;
max-width: 1000px;
padding: 80px;
`;
export const Content_chesckout = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
tr {
    margin: 40px 0px;
    border: 1px solid #D1BCB2;
    align-self: stretch;
}
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
.LasName_Con {
    gap: 10px;
    display: flex;
    flex-direction: column;
    .labelv {
        color: var(--middle-grey, #999);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 14px; /* 116.667% */
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    .labels {
        color: var(--dark, #AD8775);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
    }
    .texts {
        color: var(--middle-grey, #999);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
    }
    input {
        padding: 10px 15px;
        width: 380px;
    }
}
.LasName_Con_code {
    display: flex;
    gap: 30px;
    input {
        padding: 10px 15px;
        width: 175px;
    }
    
}
`;
export const Chescout_Bottom = styled.div`
display: flex;
align-items: center;
width: 100%;
gap: 10px;
.labelvs {
    border: none;
    border-bottom: 1px solid #D1BCB2;
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
.chesbox_wrap {
    display: flex;
}
h4 {
    margin-bottom: -1px;
    color: var(--main, #32324D);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
    letter-spacing: 2px;
    text-transform: uppercase;
} input {
    width: 100%;
    padding: 10px 15px;
}
`;
export const Right_Container = styled.div`
max-width: 530px;
border-top: 2px solid #DBA514;
width: 100%;
/* background-color: #FFF; */
`;