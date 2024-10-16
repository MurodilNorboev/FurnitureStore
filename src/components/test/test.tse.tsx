// import React, { useState, useEffect } from 'react'; /// asosiy main pagedagi multi carousel !!
// import { useParams } from 'react-router-dom';
// import styled from 'styled-components';

// const CarouselContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 300px;
//   overflow: hidden;
//   border: 1px solid red;
// `;
// const CarouselTrack = styled.div<{ slideIndex: number, slidesToShow: number}>`
//   display: flex;
//   transition: transform 0.5s ease;
//   transform: ${({ slideIndex, slidesToShow }) => `translateX(-${(slideIndex * 100) / slidesToShow}%)`};
//   width: 100%;
// `;
// const CarouselItem = styled.div`
//   background-color: transparent;
//   z-index: 10;
//   padding: 0px 10px;
//   height: 300px;
//   flex-shrink: 0;
//   background: lightgray;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: transform 0.3s ease;
//   img {
//     padding: 2px;
//     max-height: 300px;
//     max-width: 300px;
//     width: 100%;    
//     height: 100%;
//   }
//   width: 25%;
//   &:hover {
//     transform: scale(1.1);
//   }
//   @media (max-width: 1024px) {
//     width: 33.33%;
//   }
//   @media (max-width: 768px) {
//     width: 50%;
//   }
//   @media (max-width: 480px) {
//     width: 100%;
//   }
// `;
// const PrevButton = styled.button`
//   position: absolute;
//   top: 50%;
//   left: 10px;
//   transform: translateY(-100%);
//   background: rgba(0, 0, 0, 0.5);
//   color: white;
//   border: none;
//   padding: 10px;
//   cursor: pointer;
// `;
// const NextButton = styled.button`
//   position: absolute;
//   top: 50%;
//   right: 10px;
//   transform: translateY(-100%);
//   background: rgba(0, 0, 0, 0.5);
//   color: white;
//   border: none;
//   padding: 10px;
//   cursor: pointer;
// `;
// const DotsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 10px;
// `;

// const Dot = styled.div<{ active: boolean }>`
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   background-color: ${({ active }) => (active ? 'black' : 'lightgray')};
//   margin: 0 5px;
//   cursor: pointer;
//   transition: background-color 0.3s;
// `;

// const SimpleSlider: React.FC = () => {
//   const [slideIndex, setSlideIndex] = useState<number>(0);
//   const [slidesToShow, setSlidesToShow] = useState<number>(4); 
//   const [isHovered, setIsHovered] = useState<boolean>(false); 

