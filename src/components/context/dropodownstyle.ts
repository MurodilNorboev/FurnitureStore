import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  background: white;
  width: 100vw;
  height: 400px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  top: 20;
  left: 0;
  right: 0;
  transform: translateX(0%);
  z-index: 1000; 
`;
export const ModalMenusWrap = styled.div`
/* display: grid;
grid-template-areas: "a a"; */
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