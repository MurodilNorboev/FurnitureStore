import { useEffect, useState } from 'react';
import '../../styles/maine.css';
import { BtnWrap3 } from '../../styles/main';
import { Navlink } from '../../styles/LINK';
import { DataType } from '../../types/maintp';
import { Data } from '../../mock/mockDatail';


const Room = () => {
 const [data, setData] = useState<DataType[] | null>(null);

  useEffect(() => {
    const filterData = Data.filter((i: DataType) => {
      switch (i.label) {
        case "Living Room": return i.id === 199;
        case "Dining Room": return i.id === 208;
        case "Play Room": return i.id === 217;
      }
    });
    setData(filterData)
  }, [])
  return (
    <div className='imgc' style={{marginTop:"50px"}}>
      <div className="image-slider-container">
        <div className="image-slider">
          {data?.map((val, ind) => (
            <BtnWrap3 className='shadov ml' key={`${val.id} || ${val.label}`}>
              <Navlink to={`/stol/${val.id && val.label}`}>
                  <div key={ind} className={val.label === "Living Room" ? "image-item large-image" : "image-item"}>
                     <img src={val.images} alt="Image 1" />
                     <h6></h6>
                     <h5>{val.label}</h5>
                  </div>
              </Navlink>
            </BtnWrap3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Room;