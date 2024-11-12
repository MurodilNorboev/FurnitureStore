import styled from "styled-components";

/// Main con 
export const MainCon = styled.div`
display: flex;
padding-top: 81px;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #F9F6F5;
padding-bottom: 100px;
.carousel22 {
    display: none;
  }
  @media only screen and (max-width: 1200px){
    .carousel22 {
      display: flex;
    } .carousel11 {
      display: none;
    }
  }
`;
// carousel 1
export const CarouselContainers = styled.div`
position: relative;
width: 100%;
max-width: 1480px;
max-height: 614px;
overflow: hidden;
`;
export const CarouselWrapper = styled.div<{ translate: number }>`
display: flex;
height: 100%;
transform: translateX(${({ translate }) => translate}%);
transition: transform 1.5s ease-in-out;
`;
export const CarouselItems = styled.div`
min-width: 100%;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
.imgaes {
  border-bottom: 10px solid white;
  border-left: 5px solid white;
} .images {
  border-bottom: 10px solid white;
  border-right: 5px solid white;
} .line {
  background: var(--accent, #DBA514);
  width: 40px;
  height: 2px;
} .cost_wrap {
display: flex;
gap: 10px;
} .testse {
  height: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  color: white;
  margin-right: 50%;
  margin-top: 25%;
  z-index: 2;
  h4 {
      color: var(--main, #32324D);
      text-align: center;
      font-feature-settings: 'liga' off, 'clig' off;
      font-family: Prompt;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 125% */
      letter-spacing: 3px;
      text-transform: uppercase;
  } h5 {
      color: var(--red, #F66);
      font-feature-settings: 'liga' off, 'clig' off;
      font-family: Prompt;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px; /* 130% */
      letter-spacing: 2px;
      text-transform: uppercase;
  } h6 {
      color: var(--pastel, #D1BCB2);
      font-feature-settings: 'liga' off, 'clig' off;
      font-family: Prompt;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px; /* 130% */
      letter-spacing: 2px;
      text-decoration-line: strikethrough;
      text-transform: uppercase;
  }
}
`;
export const NavButton = styled.button`
position: absolute;
top: 50%;
transform: translateY(-50%);
background: none;
border: none;
cursor: pointer;
color: white;
z-index: 1;
font-size: 30px;

&:hover {
  color: rgba(255, 255, 255, 0.8);
}

&.prev {
  left: 20px;
}

&.next {
  right: 20px;
}
`;
export const DotsContainers = styled.div`
position: absolute;
bottom: 20px;
left: 50%;
transform: translateX(-50%);
display: flex;
gap: 10px;
`;
export const Dots = styled.button<{ active: boolean }>`
width: 10px;
height: 10px;
border-radius: 50%;
background-color: ${({ active }) =>
  active ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.6)'};
border: none;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
`;
// button reverse    //categories
export const BtnWrap2 = styled.div`
height: 150px;
display: flex;
align-items: end;
  cursor: pointer;
  
  &:hover {
    border-top: 2px solid #DBA514;
    z-index: 99;
  }
  
  transition: transform 0.2s ease; 

  &:active {
    transform: scale(0.9); 
  }
`;
 export const AnimatedButton2 = styled.button`
 width: 100%;
 border: none;
 `;
  // Categorie
  export const Categorie = styled.div`
  display: grid;
  grid-template-areas: "a a a a a ";
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: 35px;
  margin-bottom: 100px;
  .catContainer {
    background: var(--white, #FFF);
    display: flex;
    padding: 13px 10px 10px 10px;
    align-items: center;
    gap: 20px;
    align-self: stretch;
    height: 146px;
    max-width: 364px; 
    h5 {
        color: var(--dark-grey, #666);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 2px;
    }
  } .cat_con_wrap {
    width: 160px;
    height: 120px;
    img {
      width: 160px;
      height: 120px;
    }
  } .all_wrap {
    display: flex;
    width: 90px;
    height: 120px;
    padding: 25px 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    img {
        width: 60px;
        height: 60px;
    }
  } .all_icon {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  @media only screen and (max-width: 1440px){
    display: grid;
    grid-template-areas: "a a a a ";
  }
  @media only screen and (max-width: 1300px){
    display: grid;
    grid-template-areas: "a a a ";
  }
  @media only screen and (max-width: 1100px){
    display: grid;
    grid-template-areas: "a a ";
  }
  @media only screen and (max-width: 760px){
    display: grid;
    grid-template-areas: " a ";
  }
  `;
