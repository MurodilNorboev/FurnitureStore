// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';
// import Stack from '@mui/material/Stack';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { Catalog_con, Image, ImageContainer, ImageGrid, Imagecontent, PagesName, Saidbar, SlaiderContainer } from './catalog';
// import { Box, Checkbox, Slider } from '@mui/joy';
// import home from '../../../assets/home.svg';
// import { Data } from '../../mock/mockDatail';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Navlink } from '../../styles/LINK';
// import { DataType, Tname } from '../../types/maintp';

// const ITEMS_PER_PAGE = 16;

// export default function Ssofar(Props: Tname) {
//   const [value, setValue] = useState<number[]>([20, 37]);
//   const [page, setPage] = useState<number>(1);
//   const [itemsPerPage, setItemsPerPage] = useState<number>(ITEMS_PER_PAGE);
//   const { label } = useParams<{ label: string }>();
//   const [data, setData] = useState<DataType[]>([]);

//   useEffect(() => {
//     setData(Data); 
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width <= 600) {
//         setItemsPerPage(4);
//       } else if (width <= 900) {
//         setItemsPerPage(8);
//       } else if (width <= 1200) {
//         setItemsPerPage(12);
//       } else if (width <= 1500) {
//         setItemsPerPage(16);
//       } else {
//         setItemsPerPage(20);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const filteredData = data.filter(item => item.label === label);
//   const startIdx = (page - 1) * itemsPerPage;
//   const endIdx = startIdx + itemsPerPage;
//   const displayeddata = filteredData.slice(startIdx, endIdx);

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   const handleChangeSlider = (event: Event, newValue: number | number[]) => {
//     setValue(newValue as number[]);
//   };

//   const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
//     setPage(value);
//   };

//   const valueText = (value: number) => `${value}°C`; 

//   if (!data || data.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Catalog_con>
//       <PagesName>
//         <h3>Home</h3>
//         <img src={home} alt="" />
//         {displayeddata.length > 0 && <h4>{displayeddata[0].label}</h4>}
//       </PagesName>

//       <SlaiderContainer>
//         <ImageGrid>
//           {displayeddata.map((item, ind) => (
//             <ImageContainer key={`${item.id} || ${item.label}`}>
//               <Navlink to={`/stul/${item.id}`}>
//                 <Imagecontent>
//                   {item.images ? (
//                     <Image 
//                       className='Image'
//                       src={item.images}
//                       alt={`img-${ind + startIdx}`}
//                       onMouseOver={(e) => (e.currentTarget.src = item.images2)}
//                       onMouseOut={(e) => (e.currentTarget.src = item.images)}
//                     />
//                   ) : (
//                     <p>No Image Available</p>
//                   )}
//                   <h6></h6>
//                   <h5>{item.label}</h5>
//                   <h4>{item.cost}</h4>
//                 </Imagecontent>
//               </Navlink>
//             </ImageContainer>
//           ))}
//         </ImageGrid>

//           <Stack spacing={2} style={{ marginTop: '20px' }}>
//             <Pagination
//               count={totalPages}
//               page={page}
//               onChange={handleChangePagination}
//               renderItem={(item) => (
//                 <PaginationItem
//                   slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
//                   {...item}
//                 />
//               )}
//             />
//           </Stack>
//       </SlaiderContainer>

//          <Saidbar className='Saidbar'>
//              <div className="cart_con">
//                <h2>Price</h2>
//                <hr />
//                <Box sx={{ width: '100%' }}>
//                  <Slider
//                 getAriaLabel={() => 'Price range'}
//                 value={value}
//                 onChange={handleChangeSlider}
//                 valueLabelDisplay="auto"
//                 getAriaValueText={valueText}
//               />
//             </Box>
//             <div className="button_wrap">
//               <div className="btn_wrap">
//                 <button>$??</button>
//               </div>
//               <div className="btn_wrap">
//                 <button>$??</button>
//               </div>
//               <div className="btn_wrap_b">
//                 <button>OK</button>
//               </div>
//             </div>
//           </div>

//           <div className="cart_con">
//             <h2>Material</h2>
//             <hr />
//             <Box sx={{ display: 'grid', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
//               <Checkbox label="Metal" color="warning" defaultChecked />
//               <Checkbox label="Plastic" color="warning" defaultChecked />
//               <Checkbox label="Leather" color="warning" defaultChecked />
//               <Checkbox label="Marble" color="warning" defaultChecked />
//               <Checkbox label="Glass" color="warning" defaultChecked />
//               <Checkbox label="Rattan" color="warning" defaultChecked />
//             </Box>
//           </div>

//           <div className="cart_con">
//             <h2>Color</h2>
//             <hr />
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
//               <Checkbox label="Primary" color="primary" defaultChecked />
//               <Checkbox label="Neutral" color="neutral" defaultChecked />
//               <Checkbox label="Danger" color="danger" defaultChecked />
//               <Checkbox label="Success" color="success" defaultChecked />
//               <Checkbox label="Warning" color="warning" defaultChecked />
//             </Box>
//             <h5>Show 8 more</h5>
//           </div>

//           <div className="cart_con">
//             <h2>Collection</h2>
//             <hr />
//             <Box sx={{ display: 'grid', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
//               <Checkbox label="Minimalism" color="warning" defaultChecked />
//               <Checkbox label="Eco Style" color="warning" defaultChecked />
//               <Checkbox label="Glam" color="warning" defaultChecked />
//               <Checkbox label="Royal" color="warning" defaultChecked />
//               <Checkbox label="Pink Rose" color="warning" defaultChecked />
//               <Checkbox label="Hi Tech" color="warning" defaultChecked />
//             </Box>
//             <h5>Show 8 more</h5>
//           </div>

//           <div className="cart_con">
//             <h2>Additional</h2>
//             <hr />
//             <Box sx={{ display: 'grid', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
//               <Checkbox label="Set" color="warning" defaultChecked />
//               <Checkbox label="Eco Combined" color="warning" defaultChecked />
//               <Checkbox label="Transformer" color="warning" defaultChecked />
//               <Checkbox label="Frameless" color="warning" defaultChecked />
//             </Box>
//             <h5>Show 8 more</h5>
//           </div>
//         </Saidbar>
//     </Catalog_con>
//   );
// }

import React, { useState, useEffect } from 'react';
 import { Pagination, PaginationItem } from '@mui/material';
 import Stack from '@mui/material/Stack';
 import ArrowBackIcon from '@mui/icons-material/ArrowBack';
 import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
 import { Catalog_con, Image, ImageContainer, ImageGrid, Imagecontent, PagesName, Saidbar, SlaiderContainer } from './catalog';
 import { Box, Checkbox, Slider } from '@mui/joy';
 import home from '../../../assets/home.svg';
 import { Data } from '../../mock/mockDatail';
 import { useParams } from 'react-router-dom';
 import { Navlink } from '../../styles/LINK';
 import { DataType, Tname } from '../../types/maintp';
 import Skeleton from '@mui/material/Skeleton';

 const ITEMS_PER_PAGE = 16;

 export default function Ssofar(Props: Tname) {
   const [value, setValue] = useState<number[]>([20, 37]);
   const [page, setPage] = useState<number>(1);
   const [itemsPerPage, setItemsPerPage] = useState<number>(ITEMS_PER_PAGE);
   const { label } = useParams<{ label: string }>();
   const [data, setData] = useState<DataType[]>([]);
   const [imageVisible, setImageVisible] = useState<boolean>(false); 

   useEffect(() => {
     setData(Data);
   }, []);

   useEffect(() => {
     const handleResize = () => {
       const width = window.innerWidth;
       if (width <= 600) {
         setItemsPerPage(4);
       } else if (width <= 900) {
         setItemsPerPage(8);
       } else if (width <= 1200) {
         setItemsPerPage(12);
       } else if (width <= 1500) {
         setItemsPerPage(16);
       } else {
         setItemsPerPage(20);
       }
     };

     window.addEventListener('resize', handleResize);
     handleResize();

     return () => window.removeEventListener('resize', handleResize);
   }, []);

   const filteredData = data.filter(item => item.label === label);
   const startIdx = (page - 1) * itemsPerPage;
   const endIdx = startIdx + itemsPerPage;
   const displayeddata = filteredData.slice(startIdx, endIdx);

   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

   const handleChangeSlider = (event: Event, newValue: number | number[]) => {
     setValue(newValue as number[]);
   };

   const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
     setPage(value);
   };

   const valueText = (value: number) => `${value}°C`;

   if (!data || data.length === 0) {
     return <div>Loading...</div>;
   }

   return (
     <Catalog_con>
       <PagesName>
         <h3>Home</h3>
         <img src={home} alt="" />
         {displayeddata.length > 0 && <h4>{displayeddata[0].label}</h4>}
       </PagesName>

       <SlaiderContainer>
         <ImageGrid>
           {displayeddata.map((item, ind) => (
             <ImageContainer key={`${item.id} || ${item.label}`}>
               <Navlink to={`/stul/${item.id}`}>
                 <Imagecontent>
                   {!imageVisible && (
                     <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />
                   )}
                   <div style={{ opacity: imageVisible ? 1 : 0, transition: 'opacity 1s ease' }}>
                     {item.images ? (
                       <Imagecontent>
                       <Image
                         className="Image"
                         src={item.images}
                         alt={`img-${ind + startIdx}`}
                         onLoad={() => {
                           setTimeout(() => setImageVisible(true), 1000);
                         }}
                         onMouseOver={(e) => (e.currentTarget.src = item.images2)}
                         onMouseOut={(e) => (e.currentTarget.src = item.images)}
                       />
                       <h6></h6>
                   <h5>{item.label}</h5>
                   <h4>{item.cost}</h4>
                       </Imagecontent>
                     ) : (
                       <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />
                     )}
                   </div>
                   <h6></h6>
                   <h5>{item.label}</h5>
                   <h4>{item.cost}</h4>
                 </Imagecontent>
               </Navlink>
             </ImageContainer>
           ))}
         </ImageGrid>

         <Stack spacing={2} style={{ marginTop: '20px' }}>
           <Pagination
             count={totalPages}
             page={page}
             onChange={handleChangePagination}
             renderItem={(item) => (
               <PaginationItem
                 slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                 {...item}
               />
             )}
           />
         </Stack>
       </SlaiderContainer>

       <Saidbar className="Saidbar">
         <div className="cart_con">
           <h2>Price</h2>
           <hr />
           <Box sx={{ width: '100%' }}>
             <Slider
               getAriaLabel={() => 'Price range'}
               value={value}
               onChange={handleChangeSlider}
               valueLabelDisplay="auto"
               getAriaValueText={valueText}
             />
           </Box>
           <div className="button_wrap">
             <div className="btn_wrap">
               <button>$??</button>
             </div>
             <div className="btn_wrap">
               <button>$??</button>
             </div>
             <div className="btn_wrap_b">
               <button>OK</button>
             </div>
           </div>
         </div>

         <div className="cart_con">
           <h2>Material</h2>
           <hr />
           <Box sx={{ display: 'grid', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
             <Checkbox label="Metal" color="warning" defaultChecked />
             <Checkbox label="Plastic" color="warning" defaultChecked />
             <Checkbox label="Leather" color="warning" defaultChecked />
             <Checkbox label="Marble" color="warning" defaultChecked />
             <Checkbox label="Glass" color="warning" defaultChecked />
             <Checkbox label="Rattan" color="warning" defaultChecked />
           </Box>
         </div>

         <div className="cart_con">
           <h2>Color</h2>
           <hr />
           <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
             <Checkbox label="Primary" color="primary" defaultChecked />
             <Checkbox label="Neutral" color="neutral" defaultChecked />
             <Checkbox label="Danger" color="danger" defaultChecked />
             <Checkbox label="Success" color="success" defaultChecked />
             <Checkbox label="Warning" color="warning" defaultChecked />
           </Box>
           <h5>Show 8 more</h5>
         </div>

         <div className="cart_con">
           <h2>Collection</h2>
           <hr />
           <Box sx={{ display: 'grid', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
             <Checkbox label="Minimalism" color="warning" defaultChecked />
             <Checkbox label="Eco Style" color="warning" defaultChecked />
             <Checkbox label="Glam" color="warning" defaultChecked />
             <Checkbox label="Royal" color="warning" defaultChecked />
             <Checkbox label="Pink Rose" color="warning" defaultChecked />
             <Checkbox label="Hi Tech" color="warning" defaultChecked />
           </Box>
           <h5>Show 8 more</h5>
         </div>

         <div className="cart_con">
           <h2>Additional</h2>
           <hr />
           <Box sx={{ display: 'grid', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
             <Checkbox label="Set" color="warning" defaultChecked />
             <Checkbox label="Eco Combined" color="warning" defaultChecked />
             <Checkbox label="Transformer" color="warning" defaultChecked />
             <Checkbox label="Frameless" color="warning" defaultChecked />
           </Box>
           <h5>Show 8 more</h5>
         </div>
       </Saidbar>
     </Catalog_con>
   );
 }

// import React, { useState, useEffect } from 'react';
// import { Pagination, PaginationItem } from '@mui/material';
// import Stack from '@mui/material/Stack';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { Catalog_con, Image, ImageContainer, ImageGrid, Imagecontent, PagesName, Saidbar, SlaiderContainer } from './catalog';
// import { Box, Checkbox, Slider } from '@mui/joy';
// import home from '../../../assets/home.svg';
// import { Data } from '../../mock/mockDatail';
// import { useParams } from 'react-router-dom';
// import { Navlink } from '../../styles/LINK';
// import { DataType, Tname } from '../../types/maintp';
// import CircularProgress from '@mui/material/CircularProgress';
// // StyledComponents.ts
// import styled, { keyframes } from 'styled-components';

// // Gradient loading animatsiyasi
// const loadingGradient = keyframes`
//   0% {
//     background-position: -200% 0;
//   }
//   100% {
//     background-position: 200% 0;
//   }
// `;

// // Loading Box (Gradient) for images
// export const LoadingBox = styled.div<{ loading: boolean }>`
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(90deg, #ffffff 25%, #e0e0e0 50%, #ffffff 75%);
//   background-size: 200% 100%;
//   animation: ${loadingGradient} 1.5s infinite;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   opacity: ${({ loading }) => (loading ? 1 : 0)};
//   transition: opacity 1s ease;
// `;

// // Content Box for Text and other content with transition for fade-in
// export const ContentBox = styled.div`
//   opacity: 0;
//   transition: opacity 1s ease;
// `;

// // Text container for product information
// export const TextContainer = styled.div`
//   opacity: 0;
//   transition: opacity 1s ease;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;


// const ITEMS_PER_PAGE = 16;

// export default function Ssofar(Props: Tname) {
//   const [value, setValue] = useState<number[]>([20, 37]);
//   const [page, setPage] = useState<number>(1);
//   const [itemsPerPage, setItemsPerPage] = useState<number>(ITEMS_PER_PAGE);
//   const { label } = useParams<{ label: string }>();
//   const [data, setData] = useState<DataType[]>([]);
//   const [imageVisible, setImageVisible] = useState<boolean>(false); // Tasvir ko'rsatilishini boshqarish
//   const [loading, setLoading] = useState<boolean>(true); // Tasvir yuklanayotganini boshqarish

//   useEffect(() => {
//     setData(Data);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width <= 600) {
//         setItemsPerPage(4);
//       } else if (width <= 900) {
//         setItemsPerPage(8);
//       } else if (width <= 1200) {
//         setItemsPerPage(12);
//       } else if (width <= 1500) {
//         setItemsPerPage(16);
//       } else {
//         setItemsPerPage(20);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const filteredData = data.filter(item => item.label === label);
//   const startIdx = (page - 1) * itemsPerPage;
//   const endIdx = startIdx + itemsPerPage;
//   const displayeddata = filteredData.slice(startIdx, endIdx);

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   const handleChangeSlider = (event: Event, newValue: number | number[]) => {
//     setValue(newValue as number[]);
//   };

//   const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
//     setPage(value);
//   };

//   const valueText = (value: number) => `${value}°C`;

//   if (!data || data.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Catalog_con>
//       <PagesName>
//         <h3>Home</h3>
//         <img src={home} alt="" />
//         {displayeddata.length > 0 && <h4>{displayeddata[0].label}</h4>}
//       </PagesName>

//       <SlaiderContainer>
//         <ImageGrid>
//           {displayeddata.map((item, ind) => (
//             <ImageContainer key={`${item.id} || ${item.label}`}>
//               <Navlink to={`/stul/${item.id}`}>
//                 <Imagecontent>
//                   {/* Gradient loading box */}
//                   <LoadingBox loading={loading}>
//                     {loading && <CircularProgress size={2} style={{ color: '#fff',border:"none",paddingTop:"510px" }} />}
//                   </LoadingBox>

//                   {/* Tasvirni ko'rsatish */}
//                   <ContentBox style={{ opacity: imageVisible ? 1 : 0 }}>
//                     {item.images ? (
//                       <Image
//                         className="Image"
//                         src={item.images}
//                         alt={`img-${ind + startIdx}`}
//                         onLoad={() => {
//                           setTimeout(() => {
//                             setImageVisible(true); 
//                             setLoading(false); 
//                           }, 2500);
//                         }}
//                         onMouseOver={(e) => (e.currentTarget.src = item.images2)}
//                         onMouseOut={(e) => (e.currentTarget.src = item.images)}
//                       />
//                     ) : (
//                       <CircularProgress size={24} 
//                       style={{ 
//                         color: '#fff',border:"1px solid red" }} />
//                     )}
//                   </ContentBox>

//                   <TextContainer style={{ opacity: imageVisible ? 1 : 0 }}>
//                     <h6></h6>
//                     <h5>{item.label}</h5>
//                     <h4>{item.cost}</h4>
//                   </TextContainer>
//                 </Imagecontent>
//               </Navlink>
//             </ImageContainer>
//           ))}
//         </ImageGrid>

//         <Stack spacing={2} style={{ marginTop: '20px' }}>
//           <Pagination
//             count={totalPages}
//             page={page}
//             onChange={handleChangePagination}
//             renderItem={(item) => (
//               <PaginationItem
//                 slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
//                 {...item}
//               />
//             )}
//           />
//         </Stack>
//       </SlaiderContainer>

//       <Saidbar className="Saidbar">
//         {/* Filtrlar */}
//         <div className="cart_con">
//           <h2>Price</h2>
//           <hr />
//           <Box sx={{ width: '100%' }}>
//             <Slider
//               getAriaLabel={() => 'Price range'}
//               value={value}
//               onChange={handleChangeSlider}
//               valueLabelDisplay="auto"
//               getAriaValueText={valueText}
//             />
//           </Box>
//         </div>

//         <div className="cart_con">
//           <h2>Material</h2>
//           <hr />
//           <Box sx={{ display: 'grid', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
//             <Checkbox label="Metal" color="warning" defaultChecked />
//             <Checkbox label="Plastic" color="warning" defaultChecked />
//             <Checkbox label="Leather" color="warning" defaultChecked />
//             <Checkbox label="Marble" color="warning" defaultChecked />
//             <Checkbox label="Glass" color="warning" defaultChecked />
//             <Checkbox label="Rattan" color="warning" defaultChecked />
//           </Box>
//         </div>

//         <div className="cart_con">
//           <h2>Color</h2>
//           <hr />
//           <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
//             <Checkbox label="Primary" color="primary" defaultChecked />
//             <Checkbox label="Neutral" color="neutral" defaultChecked />
//             <Checkbox label="Danger" color="danger" defaultChecked />
//             <Checkbox label="Success" color="success" defaultChecked />
//             <Checkbox label="Warning" color="warning" defaultChecked />
//           </Box>
//           <h5>Show 8 more</h5>
//         </div>

//         <div className="cart_con">
//           <h2>Collection</h2>
//           <hr />
//           <Box sx={{ display: 'grid', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
//             <Checkbox label="Minimalism" color="warning" defaultChecked />
//             <Checkbox label="Eco Style" color="warning" defaultChecked />
//             <Checkbox label="Glam" color="warning" defaultChecked />
//             <Checkbox label="Royal" color="warning" defaultChecked />
//           </Box>
//         </div>
//       </Saidbar>
//     </Catalog_con>
//   );
// }



 



