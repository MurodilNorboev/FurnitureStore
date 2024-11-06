import styled from "styled-components";


export const BlogContainerwrap = styled.div`
padding-top: 280px;
padding-bottom: 100px;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
background-color: #F9F6F5;
.Blog {
    width: 100%;
    max-width: 1290px;
    h1 {
        color: var(--main, #32324D);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 38px; /* 126.667% */
        letter-spacing: 3px;
        text-transform: uppercase;
    }
}
`;
export const BlogComponent = styled.div`
display: grid;
grid-template-areas: "a a a a";
max-width: 1300px;
gap: 20px;

@media screen and (max-width: 1310px){
        display: grid;
        grid-template-areas: "a a a";
}
@media screen and (max-width: 1000px){
        display: grid;
        grid-template-areas: "a a";
}
@media screen and (max-width: 650px){
        display: grid;
        grid-template-areas: "a";
}
`;
export const BlogConent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 306px;
transition: transform 0.3s ease-in-out;
position: relative;
img {
    background-color: #FFF;
    padding: 7px;
    max-width: 306px;
    max-height: 303px;
    width: 100vw;
    height: 100vw;
    transition: filter 0.3s ease-in-out; 
    position: relative; 
    z-index: 0;
} h4 {
    margin-top: 10px;
    width: 30px;
    height: 1px;
    background: var(--pastel, #D1BCB2);
} h5 {
    color: var(--dark-grey, #666);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
    letter-spacing: 2px;
    text-transform: uppercase;
} h6 {
    margin-top: 10px;
    color: var(--pastel, #D1BCB2);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
}
&:hover {
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
    transform: translate(3px);  
    background-color: #FFF;
    h4 {
        display: none;
    } h5 {
        margin-top: 15px;
        color: var(--main, #32324D);
        text-align: center;
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 125% */
        letter-spacing: 2px;
        text-transform: uppercase;
    } h6 {
        color: var(--accent, #DBA514);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 125% */
    }
}
&:active {
    transition: transform 0.3s ease-in-out;
    transform: scale(1.05);
    z-index: 1; 
  }

`;
////// blog datail!

export const BlogDatailContainer = styled.div`
padding-top: 280px;
display: flex;
justify-content: center;
align-content: center;
max-width: 1290px;
background-color: #F9F6F5;
`;
export const BlogDatailContent = styled.div`
max-width: 1300px;
display: grid;
gap: 40px;
background-color: #FFF;
img {
    max-width: 1300px;
    max-height: 600px;
    height: 100vw;
    width: 100vw;
}
`;
export const AboutChief = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
h4 {
    width: 40px;
    height: 2px;
    background: var(--accent, #DBA514);
} h5 {
    text-align: center;
    color: var(--main, #32324D);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px; /* 126.667% */
    letter-spacing: 3px;
    text-transform: uppercase;
} h6 {
    color: var(--pastel, #D1BCB2);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
} p {
    max-width: 1000px;
    padding: 10px;
    color: var(--dark-grey, #666);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
} h3 {
    text-align: center;
    padding: 10px;
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
    margin-top: 10px;
    color: var(--middle-grey, #999);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
} .line {
    height: 1px;
    background-color: #D1BCB2;
    border: 1px solid #D1BCB2;
    max-width: 980px;
    width: 100%;
} .bottom {
    display: flex;
    max-width: 980px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
} .menus {
    display: flex;
    align-items: center;
    gap: 10px;
    h1 {
        color: var(--dark-grey, #666);
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px; /* 112.5% */
        letter-spacing: 2px;
        text-transform: uppercase;
    } h2 {
        margin-top: -1px;
        color: var(--accent, #DBA514);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; 
        letter-spacing: 2px;
        text-transform: uppercase;
    }
} .imgwrap {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: -10px;
}
@media screen and (max-width: 800px) {
    h5 {
        br {
            display: none;
        }
    }
}
`;
export const AboutContainer = styled.div`
padding-top: 180px;
padding-bottom: 100px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #F9F6F5;
.p2 {
    display: none;
    gap: 10px;
}

@media screen and (max-width: 1310px) {
    .AboutContent2 {
        display: grid;
        grid-template-areas: "a a ";
    } .about {
        padding-left: 30px;
    } .AboutContent002 {
        .wrap {
            display: none;
        } 
        .p2 {
            display: grid;
            grid-template-areas: "a a a";
        }

    }
}
@media screen and (max-width: 1000px) {
    .AboutContent002 {
    .p2 {
        display: grid;
        grid-template-areas: "a a";
    }


} 
}
@media screen and (max-width: 900px) {
    .AboutContent2 {
        display: grid;
        grid-template-areas: "a";
    }
}
@media screen and (max-width: 650px) {
    .AboutContent002 {
    .p2 {
        display: grid;
        grid-template-areas: "a";
    }
    } .AboutChief {
        .bottom {
            gap: 20px;
            width: 100%;
            justify-content: center;
            display: grid;
            align-items: center;
        }
    }

}
`;

