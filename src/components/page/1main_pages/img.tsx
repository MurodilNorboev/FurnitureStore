import { BtnWrap3, ButtonL,  ImgConWrap, ImgCons, ImgCons3, Scrole } from '../../styles/main'
import React, { useState, useEffect } from 'react';
import circle from '../../../assets/left.svg';
import circle2 from '../../../assets/right.svg';
import circle3 from '../../../assets/leftwhite.svg';
import { ButtonContainer, Carousel, CarouselContainers, CarouselItems, CarouselWrappers } from '../../styles/main';
import { BtnWrap } from '../../styles/navbar';
import { IconButton } from '@mui/material';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); 

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000); 

    return () => clearInterval(interval); 
  }, [currentIndex]);
  useEffect(() => {
    setTranslate(-currentIndex * 25); 
  }, [currentIndex]);
  const goToNext = () => {
    if (currentIndex < images.length - 4) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); 
    }
  };
  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 4); 
    }
  };
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index); 
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
        <div className='wraps'>
          <h2 ></h2>
        <h4 className=''>shop by room</h4>
        </div>
        <ImgCons3>

         <div className="img_wrap_con2">
            <BtnWrap3>
              <div className="imagesshadow">
                <div className="images">
                  <div className="img_heim">
                  <img src="https://png.pngtree.com/background/20240327/original/pngtree-stunning-3d-render-of-modern-bedroom-design-with-panoramic-window-view-picture-image_8259507.jpg" alt="" />
                  </div>
                </div>
              </div>
            </BtnWrap3>
          
            <BtnWrap3>
              <div className="imagesshadow">
                <div className="images_big">
                  <div className="img_heis">
                  <img src="https://thedesignery.com/wp-content/uploads/sites/6/2024/01/natural_kitchen_design_with_plants-1024x585.jpeg" alt="" />
                  </div>
                </div>
              </div>
            </BtnWrap3>
          
            <BtnWrap3>
              <div className="imagesshadow">
                <div className="images">
                  <div className="img_heim">
                  <img src="https://media.bathroomtakeaway.com/blog/White%20Bathroom%20Blog%20Images/natural-white-bathroom-with-plants-feautre.webp" alt="" />
                  </div>
                </div>
              </div>
            </BtnWrap3>
         </div>
        </ImgCons3> 

            {/* ////// */}
        <ImgCons3>

         <div className="img_wrap_con2">

            <BtnWrap3>
              <div className="imagesshadow">
                <div className="images_big">
                  <div className="img_heis">
                  <img src="https://server.orientbell.com/media/850x450_Pix_4_1_.jpg" alt="" />
                  </div>
                </div>
              </div>
            </BtnWrap3>

            <BtnWrap3>
              <div className="imagesshadow">
                <div className="images">
                  <div className="img_heim">
                  <img src="https://static.vecteezy.com/system/resources/previews/023/132/472/non_2x/frame-over-white-cabinet-with-plant-next-to-grey-sofa-in-minimalist-living-room-interior-ai-generated-photo.jpg" alt="" />
                  </div>
                </div>
              </div>
            </BtnWrap3>
          
            <BtnWrap3>
              <div className="imagesshadow">
                <div className="images">
                  <div className="img_heim">
                  <img src="https://lifebylee.com/wp-content/uploads/2019/01/walmart-guestroom-3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </BtnWrap3>
         </div>
        </ImgCons3>

            {/* ////// */}
      <ButtonContainer>
      <div className="bottom"><IconButton onClick={goToPrev}><img src={circle} alt=""  className='btns' /></IconButton></div>
      <div className="bottom"> <IconButton onClick={goToNext}><img src={circle2} alt="" className='btns' /></IconButton></div>
      </ButtonContainer>

          {/* ////// */}
      <Carousel>
        <CarouselContainers>
          <CarouselWrappers translate={translate}>
                      {images.map((item, index) => (
              <CarouselItems
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)', 
                  transition: 'transform 0.3s ease-in-out', 
                  zIndex:99,
                }} 
              >
                <img src={item.img} alt={item.title} 
                style={{
                    filter: hoveredIndex !== null && hoveredIndex !== index ? 'blur(3px)' : 'none',
                    transition: 'filter 0.3s ease-in-out' // Rasm xiralashishi
                  }}/>
                <div className="bottom">
                  <div className="images2">
                    {/* <h2>{item.title}</h2> */}
                    <h4>{item.title}</h4>
                    <h6>{item.price}</h6>
                  </div>
                </div>
              </CarouselItems>
            ))}
          </CarouselWrappers>
        </CarouselContainers>
      </Carousel>

          {/* ////// */}
        <div style={{marginBottom:"30px",margin:"0px 0px 130px 0px"}}>
        <BtnWrap>
       <ButtonL>
       see more products <img src={circle3} alt="" />
       </ButtonL>
       </BtnWrap>
        </div>

        {/* ////// */}
        <div className='wraps'>
          <h2 ></h2>
        <h4 className=''>hot discounts</h4>
        </div>
        <ImgCons3>
         <div className="img_wrap_con2">
            <BtnWrap3>
              <div className="imagesshadow">
                <div className="images">
                  <div className="img_heim">
                  <img src="https://www.plantshop.me/media/product/Termin_Pot_-_plantshopme.jpg" alt="" />
                  </div>
                </div>
              </div>
            </BtnWrap3>
          
            <BtnWrap3>
              <div className="imagesshadow">
                <div className="images_big">
                  <div className="img_heis">
                  <img src="https://i.etsystatic.com/19615202/r/il/a5d4ec/5882115269/il_fullxfull.5882115269_5mf4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </BtnWrap3>
          
            <BtnWrap3>
              <div className="imagesshadow">
                <div className="images">
                  <div className="img_heim">
                  <img src="https://anglepoise.s3.eu-west-1.amazonaws.com/wp-content/uploads/sites/2/2021/10/01084348/t75-mini-table-lamp-black-work-720x720.jpg" alt="" />
                  </div>
                </div>
              </div>
            </BtnWrap3>
         </div>
        </ImgCons3> 

          {/* ///// */}
        <div className='wraps'>
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






