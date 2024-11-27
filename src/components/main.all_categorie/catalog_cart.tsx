import React, { useState, useEffect } from 'react';
 import { Pagination, PaginationItem } from '@mui/material';
 import Stack from '@mui/material/Stack';
 import ArrowBackIcon from '@mui/icons-material/ArrowBack';
 import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
 import { Catalog_con, Image, ImageContainer, ImageGrid, Imagecontent, PagesName, Saidbar, SortContainer } from './catalog.page/catalog';
 import { Box, Checkbox, Slider } from '@mui/joy';
 import home from '../../assets/home.svg';
 import { Data } from '../mock/mockDatail';
 import { useParams } from 'react-router-dom';
 import { Navlink } from '../styles/LINK';
 import { DataType, Tname } from '../types/maintp';
 import Skeleton from '@mui/material/Skeleton';
import { SlaiderContainer } from './categories';

 const ITEMS_PER_PAGE = 16;

 export default function Ssofar(Props: Tname) {
  ///////// === slider range ===
  const [values, setValues] = useState([50,1000]);
  const getCostNumber = (cost: string) => parseFloat(cost.replace('$', '').trim());
   const [page, setPage] = useState<number>(1);
   const [itemsPerPage, setItemsPerPage] = useState<number>(ITEMS_PER_PAGE);
   const [imageVisible, setImageVisible] = useState<boolean>(false); 
   const [data, setData] = useState<DataType[]>([]);
   const { label } = useParams<{ label: string }>();
   const [openModal, setOpenModal] = useState(false);
   const handleClick = () => {
    setOpenModal(true);
   }
   const handleSetClick = () => {
    setOpenModal(false);
   }


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

  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     if (width <= 600) {
  //       setItemsPerPage(4);
  //     } else if (width <= 900) {
  //       setItemsPerPage(6);
  //     } else if (width <= 1200) {
  //       setItemsPerPage(6);
  //     } else if (width <= 1500) {
  //       setItemsPerPage(6);
  //     } else {
  //       setItemsPerPage(6);
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);
  //   handleResize();

  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

   const filteredData = data.filter(item => item.label === label);
   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
   const startIdx = (page - 1) * itemsPerPage;
   const endIdx = startIdx + itemsPerPage;
   const displayeddata = filteredData.slice(startIdx, endIdx);

   const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
     setPage(value);
   };
   if (!data || data.length === 0) {
     return <div>Loading...</div>;
   }
   ///////// === slider range ===
   const handleFilterByCost = () => {
    const [minCost, maxCost] = values;
    const filteredArr = Data.filter(item => {
      const costNumber = getCostNumber(item.cost);
      return costNumber >= minCost && costNumber <= maxCost;
    });
    setData(filteredArr);
   }
   const handleChange = (event: Event, newValue: number | number[]) => {
    setValues(newValue as number[]);
   }

   return (
     <Catalog_con>
       <PagesName>
         <h3>Home</h3>
         <img src={home} alt="" />
         {filteredData.length > 0 && <h4>{filteredData[0].label}</h4>}
       </PagesName>

       <SortContainer className='SortContainer'>
        <button onClick={handleClick} className='inputs'>Sort by</button>
        <button onClick={handleSetClick} className='closeInputs'>close</button>
       </SortContainer>

       {openModal && (
       <Saidbar className="b">
         <div className="cart_con a">
           <h2>Price</h2>
           <hr />
           <Box sx={{ width: '100%' }}>
             <Slider
               value={values}
               onChange={handleChange}
               valueLabelDisplay="auto"
               valueLabelFormat={(values) => `$${values}`}
               min={50}
               max={1000}
               step={1}
               getAriaLabel={() => 'Price range'}
             />
           </Box>
           <div className="button_wrap">
             <div className="btn_wrap">
               <button onClick={() => alert(`Min Price: $${values[0]}`)}>${values[0]}</button>
             </div>
             <div className="btn_wrap">
               <button onClick={() => alert(`Min Price: $${values[1]}`)}>${values[1]}</button>
             </div>
             <div className="btn_wrap_b" onClick={handleSetClick}>
               <button onClick={handleFilterByCost}>OK</button>
             </div>
           </div>
         </div>

         <div className="cart_con g">
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

         <div className="cart_con c">
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

         <div className="cart_con d">
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

         <div className="cart_con e">
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
       )}

       <SlaiderContainer style={{padding:"0px"}}>
         <ImageGrid>
           {displayeddata.length > 0 ? (
              displayeddata.map((item, ind) => (
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
              ))
              ) : (
                <div className='Errors' style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px', color: 'red' }}>
                  hechnima yo !
                </div>
              )}

         </ImageGrid>

         <Stack spacing={1} style={{ marginTop: '20px' }}>
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
               value={values}
               onChange={handleChange}
               valueLabelDisplay="auto"
               valueLabelFormat={(values) => `$${values}`}
               min={50}
               max={1000}
               step={1}
               getAriaLabel={() => 'Price range'}
             />
           </Box>
           <div className="button_wrap">
             <div className="btn_wrap">
               <button onClick={() => alert(`Min Price: $${values[0]}`)}>${values[0]}</button>
             </div>
             <div className="btn_wrap">
               <button onClick={() => alert(`Min Price: $${values[1]}`)}>${values[1]}</button>
             </div>
             <div className="btn_wrap_b">
               <button onClick={handleFilterByCost}>OK</button>
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

