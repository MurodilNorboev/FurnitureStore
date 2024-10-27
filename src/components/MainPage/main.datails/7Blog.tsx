import { BtnWrap3, ImgCons } from '../../styles/main'
import React, { useState, useEffect } from 'react';
import '../../styles/maine.css'

const images = [
    { img: 'https://khachsandep.vn/storage/files/Test/%C4%90o%CC%82%CC%80%20no%CC%A3%CC%82i%20tha%CC%82%CC%81t/aac615c39e6fb235159c98b57530168b79ab6377_STBEBR002GRY_UK_Ebro_Bedside_Table_Grey_ar3_2_LB02_PS.jpg', title: 'ebro bedside table', price: '$355' },
    { img: 'https://www.warehousedirectusa.com/media/catalog/product/cache/1eca4478c9d9605cf8bdef015b4759cb/5/3/53051567.jpg', title: 'Tirado chair', price: '$450' },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtd3M8jQAgfgjjdFK0kR8rcNdwV2DYL7mPSdNI_c_4bHLI_HRKkjY2_Fs9PIIVfzqcYdQ&usqp=CAU', title: 'caleido lamp', price: '$300' },
    { img: 'https://eldvarm.com/wp-content/uploads/2024/03/Eldvarm-Emma-Companion-Set-Olive-Setting-1.jpg', title: 'emmi set', price: '$500' },
    { img: 'https://optimise2.assets-servd.host/fine-elk/production/images/WEB-Bowl-table-in-situ.jpg?w=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1524830156&s=15de25c6136b372d4ecbf221ed11165b', title: 'table bedside table', price: '$400' },
    { img: 'https://www.ashleyjaykitchens.co.uk/wp-content/uploads/2022/11/2-40-Woodlea-Road-West-Tarring-Worthing-22-of-34-1-1200x801.jpg', title: 'Kitchen', price: '$350' }
  ];

const ImgComponent: React.FC = () => {




  return (
    <>
        <div className='wraps sd'>
            <h2 ></h2>
            <h4>blog</h4>
        </div>
        <ImgCons>
          <div className="img_wrap_con2">
        <BtnWrap3>
              <div className="imagesshadow">
               
                  <div className="img_hei">
                    <img
                      src="https://miro.medium.com/v2/resize:fit:1400/1*JsA3bMBCbVQhdmBeIhL8JQ.jpeg"
                      alt=""
                    />
              </div>
           
          </div>
        </BtnWrap3>

        <BtnWrap3>
          <div className="imagesshadow">
           
              <div className="img_hei">
                <img
                  src="https://www.furniture-barn.co.uk/live/blogs/office%20blog%201.jpg"
                  alt=""
                />
              </div>
          
          </div>
        </BtnWrap3>

        <BtnWrap3>
          <div className="imagesshadow">
           
              <div className="img_hei">
                <img
                  src="https://cdn11.bigcommerce.com/s-3zraqrbbb6/images/stencil/500x659/products/4011/247341/elsie-modern-apricot-right-hand-chaise-sofa-manhattan-02_01__45515.1698683585.jpg?c=1"
                  alt=""
                />
              </div>
           
          </div>
        </BtnWrap3>

        <BtnWrap3>
          <div className="imagesshadow">
           
              <div className="img_hei">
                <img
                  src="https://i.pinimg.com/originals/39/d7/83/39d78301f280f6efdc2300d386514a7a.png"
                  alt=""
                />
              </div>
            
          </div>
        </BtnWrap3>

        <BtnWrap3>
          <div className="imagesshadow">
           
              <div className="img_hei">
                <img
                  src="https://thelist.houseandgarden.com/uploads/news-pictures/3191--blog-post-image-20240815140759.jpg"
                  alt=""
                />
              </div>
           
          </div>
        </BtnWrap3>
          </div>
        </ImgCons> 
    </>
  );
};

export default ImgComponent; 






