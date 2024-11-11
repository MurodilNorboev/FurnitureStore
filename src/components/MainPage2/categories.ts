import styled from "styled-components";

export const TopContainer = styled.div`
background: var(--main, #F9F6F5);
padding: 181px 0px 50px 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
.TopContent2 {
  display: none;
}
.left_right_wrapper {
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
}
@media only screen and (max-width: 1450px){
  .TopContent {
    display: none;
  }
  .TopContent2 {
    display: grid;
    grid-template-areas: "a a a a";
  }
  .SlaiderContainer {
    padding: 0px 15px;
  }
}
@media screen and (max-width: 1200px){
  .TopContent2 {
    display: grid;
    grid-template-areas: "a a a";
  }
}
@media screen and (max-width: 900px){
  .TopContent2 {
    display: grid;
    grid-template-areas: "a a ";
  }
}
@media screen and (max-width: 600px){
  .TopContent2 {
    display: grid;
    grid-template-areas: "a";
  }
}
`;
export const TopContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 40px;
.catContainer {
    background: var(--white, #FFF);
    display: flex;
    padding: 13px 10px 10px 10px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    height: 146px;
    max-width: 364px; 
    h5 {
        color: var(--dark-grey, #666);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 1px;
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
`;
export const TopContent2 = styled.div`
display: grid;
grid-template-areas: "a a a a a";
justify-content: center;
align-items: center;
margin-bottom: 40px;
.catContainer {
    background: var(--white, #FFF);
    display: flex;
    padding: 13px 10px 10px 10px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    height: 146px;
    max-width: 364px; 
    h5 {
        color: var(--dark-grey, #666);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 1px;
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
  /* @media only screen and (max-width: 1440px){
    display: grid;
    grid-template-areas: "a ";
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
  } */
`;
export const SlaiderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* @media (max-width: 1450px){
    padding: 0px 50px;
  } */
`;
export const BtnWrap2 = styled.div`
height: 150px;
display: flex;
align-items: end;
margin: 5px 5px;
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
border: none;
max-width: 280px;
width: 100vw;
`;
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  .Image {
    height: 300px;
  }
  @media (max-width: 1500px){
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr); 
    .Image {
      height: 330px;
    }
  }
  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr); 
    .Image {
      height: 320px;
    }
  }
  @media (max-width: 730px) {
    grid-template-columns: repeat(1, 1fr); 
    .Image {
      height: 330px;
    }
  }
`;
//  Sort
export const Sorts = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 80px;
width: 100%;
height: auto;
margin-bottom: 40px;
h2 {
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
@media screen  and (max-width: 1450px){
  padding: 0px 15px;
}
  @media (max-width: 1300px) {
    padding: 0px 55px;
  }
  @media screen  and (max-width: 1200px){
  padding: 0px 15px;
}
  @media (max-width: 1050px) {
    padding: 0px 105px;
  }
  @media screen  and (max-width: 900px){
  padding: 0px 20px;
}
  @media (max-width: 730px) {
    padding: 0%;
  display: grid;
  justify-content: center;
  }
`;
export const SortContainer = styled.div`
display: flex;
`;