import React, { useEffect, useReducer, useState } from 'react';
import { DataType, Tnames } from '../types/maintp';
import { Data } from '../mock/mockDatail';
import { useParams } from 'react-router-dom';
import { IconButton } from '@mui/joy';
import { PagesName } from "../main.all_categorie/catalog.page/catalog"
import { Chescout_Top, } from "../Navbar/profile/profle.1"
import { Chescout_containerWrapper, Chescout_one, Container, Containre_Chescout_Content, Content, Datail_0_2,Datail_2, Datail_3, Iframe, Image, ImageWrapper, Lens, RightCon, Tab, ZoomedContainer } from './main.datail';
import { BtnWrap4, ButtonL } from '../styles/main';
import { CarouselContainer, CarouselItem, CarouselTrack, Carouselimgwrapp,DotsContainer } from '../styles/main';
import { BtnWrap } from '../styles/navbar';
import { datatest, datatestT, initialState, reducer } from './main.mock.types';
import car from '../../assets/car.svg';
import star from '../../assets/Star.svg'
import star1 from '../../assets/Star (1).svg'
import love from '../../assets/love.svg'
import miniimg1 from '../../assets/stul.webp'
import miniimg2 from '../../assets/stul2.jpg'
import miniimg3 from '../../assets/stul3.webp'
import home from '../../assets/home.svg'
import circle3 from '../../assets/leftwhite.svg';

