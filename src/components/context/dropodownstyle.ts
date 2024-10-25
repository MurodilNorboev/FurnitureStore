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
  height: 400px;
  padding: 20px;
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
`;
export const ModalMenus = styled.div`
border: 1px solid red;
img {
    width: 40px;
    height: 42px;  
}
`;
export const ModalIMG = styled.div`
border: 1px solid rebeccapurple;
 
img {
    width: 40px;
    height: 42px;
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
padding: 2px 3px 5px 3px;
border-bottom: 2px solid red;
transition: transform 200ms ease-in-out;
&:hover {
  border-bottom: 2px solid #DBA514;
}
&:active {
  transform: scale(0.88);
}
`;