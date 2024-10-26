
import React, { useEffect, useState } from 'react';
import { mockDatail, mockDatailType } from '../mock/navbarDatail/navbar.mock';
import { Buttones, ContainerModalEnter, Contant, ModalContainer, ModalIMG, ModalMenus, ModalMenusWrap } from './dropodownstyle';
import { Navlink } from '../styles/LINK';

const DatailMenusID: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<mockDatailType | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setSelectedItem(mockDatail[0]); 
  }, []);

  const handleEnter = (item: mockDatailType) => {
    setSelectedItem(item);
    setShowModal(true); 
  };

  const handleClose = () => {
    setShowModal(false); 
  };

  return (
    <ContainerModalEnter onMouseLeave={handleClose}>
      <Contant className='grid2'>
        {mockDatail.map(item => (
          <Navlink to={`/ul/${item.id}`} key={item.id}>
            <Buttones
              className='grid'
              onMouseEnter={() => handleEnter(item)}  
              style={{ cursor: 'pointer', marginBottom: '10px' }} 
            >
              {item.label}
            </Buttones>
          </Navlink>
        ))}
      </Contant>

      {showModal && selectedItem && (
        <ModalContainer onMouseLeave={handleClose}>
          <ModalMenusWrap>
            <ModalMenus>
              <p>{selectedItem.description}</p>
              <ul>
                <li>{selectedItem.desc1}</li>
                <li>{selectedItem.desc2}</li>
                <li>{selectedItem.desc3}</li>
                <li>{selectedItem.desc4}</li>
                <li>{selectedItem.desc5}</li>
                <li>{selectedItem.desc6}</li>
                <li>{selectedItem.desc7}</li>
                <li>{selectedItem.desc8}</li>
              </ul>
            </ModalMenus>
            <h2>{selectedItem.label}</h2>
            <ModalIMG>
              <img src={selectedItem.imgURL} alt={selectedItem.label} style={{ width: '100px' }} />
            </ModalIMG>
          </ModalMenusWrap>
        </ModalContainer>
      )}
    </ContainerModalEnter>
  );
};

export default DatailMenusID;

















