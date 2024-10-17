import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatedButton, BtnWrap } from '../../styles/navbar';
import cart from '../../../assets/cart.svg'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
`;

const ModalContainer = styled.div`
  position: fixed;
  background: white;
  width: 468px;
  height: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  top: 80px;
  left: 10;
  right: 0;
  margin-right: 50px;
  z-index: 1000;
`;

const BasicMenu: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal); // Modal ochilishi/yopilishi holatini almashtirish
  };

  // Modal tashqarisiga bosilganda uni yopish uchun funksiyani yaratamiz
  const handleOverlayClick = () => {
    setShowModal(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <BtnWrap onClick={handleClick}>
        <AnimatedButton><img src={cart} alt="" style={{paddingBottom:"8px"}}/></AnimatedButton>
      </BtnWrap>

      {showModal && (
        <Overlay onClick={handleOverlayClick}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <div style={{border:"3px solid  #DBA514"}}></div>
            <button onClick={() => setShowModal(false)} style={{display:"flex",width:"100%",justifyContent:"end",paddingRight:"10px"}}>X</button>
            <h4>Popup Title</h4>
            <p>This is a modal container!</p>
          </ModalContainer>
        </Overlay>
      )}
    </div>
  );
};

export default BasicMenu;



