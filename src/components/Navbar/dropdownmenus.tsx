import React, { useEffect, useState } from 'react';
import { DataType } from '../types/maintp';
import { Data } from '../mock/mockDatail';
import { Buttones, ContainerModalEnter, Contant, ModalContainer, ModalIMG, ModalMenus, ModalMenusWrap } from './dropodownstyle';
import { Navlink } from '../styles/LINK';

const DatailMenusID: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<DataType | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const filterdata = Data.filter((i: DataType) => {
      switch (i.label) {
        case "new in": return i.id === 1;
        case "sofas": return i.id === 10;
        case "table": return i.id === 28;
        case "beds": return i.id === 46;
        case "linghting": return i.id === 55;
        case "kitchen": return i.id === 82;
        case "storage": return i.id === 127;
        default: return false;
      }
    });
    setData(filterdata);
  }, []);

  const handleEnter = (item: DataType) => {
    setSelectedItem(item);
    setShowModal(true); 
  };

  const handleClose = () => {
    setShowModal(false); 
  };

  return (
    <>
      {data.length > 0 ? (
        <ContainerModalEnter onMouseLeave={handleClose}>
          <Contant className="grid2">
            {data.map((item, ind) => (
              <Navlink to={`/menu-datail/${item.id && item.label}`} key={ind}>
                <Buttones
                  onClick={handleClose}
                  className="grid"
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
                 
                    <div className='textwrap' onClick={handleClose}>
                        <h5>{selectedItem.desc1}</h5>
                        <h5>{selectedItem.desc2}</h5>
                        <h5>{selectedItem.desc3}</h5>
                        <h5>{selectedItem.desc4}</h5>
                    </div>

                    <div className='textwrap' onClick={handleClose}>
                        <h5>{selectedItem.desc5}</h5>
                        <h5>{selectedItem.desc6}</h5>
                        <h5>{selectedItem.desc7}</h5>
                        <h5>{selectedItem.desc8}</h5>
                      </div>
                 
                </ModalMenus>

                <ModalIMG>
                    <Navlink to={`/stul/${selectedItem.id}`}>
                      <div className='imgContainer' onClick={handleClose}>
                          <img src={selectedItem.imgURL} alt={selectedItem.label} />
                          <h6></h6>
                          <h5>{selectedItem.label}</h5>
                          <h4>{selectedItem.cost}</h4>
                      </div>
                    </Navlink>

                    <Navlink to={`/stul/${selectedItem.id}`}>
                      <div className='imgContainer' onClick={handleClose}>
                          <img src={selectedItem.img} alt={selectedItem.label} />
                          <h6></h6>
                          <h5>{selectedItem.label}</h5>
                          <h4>{selectedItem.cost}</h4>
                      </div>
                    </Navlink>

                </ModalIMG>

              </ModalMenusWrap>
            </ModalContainer>
          )}
        </ContainerModalEnter>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default DatailMenusID;
















