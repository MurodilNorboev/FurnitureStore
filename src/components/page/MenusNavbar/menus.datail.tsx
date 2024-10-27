import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataType } from '../../types/maintp';
import { Data } from '../../mock/mockDatail';
// import './ss.css'

const DatailMenus = () => {

  const [data, setdata] = useState<DataType[] | null>(null);
  const { id } = useParams();

  const parsent = id ? parseInt(id) : 0;
  
  const datas = data ? data.filter(val => val.id === parsent): [];
  useEffect(() => {
    setdata(Data);
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