///// ====== buttons ======
export const ButtonL = styled.button`
  border: none;
  width: 299px;
  display: flex;
  height: 60px;
  padding: 11px 30px;
  justify-content: center;
  align-items: center;
  gap: 14px;
  background: var(--pastel, #D1BCB2);
  color: var(--text-white, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Prompt;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 2px;
  &:hover {
    background-color: #c9b4aa;
  }
`;
export const Scrole = styled.div`
  overflow-x: hidden;
  /* max-width: 1310px; */
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 50px;
  width: 100%;
  margin-bottom: 40px;
img {
  width: 200px;
  height: 300px;
}
`;
export const ImgCons3 = styled.div`
  gap: 0px;
  padding: 0px 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .btn_wraps {
    display: flex;
    gap: 30px;
    overflow: scroll;
  }
  /* @media only screen and (max-width: 1380px) {
    .btn_wraps {
      border: 1px solid red;
    display: grid;
    grid-template-areas: " a a ";
    }
  } */
  /* @media only screen and (max-width: 1050px) {
    .btn_wraps {
    display: grid;
    grid-template-areas: " a ";
    } .images_big {
      width: 50%;
      border: 1px solid red;
      img {
        width: 300px;
      }
    }
  } */
  .img_wrap_con2 {
    padding: 5px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  } .image-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
  } .img_heim {
    height: 340px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .top_con {
    gap: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        width: 40px;
        height: 2px;
        background: var(--accent, #DBA514);
    } h4 {
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
  } .img_wrap_con {
    margin-top: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  } .img_wrap_con2 {
    margin-top: 54px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  } .imagesshadow :hover{
    box-shadow: 2px 2px 20px #afa29c;;
  } .images :hover {
    box-shadow: none;
  } .images_big :hover {
    box-shadow: none;
  } .images2 {
    margin-bottom: 42px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        margin-top: 30px;
        margin-bottom: 20px;
        width: 40px;
        height: 2px;
        background: var(--pastel, #D1BCB2);
    } h4 {
        color: var(--dark-grey, #666);
        text-align: center;
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px; 
        letter-spacing: 2px;
        text-transform: uppercase;
    }
  } .images_big {
    background: var(--white, #FFF);
    box-shadow: 0px 10px 20px 0px rgba(209, 188, 178, 0.25);
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 320px;
    max-width: 610px;
    max-height: 470px;
    width: 100%;
  } .img_heis {
    display: flex;
    height: 340px;
    
    min-width: 300px;
    img {
      width: 40vw;
      height: 340px;
      min-width: 300px;
    }
  } .image-bottom {
    padding: 5px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 275px;
    height: 364px;
  } .images {
    border: none;
    transition: transform 1.5s ease, box-shadow 0.5s ease; 
    cursor: pointer;
    background: var(--white, #FFF);
    box-shadow: 0px 10px 20px 0px rgba(209, 188, 178, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 330px;
    width: 23rem;
    height: 470px;
    padding: 5px;
  }
  .slider {
    border: 1px solid red;
    max-width: 1300px;

  }
`;
export const BtnWrap3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
    cursor: pointer;
    transition: transform 0.2s ease; 
    &:active {
      transform: scale(0.98); 
    }
    .image-bottom {
      padding: 0px;
      background: white;
      height: 340px;
      .img_hei {
        box-shadow: none;
        width: 330px;
      }
      img {
        padding: 5px;
        box-shadow: none;
      }
    }
`;
export const BtnWrap4 = styled.div`
  transition: transform 0.2s ease; 
  &:active {
      transform: scale(0.98); 
    }
