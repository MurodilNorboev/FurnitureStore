import { useEffect, useState } from 'react';
import '../../styles/maine.css';
import { BtnWrap3 } from '../../styles/main';

const datas = [
  {
   imgUrl: 'https://www.plantshop.me/media/product/Termin_Pot_-_plantshopme.jpg',
   imgUrl2: 'https://i.etsystatic.com/19615202/r/il/a5d4ec/5882115269/il_fullxfull.5882115269_5mf4.jpg',
   imgUrl3: 'https://anglepoise.s3.eu-west-1.amazonaws.com/wp-content/uploads/sites/2/2021/10/01084348/t75-mini-table-lamp-black-work-720x720.jpg',
  }
 ];
 interface datasT {
   imgUrl: string;
   imgUrl2: string;
   imgUrl3: string;
 }

const HotDisc = () => {
  const [ data, setdata ] = useState<datasT[] | null>(null)
  useEffect(() => {setdata(datas)})
  return (
    <div className='imgc' style={{marginTop:"150px"}}>
           <div className='wraps'>
              <h2 ></h2>
              <h4 className=''>hot discounts</h4>
           </div>
      <div className="image-slider-container">
      <div className="image-slider">

         <BtnWrap3 className='shadov ml'>
         {data?.map((val, ind) => (
           <div key={ind} className="image-item">
           <img src={val.imgUrl} alt="Image 1" />
           <h6></h6>
           <h5>-15% plant pots</h5>
           </div>
         ))}
         </BtnWrap3>

         <BtnWrap3 className='shadov'>
        {data?.map((val, ind) => (
           <div key={ind} className="image-item large-image">
           <img src={val.imgUrl2} alt="Image 1" />
           <h6></h6>
           <h5>-45% drinkware</h5>
         </div>
         ))}
         </BtnWrap3>

         <BtnWrap3 className='shadov sl'>
        {data?.map((val, ind) => (
           <div key={ind} className="image-item">
           <img src={val.imgUrl3} alt="Image 1" />
           <h6></h6>
           <h5>-20% table lamps</h5>
         </div>
         ))}
         </BtnWrap3>

      </div>
    </div>
    </div>
  );
};

export default HotDisc;