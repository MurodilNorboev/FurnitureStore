import styled from "styled-components";

export const Catalog_con = styled.div`
background: var(--main, #F9F6F5);
padding: 181px 30px 50px 30px;
display: flex;
justify-content: center;
align-items: start;
gap: 30px;
@media only screen and (max-width: 1440px){
    .Saidbar {
        display: none;
    } 
}
`;
export const SlaiderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
export const Saidbar = styled.div`
background-color:  #FFF;
display: flex;
flex-direction: column;
padding: 40px;
width: 300px;
gap: 50px;
.cart_con {
width: 100%;
display: flex;
flex-direction: column;
} h2 {
    width: 100%;
    color: #32324D;
    font-family: Prompt;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 120% */
    letter-spacing: 2.5px;
    text-transform: uppercase;
} tr {
    width: 30px;
    height: 1px; 
    background: #D1BCB2; 
} .button_wrap {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
} .btn_wrap {
    display: flex;
    button {
    color: var(--middle-grey, #999);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 100% */
    padding-top: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 46px;
    align-items: flex-start;
    border: 1px solid var(--pastel, #D1BCB2);
    background: var(--white, #FFF);
    }
} .btn_wrap_b {
    display: flex;
    button {
        color: var(--text-white, #FFF);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        letter-spacing: 2px;
        text-transform: uppercase;
        border: none;
        display: flex;
        height: 46px;
        width: 60px;
        justify-content: center;
        align-items: center;
        background: var(--pastel, #D1BCB2);
    }
} label {
    color: var(--dark, #AD8775);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
    letter-spacing: 2px;
    text-transform: uppercase;
} h5 {
    margin-top: 10px;
    color: var(--main, #32324D);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    border-bottom: 1px solid #DBA514;
    padding-bottom: 5px;
    width: 90px;
}
`;
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  .Image {
    height: 300px;
    padding: 5px;
  }
  @media (max-width: 1440px){
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); 
    padding: 0px;
    .Image {
      height: 330px;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); 
    .Image {
      height: 320px;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr); 
    .Image {
      height: 330px;
    }
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
`;
export const Imagecontent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-height: 450px;
height: 100%;
background-color: #FFF;


h6 {
  margin-top: 30px;
  width: 30px;
  height: 1px;
  flex-shrink: 0;
  background: var(--pastel, #D1BCB2);
} h5 {
  margin-top: 5px;
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
} h4 {
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  color: var(--accent, #DBA514);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Prompt;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 100% */
  letter-spacing: 1px;
}
`;


export const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 3/3;
  padding: 7px;
  transition: transform 1ms ease;
  @media screen and (max-width: 1440px) {
  padding-left: 40px;
}
`;
export const PagesName = styled.div`
position: absolute;
z-index: 10;
gap: 5px;
top: 120px;
padding-left: 80px;
max-width: 1450px;
width: 100vw;
display: flex;
align-items: center;
h3 {
  margin-bottom: -0%;
  color: var(--dark, #AD8775);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Prompt;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 123.077% */
} img {
  display: flex;
  align-items: center;
  width: 7px;
  height: 10px;
} h4 {
  margin-bottom: -0%;
  color: var(--main, #32324D);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Prompt;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 123.077% */
}
`;



