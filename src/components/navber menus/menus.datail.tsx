// import { useEffect, useState } from "react"
// import { mockDatail, mockDatailType } from "../mock/navbarDatail/navbar.mock"


// const DatailMenusID = () => {
//     const [ data, setdata ] =useState<mockDatailType[] | null>(null);

//     useEffect(() => {
//         setdata(data);
//     }, [])
//   return (
//     <div>
//         {data?.map((val, ind) => (
//             <div key={ind}>
//                 <h1>{val.label}</h1>
//             </div>
//         ))}
//     </div>
//   )
// }

// export default DatailMenusID

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
import { SofasType, Tname } from '../types/maintp';
import { Navlink } from '../styles/LINK';
import { Catalog_con, Image, ImageContainer, ImageGrid, Imagecontent, PagesName, Saidbar, SlaiderContainer } from '../page/3catalog.page/catalog';
import { Box, Checkbox, Slider } from '@mui/joy';
import home from '../../assets/home.svg'

const ITEMS_PER_PAGE = 16;

export default function DatailMenusID( Props: Tname ) {
  const [value, setValue] = useState<number[]>([20, 37]);
  const [data, setData] = useState<SofasType[]>([]);
  const { id } = useParams();
  const [page, setPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(ITEMS_PER_PAGE);

  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
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
      } else if (width <= 1500) {
        setItemsPerPage(16);
      } else {
        setItemsPerPage(20);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial resize check

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const valueText = (value: number) => `${value}°C`; 
  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  const startIdx = (page - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const displayedImages = data.slice(startIdx, endIdx);

  return (
    <Catalog_con>

      <PagesName>
        <h3>Home</h3><img src={home} alt="" /><h4>{Props.name}</h4>
      </PagesName>

      <SlaiderContainer>
      <ImageGrid>
        {displayedImages.map((item, index) => (
          <ImageContainer key={index}>
            <Navlink to={`/stul/${item.id}`}>
              <Imagecontent>
              <Image
                src={item.images}
                alt={`img-${index + startIdx}`}
                onMouseOver={(e) => (e.currentTarget.src = data[(index + 1) % data.length].images)}
                onMouseOut={(e) => (e.currentTarget.src = item.images)}
              />
              <h6></h6>
              <h5>{item.Name}</h5>
              <h4>{item.cost} {item.cost}</h4>
              </Imagecontent>
            </Navlink>
          </ImageContainer>
        ))}
      </ImageGrid>
      

      <Stack spacing={2} style={{ marginTop: '20px' }}>
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
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

        <Saidbar className='Saidbar'>
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