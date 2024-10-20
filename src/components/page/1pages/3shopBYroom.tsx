import { useEffect, useState } from 'react';
import '../../styles/maine.css';
import { BtnWrap3 } from '../../styles/main';

const datas = [
  {
    imgUrl: 'https://png.pngtree.com/background/20240327/original/pngtree-stunning-3d-render-of-modern-bedroom-design-with-panoramic-window-view-picture-image_8259507.jpg',
    imgUrl2: 'https://thedesignery.com/wp-content/uploads/sites/6/2024/01/natural_kitchen_design_with_plants-1024x585.jpeg',
    imgUrl3: 'https://media.bathroomtakeaway.com/blog/White%20Bathroom%20Blog%20Images/natural-white-bathroom-with-plants-feautre.webp',
  }
];

interface datasT {
  imgUrl: string;
  imgUrl2: string;
  imgUrl3: string;
}

const ShopBYroom = () => {
  const [data, setData] = useState<datasT[] | null>(null);
  useEffect(() => { setData(datas); });

  return (
   <>
     <div className='imgc'>
      <div className='wraps'>
        <h2></h2>
        <h4 className=''>shop by room</h4>
      </div>

      <div className="image-slider-container">
        <div className="image-slider">
          <BtnWrap3 className='shadov ml'>
            {data?.map((val, ind) => (
              <div key={ind} className="image-item">
                <img src={val.imgUrl} alt="Image 1" />
                <h6></h6>
                <h5>bedroom</h5>
              </div>
            ))}
          </BtnWrap3>

          <BtnWrap3 className='shadov'>
            {data?.map((val, ind) => (
              <div key={ind} className="image-item large-image">
                <img src={val.imgUrl2} alt="Image 1" />
                <h6></h6>
                <h5>kitchen</h5>
              </div>
            ))}
          </BtnWrap3>

          <BtnWrap3 className='shadov sl'>
            {data?.map((val, ind) => (
              <div key={ind} className="image-item">
                <img src={val.imgUrl3} alt="Image 1" />
                <h6></h6>
                <h5>bathroom</h5>
              </div>
            ))}
          </BtnWrap3>
        </div>
      </div>
    </div>
   </>
  );
};

export default ShopBYroom;


























// import { useEffect, useState } from 'react';
// import { BtnWrap3, ImgCons3 } from '../../styles/main'

// const datas = [
//  {
//   imgUrl: 'https://png.pngtree.com/background/20240327/original/pngtree-stunning-3d-render-of-modern-bedroom-design-with-panoramic-window-view-picture-image_8259507.jpg',
//   imgUrl2: 'https://thedesignery.com/wp-content/uploads/sites/6/2024/01/natural_kitchen_design_with_plants-1024x585.jpeg',
//   imgUrl3: 'https://media.bathroomtakeaway.com/blog/White%20Bathroom%20Blog%20Images/natural-white-bathroom-with-plants-feautre.webp',
//  }
// ];
// interface datasT {
//   imgUrl: string;
//   imgUrl2: string;
//   imgUrl3: string;
// }

// const ShopBYroom = () => {
//   const [ data, setdata ] = useState<datasT[] | null>(null)
//   useEffect(() => {setdata(datas)})

//   return (
//     <div>
//         <div className='wraps'>
//           <h2 ></h2>
//         <h4 className=''>shop by room</h4>
//         </div>
       
//         <ImgCons3 className="slider-container"> 
       
//          <div className="img_wrap_con2"> 
          
//           {data?.map((val, ind) => (
//             <div className='btn_wraps'>
//           <BtnWrap3 key={ind}>
//             <div className="imagesshadow">
//               <div className="images">
//                 <div className="img_heim">
//                    <img src={val.imgUrl} alt="" />
//                 </div>
//               </div>
//             </div>
//           </BtnWrap3>
//           <BtnWrap3 key={ind}>
//             <div className="imagesshadow">
//               <div className="images_big">
//                 <div className="img_heim">
//                 <img src={val.imgUrl2} alt="" />
//                 </div>
//               </div>
//             </div>
//           </BtnWrap3>
//           <BtnWrap3 key={ind}>
//             <div className="imagesshadow">
//               <div className="images">
//                 <div className="img_heim">
//                 <img src={val.imgUrl3} alt="" />
//                 </div>
//               </div>
//             </div>
//           </BtnWrap3>
//             </div>
//           ))}
          
//          </div>
         
//         </ImgCons3> 
        
//     </div>
//   )
// }

// export default ShopBYroom




