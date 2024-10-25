import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockDatail, mockDatailType } from '../../mock/navbarDatail/navbar.mock';
import { Navlink } from '../../styles/LINK';

const MenusComponent: React.FC = () => {
  const [data, setData] = useState<mockDatailType[]>([]);
  const { id } = useParams<{ id: string }>(); 
  const parsedId = id ? parseInt(id) : 0; 
  
  useEffect(() => {
    setData(mockDatail); 
  }, []);

  const filteredData = data.filter(item => item.id === parsedId);

  return (
    <div style={{ paddingTop: "90px" }}>
      <div>
        <h1>MenusComponent</h1>
        {filteredData.length === 0 ? (
          <p>No data found for this ID</p>
        ) : (
          filteredData.map((val) => (
            <Navlink to={`/stul/${val.id}`}>
              <div key={val.id}>
              <div>{val.label}</div>
              <img src={val.img} alt="" />
            </div>
            </Navlink>
          ))
        )}
      </div>
    </div>
  );
};

export default MenusComponent;

;





// const DatailMenus = () => {

//   const [data, setdata] = useState<mockDatailType[] | null>(null);
//   const { id } = useParams();

//   const parsent = id ? parseInt(id) : 0;
//   console.log(parsent);
  
//   const datas = data ? data.filter(val => val.id === parsent): [];
//   console.log(mockDatail);
//   useEffect(() => {
//     setdata(mockDatail);
//   }, []);

//   return (
//     <div className="modal" style={{paddingTop:"90px", border:"1px solid red"}}>
//       <div className="modal-content">
//         {datas.map((val) => (
//           <div key={val.id}>
//             <div>{val.label}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DatailMenus;