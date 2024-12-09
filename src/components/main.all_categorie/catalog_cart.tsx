import React, { useState, useEffect } from 'react';
 import { Pagination, PaginationItem } from '@mui/material';
 import Stack from '@mui/material/Stack';
 import ArrowBackIcon from '@mui/icons-material/ArrowBack';
 import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
 import { Catalog_con, Image, ImageContainer, ImageGrid, Imagecontent, PagesName, Saidbar, SortContainer } from './catalog.page/catalog';
 import { Slider } from '@mui/joy';
 import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
 import home from '../../assets/home.svg';
 import { Data } from '../mock/mockDatail';
 import { useParams } from 'react-router-dom';
 import { Navlink } from '../styles/LINK';
 import { DataType, Tname } from '../types/maintp';
import { SlaiderContainer } from './categories';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Skeleton from '@mui/joy/Skeleton';
import './i.css';

export default function Ssofar(Props: Tname) {
  const ITEMS_PER_PAGE = 16;
  const [values, setValues] = useState([50, 1000]);
  const getCostNumber = (cost: string) => parseFloat(cost.replace('$', '').trim());
  const [page, setPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(ITEMS_PER_PAGE);
  const [imageVisible, setImageVisible] = useState<boolean>(false);
  const [data, setData] = useState<DataType[]>([]);
  const { label } = useParams<{ label: string }>();
  const [openModal, setOpenModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [filterState, setFilterState] = useState({
    color: '',
    metal: '',
    styles: '',
    feature: '',
  });
  
  const handleClick = () => {
    setOpenModal(true);
  };
  
  const handleSetClick = () => {
    setOpenModal(false);
  };
  
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
  
  const toggleSidebar = (open: boolean) => {
    setSidebarOpen(open);
  };
  
  useEffect(() => {
    toggleSidebar(true);
  }, []);
  
  const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  
  const handleFilterByCost = () => {
    const [minCost, maxCost] = values;
    const filteredArr = Data.filter(item => {
      const costNumber = getCostNumber(item.cost);
      return costNumber >= minCost && costNumber <= maxCost;
    });
    setData(filteredArr);
  };
  
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValues(newValue as number[]);
  };
  
  const handleCancelFilters = () => {
    setFilterState({
      color: '',
      metal: '',
      styles: '',
      feature: '',
    });
    setData(Data); 
  };

  const handleCheckboxChange = (type: keyof typeof filterState, value: string) => {
    const newFilter = { ...filterState };
  
    if (newFilter[type] === value) {
      newFilter[type] = ''; 
    } else {
      newFilter[type] = value;
    }
  
    setFilterState(newFilter);
    subFilterData(newFilter); 
  };
  
  const subFilterData = (filter: { color: string; metal: string; styles: string; feature: string }) => {
    let filteredArr = [...Data];
    const filteredLabelData = filteredArr.filter(item => item.label === label);

    if (filter.color) {
      filteredArr = filteredArr.filter(i => i.Color.toLowerCase() === filter.color.toLowerCase());
    }
    if (filter.metal) {
      filteredArr = filteredLabelData.filter(i => i.material === filter.metal);
    }
    if (filter.styles) {
      filteredArr = filteredArr.filter(i => i.Styles.toLowerCase() === filter.styles.toLowerCase());
    }
    if (filter.feature) {
      filteredArr = filteredArr.filter(i => i.Feature.toLowerCase() === filter.feature.toLowerCase());
    }
    if (!filter.color && !filter.metal && !filter.styles && !filter.feature) {
      filteredArr = Data.filter(item => item.label === label);  
    }
  
    setData(filteredArr);
    console.log("Filtered Data: ", filteredArr);
  };

  const filteredData = data.filter(item => item.label === label);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIdx = (page - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const displayedData = filteredData.slice(startIdx, endIdx);

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
               <div className="button_wrap aa">
                 <div className="btn_wrap">
                   <button onClick={() => alert(`Min Price: $${values[0]}`)}>${values[0]}</button>
                 </div>
                 <div className="btn_wrap">
                   <button onClick={() => alert(`Min Price: $${values[1]}`)}>${values[1]}</button>
                 </div>
                 <div className="btn_wrap_b aaa" onClick={handleCancelFilters}>
                   <button onClick={handleFilterByCost}>OK</button>
                 </div>
               </div>
             </div>
    
              <div className="cart_con g">
                <h2>Material</h2>
                <hr />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
                  <Checkbox  label="Metal" color="warning" onClick={() => handleCheckboxChange('metal', 'metal')} />
                  <Checkbox  label="Plastic" color="warning" onClick={() => handleCheckboxChange('metal', 'plastic')} />
                  <Checkbox  label="Leather" color="warning" onClick={() => handleCheckboxChange('metal', 'leather')} />
                  <Checkbox  label="Marble" color="warning" onClick={() => handleCheckboxChange('metal', 'marble')} />
                  <Checkbox  label="Glass" color="warning" onClick={() => handleCheckboxChange('metal', 'glass')} />
                  <Checkbox  label="Rattan" color="warning" onClick={() => handleCheckboxChange('metal', 'rattan')} />
                </Box>
              </div>
              
              <div className="cart_con c">
                <h2>Color</h2>
                <hr />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
                  <Checkbox  label="Primary" color="primary" onClick={() => handleCheckboxChange('color', 'primary')} />
                  <Checkbox  label="Neutral" color="neutral" onClick={() => handleCheckboxChange('color', 'neutral')} />
                  <Checkbox  label="Danger" color="danger" onClick={() => handleCheckboxChange('color', 'danger')} />
                  <Checkbox  label="Success" color="success" onClick={() => handleCheckboxChange('color', 'success')} />
                  <Checkbox  label="Warning" color="warning" onClick={() => handleCheckboxChange('color', 'warning')} />
                </Box>
              </div>
              
              <div className="cart_con d">
                <h2>Collection</h2>
                <hr />
                <Box sx={{ display: 'grid', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
                  <Checkbox  label="Minimalism" color="warning" onClick={() => handleCheckboxChange('styles', 'minimalism')} />
                  <Checkbox  label="Eco Style" color="warning" onClick={() => handleCheckboxChange('styles', 'ecoStyle')} />
                  <Checkbox  label="Glam" color="warning" onClick={() => handleCheckboxChange('styles', 'glam')} />
                  <Checkbox  label="Royal" color="warning" onClick={() => handleCheckboxChange('styles', 'royal')} />
                  <Checkbox  label="Pink Rose" color="warning" onClick={() => handleCheckboxChange('styles', 'pinkRose')} />
                  <Checkbox  label="Hi Tech" color="warning" onClick={() => handleCheckboxChange('styles', 'hiTech')} />
                </Box>
              </div>
              
              <div className="cart_con e">
                <h2>Additional</h2>
                <hr />
                <Box sx={{ display: 'grid', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
                  <Checkbox  label="Set" color="warning" onClick={() => handleCheckboxChange('feature', 'set')} />
                  <Checkbox  label="Eco Combined" color="warning" onClick={() => handleCheckboxChange('feature', 'ecoCombinend')} />
                  <Checkbox  label="Transformer" color="warning" onClick={() => handleCheckboxChange('feature', 'transformer')} />
                  <Checkbox  label="Frameless" color="warning" onClick={() => handleCheckboxChange('feature', 'frameless')} />
                </Box>
              </div>
       </Saidbar>

       )}

       <SlaiderContainer style={{padding:"0px"}}>
         <ImageGrid>
           {displayedData.length > 0 ? (
              displayedData.map((item, ind) => (
                <ImageContainer key={`${item.id} || ${item.label}`}>
                  <Navlink to={`/stul/${item.id}`}>
                    <Imagecontent>
                      {!imageVisible && (
                        <>
                          <Card variant="outlined" sx={{ width: 300,height:"30rem",position:"absolute",padding:"5px",border: "none" }}>
                          <AspectRatio minHeight="290px" >
                            <Skeleton>
                            </Skeleton>
                          </AspectRatio>
                          <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"}}>
                            <Typography level="h2" sx={{ height:"3px",marginBottom:"15px" }}>
                              <Skeleton>Yo</Skeleton>
                            </Typography>
                            <Typography level="h2" sx={{ fontSize: 'md', mb: 0.5 }}>
                              <Skeleton>Yosemit</Skeleton>
                            </Typography>
                            <Typography level="body-sm" >
                              <Skeleton >April</Skeleton>
                            </Typography>
                          </div>
                          </Card>
                        </>
                      )}
                        <Imagecontent>
                          <Image
                            className="Image"
                            src={item.images}
                            alt={`img-${ind + startIdx}`}
                            onLoad={() => {
                              setTimeout(() => setImageVisible(true), 5000);
                            }}
                            onMouseOver={(e) => (e.currentTarget.src = item.images2)}
                            onMouseOut={(e) => (e.currentTarget.src = item.images)}
                          />
                          <h6></h6>
                          <h5>{item.label}</h5>
                          <h4>{item.cost}</h4>
                        </Imagecontent>
                        <h6></h6>
                        <h5>{item.label}</h5>
                        <h4>{item.cost}</h4>
                    </Imagecontent>
                  </Navlink>
                </ImageContainer>
              ))
              ) : (
                <div className='Errors' style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px', color: 'red' }}>
                  hechnima yoq !
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
       
       {sidebarOpen && (
          <Saidbar className="Saidbar">
            {!imageVisible ?  (
              <div style={{height:"100vw", width:"210px", maxHeight:"1550px"}}>
    
              <Skeleton variant="text" level="h4" sx={{width:"70px", marginTop:"-5px",marginBottom:"17px"}} />
              
              <Skeleton variant="text" level="h4" sx={{width:"100%", height: "1px",marginTop:"0px", marginBottom:"30px"}} />
              
              <Skeleton variant="text" sx={{width:"100%", marginTop:"-5px",height: "15px", marginBottom:"18px"}} />
              
              <div style={{display:"flex",gap:"5px",marginBottom:"50px"}}>
              <Skeleton variant="text" level="h1" sx={{width:"100%",height:"50px"}} />
              <Skeleton variant="text" level="h1" sx={{width:"100%",height:"50px"}} />
              <Skeleton variant="text" level="h1" sx={{width:"100%",height:"50px"}} />
              </div>
    
              <Skeleton variant="text" level="h4" sx={{width:"120px",marginBottom:"10px"}} />
    
              <Skeleton variant="text" level="h4" sx={{width:"100%", height: "1px",marginBottom:"32px"}} />
    
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"60px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"80px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"85px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"80px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"60px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"45px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"70px"}} />
              </div>
    
              <Skeleton variant="text" level="h4" sx={{width:"80px",marginBottom:"10px"}} />
    
              <Skeleton variant="text" level="h4" sx={{width:"100%", height: "1px",marginTop:"0px", marginBottom:"33px"}} />
    
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"80px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"80px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"75px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"80px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"85px"}} />
              </div>
    
              <Skeleton variant="text" level="h4" sx={{width:"80px",marginBottom:"10px"}} />
    
              <Skeleton variant="text" level="h4" sx={{width:"100%", height: "1px",marginTop:"0px", marginBottom:"33px"}} />
    
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"80px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"80px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"75px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"80px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"85px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"85px"}} />
              </div>
    
              <Skeleton variant="text" level="h4" sx={{width:"80px",marginBottom:"10px"}} />
    
              <Skeleton variant="text" level="h4" sx={{width:"100%", height: "1px",marginTop:"0px", marginBottom:"33px"}} />
    
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"80px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"80px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"75px"}} />
              </div>
              <div style={{display:"flex",gap:"10px",marginBottom:"14px"}}>
              <Skeleton variant="text" level="h4" sx={{width:"20px"}} />
              <Skeleton variant="text" level="h4" sx={{width:"80px"}} />
              </div>
    
              </div>
            )
            :
            (
            <>
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
               <div className="button_wrap aa">
                 <div className="btn_wrap">
                   <button onClick={() => alert(`Min Price: $${values[0]}`)}>${values[0]}</button>
                 </div>
                 <div className="btn_wrap">
                   <button onClick={() => alert(`Min Price: $${values[1]}`)}>${values[1]}</button>
                 </div>
                 <div className="btn_wrap_b aaa" onClick={handleCancelFilters}>
                   <button onClick={handleFilterByCost}>OK</button>
                 </div>
               </div>
             </div>
    
              <div className="cart_con">
                <h2>Material</h2>
                <hr />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
                  <Checkbox  label="Metal" color="warning" onClick={() => handleCheckboxChange('metal', 'metal')} />
                  <Checkbox  label="Plastic" color="warning" onClick={() => handleCheckboxChange('metal', 'plastic')} />
                  <Checkbox  label="Leather" color="warning" onClick={() => handleCheckboxChange('metal', 'leather')} />
                  <Checkbox  label="Marble" color="warning" onClick={() => handleCheckboxChange('metal', 'marble')} />
                  <Checkbox  label="Glass" color="warning" onClick={() => handleCheckboxChange('metal', 'glass')} />
                  <Checkbox  label="Rattan" color="warning" onClick={() => handleCheckboxChange('metal', 'rattan')} />
                </Box>
              </div>
              
              <div className="cart_con">
                <h2>Color</h2>
                <hr />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
                  <Checkbox  label="Primary" color="primary" onClick={() => handleCheckboxChange('color', 'primary')} />
                  <Checkbox  label="Neutral" color="neutral" onClick={() => handleCheckboxChange('color', 'neutral')} />
                  <Checkbox  label="Danger" color="danger" onClick={() => handleCheckboxChange('color', 'danger')} />
                  <Checkbox  label="Success" color="success" onClick={() => handleCheckboxChange('color', 'success')} />
                  <Checkbox  label="Warning" color="warning" onClick={() => handleCheckboxChange('color', 'warning')} />
                </Box>
              </div>
              
              <div className="cart_con">
                <h2>Collection</h2>
                <hr />
                <Box sx={{ display: 'grid', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
                  <Checkbox  label="Minimalism" color="warning" onClick={() => handleCheckboxChange('styles', 'minimalism')} />
                  <Checkbox  label="Eco Style" color="warning" onClick={() => handleCheckboxChange('styles', 'ecoStyle')} />
                  <Checkbox  label="Glam" color="warning" onClick={() => handleCheckboxChange('styles', 'glam')} />
                  <Checkbox  label="Royal" color="warning" onClick={() => handleCheckboxChange('styles', 'royal')} />
                  <Checkbox  label="Pink Rose" color="warning" onClick={() => handleCheckboxChange('styles', 'pinkRose')} />
                  <Checkbox  label="Hi Tech" color="warning" onClick={() => handleCheckboxChange('styles', 'hiTech')} />
                </Box>
              </div>
              
              <div className="cart_con">
                <h2>Additional</h2>
                <hr />
                <Box sx={{ display: 'grid', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
                  <Checkbox  label="Set" color="warning" onClick={() => handleCheckboxChange('feature', 'set')} />
                  <Checkbox  label="Eco Combined" color="warning" onClick={() => handleCheckboxChange('feature', 'ecoCombinend')} />
                  <Checkbox  label="Transformer" color="warning" onClick={() => handleCheckboxChange('feature', 'transformer')} />
                  <Checkbox  label="Frameless" color="warning" onClick={() => handleCheckboxChange('feature', 'frameless')} />
                </Box>
              </div>
            </> 
            )
            }
                       
          </Saidbar>
       )}
                 
     </Catalog_con>
   );
 
}
