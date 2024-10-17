import React, { useEffect, useState } from 'react'
import { BtnWrap3, ImgCons3 } from '../../styles/main'

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
  const [ data, setdata ] = useState<datasT[] | null>(null);
  useEffect(() => {setdata(datas)},[])
  return (
    <div>
        <div className='wraps'>
          <h2 ></h2>
        <h4 className=''>hot discounts</h4>
        </div>
        <ImgCons3>
         <div className="img_wrap_con2">
          {data?.map((val, ind) => (
            <>
            <BtnWrap3 key={ind}>
            <div className="imagesshadow">
              <div className="images">
                <div className="img_heim">
                   <img src={val.imgUrl} alt="" />
                </div>
              </div>
            </div>
          </BtnWrap3>
          <BtnWrap3 key={ind}>
            <div className="imagesshadow">
              <div className="images_big">
                <div className="img_heim">
                <img src={val.imgUrl2} alt="" />
                </div>
              </div>
            </div>
          </BtnWrap3>
          <BtnWrap3 key={ind}>
            <div className="imagesshadow">
              <div className="images">
                <div className="img_heim">
                <img src={val.imgUrl3} alt="" />
                </div>
              </div>
            </div>
          </BtnWrap3>
            </>
          ))}
         </div>
        </ImgCons3>
    </div>
  )
}

export default HotDisc