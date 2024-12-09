import styled from "styled-components";

export const ContainerModalEnter = styled.div`
display: flex;
align-items: center;
`;
export const Contant = styled.div`
padding-top: 4px;
display: flex;
align-items: center;
gap: 20px;
height: 30px;
.grid {
  border: 2px solid transparent;
}
`;
export const ModalContainer = styled.div`
  background-color: white;
  position: fixed;
  background: white;
  width: 100vw;
  padding: 40px;
  margin-top: 20px;
  box-shadow: rgba(237, 228, 224, 0.25) 0px 14px 28px, 
  rgba(237, 228, 224, 0.22) 0px 10px 10px;
  top: 35px;
  left: 0;
  right: 0;
  transform: translateX(0%);
  z-index: 1000; 
`;
export const ModalMenusWrap = styled.div`
display: flex;
justify-content: center;
gap: 150px;

`;
export const ModalMenus = styled.div`
display: grid;
grid-template-areas: "a a";
align-items: start;
justify-content: space-between;
height: 150px;
gap: 30px;
h5 {
  cursor: pointer;
  height: 20px;
  color: #32324D;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  width: auto;
  &:active{
    color: #AD8775;
  }
  &:hover{
  border-bottom: 1px solid #AD8775;
}
}
.textwrap {
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: start;
}
`;
export const ModalIMG = styled.div`
display: flex;
align-items: start;
justify-content: center;
gap: 50px;
 .imgContainer {
  border: 0.30px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 300px;
  width: 200px;
  
 }
 img {
    padding: 5px;
    width: 200px;
    height: 200px;  
}
h6 {
  margin-top: 20px;
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
export const Buttones = styled.button`
background-color: transparent;
display: flex;
align-items: center;
width: auto;
color: var(--dark, #AD8775);
font-feature-settings: 'liga' off, 'clig' off;
font-family: Prompt;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 18px; 
letter-spacing: 2px;
height: 26px;
text-transform: uppercase;
margin-top: 9px;
/* border-bottom: 2px solid #DBA514; */
border-top: none;
border-left: none;
border-right: none;
transition: transform 200ms ease-in-out;

&:hover {
  border-bottom: 2px solid #DBA514;
}
&:active {
  transform: scale(0.88);
  border-bottom: 2px solid #DBA514;
}
transition: border-bottom 0.2s ease, transform 0.1s ease;
`;