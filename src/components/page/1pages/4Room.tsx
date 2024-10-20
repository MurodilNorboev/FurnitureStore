import { useEffect, useState } from 'react';
import '../../styles/maine.css';
import { BtnWrap3 } from '../../styles/main';

const datas = [
  {
   imgUrl: 'https://server.orientbell.com/media/850x450_Pix_4_1_.jpg',
   imgUrl2: 'https://static.vecteezy.com/system/resources/previews/023/132/472/non_2x/frame-over-white-cabinet-with-plant-next-to-grey-sofa-in-minimalist-living-room-interior-ai-generated-photo.jpg',
   imgUrl3: 'https://lifebylee.com/wp-content/uploads/2019/01/walmart-guestroom-3.jpg',
  }
 ];
 interface datasT {
   imgUrl: string;
   imgUrl2: string;
   imgUrl3: string;
 }

const Room = () => {
  const [ data, setdata ] = useState<datasT[] | null>(null)
  useEffect(() => {setdata(datas)})
  return (
    <div className='imgc' style={{marginTop:"50px"}}>
      <div className="image-slider-container">
      <div className="image-slider">

         <BtnWrap3 className='shadov ml'>
        {data?.map((val, ind) => (
           <div key={ind} className="image-item large-image">
           <img src={val.imgUrl2} alt="Image 1" />
           <h6></h6>
           <h5>living room</h5>
         </div>
         ))}
         </BtnWrap3>

         <BtnWrap3 className='shadov'>
         {data?.map((val, ind) => (
           <div key={ind} className="image-item">
           <img src={val.imgUrl} alt="Image 1" />
           <h6></h6>
           <h5>dining room</h5>
           </div>
         ))}
         </BtnWrap3>

         <BtnWrap3 className='shadov sl'>
        {data?.map((val, ind) => (
           <div key={ind} className="image-item">
           <img src={val.imgUrl3} alt="Image 1" />
           <h6></h6>
           <h5>playroom</h5>
         </div>
         ))}
         </BtnWrap3>

      </div>
    </div>
    </div>
  );
};

export default Room;