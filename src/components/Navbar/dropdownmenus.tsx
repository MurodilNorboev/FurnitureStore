// import React, { useEffect, useState } from 'react'
// import { DataType } from '../types/maintp'
// import { Data } from '../mock/mockDatail';
// import { Buttones, ContainerModalEnter, Contant, ModalContainer, ModalIMG, ModalMenus, ModalMenusWrap } from './dropodownstyle';
// import { Navlink } from '../styles/LINK';

// const DatailMenusID = () => {
//   const [ data, setdata ] = useState<DataType[] | null>(null);
//   const [selectedItem, setSelectedItem] = useState<DataType | null>(null);
//   const [showModal, setShowModal] = useState<boolean>(false);

//   useEffect(() => {
//     const filterdata = Data.filter((i: DataType) => {
//       switch(i.label) {
//         case "new in": return i.id === 0;
//         case "sofas": return i.id === 1;
//         case "table": return i.id === 19;
//         case "beds": return i.id === 36;
//         case "linghting": return i.id === 45;
//         case "kitchen": return i.id === 73;
//         case "storage": return i.id === 118;
//         default: return false;
//       }
//     });
//     console.log(filterdata);
    
//     setdata(filterdata)
//   }, [])

//   const handleEnter = (item: DataType) => {
//     setSelectedItem(item);
//     setShowModal(true); 
//   };
//   const handleClose = () => {
//     setShowModal(false); 
//   };
//   return (
//     <ContainerModalEnter onMouseLeave={handleClose}>
//          <Contant className='grid2'>
//            {data?.map((item) => (
//           <Navlink to={`/ul/${item.id && item.label}`} key={item.id}>
//             <Buttones
//               className='grid'
//               onMouseEnter={() => handleEnter(item)}  
//               style={{ cursor: 'pointer', marginBottom: '10px' }} 
//             >
//               {item.label}
//             </Buttones>
//           </Navlink>
//         ))}
//       </Contant>

//       {showModal && selectedItem && (
//         <ModalContainer onMouseLeave={handleClose}>
//           <ModalMenusWrap>
//             <ModalMenus>
//               <p>{selectedItem.description}</p>
//               <ul>
//                 <li>{selectedItem.desc1}</li>
//                 <li>{selectedItem.desc2}</li>
//                 <li>{selectedItem.desc3}</li>
//                 <li>{selectedItem.desc4}</li>
//                 <li>{selectedItem.desc5}</li>
//                 <li>{selectedItem.desc6}</li>
//                 <li>{selectedItem.desc7}</li>
//                 <li>{selectedItem.desc8}</li>
//               </ul>
//             </ModalMenus>
//             <h2>{selectedItem.label}</h2>
//             <ModalIMG>
//               <img src={selectedItem.imgURL} alt={selectedItem.label} style={{ width: '100px' }} />
//             </ModalIMG>
//           </ModalMenusWrap>
//         </ModalContainer>
//       )}
//     </ContainerModalEnter>
//   )
// }

// export default DatailMenusID
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
              <Navlink to={`/ul/${item.id && item.label}`} key={ind}>
                <Buttones
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
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default DatailMenusID;
