`;
export const ImgCons = styled.div`
  max-width: 1470px;
  gap: 0px;
  padding: 0px 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: scroll;
  .img_wrap_con2 {
    padding: 5px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  } .image-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
  } .img_hei {
    height: 300px;
    width: 400px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .top_con {
    gap: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        width: 40px;
        height: 2px;
        background: var(--accent, #DBA514);
    } h4 {
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
  } .img_wrap_con {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  } .img_wrap_con2 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  } .imagesshadow :hover{
    box-shadow: 2px 2px 20px #afa29c;;
  } .images :hover {
    box-shadow: none;
  } .images_big :hover {
    box-shadow: none;
  } .images2 {
    margin-bottom: 42px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        margin-top: 30px;
        margin-bottom: 20px;
        width: 40px;
        height: 2px;
        background: var(--pastel, #D1BCB2);
    } h4 {
        color: var(--dark-grey, #666);
        text-align: center;
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px; 
        letter-spacing: 2px;
        text-transform: uppercase;
    }
  } .images_big {
    background: var(--white, #FFF);
    box-shadow: 0px 10px 20px 0px rgba(209, 188, 178, 0.25);
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* max-width: 670px; */
    height: 470px;
    width: 100%;
    background: var(--white, #FFF);
    padding: 5px;
  } .img_hei {
    display: flex;
    width: 270px;
    img {
      width: 100%;
      height: 340px;
      aspect-ratio: 4/3;
      padding: 5px;
    }
  } .img_heis {
    display: flex;
    img {
      width: 40vw;
      height: 340px;
    }
  } .image-bottom {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 5px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 364px;
  } .images {
    border: none;
    transition: transform 1.5s ease, box-shadow 0.5s ease; 
    cursor: pointer;
    background: var(--white, #FFF);
    box-shadow: 0px 10px 20px 0px rgba(209, 188, 178, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 320px;
    height: 470px;
    padding: 5px;
  }
`;
////// ========= multi carousel ========= !!!
export const CarouselContainer = styled.div`
background-color: transparent;
  max-width: 1300px;
  padding: 20px 5px 20px 5px;
  height: auto;
  overflow: scroll;

  @media only screen and (max-width: 680px) {
    width: 100%;
  }
`;
export const CarouselTrack = styled.div<{ slideIndex: number, slidesToShow: number}>`
  display: flex;
  height: auto;
  padding: 5px 0px;
  transition: transform 0.5s ease;
  transform: ${({ slideIndex, slidesToShow }) => `translateX(-${(slideIndex * 100) / slidesToShow}%)`};
  background-color: transparent;
  width: 100%;
`;
export const CarouselItem = styled.div`
  background-color: transparent;
  z-index: 10;
  padding: 0px 10px 0px 10px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  img {
    padding: 7px;
    height: 300px;
    max-width: 300px;
    width: 100%;    
  }
  width: 25%;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1024px) {
    width: 33.33%;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;
export const PrevButton = styled.button`
  cursor: pointer;
  display: flex;
  border: none;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background: var(--white, #FFF);
  color: #D1BDB2;
`;
export const NextButton = styled.button`
  cursor: pointer;
  display: flex;
  width: 46px;
  height: 46px;
  justify-content: center;
  align-items: center;
  color: #D1BDB2;
`;
export const DotsContainer = styled.div`
display: flex;
width: 100%;
max-width: 1275px;
justify-content: space-between;
align-items: center;
gap: 10px;
margin-top: 100px;
margin-bottom: 40px;
width: 100%;
 .bottom{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 46px;
        height: 46px;
        border-radius: 50px;
        border: 1px solid #D1BCB2;
        background: var(--white, #FFF);
        .name {
          padding: 6px 15px;
          color:  #D1BCB2;
        }
    }
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
export const Carouselimgwrapp = styled.div`
height: auto;
width: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: #FFF;

h6 {
  margin-top: 20px;
  width: 30px;
  height: 1px;
  flex-shrink: 0;
  background: var(--pastel, #D1BCB2);
} h5 {
  margin-top: 10px;
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
  margin-top: 7px;
  margin-bottom: 20px;
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

