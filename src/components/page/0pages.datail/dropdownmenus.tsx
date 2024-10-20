import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatedButton, BtnWrap } from '../../styles/navbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface ButtonData {
  label: string;
  description: string;
}
const mockData: ButtonData[] = [
  { label: 'new in', description: 'Latest arrivals and trends.' },
  { label: 'sofas', description: 'Comfortable and stylish sofas.' },
  { label: 'tables', description: 'Various styles of tables.' },
  { label: 'beds', description: 'Cozy beds for a good night sleep.' },
  { label: 'lighting', description: 'Modern lighting options.' },
  { label: 'kitchen', description: 'Kitchen essentials and decor.' },
  { label: 'storage', description: 'Storage solutions for every space.' },
];

const ModalContainer = styled.div`
  position: fixed;
  background: white;
  width: 100vw;
  height: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  top: 20;
  left: 0;
  right: 0;
  transform: translateX(0%);
  z-index: 1000; 
`;

const Tajriba: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeData, setActiveData] = useState<ButtonData | null>(null);

  const handleMouseEnter = (data: ButtonData) => {
    setActiveData(data);
    setShowModal(true);
  };
  
  const handleMouseLeave = () => {
    setShowModal(false);
    setActiveData(null);
  };

  return (
    <div style={{ position: 'relative' }}
     onMouseLeave={handleMouseLeave}
     >
      <div style={{ display: "flex" }}>

        {mockData.map((data) => (

          <BtnWrap style={{display:"flex",alignItems:"center",marginRight:"20px",height:"35px"}}
            key={data.label}
            onMouseEnter={() => handleMouseEnter(data)}
          >
           <AnimatedButton>
            {data.label}
           <KeyboardArrowDownIcon className='icon' /> 
            </AnimatedButton> 
          </BtnWrap>

        ))}
        
      </div>

      {showModal && activeData && (
        <ModalContainer 
        onMouseEnter={() => setShowModal(true)}  
        onMouseLeave={handleMouseLeave}>
          <h4>{activeData.label}</h4>
          {/* <p>{activeData.description}</p> */}
          {/* <button onClick={() => setShowModal(false)}>Close</button> */}
        </ModalContainer> 
      )}
    </div>
  );
};

export default Tajriba;


