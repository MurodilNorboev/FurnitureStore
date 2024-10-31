import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatedButton, BtnWrap } from '../../styles/navbar';
import cart from '../../../assets/cart.svg';

const Overlay = styled.div`
height: 100%;
  box-shadow: rgba(237, 228, 224, 0.25) 0px 14px 28px, 
            rgba(237, 228, 224, 0.22) 0px 10px 10px !important;
`;
const ModalContainer = styled.div`
  position: fixed;
  background: white;
  max-width: 468px;
  width: 70vw;
  height: 400px;
  top: 54px;
  padding-top: 25px;
  right: 50px;
  z-index: 1000;
`;
const BasicMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleMouseEnter = () => {
    setIsVisible(true); 
  };
  const handleMouseLeave = () => {
    setIsVisible(false); 
  };
  return (
    <div 
      style={{ position: 'relative' }} 
    >
      <BtnWrap 
        onMouseEnter={handleMouseEnter}  
        onMouseLeave={handleMouseLeave} >
        <AnimatedButton >
          <img src={cart} alt="" style={{ paddingBottom: "8px" }} />
        </AnimatedButton>
      </BtnWrap>
      {isVisible && (
        <ModalContainer 
        onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}>
            <Overlay>
              <div style={{ border: "3px solid #DBA514" }}></div>
          <h4>Popup Title</h4>
          <p>This is a modal container!</p>
            </Overlay>
        </ModalContainer>
      )}
    </div>
  );
};

export default BasicMenu;



