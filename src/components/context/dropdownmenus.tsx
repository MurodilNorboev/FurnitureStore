import React, { useState } from 'react';
import { AnimatedButton, BtnWrap } from '../styles/navbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { mockDatail, mockDatailType } from '../mock/navbarDatail/navbar.mock';
import { ModalContainer, ModalIMG, ModalMenus, ModalMenusWrap } from './dropodownstyle';
import { Navlink } from '../styles/LINK';

const Tajriba: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeData, setActiveData] = useState<mockDatailType | null>(null);

  const handleMouseEnter = (data: mockDatailType) => {
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

        {mockDatail.map((data) => (

          <BtnWrap style={{display:"flex",alignItems:"center",marginRight:"20px",height:"35px"}}
            key={data.label}
            onMouseEnter={() => handleMouseEnter(data)}
          >
            <Navlink to={'/datail'}>
           <AnimatedButton>
            {data.label}
           <KeyboardArrowDownIcon className='icon' /> 
            </AnimatedButton> 
            </Navlink>
          </BtnWrap>

        ))}
        
      </div>

      {showModal && activeData && (
        <ModalContainer 
        onMouseEnter={() => setShowModal(true)}  
        onMouseLeave={handleMouseLeave}>
              <ModalMenusWrap>
                {activeData.description.map((item) => (
                     <p key={item.id}>
                        <ModalMenus>
                           <div>{item.desc}</div>
                        </ModalMenus>
                        
                    </p>
                 ))}
                 
                  <ModalIMG>
                    <img  src={activeData.img} alt="" />
                    <img  src={activeData.imgURL} alt="" />
                  </ModalIMG>
              </ModalMenusWrap>
        </ModalContainer> 
      )}
    </div>
  );
};

export default Tajriba;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { AnimatedButton, BtnWrap } from '../styles/navbar';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { mockDatail, mockDatailType } from '../mock/navbarDatail/navbar.mock';
// import { ModalContainer } from './dropodownstyle';

// const Tajriba: React.FC = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [activeData, setActiveData] = useState<mockDatailType | null>(null);

//   const handleMouseEnter = (data: mockDatailType) => {
//     setActiveData(data);
//     setShowModal(true);
//   };

//   const handleMouseLeave = () => {
//     setShowModal(false);
//     setActiveData(null);
//   };

//   return (
//     <div style={{ position: 'relative' }} onMouseLeave={handleMouseLeave}>
//       <div style={{ display: 'flex' }}>
//         {mockDatail.map((data) => (
//           <BtnWrap
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               marginRight: '20px',
//               height: '35px',
//             }}
//             key={data.label}
//             onMouseEnter={() => handleMouseEnter(data)}
//           >
//             <AnimatedButton>
//               {data.label}
//               <KeyboardArrowDownIcon className="icon" />
//             </AnimatedButton>
//           </BtnWrap>
//         ))}
//       </div>

//       {showModal && activeData && (
//         <ModalContainer
//           onMouseEnter={() => setShowModal(true)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <h4>{activeData.label}</h4>
//           {activeData.description.map((item) => (
//             <p key={item.id}>{item.desc}</p>
//           ))}
//         </ModalContainer>
//       )}
//     </div>
//   );
// };

// export default Tajriba;