//   const totalSlides = 8; 

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 480) {
//         setSlidesToShow(1); // 1 image per slide on mobile
//       } else if (window.innerWidth <= 768) {
//         setSlidesToShow(2); // 2 images per slide on tablets
//       } else if (window.innerWidth <= 1024) {
//         setSlidesToShow(3); // 3 images per slide on medium screens
//       } else {
//         setSlidesToShow(4); // 4 images per slide on larger screens
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     if (isHovered) return; 
//     const intervalId = setInterval(() => {
//       nextSlide();
//     }, 3000); 
//     return () => clearInterval(intervalId); 
//   }, [isHovered, slideIndex]);

//   const nextSlide = () => {
//     setSlideIndex((prevIndex) => (prevIndex + 1) % (totalSlides - slidesToShow + 1));
//   };

//   const prevSlide = () => {
//     setSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides - slidesToShow + 1) % (totalSlides - slidesToShow + 1));
//   };

//   const [numDots, setNumDots] = useState(4); 
//   useEffect(() => {
//     const updateNumDots = () => {
//       const screenWidth = window.innerWidth;
//       let dots = 5; 
//       if (screenWidth <= 1024) {
//         dots = 7; 
//       }
//       if (screenWidth <= 480) {
//         dots = 8;
//       }
//       if (screenWidth <= 320) {
//         dots = 9; 
//       }
//       setNumDots(Math.min(dots, 8)); 
//     };

//     updateNumDots(); // Boshlang'ich holatni o'rnatish
//     window.addEventListener('resize', updateNumDots); // Ekran o'lchami o'zgarganda yangilash

//     return () => {
//       window.removeEventListener('resize', updateNumDots); // O'chirish
//     };
//   }, []);

//   const dotsArray = [];
//   for (let i = 0; i < numDots; i++) {
//     dotsArray.push(
//       <Dot
//         key={i}
//         active={i === slideIndex}
//         onClick={() => setSlideIndex(i)}
//       />
//     );
//   }

//   return (
//     <div style={{ paddingTop: "90px" }}>
//       <CarouselContainer
//         onMouseEnter={() => setIsHovered(true)} // Kursni olib kelganda karuselni pauza qilish
//         onMouseLeave={() => setIsHovered(false)} // Sichqonchani tark etganda davom eting
//       >
//         <CarouselTrack slideIndex={slideIndex} slidesToShow={slidesToShow}>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 1" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 2" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 3" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 4" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 5" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 6" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 7" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 8" /></CarouselItem>
//         </CarouselTrack>

//         <PrevButton onClick={prevSlide}>❮</PrevButton>
//         <NextButton onClick={nextSlide}>❯</NextButton>
//       </CarouselContainer>

//       <DotsContainer>
//       {dotsArray}
//       </DotsContainer>
//     </div>
//   );
// };

// export default SimpleSlider;



// import React, { useState, useEffect } from 'react'; /// asosiy main pagedagi multi carousel !!
// import styled from 'styled-components';

// const CarouselContainerBig = styled.div`
//   padding-top: 90px;
// `;
// const CarouselContainer = styled.div`
//   position: relative;
//   max-width: 1100px;
//   overflow: hidden;
//   margin-bottom: 40px;
// `;
// const CarouselTrack = styled.div<{ slideIndex: number, slidesToShow: number}>`
//   display: flex;
//   transition: transform 0.5s ease;
//   transform: ${({ slideIndex, slidesToShow }) => `translateX(-${(slideIndex * 100) / slidesToShow}%)`};
//   width: 100%;
// `;
// const CarouselItem = styled.div`
//   background-color: transparent;
//   z-index: 10;
//   padding: 0px 10px;
//   height: 300px;
//   flex-shrink: 0;
//   background: lightgray;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: transform 0.3s ease;
//   img {
//     padding: 2px;
//     max-height: 300px;
//     max-width: 300px;
//     width: 100%;    
//     height: 100%;
//   }
//   width: 25%;
//   @media (max-width: 1024px) {
//     width: 33.33%;
//   }
//   @media (max-width: 768px) {
//     width: 50%;
//   }
//   @media (max-width: 480px) {
//     width: 100%;
//   }
// `;
// const PrevButton = styled.button`
//   background: rgba(0, 0, 0, 0.5);
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 50%;
//   cursor: pointer;
// `;
// const NextButton = styled.button`
//   background: rgba(0, 0, 0, 0.5);
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 50%;
//   cursor: pointer;
// `;
// const DotsContainer = styled.div`
// margin-top: 40px;
//   gap: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Dot = styled.div<{ active: boolean }>`
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   background-color: ${({ active }) => (active ? 'black' : 'lightgray')};
//   margin: 0 5px;
//   cursor: pointer;
//   transition: background-color 0.3s;
// `;

// const SimpleSlider: React.FC = () => {
//   const [slideIndex, setSlideIndex] = useState<number>(0);
//   const [slidesToShow, setSlidesToShow] = useState<number>(4); 

//   const totalSlides = 8; 
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 480) {
//         setSlidesToShow(1); // 1 image per slide on mobile
//       } else if (window.innerWidth <= 768) {
//         setSlidesToShow(2); // 2 images per slide on tablets
//       } else if (window.innerWidth <= 1024) {
//         setSlidesToShow(3); // 3 images per slide on medium screens
//       } else {
//         setSlidesToShow(4); // 4 images per slide on larger screens
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//   const nextSlide = () => {
//     setSlideIndex((prevIndex) => (prevIndex + 1) % (totalSlides - slidesToShow + 1));
//   };
//   const prevSlide = () => {
//     setSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides - slidesToShow + 1) % (totalSlides - slidesToShow + 1));
//   };
//   const [numDots, setNumDots] = useState(4); 
//   useEffect(() => {
//     const updateNumDots = () => {
//       const screenWidth = window.innerWidth;
//       let dots = 5; 
//       if (screenWidth <= 1024) {
//         dots = 7; 
//       }
//       if (screenWidth <= 480) {
//         dots = 8;
//       }
//       if (screenWidth <= 320) {
//         dots = 9; 
//       }
//       setNumDots(Math.min(dots, 8)); 
//     };

//     updateNumDots(); // Boshlang'ich holatni o'rnatish
//     window.addEventListener('resize', updateNumDots); // Ekran o'lchami o'zgarganda yangilash

//     return () => {
//       window.removeEventListener('resize', updateNumDots); // O'chirish
//     };
//   }, []);
//   const dotsArray = [];
//   for (let i = 0; i < numDots; i++) {
//     dotsArray.push(
//       <Dot
//         key={i}
//         active={i === slideIndex}
//         onClick={() => setSlideIndex(i)}
//       />
//     );
//   }
//   return (
//     <CarouselContainerBig>

//       <CarouselContainer>
//         <CarouselTrack slideIndex={slideIndex} slidesToShow={slidesToShow}>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 1" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 2" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 3" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 4" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 5" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 6" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 7" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 8" /></CarouselItem>
//         </CarouselTrack>
//       </CarouselContainer>

//       <CarouselContainer>
//         <CarouselTrack slideIndex={slideIndex} slidesToShow={slidesToShow}>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 1" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 2" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 3" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 4" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 5" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 6" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 7" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 8" /></CarouselItem>
//         </CarouselTrack>
//       </CarouselContainer>

//       <CarouselContainer>
//         <CarouselTrack slideIndex={slideIndex} slidesToShow={slidesToShow}>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 1" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 2" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 3" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 4" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 5" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 6" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 7" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 8" /></CarouselItem>
//         </CarouselTrack>
//       </CarouselContainer>

//       <CarouselContainer>
//         <CarouselTrack slideIndex={slideIndex} slidesToShow={slidesToShow}>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 1" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 2" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 3" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 4" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 5" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 6" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 7" /></CarouselItem>
//           <CarouselItem><img src="https://cdn.shopify.com/s/files/1/0781/8425/1702/files/Micadoni-MIC_3S_192_F1_DIANA1-1_1920x1437_crop_center.jpg?v=1728635185" alt="slide 8" /></CarouselItem>
//         </CarouselTrack>
//         <DotsContainer>
//       <PrevButton onClick={prevSlide}>❮</PrevButton>
//       {dotsArray}
//       <NextButton onClick={nextSlide}>❯</NextButton>
//       </DotsContainer>
//       </CarouselContainer>

//     </CarouselContainerBig>
//   );
// };

// export default SimpleSlider;



import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useParams } from 'react-router-dom';
import { SofasDatail } from '../mock/1sofas.datail';
import { Datailes } from '../mock/2categories';
import { TAbleDatail } from '../mock/3table.datail';
import { StorageDatail } from '../mock/4storage.datail';
import { BedsDatail } from '../mock/5beds.datail';
import { LightDatail } from '../mock/6lighting.datail';
import { TextilDatail } from '../mock/7textiles.datail';
import { DecorDatail } from '../mock/8decor.datail';
import { KitchenDatail } from '../mock/9kitchen.datail';
import styled from 'styled-components';
import { SofasType } from '../types/maintp';
import { Navlink } from '../styles/LINK';

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  border: 1px solid red;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); // 3 ustunli grid
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); // 2 ustunli grid
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr); // 1 ustunli grid
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  border: 1px solid red;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  border: 1px solid red;
`;


const ITEMS_PER_PAGE = 16;

export default function SimpleSlider() {
  const [data, setData] = useState<SofasType[]>([]); // To‘g‘ri turni belgiladik
  const { id } = useParams();
  const [page, setPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(ITEMS_PER_PAGE);

  useEffect(() => {
    const allData: SofasType[] = [
      ...SofasDatail,
      ...Datailes,
      ...TAbleDatail,
      ...StorageDatail,
      ...BedsDatail,
      ...LightDatail,
      ...TextilDatail,
      ...DecorDatail,
      ...KitchenDatail,
    ];
    setData(allData);
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setItemsPerPage(4);
      } else if (width <= 900) {
        setItemsPerPage(8);
      } else if (width <= 1200) {
        setItemsPerPage(12);
      } else {
        setItemsPerPage(16);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial resize check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  const startIdx = (page - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const displayedImages = data.slice(startIdx, endIdx);

  return (
    <div style={{ paddingTop: '90px', paddingBottom: '10px' }}>
      <ImageGrid>
        {displayedImages.map((item, index) => (
           
          <ImageContainer key={index}>
            <Navlink to={`/stul/${item.id}`}>
            <Image
              src={item.images}
              alt={`img-${index + startIdx}`}
              onMouseOver={(e) => (e.currentTarget.src = data[(index + 1) % data.length].images)}
              onMouseOut={(e) => (e.currentTarget.src = item.images)}
            />
             </Navlink>
          </ImageContainer>
         
        ))}
      </ImageGrid>

      <Stack spacing={2} style={{ marginTop: '20px' }}>
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
}



















 










