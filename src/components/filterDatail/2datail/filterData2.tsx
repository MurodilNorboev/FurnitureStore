import React, { useEffect, useReducer, useState } from 'react';
import { DataType, Tnames } from '../../types/maintp';
import { useParams } from 'react-router-dom';
import { Datail_1, Datail_2, Datail_3, Datail_4, Datail_container, LeftCon, MidlCon, RightCon } from './main.datail';
import { IconButton } from '@mui/joy';
import car from '../../../assets/car.svg';
import home from '../../../assets/home.svg';
import { Data } from '../../mock/mockDatail';
import { PagesName } from '../../MainPage2/catalog.page/catalog';

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
      
       <Datail_1>
        <div className='wrape'>
          <LeftCon>
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

           
          <MidlCon>
            {data?.map((val) => (<img 
            key={val.id} 
            src={val.images}
            alt={val.label} />))}
          </MidlCon>

        </div>
       </Datail_1>

        <Datail_1>
        <RightCon>
          <div className="right_cart">
           {data?.map((val) => (<h3 key={val.id}>{val.label}</h3>))}
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
                <button>Images</button>
              </div>
            </div>
          </div>
        </RightCon>
        </Datail_1>

      <Datail_2>

      </Datail_2>

      <Datail_3></Datail_3>
      <Datail_4></Datail_4>

    </Datail_container>
  );
};

export default DatailComponent;





















