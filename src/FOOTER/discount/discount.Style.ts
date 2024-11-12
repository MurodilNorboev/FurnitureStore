import styled from "styled-components";

export const DiscountConataiter = styled.div`
padding-top: 180px;
padding-bottom: 100px;
display: flex;
align-items: center;
justify-content: center;
background-color: #F9F6F5;
@media screen and (max-width: 1440px) {
    .DiscountConent {
    display: flex;
    flex-direction: column;
    .DiscountRight {
        max-width: 1000px;
        width: 100%;
    } .DiscountLeft {
        max-width: 1000px;
        width: 100%;
    }
    }
}
`;
export const DiscountConent = styled.div`
display: flex;
gap: 40px;
max-width: 1280px;
margin-top: 104px;

`;
export const DiscountRight = styled.div`
width: 500px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
padding: 60px;
gap: 30px;
background: var(--white, #FFF);
`;
export const DiscountLeft = styled.div`
width: 900px;
padding: 80px;
gap: 60px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
background: var(--white, #FFF);
.lorem {
    display: flex;
    flex-direction: column;
    gap: 20px;
    h3 {
        color: var(--main, #32324D);
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 2.5px;
        text-transform: uppercase;
    } p {
        color: var(--dark-grey, #666);
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px; 
    }
}
`;



export const Tab = styled.div<{ active: boolean }>`
  font-size: 18px;
  margin-right: 20px;
  font-feature-settings: 'liga' off, 'clig' off; 
  font-size: 16px;  
  font-weight: 400;  
  letter-spacing: 2px;  
  text-transform: uppercase; 
  height: 25px;
  width: auto;
  cursor: pointer;
  padding-bottom: 5px;
  transition: color 0.3s ease, border-bottom 0.3s ease; 
  color: var(--dark, #AD8775);  

  ${(props) => props.active && `
    font-weight: bold;
    color: #32324D; 
    border-bottom: 2px solid #DBA514;
  `}
`;
export const Content = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? 'block' : 'none')};
  margin-top: 20px;
`;

