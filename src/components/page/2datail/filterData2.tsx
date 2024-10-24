import React, { useEffect, useReducer, useState } from 'react';
import { SofasType, Tnames } from '../../types/maintp';
import { useParams } from 'react-router-dom';
import { SofasDatail } from '../../mock/1sofas.datail';
import { Datail_1, Datail_2, Datail_3, Datail_4, Datail_container, LeftCon, MidlCon, RightCon } from './main.datail';
import { IconButton } from '@mui/joy';
import car from '../../../assets/car.svg';
import { PagesName } from '../3catalog.page/catalog';
import home from '../../../assets/home.svg';
import { mockDatail, mockDatailType } from '../../mock/navbarDatail/navbar.mock';
import { Datailes } from '../../mock/2categories';
import { TAbleDatail } from '../../mock/3table.datail';
import { StorageDatail } from '../../mock/4storage.datail';
import { BedsDatail } from '../../mock/5beds.datail';
import { LightDatail } from '../../mock/6lighting.datail';
import { TextilDatail } from '../../mock/7textiles.datail';
import { DecorDatail } from '../../mock/8decor.datail';
import { KitchenDatail } from '../../mock/9kitchen.datail';

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
      return { count: Math.max(0, state.count - (action.payload || 1)) };
    case 'refresh':
      return { count: 0 }; 
    default:
      return state;
  }
}

const DatailComponent: React.FC<Tnames> = ({ name, names }) => {
  const { label } = useParams<{ label: string }>();
  const [datas, setdatas] = useState<mockDatailType | null>(null);
  
  useEffect(() => {
    const selectedData = mockDatail.find(item => item.label.toLowerCase() === label?.toLowerCase());
    setdatas(selectedData || null);
  }, [label]);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState<SofasType[]>([]);
  
  useEffect(() => {
    const allData = [
      SofasDatail,
      Datailes,
      TAbleDatail,
      StorageDatail,
      BedsDatail,
      LightDatail,
      TextilDatail,
      DecorDatail,
      KitchenDatail,
    ].flat();
    setData(allData);
  }, []);

  const { id } = useParams<{ id: string }>();
  const parsedId = id ? parseInt(id, 10) : 0;

  const item = data.find(i => i.id === parsedId);
  
  if (!item) return <p>Item not found</p>;

  return (
    <Datail_container>
      <PagesName>
        <h3>Home</h3>
        <img src={home} alt="img" />
        <h3>{names}</h3>
        <img src={home} alt="img" />
        <h4>{name}</h4>
      </PagesName>
      
      <Datail_1>
        <div className='wrape'>
          <LeftCon>
            <div className="left_datail">
              <img src={item.images2} alt="" />
              <img src={item.images3} alt="" />
              <img src={item.images4} alt="" />
              <img src={item.image5} alt="" />
              <iframe src={item.videos1} title="Video" />
            </div>
          </LeftCon>

          <MidlCon>
            <img src={item.images} alt={item.label} />
          </MidlCon>
        </div>
        
        <RightCon>
          <div className="right_cart">
            <h6></h6>
            <h3>{item.label}</h3>
            <div className='wrap_text'>
              <img src="" alt="" /> <h5>3 reviews</h5>
            </div>
          </div>

          <div className='line'/>

          <div className="right_cart">
            <div className='midl_wrap'>
              <div className="div1">
                <div className='h2'>Color</div>
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

          <div className='line'/>
          <div className="right_cart">
            <div className="bottom_Con">
              <div className='cost'>
                <div className='h3'>${item.cost}</div>
                <div className='h2'>$675</div>
              </div>
              <div className='row_line'></div>
              <div className="cost">
                <div className='car_wrep'>
                  <img src={car} alt="car" />
                  <h3>Free delivery from $1 000</h3>
                </div>
              </div>
            </div>

            <div className="bottom_Con">
              <div className='cons_btn'><button>add to cart</button></div>
              <div className='cons_btn_like'>
                <button>images</button>
              </div>
            </div>
          </div>
        </RightCon>
      </Datail_1>
      
      <Datail_2></Datail_2>
      <Datail_3></Datail_3>
      <Datail_4></Datail_4>
    </Datail_container>
  );
};

export default DatailComponent;
