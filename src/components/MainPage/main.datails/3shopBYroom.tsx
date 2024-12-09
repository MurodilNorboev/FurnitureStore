import { useEffect, useState } from 'react';
import '../../styles/maine.css';
import { BtnWrap3 } from '../../styles/main';
import { DataType } from '../../types/maintp';
import { Data } from '../../mock/mockDatail';
import { Navlink } from '../../styles/LINK';

const ShopBYroom = () => {
  const [label, setLabel] = useState<DataType[] | null>(null);

  useEffect(() => {
    const filterdata = Data.filter((i: DataType) => {
      switch (i.label) {
        case "Bedroom" : return i.id === 172;
        case "Kitchen" : return i.id === 181;
        case "Bathroom" : return i.id === 190;
      }
    });
    setLabel(filterdata) 
  }, [])

  return (
   <>
     <div className='imgc'>
      <div className='wraps'>
        <h2></h2>
        <h4 className=''>shop by room</h4>
      </div>

        <div className="image-slider-container">
          <div className="image-slider">
            {label?.map((val, ind) => (
              <BtnWrap3 className="shadov" key={`${val.id} || ${val.label}`}>
                  <Navlink to={`/stol/${val.id && val.label}`}>
                    <div className={val.label === "Kitchen" ? "image-item large-image" : "image-item"}>
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
   </>
  );
};

export default ShopBYroom;


