import styled from "styled-components";

export const AboutContainer = styled.div`
padding-top: 180px;
display: flex;
flex-direction: column;
align-items: center;
gap: 100px;
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
    }

}
`;
export const AboutContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 54px;

.about {
    max-width: 1290px;
    width: 100%;
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
} .imgwrap {
    background-color: #FFF;
} img {
    background-color: #FFF;
    max-width: 1290px;
    max-height: 700px;
    width: 100vw;
    height: 100%;
    padding: 10px;
}

.wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
} .catalog {
    display: flex;
    justify-content: center;
    gap: 10px;
} .menus {
    background-color: #FFF;
    max-width: 312px;
    width: 100vw;
    max-height: 140px;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 5px;
    img {
        width: 140px;
        height: 120px;
        flex-shrink: 0;
    } h6 {
        color: var(--main, #32324D);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 130% */
        letter-spacing: 1px;
        text-transform: uppercase;
    }
}
`;
export const AboutContent2 = styled.div`
display: flex;
justify-content: center;
align-content: center;
max-width: 1290px;
gap: 40px;

.textCon {
    display: flex;
    h2 {
        width: 400px;
        color: var(--main, #32324D);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 38px; /* 126.667% */
        letter-spacing: 3px;
        text-transform: uppercase;
    } h3 {
        width: 400px;
        color: var(--dark-grey, #666);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 155.556% */
    }
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
} p {
    max-width: 900px;
    color: var(--dark-grey, #666);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
}
`;
/// carousel 
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
    max-width: 380px;
    width: 100%;    
  }
  width: 33.33%; 

  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);  // Yarm-shaffof fon
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;  // Modalni yuqori qilish
`;
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-height: 650px;
  max-width: 1200px;
  width: 100vw;
  height: auto;
  img {
    max-width: 1200px;
    padding: 10px;
    width: 100%;
    max-height: 650px;
  }
`;
export const CloseButton = styled.button`
padding: 5px 11px;
margin-top: -50px;
  position: absolute;
  background-color: transparent;
  border-radius: 50px;
  border: 1px solid var(--pastel, #D1BCB2);
  background: var(--white, #FFF);
  display: flex;
  border: none;
  cursor: pointer;
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
`;
