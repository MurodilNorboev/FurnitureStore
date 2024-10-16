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

import { Catalog_con, Saidbar } from "./catalog";
import { useEffect, useState } from "react";
import { SofasType } from "../../types/maintp";
import { useParams } from "react-router-dom";
import { Datailes } from "../../mock/2categories";
import { TAbleDatail } from "../../mock/3table.datail";
import { StorageDatail } from "../../mock/4storage.datail";
import { SofasDatail } from "../../mock/1sofas.datail";
import { BedsDatail } from "../../mock/5beds.datail";
import { LightDatail } from "../../mock/6lighting.datail";
import { TextilDatail } from "../../mock/7textiles.datail";
import { DecorDatail } from "../../mock/8decor.datail";
import { KitchenDatail } from "../../mock/9kitchen.datail";
import { Navlink } from "../../styles/LINK";
import React from "react";
import Slider from "react-slick";
import './cataalog.css'

interface ResponsiveSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  initialSlide: number;
  responsive: {
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
      infinite?: boolean;
      dots?: boolean;
      initialSlide?: number;
    };
  }[];
}
const Ssofar: React.FC = () => {
    const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const [data, setData] = useState<SofasType[] | null>(null);
  const { id } = useParams<{ id: string }>(); 

  useEffect(() => {
    if (id === '1') {
      setData(SofasDatail);
    } else if (id === '2') {
      setData(Datailes);
    } else if (id === '3') {
      setData(TAbleDatail);
    } else if (id === '4') {
      setData(StorageDatail);
    } else if (id === '5') {
      setData(BedsDatail);
    } else if (id === '6') {
      setData(LightDatail);
    } else if (id === '7') {
      setData(TextilDatail);
    } else if (id === '8') {
      setData(DecorDatail);
    } else if (id === '9') {
      setData(KitchenDatail);
    } 
  }, [id]);


  const settings: ResponsiveSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{paddingTop:"90px"}} className="slider-container">
      <Slider {...settings}>

        <div style={{display:"flex",width:"900px",overflow:"scroll"}}>
        <div className="img_con_wrap">
           {data?.map((value, index) => (
            <div key={index}>
              <Navlink to={`/stul/${value.id}`}>
                <div className="img_cons">
                  <img src={value.images} alt="" />
                </div>
              </Navlink>
            </div>
          ))}
        </div>
        1
        </div>

        <div style={{display:"flex",width:"900px",overflow:"scroll"}}>
        <div className="img_con_wrap">
           {data?.map((value, index) => (
            <div key={index}>
              <Navlink to={`/stul/${value.id}`}>
                <div className="img_cons">
                  <img src={value.images} alt="" />
                </div>
              </Navlink>
            </div>
          ))}
        </div>
        2
        </div>

        <div style={{display:"flex",width:"900px",overflow:"scroll"}}>
        <div className="img_con_wrap">
           {data?.map((value, index) => (
            <div key={index}>
              <Navlink to={`/stul/${value.id}`}>
                <div className="img_cons">
                  <img src={value.images} alt="" />
                </div>
              </Navlink>
            </div>
          ))}
        </div>
        2
        </div>

        <div style={{display:"flex",width:"900px",overflow:"scroll"}}>
        <div className="img_con_wrap">
           {data?.map((value, index) => (
            <div key={index}>
              <Navlink to={`/stul/${value.id}`}>
                <div className="img_cons">
                  <img src={value.images} alt="" />
                </div>
              </Navlink>
            </div>
          ))}
        </div>
        2
        </div>

        <div style={{display:"flex",width:"900px",overflow:"scroll"}}>
        <div className="img_con_wrap">
           {data?.map((value, index) => (
            <div key={index}>
              <Navlink to={`/stul/${value.id}`}>
                <div className="img_cons">
                  <img src={value.images} alt="" />
                </div>
              </Navlink>
            </div>
          ))}
        </div>
        2
        </div>

      </Slider>
    </div>
  );
};

export default Ssofar;





