import './testse.css'; 

import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import { Data } from '../mock/mockDatail';
import { DataType } from '../types/maintp';
import { useParams } from 'react-router-dom';
import { IconButton } from '@mui/joy';
import car from '../../assets/car.svg';
import star from '../../assets/Star.svg'
import star1 from '../../assets/Star (1).svg'
import love from '../../assets/love.svg'
import miniimg1 from '../../assets/stul.webp'
import miniimg2 from '../../assets/stul2.jpg'
import miniimg3 from '../../assets/stul3.webp'
import home from '../../assets/home.svg'
import { PagesName } from '../MainPage2/catalog.page/catalog';
import { Chescout_Top, } from "../Navbar/profile/profle.1"
import { Chescout_containerWrapper, Chescout_one, Containre_Chescout_Content, Datail_0_2, Datail_2, Datail_3 } from '../filterDatail/main.datail';
import { BtnWrap4, ButtonL } from '../styles/main';
import { CarouselContainer, CarouselItem, CarouselTrack, Carouselimgwrapp,DotsContainer } from '../styles/main';
import circle3 from '../../assets/leftwhite.svg';
import { BtnWrap } from '../styles/navbar';

const Container = styled.div`
  padding-top: 180px;
  display: flex;
  flex-direction: column;
  background-color: #F9F6F5;
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 80px;
  } .zoomConWrap {
    position: absolute;
    padding-left: 425px;
    
  } .imgwrap1 {
    display: flex;
  } .imgswrap {
    height: 100vw;
    width: auto;
    max-width: 645px;
    min-width: 130px;
    display: flex;
    max-height: 500px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  } .imgs {
    width: 90px;
    height: 90px;
    img, iframe {
      max-width: 85px;
      max-height: 85px;
      height: 100vw;
      width: 100vw;
    }
  } .imageWrapperWrap {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 615px;  
    max-height: 515px;
    height: 100vw;
    width: 100vw;
    background-color: #FFF;
  }
  @media screen and (max-width: 1440px) {
    .imgwrap1 {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    } .imgswrap {
      display: grid;
      grid-template-areas: "a a a a a";
      height: 130px;
      width: 100vw;
      overflow: scroll;
      padding: 0px 10px;
    } .zoomConWrap {
    position: absolute;
    padding-left: 320px;
  }
  }
  @media screen and (max-width: 1200px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    } .RightCon {
      max-width: 600px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media screen and (max-width: 550px) {
    .right_cart {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      } .bottom_Con {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      } .midl_wrap {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      } .imgswrap {
        gap: 30px;
      }
  }
`;
export const Tab = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  cursor: pointer;

  ${(props) => props.active && `
    color: #32324D; 
    border: 0.01px solid gray;
    img, iframe {
      padding: 1.50px;
    }
    background-color: #FFF;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  `}
