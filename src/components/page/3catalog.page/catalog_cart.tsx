// import { Catalog_con, Saidbar } from "./catalog";
// import { useEffect, useState } from "react";
// import { SofasType } from "../../types/maintp";
// import { useParams } from "react-router-dom";
// import { Datailes } from "../../mock/2categories";
// import { TAbleDatail } from "../../mock/3table.datail";
// import { StorageDatail } from "../../mock/4storage.datail";
// import { SofasDatail } from "../../mock/1sofas.datail";
// import { BedsDatail } from "../../mock/5beds.datail";
// import { LightDatail } from "../../mock/6lighting.datail";
// import { TextilDatail } from "../../mock/7textiles.datail";
// import { DecorDatail } from "../../mock/8decor.datail";
// import { KitchenDatail } from "../../mock/9kitchen.datail";
// import { Navlink } from "../../styles/LINK";
// import Box from '@mui/joy/Box';
// import Slider from '@mui/joy/Slider';
// import * as React from 'react';
// import Checkbox from '@mui/joy/Checkbox';
// import SimpleSlider from "../../test/test.tse";

// function valueText(value: number) {
//   return `${value}°C`;
// }

// const Ssofar = () => {
//   const [value, setValue] = React.useState<number[]>([20, 37]);

//   const handleChange = (event: Event, newValue: number | number[]) => {
//     setValue(newValue as number[]);
//   };
//   const [data, setData] = useState<SofasType[] | null>(null);
//   const { id } = useParams<{ id: string }>(); 

//   useEffect(() => {
//     if (id === '1') {
//       setData(SofasDatail);
//     } else if (id === '2') {
//       setData(Datailes);
//     } else if (id === '3') {
//       setData(TAbleDatail);
//     } else if (id === '4') {
//       setData(StorageDatail);
//     } else if (id === '5') {
//       setData(BedsDatail);
//     } else if (id === '6') {
//       setData(LightDatail);
//     } else if (id === '7') {
//       setData(TextilDatail);
//     } else if (id === '8') {
//       setData(DecorDatail);
//     } else if (id === '9') {
//       setData(KitchenDatail);
//     } 
//   }, [id]);

//   return (
//     <Catalog_con>
//       <div className="cart_wrap">
//         <div className="img_con_wrap">
//           {data?.map((value, index) => (
//             <div key={index}>
//               <Navlink to={`/stul/${value.id}`}>
//                 <div className="img_cons">
//                   <img src={value.images} alt="" />
//                 </div>
//               </Navlink>
//             </div>
//           ))}
//         </div>
//         <div className="img_con_ wrap">
//           {data?.map((value, index) => (
//             <div key={index}>
//                <Navlink to={`/stul/${value.id}`}>
//                 <div className="img_cons">
//                   <img src={value.Assembly} alt="" />
//                 </div>
//               </Navlink>
//             </div>
//           ))}
//         </div>
//         <div className="img_con_ wrap">
//           {data?.map((value, index) => (
//             <div key={index}>
//                <Navlink to={`/stul/${value.id}`}>
//                 <div className="img_cons">
//                   <img src={value.images2} alt="" />
//                 </div>
//               </Navlink>
//             </div>
//           ))}
//         </div>
//         <div className="img_con_ wrap">
//           {data?.map((value, index) => (
//             <div key={index}>
//                <Navlink to={`/stul/${value.id}`}>
//                 <div className="img_cons">
//                   <img src={value.images2} alt="" />
//                 </div>
//               </Navlink>
//             </div>
//           ))}
//         </div>
//         <div className="img_con_ wrap">
//           {data?.map((value, index) => (
//             <div key={index}>
//                <Navlink to={`/stul/${value.id}`}>
//                 <div className="img_cons">
//                   <img src={value.images2} alt="" />
//                 </div>
//               </Navlink>
//             </div>
//           ))}
//         </div>
//         <div className="img_con_ wrap">
//           {data?.map((value, index) => (
//             <div key={index}>
//                <Navlink to={`/stul/${value.id}`}>
//                 <div className="img_cons">
//                   <img src={value.images2} alt="" />
//                 </div>
//               </Navlink>
//             </div>
//           ))}
//         </div>
//         <div className="img_con_ wrap">
//           {data?.map((value, index) => (
//             <div key={index}>
//                <Navlink to={`/stul/${value.id}`}>
//                 <div className="img_cons">
//                   <img src={value.images2} alt="" />
//                 </div>
//               </Navlink>
//             </div>
//           ))}
//         </div>
//         <div className="img_con_ wrap">
//           {data?.map((value, index) => (
//             <div key={index}>
//                <Navlink to={`/stul/${value.id}`}>
//                 <div className="img_cons">
//                   <img src={value.images2} alt="" />
//                 </div>
//               </Navlink>
//             </div>
//           ))}
//         </div>
//         <div className="img_con_ wrap">
//           {data?.map((value, index) => (
//             <div key={index}>
//                <Navlink to={`/stul/${value.id}`}>
//                 <div className="img_cons">
//                   <img src={value.images2} alt="" />
//                 </div>
//               </Navlink>
//             </div>
//           ))}
//         </div>
//       </div>


