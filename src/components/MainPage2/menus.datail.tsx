// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// // import './ss.css'
// import { mockDatail, mockDatailType } from '../mock/navbarDatail/navbar.mock';

// const DatailMenus = () => {

//   const [data, setdata] = useState<mockDatailType[] | null>(null);
//   const { id } = useParams();

//   const parsent = id ? parseInt(id) : 0;
  
//   const datas = data ? data.filter(val => val.id === parsent): [];
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

import React, { useEffect, useState } from 'react'
import { DataType } from '../types/maintp'
import { Data } from '../mock/mockDatail';
import { useParams } from 'react-router-dom';

const MenusComponent = () => {
  const { label } = useParams();
  const [ data, setdata ] = useState<DataType[] | null>(null);

  useEffect(() => {
    const filterdata = Data.find((i: DataType) => i.label === label); // return qilmang, o'zgaruvchini qaytaradi
    setdata(filterdata ? [filterdata] : null);
  }, [label]);
  
  return (
    <div>
        <div className="modal" style={{paddingTop:"90px", border:"1px solid red"}}>
          <div className="modal-content">
            {data?.map((val) => (
              <div key={val.id && val.label && val.name}>
                <div>
                  <img src={val.images1} alt="" />
                  <img src={val.imgURL} alt="" />
                  <h2>{val.name}</h2>
                </div>
              </div>
             ))}
          </div>
        </div>
    </div>
  )
}

export default MenusComponent





