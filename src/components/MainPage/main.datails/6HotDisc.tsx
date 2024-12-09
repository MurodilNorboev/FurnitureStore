import { useEffect, useState } from 'react';
import '../../styles/maine.css';
import { BtnWrap3 } from '../../styles/main';
import { Navlink } from '../../styles/LINK';
import { DataType } from '../../types/maintp';
import { Data } from '../../mock/mockDatail';


const HotDisc = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const filterData = Data.filter((i: DataType) => i.Hot === 'hot');
    setData(filterData);
  }, []);
  
  const handleFilterSort = (filter: { hot?: string, hightoLow?: boolean }) => {
    let filteredArr = [...data];
  
    if (filter.hot === 'hot') {
      filteredArr = filteredArr.filter(i => i.Hot === 'hot');
    }
  
    if (filter.hightoLow) {
      filteredArr = filteredArr.sort((a, b) => {
        const aValue = parseFloat(a.HotNum.replace('%', ''));
        const bValue = parseFloat(b.HotNum.replace('%', ''));
        return aValue - bValue;
      });
    }
  
    filteredArr = filteredArr.slice(0, 3);
  
    if (filteredArr.length !== data?.length) {
      setData(filteredArr); 
    }
  };
  
  handleFilterSort({ hot: 'hot', hightoLow: true });

  return (
    <div className='imgc' style={{marginTop:"150px"}}>
           <div className='wraps'>
              <h2 ></h2>
              <h4 className=''>hot discounts</h4>
           </div>
      <div className="image-slider-container">
        <div className="image-slider">
          {data?.map((val, ind) => (
            <BtnWrap3 className='shadov' key={`${val.id} || ${val.label}`}>
              <Navlink to={`/stul/${val.id}`}>
                <div key={ind} className={ind === 1 ? "image-item large-image" : "image-item"}>
                  <img src={val.images} alt="Image 1" />
                  <h6></h6>
                  <h5>{val.HotNum} {val.label}</h5>
                </div>
              </Navlink>
           </BtnWrap3>
           ))}
        </div>
      </div>
    </div>
  );
};

export default HotDisc;