`;
export const Content = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? 'block' : 'none')};
`;
const ImageWrapper = styled.div`
  position: relative;
  max-width: 600px;  
  max-height: 500px;
  width: 100vw;  
  height: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  display: block;
  width: 100vw;  
  height: 100vw; 
  max-width: 600px;  
  max-height: 500px; 
`;
const Iframe = styled.iframe`
  display: block;
  width: 100vw;  
  height: 100vw; 
  max-width: 600px;  
  max-height: 500px; 
`;
const Lens = styled.div<{ x: number; y: number }>`
  position: absolute;
  width: 100px;  
  height: 100px; 
  border: 0.01px solid rgba(43, 74, 26, 0.7);
  background-color: rgba(108, 186, 87, 0.3);
  pointer-events: none;
  transform: translate(-50%, -50%);
  cursor: crosshair;
  box-shadow: 0 0 10px rgba(64, 109, 5, 0.4);
  background-image: radial-gradient(circle, rgba(108, 186, 87, 0.4) 1%, transparent 80%);
  background-size: 2px 2px;
  background-position: 0 0;

  top: ${({ y }) => `${(y / 500) * 100}%`}; 
  left: ${({ x }) => `${(x / 600) * 100}%`}; 
`;
const ZoomedContainer = styled.div<{ x: number; y: number; bgImage: string }>`
  position: absolute;
  border-radius: 20px;
  top: 27%;    
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  background-position: ${({ x, y }) => `-${(x * 4) - 200}px -${(y * 4) - 200}px`};  
  background-size: 2400px 2000px;  
  pointer-events: none;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  background-image: url(${({ bgImage }) => bgImage});
  z-index: 1;
`;
export const RightCon = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 400px;
.right_cart {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 } .wrap_text {
        display: flex;
        flex-direction: column;
        align-items: center;
 } h6 {
        margin-top: 40px;
        width: 40px;
        height: 2px;
        background: var(--accent, #DBA514);
 } h3 {
        margin: 20px 0px 10px 0px;
        color: var(--main, #32324D);
        text-align: center;
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px; 
        letter-spacing: 3px;
        text-transform: uppercase;
 } h5 {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: black;
 } .line {
    height: 1px;
    align-self: stretch;
    background: var(--pastel, #D1BCB2);
 } .midl_wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
 } .div1 {
    display: flex;
    max-width: 400px;
    justify-content: space-between;
    align-items: center;
 } .img_wrap_colorCon {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        .buttons {
            border: 1px solid #D1BCB2;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            padding-bottom: 3px;
            border-radius: 50%;
            background-color: #FFF;
        } .p_count {
            width: 10px;
            display: flex;
            align-items: center;
            height: 100%;
            margin-bottom: -1px;
        }
    .images :hover{
        border: 0px ;
    } .images {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        fill: #FFF;
        stroke-width: 3px;
        stroke: var(--white, #FFF);
        filter: drop-shadow(0px 10px 20px rgba(209, 188, 178, 0.25));
     img {
        width: 55px;
        height: 55px;
    }   
    } .texte1 {
      background: #FFF;
        padding: 6px 8px;
        color: var(--accent, #DBA514);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        &:active {
           transform: scale(0.98);
        }
        &:hover {
         background: #FFF;
         box-shadow: 0px 10px 20px 0px rgba(209, 188, 178, 0.25);
        }
    } .texte2 {
        padding: 6px 8px;
        background: #FFF;
        color: var(--pastel, #D1BCB2);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        &:active {
          transform: scale(0.98);
        }
        &:hover {
         background: #FFF;
         box-shadow: 0px 10px 20px 0px rgba(209, 188, 178, 0.25);
        }
    } 
 } .h2 {
        color: var(--dark-grey, #666);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; 
        letter-spacing: 2px;
        text-transform: uppercase;
 } .img_wrap_colorCon :hover {
        background-color: #FFF;
 } .str {
   display: flex;
   align-items: center;
   gap: 2px;
   img {
      margin-top: -8px;
      background-color: linear-gradient(rgba(0, 0, 0, 0.10), #D1BCB2);
   }
 }
 .imgwrapmini {
   display: flex;
   gap: 10px;
   img {
      padding: 4px;
      background-color: transparent;
      width: 60px;
      height: 60px;
      &:hover {
         background-color: #FFF;
      }
      &:active {
         transform: scale(0.98);
      }
   }
 } 
 ////
 .bottom_Con {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    width: 100%;
 } .row_line {
    margin: 0px 10px;
    width: 1px;
    height: 26px;
    background: var(--secondary, #EDE4E0);
 } .cost {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    .car_wrep {
        display: flex;
        align-items: center;
    } .h3 {
        margin-bottom: -4px;
        color: var(--red, #F66);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px; /* 130% */
        letter-spacing: 2px;
        text-transform: uppercase;
    } .h2 {
        margin-bottom: -4px;
        color: var(--pastel, #D1BCB2);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 20px; 
        letter-spacing: 1px;
        text-decoration-line: strikethrough;
        text-transform: uppercase;
    } 
 } .car_wrep {
    display: flex;
    align-items: center;
    gap: 5px;
    img {
        width: 20px;
        height: 100%;
    } h3 {
        color: var(--dark-grey, #666);
        font-size: 14px;
        margin-top: 10px;
 }
 }
 //// 
 .cons_btn {
    display: flex;
    align-items: center;
    margin-right: 20px;
    button {
    background: var(--pastel, #D1BCB2);
    width: 204px;
    height: 60px;
    border: none;
    color: var(--text-white, #FFF);
    font-size: 14px;
    text-transform: uppercase;
    &:active {
      transform: scale(0.98);
    }
    }
 } .cons_btn_like {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
    border: 1px solid  #D1BCB2;
    background: var(--white, #FFF);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    padding: 10px;   
    }
    
 }
`;
interface Tprops {
  count: number; 
}
interface Ttype {
  type: 'increment' | 'decrement' | 'refresh'; 
  payload?: number;
}
const datatest = [
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'ebro bedside table',
    cost: '$250',
    seil: 'ebro bedside table'
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'Tirado chair',
    cost: '$280',
    seil: 'ebro bedside table',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'caleido lamp',
    cost: '$355',
    seil: 'ebro bedside table',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'caleido lamp',
    cost: '$240',
    seil: 'ebro bedside table',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'emmi set',
    cost: '$200',
    seil: 'ebro bedside table',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'textiles',
    cost: '$260',
    seil: 'ebro bedside table',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'Sofas set',
    cost: '$230',
    seil: 'ebro bedside table',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'beds set',
    cost: '$210',
    seil: 'ebro bedside table',
  },
];
interface datatestT {
  img: string;
  text: string;
  cost: string;
  seil: string;
}
const initialState: Tprops = { count: 0 }; 
function reducer(state: Tprops, action: Ttype) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + (action.payload || 0) };
    case 'decrement':
      return { count: Math.max(1, state.count - (action.payload || 1)) };
    case 'refresh':
      return { count: 0 }; 
    default:
      return state;
  }
}
//{ name }
const ImageZoom = () => {
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
           {/* <h4>{name}</h4> */}
         </PagesName>
      </div>
      <div className='wrapper'>
        <div className='imgwrap1'>
        {data.map((val, ind) => (
          <div key={ind} className="imgswrap">
            <Tab active={activeTab === 1} onClick={() => setActiveTab(1)} className="imgs">
              <img src={val.images} alt={`Image for Tab 1`} />
            </Tab>
            <Tab active={activeTab === 2} onClick={() => setActiveTab(2)} className="imgs">
              <img src={val.images2} alt={`Image for Tab 2`} />
            </Tab>
            <Tab active={activeTab === 3} onClick={() => setActiveTab(3)} className="imgs">
              <img src={val.images3} alt={`Image for Tab 3`} />
            </Tab>
            <Tab active={activeTab === 4} onClick={() => setActiveTab(4)} className="imgs">
              <img src={val.images4} alt={`Image for Tab 4`} />
            </Tab>
            <Tab active={activeTab === 5} onClick={() => setActiveTab(5)} className="imgs">
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
                 {activeTab === 1 && val.images && (
                   <Image src={val.images} alt="Zoomable" width={600} height={500} />
                 )}
                 {activeTab === 2 && val.images2 && (
                   <Image src={val.images2} alt="Zoomable" width={600} height={500} />
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
              {activeTab === 1 && val.images && isZoomEnabled && (
                <ZoomedContainer x={cursorPos.x} y={cursorPos.y} bgImage={val.images} className='ZoomedContainer' />
              )}
              {activeTab === 2 && val.images2 && isZoomEnabled && (
                <ZoomedContainer x={cursorPos.x} y={cursorPos.y} bgImage={val.images2} className='ZoomedContainer' />
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

      </div>
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
           <CarouselTrack slideIndex={slideIndex} slidesToShow={slidesToShow} className='CarouselTrack'>
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

export default ImageZoom;


