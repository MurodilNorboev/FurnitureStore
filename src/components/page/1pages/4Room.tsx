import React, { useEffect, useState } from 'react'
import { BtnWrap3, ImgCons3 } from '../../styles/main'

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
  const [ data, setdata ] = useState<datasT[] | null>(null);
  useEffect(() => {setdata(datas)},[])
  return (
    <div>
         <ImgCons3>
         <div className="img_wrap_con2">
          {data?.map((val, ind) => (
            <>
            <BtnWrap3 key={ind}>
            <div className="imagesshadow">
              <div className="images_big">
                <div className="img_heim">
                   <img src={val.imgUrl} alt="" />
                </div>
              </div>
            </div>
          </BtnWrap3>
          <BtnWrap3 key={ind}>
            <div className="imagesshadow">
              <div className="images">
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

export default Room