import styled from "styled-components";

export const Catalog_con = styled.div`
background: var(--main, #F9F6F5);
/* padding-top: 181px; */
/* display: flex;
justify-content: center;
align-items: start;
gap: 20px; */
.cart_wrap {
    display: grid;
    grid-template-areas: "a a a ";
    gap: 20px;
}
.img_cons {
    border: 1px solid red;
    width: 380px;
    height: 530px;
    img {
        width: 370px;
        height: 200px; 
    }
}

@media only screen and (max-width: 1440px){
    .Saidbar {
        display: none;
    } .CarouselContainerBig {
        width: 100%;
    } .CarouselContainer {
        width: 100%;
    }
}
`;
export const Saidbar = styled.div`
border-radius: 5px;
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

/// 
export const CarouselContainerBig = styled.div`
  /* padding-top: 90px; */
`;
export const CarouselContainer = styled.div`
  position: relative;
  width: 1100px;
  overflow: hidden;
  margin-bottom: 40px;
`;
export const CarouselTrack = styled.div<{ slideIndex: number,     slidesToShow: number}>`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${({ slideIndex, slidesToShow }) => `translateX(-${(slideIndex * 100) / slidesToShow}%)`};
  width: 100%;
`;
export const CarouselItem = styled.div`
background-color: transparent;
  z-index: 10;
  padding: 0px 10px;
  height: 340px;
  max-width: 350px;
  width: 100%;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  .img_wrap {
    padding: 5px;
    background-color: #FFF;
    width: 100%;    
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h4 {
        margin-top: 15px;
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
    } h5 {
        color: var(--accent, #DBA514);
        text-align: center;
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px; /* 100% */
        letter-spacing: 1px;
    } tr {
    margin-top: 15px;
    width: 30px;
    height: 1px;
    flex-shrink: 0;
    background: var(--pastel, #D1BCB2);
    }
  }
  img {
    max-width: 300px;
    width: 100%;    
    height: 100%;
  }
  width: 25%;
  @media (max-width: 1024px) {
    width: 33.33%;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const PrevButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 50%;
  cursor: pointer;
`;
export const NextButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 50%;
  cursor: pointer;
`;
export const DotsContainer = styled.div`
margin-top: 40px;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'black' : 'lightgray')};
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
`;


