import React, { useState, useEffect } from 'react'; /// asosiy main pagedagi multi carousel !!
import styled from 'styled-components';
import { BtnWrap } from '../../styles/navbar';
import { ButtonL, CarouselContainer, CarouselItem, CarouselTrack, Carouselimgwrapp, Dot, DotsContainer, NextButton, PrevButton } from '../../styles/main';
import circle3 from '../../../assets/leftwhite.svg';

const datatest = [
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'ebro bedside table',
    cost: 'ebro bedside table',
    seil: 'ebro bedside table'
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'Tirado chair',
    cost: 'ebro bedside table',
    seil: 'ebro bedside table',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'caleido lamp',
    cost: 'ebro bedside table',
    seil: 'ebro bedside table',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'caleido lamp',
    cost: 'ebro bedside table',
    seil: 'ebro bedside table',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'emmi set',
    cost: 'ebro bedside table',
    seil: 'ebro bedside table',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'textiles',
    cost: 'ebro bedside table',
    seil: 'ebro bedside table',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'Sofas set',
    cost: 'ebro bedside table',
    seil: 'ebro bedside table',
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185',
    text: 'beds set',
    cost: 'ebro bedside table',
    seil: 'ebro bedside table',
  },
];
interface datatestT {
  img: string;
  text: string;
  cost: string;
  seil: string;
}

const MultiCarousel: React.FC = () => {
  const [ data, setdata ] = useState<datatestT[] | null>(null);
  useEffect(() => {setdata(datatest)},[])
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(4); 
  const [isHovered, setIsHovered] = useState<boolean>(false); 

  const totalSlides = 8; 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setSlidesToShow(1); // 1 image per slide on mobile
      } else if (window.innerWidth <= 768) {
        setSlidesToShow(2); // 2 images per slide on tablets
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3); // 3 images per slide on medium screens
      } else {
        setSlidesToShow(4); // 4 images per slide on larger screens
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

  const [numDots, setNumDots] = useState(4); 
  useEffect(() => {
    const updateNumDots = () => {
      const screenWidth = window.innerWidth;
      let dots = 5; 
      if (screenWidth <= 1024) {
        dots = 6; 
      }
      if (screenWidth <= 768) {
        dots = 7;
      }
      if (screenWidth <= 420) {
        dots = 8; 
      }
      setNumDots(Math.min(dots, 8)); 
    };

    updateNumDots(); // Boshlang'ich holatni o'rnatish
    window.addEventListener('resize', updateNumDots); // Ekran o'lchami o'zgarganda yangilash

    return () => {
      window.removeEventListener('resize', updateNumDots); // O'chirish
    };
  }, []);

  const dotsArray = [];
  for (let i = 0; i < numDots; i++) {
    dotsArray.push(
      <Dot
        key={i}
        active={i === slideIndex}
        onClick={() => setSlideIndex(i)}
      />
    );
  }

  return (
    <div style={{ paddingTop: "90px" }}>
      <CarouselContainer
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      >
        <CarouselTrack slideIndex={slideIndex} slidesToShow={slidesToShow} className='CarouselTrack'>
          <>
        {data?.map((val, ind) => (
            <CarouselItem key={ind}>
              <Carouselimgwrapp>
                <img src={val.img} alt="" />
                <h6></h6>
                <h5>{val.text}</h5>
                <div style={{display:"flex",alignItems:"center"}}>
                  <h4>{val.cost}</h4>
                  <h3></h3>
                </div>
              </Carouselimgwrapp>
            </CarouselItem>
        ))} 
        </>
        </CarouselTrack>
          
      </CarouselContainer>

      <DotsContainer>
           <PrevButton onClick={prevSlide}>❮</PrevButton>
           {dotsArray}
           <NextButton onClick={nextSlide}>❯</NextButton>
          </DotsContainer>

      <div style={{marginBottom:"30px",margin:"0px 0px 130px 0px"}}>
        <BtnWrap>
       <ButtonL>
       see more products <img src={circle3} alt="" />
       </ButtonL>
       </BtnWrap>
        </div>
    </div>
  );
};

export default MultiCarousel;