//       <Saidbar>
//         <div className="cart_con">
//         <h2>Price</h2>
//         <tr/>
//         <Box sx={{ width: "100%" }}>
//            <Slider
//              getAriaLabel={() => 'Temperature range'}
//              value={value}
//              onChange={handleChange}
//              valueLabelDisplay="auto"
//              getAriaValueText={valueText}
//             />
//          </Box>
//         <div className="button_wrap">
//          <div className="btn_wrap"><button>$??</button></div>
//          <div className="btn_wrap"><button>$??</button></div>
//          <div className="btn_wrap_b"><button>ok</button></div>
//         </div>
//         </div>
//         <div className="cart_con">
//         <h2>Price</h2>
//         <tr/>
//         <Box sx={{ display: 'grid', flexWrap: 'wrap', gap: 3,marginTop: 3 }}>
//         <Checkbox label="metal" color="warning" defaultChecked />
//         <Checkbox label="plastic" color="warning" defaultChecked />
//         <Checkbox label="leather" color="warning" defaultChecked />
//         <Checkbox label="marble" color="warning" defaultChecked />
//         <Checkbox label="glass" color="warning" defaultChecked />
//         <Checkbox label="rattan" color="warning" defaultChecked />
//         </Box>
//         </div>
//         <div className="cart_con">
//         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3,marginTop: 3 }}>
//           <Checkbox label="Primary" color="primary" defaultChecked />
//           <Checkbox label="Neutral" color="neutral" defaultChecked />
//           <Checkbox label="Danger" color="danger" defaultChecked />
//           <Checkbox label="Success" color="success" defaultChecked />
//           <Checkbox label="Warning" color="warning" defaultChecked />
//         </Box>
//         <h5>Show 8 more</h5>
//         </div>
//         <div className="cart_con">
//         <h2>collection</h2>
//         <tr/>
//         <Box sx={{ display: 'grid', flexWrap: 'wrap', gap: 3,marginTop: 3 }}>
//         <Checkbox label="minimalism" color="warning" defaultChecked />
//         <Checkbox label="eco style" color="warning" defaultChecked />
//         <Checkbox label="glam" color="warning" defaultChecked />
//         <Checkbox label="royal" color="warning" defaultChecked />
//         <Checkbox label="pink rose" color="warning" defaultChecked />
//         <Checkbox label="hi tech" color="warning" defaultChecked />
//         </Box>
//         <h5>Show 8 more</h5>
//         </div>
//         <div className="cart_con">
//         <h2>additional</h2>
//         <tr/>
//         <Box sx={{ display: 'grid', flexWrap: 'wrap', gap: 3,marginTop: 3 }}>
//         <Checkbox label="set" color="warning" defaultChecked />
//         <Checkbox label="eco combined" color="warning" defaultChecked />
//         <Checkbox label="transformer" color="warning" defaultChecked />
//         <Checkbox label="frameless" color="warning" defaultChecked />
//         </Box>
//         <h5>Show 8 more</h5>
//         </div>
//       </Saidbar>
//     </Catalog_con>
//   );
// };

// export default Ssofar;
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useParams } from 'react-router-dom';
import { SofasDatail } from '../../mock/1sofas.datail';
import { Datailes } from '../../mock/2categories';
import { TAbleDatail } from '../../mock/3table.datail';
import { StorageDatail } from '../../mock/4storage.datail';
import { BedsDatail } from '../../mock/5beds.datail';
import { LightDatail } from '../../mock/6lighting.datail';
import { TextilDatail } from '../../mock/7textiles.datail';
import { DecorDatail } from '../../mock/8decor.datail';
import { KitchenDatail } from '../../mock/9kitchen.datail';
import { SofasType, Tname } from '../../types/maintp';
import { Navlink } from '../../styles/LINK';
import { Catalog_con, Image, ImageContainer, ImageGrid, Imagecontent, PagesName, Saidbar, SlaiderContainer } from './catalog';
import { Box, Checkbox, Slider } from '@mui/joy';
import home from '../../../assets/home.svg'

const ITEMS_PER_PAGE = 16;

export default function Ssofar( Props: Tname ) {
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






