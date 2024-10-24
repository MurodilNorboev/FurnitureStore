import { useEffect, useState } from "react";
import { mockDatail, mockDatailType } from "../mock/navbarDatail/navbar.mock";
import { useParams } from "react-router-dom";
import { Navlink } from "../styles/LINK";

const DatailMenusID = () => {
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState<mockDatailType | null>(null);

    useEffect(() => {
        console.log("Current ID:", id); // ID ni konsolga chiqarish
        const alldatail = mockDatail.find(item => item.id === Number(id));
        console.log("Found Data:", alldatail); // Topilgan ma'lumotlarni konsolga chiqarish
        setData(alldatail || null);
    }, [id]);

    return (
        <div style={{ paddingTop: "90px" }}>
            {data ? (
                <>
                    <h1>{data.label}</h1>
                    <Navlink to={`/datail/${data.id}`}>
                        <img src={data.img} alt={data.label} />
                    </Navlink>
                    <img src={data.imgURL} alt={data.label} />
                    <ul>
                        <li>{data.desc1}</li>
                        <li>{data.desc2}</li>
                        <li>{data.desc3}</li>
                        <li>{data.desc4}</li>
                        <li>{data.desc5}</li>
                        <li>{data.desc6}</li>
                        {/* {data.desc7 && <li>{data.desc7}</li>}
                        {data.desc8 && <li>{data.desc8}</li>} */}
                    </ul>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default DatailMenusID;





// import React, { useEffect, useState } from 'react';
// import { AnimatedButton, BtnWrap } from '../styles/navbar';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { mockDatail, mockDatailType } from '../mock/navbarDatail/navbar.mock';
// import { ModalContainer, ModalIMG, ModalMenus, ModalMenusWrap } from './dropodownstyle';
// import { Navlink } from '../styles/LINK';

// const Tajriba: React.FC = () => {

//   const [showModal, setShowModal] = useState(false);
//   const [activeData, setActiveData] = useState<mockDatailType[] | null>(null); 
//   useEffect(() => {setActiveData(mockDatail)}, [])
  
//   const handleMouseEnter = (data: mockDatailType[]) => {
//     setActiveData(data);
//     setShowModal(true);
//   };
  
//   const handleMouseLeave = () => {
//     setActiveData(null);
//     setShowModal(false);
//   };

//   return (
//     <div style={{ position: 'relative' }}
//      onMouseLeave={handleMouseLeave}
//      >
//       <div style={{ display: "flex" }}>

//         {mockDatail.map((data) => (
//           <BtnWrap style={{display:"flex",alignItems:"center",marginRight:"20px",height:"35px"}}
//             key={data.label}
//             onMouseEnter={() => handleMouseEnter(data.id)} 
//           >
//             <Navlink to={`/datail/${data.id}`}>
//            <AnimatedButton>
//             {data.label}
//            <KeyboardArrowDownIcon className='icon' /> 
//             </AnimatedButton> 
//             </Navlink>
//           </BtnWrap>
//         ))}
        
//       </div>

//       {showModal && activeData && (
//         <ModalContainer 
//         onMouseEnter={() => setShowModal(true)}  
//         >
//               <ModalMenusWrap>
//                 {activeData.description.map((val) => ( // Corrected array usage
//                      <p key={val.id}>
//                         <ModalMenus>
//                            <div>{val.desc}</div>
//                         </ModalMenus>
//                     </p>
//                  ))}
                 
//                   <ModalIMG>
//                     <div>
//                         <img src={activeData.img} alt="" /> {/* Use correct img */}
//                     </div>
//                     <div>
//                         <img src={activeData.imgURL} alt="" /> {/* Use correct imgURL */}
//                     </div>
//                   </ModalIMG>
//               </ModalMenusWrap>
//         </ModalContainer> 
//       )}
//     </div>
//   );
// };

// export default Tajriba;







