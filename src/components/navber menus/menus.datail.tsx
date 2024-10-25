import React, { useEffect, useState } from 'react';
import { mockDatail, mockDatailType } from '../mock/navbarDatail/navbar.mock';
import '../context/ss.css'
import { useParams } from 'react-router-dom';

const DatailMenus = () => {

  const [data, setdata] = useState<mockDatailType[] | null>(null);
  const { id } = useParams();

  const parsent = id ? parseInt(id) : 0;
  
  const datas = data ? data.filter(val => val.id === parsent): [];
  useEffect(() => {
    setdata(mockDatail);
  }, []);

  return (
    <div className="modal" style={{paddingTop:"90px", border:"1px solid red"}}>
      <div className="modal-content">
        {datas.map((val) => (
          <div key={val.id}>
            <div>{val.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatailMenus;






