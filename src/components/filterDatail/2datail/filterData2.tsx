import React, { useEffect, useReducer, useState } from 'react';
import { DataType, Tnames } from '../../types/maintp';
import { useParams } from 'react-router-dom';
import { IconButton } from '@mui/joy';
import car from '../../../assets/car.svg';
import { Data } from '../../mock/mockDatail';
import star from '../../../assets/Star.svg'
import star1 from '../../../assets/Star (1).svg'
import love from '../../../assets/love.svg'
import miniimg1 from '../../../assets/stul.webp'
import miniimg2 from '../../../assets/stul2.jpg'
import miniimg3 from '../../../assets/stul3.webp'
import { PagesName } from "../../MainPage2/catalog.page/catalog"
import home from '../../../assets/home.svg'
import { Chescout_Top, } from "../../Navbar/profile/profle.1"
import { Chescout_containerWrapper, Chescout_one, Containre_Chescout_Content, Datail_0_2, Datail_1, Datail_2, Datail_3, Datail_container, LeftCon, MidlCon, RightCon } from './main.datail';
import { BtnWrap4, ButtonL } from '../../styles/main';
import { CarouselContainer, CarouselItem, CarouselTrack, Carouselimgwrapp,DotsContainer } from '../../styles/main';
import circle3 from '../../../assets/leftwhite.svg';
import { Navlink } from '../../styles/LINK';
import { BtnWrap } from '../../styles/navbar';

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

interface Tprops {
  count: number; 
}
interface Ttype {
  type: 'increment' | 'decrement' | 'refresh'; 
  payload?: number;
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


const DatailComponent: React.FC<Tnames> = ({ name }) => {

  const [ datas, setdatas ] = useState<datatestT[] | null>(null);
  useEffect(() => {setdatas(datatest)},[])
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(4); 
  const [isHovered, setIsHovered] = useState<boolean>(false); 

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
  const [ data, setData ] = useState<DataType[] | null>(null);
  const { id } = useParams();  
  const parsedId = id ? parseInt(id) : 0;
  useEffect(() => {
    const filterData = Data.filter(item => item.id === parsedId);
    setData(filterData)
  }, [])

  return (
    <Datail_container>
      <div style={{display:"flex",width:"100%",justifyContent:"center"}}>
      <PagesName>
        <h3>Home</h3>
        <img src={home} alt="Home icon" />
            {data ? 
            (<h3>{data[0].label}</h3>) 
              : 
            (<h3>Ma'lumotlar yuklanmoqda...</h3>)}

        <img src={home} alt="Home icon" />
        <h4>{name}</h4>
      </PagesName>
      </div>
      
      <Datail_1>
        <div className='wrape'>
          <LeftCon className='LeftCon'>
            {data?.map((val) => (

              <div key={val.id} className="left_datail">
              <img src={val.images2} alt="" />
              <img src={val.images3} alt="" />
              <img src={val.images4} alt="" />
              <img src={val.image5} alt="" />
              <iframe src={val.videos1} title="Video" />
              </div>

            ))}
          </LeftCon>

           
          <MidlCon className='MidlCon'>
            {data?.map((val) => (
            <img 
            key={val.id} 
            src={val.images}
            alt={val.label} />))}
          </MidlCon>

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
      </Datail_1>

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

    </Datail_container>
  );
};

export default DatailComponent;



