//{ name }
const DatailNavbarFilterComponent: React.FC<Tnames> = ({ name }) => {
  const [ datas, setdatas ] = useState<datatestT[] | null>(null);
  useEffect(() => {setdatas(datatest)},[])
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(4); 
  const [isHovered, setIsHovered] = useState<boolean>(false); //// ^ carouselninki !

  /// carousel aylanishi 
  const totalSlides = 8; 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 550) {
        setSlidesToShow(1); 
      } else if (window.innerWidth <= 768) {
        setSlidesToShow(2); 
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3); 
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  //// carousel hover ishlashi !!!!!
  useEffect(() => {
    if (isHovered) return; 
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); 
    return () => clearInterval(intervalId); 
  }, [isHovered, slideIndex]);
  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % (totalSlides - slidesToShow + 1));
  };
  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides - slidesToShow + 1) % (totalSlides - slidesToShow + 1));
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [activeTab, setActiveTab] = useState(1);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isZoomEnabled, setIsZoomEnabled] = useState(true); 
  const [data, setData] = useState<DataType[]>([]);
  const { id } = useParams();
  const parsent = id ? parseInt(id) : 0;

  useEffect(() => {
    const filterData = Data.filter(i => i.id === parsent);
    setData(filterData);

    const checkZoomStatus = () => {
      if (window.innerWidth > 1200) {
        setIsZoomEnabled(true); 
      } else {
        setIsZoomEnabled(false); 
      }
    };
    window.addEventListener('resize', checkZoomStatus);
    checkZoomStatus();
    return () => {
      window.removeEventListener('resize', checkZoomStatus);
    };
  }, [id]);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: Math.max(50, Math.min(e.clientX - left, 550)), 
      y: Math.max(50, Math.min(e.clientY - top, 450)),  
    });
  };
  
  return (
    <Container>

      <div style={{display:"flex",width:"100%",justifyContent:"center"}}>
         <PagesName>
           <h3>Home</h3>
             <img src={home} alt="Home icon" />
               <h3>{data.map((val) => (<h3 key={val.id}>{val.label}</h3>))}</h3>
             <img src={home} alt="Home icon" />
           <h4>{name}</h4>
         </PagesName>
      </div>

      {/* <div className='wrapper'>
        <div className='imgwrap1'>
        {data.map((val, ind) => (
          <div key={ind} className="imgswrap">
            <Tab active={activeTab === 1} onMouseEnter={() => setActiveTab(1)} className="imgs">
              <img src={val.imgURL} alt={`Image for Tab 1`} />
            </Tab>
            <Tab active={activeTab === 2} onMouseEnter={() => setActiveTab(2)} className="imgs">
              <img src={val.img} alt={`Image for Tab 2`} />
            </Tab>
            <Tab active={activeTab === 3} onMouseEnter={() => setActiveTab(3)} className="imgs">
              <img src={val.images3} alt={`Image for Tab 3`} />
            </Tab>
            <Tab active={activeTab === 4} onMouseEnter={() => setActiveTab(4)} className="imgs">
              <img src={val.images4} alt={`Image for Tab 4`} />
            </Tab>
            <Tab active={activeTab === 5} onMouseEnter={() => setActiveTab(5)} className="imgs">
              <Iframe 
                src={val.videos1} 
                title={`Video for Tab 5`} 
                style={{ pointerEvents: 'none' }} 
              />
            </Tab>
          </div>
        ))}
        <div className="imageWrapperWrap">
           <ImageWrapper
             onMouseEnter={() => setIsHovering(true)}
             onMouseLeave={() => setIsHovering(false)}
             onMouseMove={handleMouseMove}
           >
             {data.map((val, ind) => (
               <div key={ind}>
                 {activeTab === 1 && val.imgURL && (
                   <Image src={val.imgURL} alt="Zoomable" width={600} height={500} />
                 )}
                 {activeTab === 2 && val.img && (
                   <Image src={val.img} alt="Zoomable" width={600} height={500} />
                 )}
                 {activeTab === 3 && val.images3 && (
                   <Image src={val.images3} alt="Zoomable" width={600} height={500} />
                 )}
                 {activeTab === 4 && val.images4 && (
                   <Image src={val.images4} alt="Zoomable" width={600} height={500} />
                 )}
                 {activeTab === 5 && val.videos1 && (
                   <Iframe src={val.videos1} title="Zoomable" width={600} height={500} />
                 )}
               </div>
             ))}
             
             {isHovering && activeTab !== 5 && isZoomEnabled && <Lens x={cursorPos.x} y={cursorPos.y} />} 
           </ImageWrapper>
        </div>
        </div>

        <div className="zoomConWrap">
          {isHovering && data.map((val, ind) => (
            <Content className='Content' key={val.id} active={activeTab === 1 || activeTab === 2 || activeTab === 3 || activeTab === 4}>
              {activeTab === 1 && val.imgURL && isZoomEnabled && (
                <ZoomedContainer x={cursorPos.x} y={cursorPos.y} bgImage={val.imgURL} className='ZoomedContainer' />
              )}
              {activeTab === 2 && val.img && isZoomEnabled && (
                <ZoomedContainer x={cursorPos.x} y={cursorPos.y} bgImage={val.img} className='ZoomedContainer' />
              )}
              {activeTab === 3 && val.images3 && isZoomEnabled && (
                <ZoomedContainer x={cursorPos.x} y={cursorPos.y} bgImage={val.images3} className='ZoomedContainer' />
              )}
              {activeTab === 4 && val.images4 && isZoomEnabled && (
                <ZoomedContainer x={cursorPos.x} y={cursorPos.y} bgImage={val.images4} className='ZoomedContainer' />
              )}
            </Content>
          ))}
        </div>

        <RightCon className='RightCon'>
            <div className="right_cart">
              <div className='wrap_text'>
                <h6></h6>
                <h3>cesil micro velvet chair</h3>
               <div className='str'>
                 <img src={star1} alt="" />
                 <img src={star1} alt="" /> 
                 <img src={star1} alt="" /> 
                 <img src={star1} alt="" /> 
                 <img src={star} alt="" /> 
                 <h5>3 reviews</h5>
                 </div>
              </div>
            </div>

            <div className="right_cart">
              <div className='midl_wrap'>
                <div className="div1">
                  <div className='h2'>Color</div>
                  <div className='imgwrapmini'>
                    <img src={miniimg1} alt="" />
                    <img src={miniimg2} alt="" />
                    <img src={miniimg3} alt="" />
                  </div>
                </div>
                <div className="div1">
                  <div className='h2'>Dimensions</div>
                  <div className='img_wrap_colorCon'>
                    <div className='texte1'>W:75 х H:82 cm</div>
                    <div className='texte2'>W:120 х H:100 cm</div>
                  </div>
                </div>
                <div className="div1">
                  <div className='h2'>Quantity</div>
                  <div className='img_wrap_colorCon'>
                    <IconButton className='buttons' onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-</IconButton>
                    <p className='p_count'>{state.count}</p>
                    <IconButton className='buttons' onClick={() => dispatch({ type: 'increment', payload: 1 })}>+</IconButton>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="right_cart">
              <div className="bottom_Con bottom2">
                <div className='cost'>
                  {data?.map((val) => (<div key={val.id} className='h3'>${val.cost}</div>))}
                  <div className='h2'>$675</div>
                </div>
                <div className='row_line'></div>
                <div className="cost">
                  <div className='car_wrep'>
                    <img src={car} alt="car" />
                    <h3>Free delivery from $1,000</h3>
                  </div>
                </div>
              </div>

              <div className="bottom_Con">
                <div className='cons_btn'><button>Add to cart</button></div>
                <div className='cons_btn_like'>
                  <button><img src={love} alt="" /></button>
                </div>
              </div>
            </div>

        </RightCon>
      </div> */}

      <Datail_0_2>
        <Chescout_containerWrapper style={{maxWidth:"1270px"}}  className="Chescout_containerWrapper">
          <Containre_Chescout_Content className="Containre_Chescout_Content">
              <Chescout_Top className="Chescout_Top top">

                  <Chescout_one className="Chescout_one">
                      <div className="LasName_Con" style={{marginBottom:"10px"}}>
                      <div className="inputs">
                             <h4 className='top'>description</h4>
                          </div>
                      </div>
                      <h1 className='h1'>
                      The chair uses a safe, environmentally friendly filler, the special properties of which make the furniture not only soft and comfortable, but also orthopedic. Relaxes the muscles of the back and waist, adjusts to your body. <br />
                      Made of mat - the most popular furniture fabric. Pleasant to the touch and at the same time durable and reliable fabric. Large selection of color shades.
                      Prepayment on a bank card. Delivery by mail or by courier. Delivery of goods within 16 days, as goods are only by request.
                      </h1>
                  </Chescout_one>

                  <Chescout_one className="Chescout_one">
                      <div className="LasName_Con" style={{marginBottom:"10px"}}>
                          <div className="inputs">
                             <h4 className='top'>dimensions</h4>
                          </div>
                      </div>
                      <div className="LasName_Con">
                      <div className="inputs">
                             <h5 className='top'>Height (cm)</h5>
                             <h6>82</h6>
                          </div>
                      </div>
                      <div className="LasName_Con">
                          <div className="inputs">
                             <h5 className='top'>Width (cm)</h5>
                             <h6>75</h6>
                          </div>
                      </div>
                      <div className="LasName_Con">
                          <div className="inputs">
                             <h5 className='top'>Arm dimensions (hwd)</h5>
                           <h6>53 x 7 x 69 cm</h6>
                          </div>
                      </div>
                      <div className="LasName_Con">
                          <div className="inputs">
                             <h5 className='top'>Seat dimensions (hwd)</h5>
                           <h6>44 x 56 x 56 cm</h6>
                          </div>
                      </div>
                      <div className="LasName_Con">
                          <div className="inputs">
                             <h5 className='top'>Leg height (cm)</h5>
                           <h6>23</h6>
                          </div>
                      </div>
                      <div className="LasName_Con">
                          <div className="inputs">
                             <h5 className='top'>Packaging dimensions</h5>
                           <h6>1:H86 x W79 x D84 cm</h6>
                          </div>
                      </div>
                      <div className="LasName_Con">
                           <div className="inputs">
                             <h5 className='top'>Weight (kg)</h5>
                           <h6>17</h6>
                          </div>
                      </div>
                  </Chescout_one>

                  <Chescout_one className="Chescout_one">
                      <div className="LasName_Con" style={{marginBottom:"10px"}}>
                          <div className="inputs">
                             <h4 className='top'>details</h4>
                          </div>
                      </div>
                      <div className="LasName_Con">
                          <div className="inputs">
                             <h5 className='top'>Assembly</h5>
                           <h6>No assembly required</h6>
                          </div>
                      </div>
                      <div className="LasName_Con">
                          <div className="inputs">
                             <h5 className='top'>Number of seats</h5>
                           <h6>1 seater</h6>
                          </div>
                      </div>
                      <div className="LasName_Con">
                          <div className="inputs">
                             <h5 className='top'>Caring instructions</h5>
                           <h6>Professional cleaning only</h6>
                          </div>
                      </div>
                      <div className="LasName_Con">
                          <div className="inputs">
                             <h5 className='top'>Material</h5>
                           <h6>Micro velvet, wood</h6>
                          </div>
                      </div>
                      <div className="LasName_Con">
                          <div className="inputs">
                             <h5 className='top'>Assembly</h5>
                           <h6>No assembly required</h6>
                          </div>
                      </div>
                      <div className="LasName_Con">
                          <div className="inputs">
                             <h5 className='top'>Caring instructions</h5>
                           <h6>Professional cleaning only</h6>
                          </div>
                      </div>
                  </Chescout_one>
          
              </Chescout_Top>
          </Containre_Chescout_Content>
        </Chescout_containerWrapper>
      </Datail_0_2>

      <Datail_2>
           <DotsContainer className='DotsContainer' style={{marginTop:"0px"}}>
             <div><h2>you may also like</h2></div>
                <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
   
                <div className="bottom">
               <IconButton onClick={prevSlide} className='name'>
                 ❮
               </IconButton>
               </div>
   
               <div className="bottom">
               <IconButton onClick={nextSlide} className='name'>
                 ❯
               </IconButton>
               </div>
                </div>
           </DotsContainer>
           <CarouselContainer 
           onMouseEnter={() => setIsHovered(true)} 
           onMouseLeave={() => setIsHovered(false)} 
         >
           <CarouselTrack $slideIndex={slideIndex} $slidesToShow={slidesToShow} className='CarouselTrack'>
             <>
           {datas?.map((val, ind) => (
               <CarouselItem key={ind}>
                 <BtnWrap4>
                 <Carouselimgwrapp>
                  
                  <img src={val.img} alt="" />
                   <h6></h6>
                   <h5>{val.text}</h5>
                   <div style={{display:"flex",alignItems:"center"}}>
                     <h4>{val.cost}</h4>
                     <h3></h3>
                   </div>
                 
                 </Carouselimgwrapp>
                 </BtnWrap4>
               </CarouselItem>
           ))} 
           </>
           </CarouselTrack>
             
         </CarouselContainer>
         <div style={{marginBottom:"30px",marginTop:"30px"}}>
           <BtnWrap>
          <ButtonL>
          see more products <img src={circle3} alt="" />
          </ButtonL>
          </BtnWrap>
         </div>
      </Datail_2>

      <Datail_3>
        <div className="datail3_menus a">
            <div className='wrap_text'>
              <h6></h6>
              <h3>customer reviews</h3>
            </div>
            <h6></h6>
            <div className="wrap_text wrap">
              <h2>
                 There is no any customer review of this product. Be the first <br /> and add your review
              </h2>
            </div>
            <h6></h6>
        </div>

        <div className="datail3_menus b">
        <div className='wrap_text'>
              <h6></h6>
              <h3>add review</h3>
        </div>

        <div className='str'>
               <img src={star} alt="" /> 
               <img src={star} alt="" /> 
               <img src={star} alt="" /> 
               <img src={star} alt="" /> 
               <img src={star} alt="" /> 
               <h5> –  your rate</h5>
        </div>

        <div className="add review">
          <input type="text" placeholder='Your review' className="inputt tt" />
          <input type="text" placeholder='Name' className="inputt" />
          <input type="text" placeholder='Email' className="inputt" />
        </div>

        <div className="btnwrap">
          <button>post review <img src={circle3} alt="" /></button>
        </div>

        </div>
      </Datail_3>
    </Container>
  );
};

export default DatailNavbarFilterComponent