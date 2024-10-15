import React, { useEffect, useReducer, useState } from 'react';
import { SofasType } from '../../types/maintp';
import { useParams } from 'react-router-dom';
import { SofasDatail } from '../../mock/1sofas.datail';
import { Datail_container } from './main.datail';

interface Tprops {
  count: number; 
}
interface Ttype {
  type: 'increment' | 'decrement' | 'refresh'; 
  payload?: number;
}
const initialState: Tprops = { count: 0 }; 
function reducer(state: Tprops, action: Ttype): Tprops {
  switch (action.type) {
    case 'increment':
      return { count: state.count + (action.payload || 0 ) };
    case 'decrement':
      return { count: Math.max(0, state.count - (action.payload || 1)) };
    case 'refresh':
      return { count: 0 }; break
    default:
      return state;
  }
}

const DatailComponent: React.FC = () => {
  const [ state, dispatch ] = useReducer( reducer, initialState );
  const [liked, setLiked] = useState(false);
  const handleLikeClick = () => {
    setLiked(!liked); 
  };

  const { id } = useParams();
  const [data, setData] = useState<SofasType[] | null>(null);
  useEffect(() => {
    setData(SofasDatail); 
  }, []); 
  const parsedId = id ? parseInt(id) : 0;
  const filterData = data ? data.filter(value => value.id === parsedId ) : [];

  return (
    <Datail_container>
      {filterData?.map((value) => (
        <div key={value.id}>
          <img src={value.images} alt="" />
        </div>
      ))}
    </Datail_container>
  );
};

export default DatailComponent;


    // const { id } = useParams();
    // const [data, setData] = useState<SofasType[] | null>(null);
    // useEffect(() => { setData(SofasDatail); }, []); 
    // const parsedId = id ? parseInt(id) : 0;
    // const filterDatas = data ? data.filter(value => value.id === parsedId ) : [];


// interface Tprops {
//   count: number; 
// }
// interface Ttype {
//   type: 'increment' | 'decrement' | 'refresh'; 
//   payload?: number;
// }
// const initialState: Tprops = { count: 0 }; 
// function reducer(state: Tprops, action: Ttype): Tprops {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + (action.payload || 0 ) };
//     case 'decrement':
//       return { count: Math.max(0, state.count - (action.payload || 1)) };
//     case 'refresh':
//       return { count: 0 }; break
//     default:
//       return state;
//   }
// }

    {/* <Datail_container>

      <Datail_1>
        <div className='wrape'>
          <LeftCon>
          <div className="left_datail"></div>
          <div className="left_datail"></div>
          <div className="left_datail"></div>
          <div className="left_datail"></div>
          <div className="left_datail"></div>
        </LeftCon>

        < MidlCon>
          <img src="https://imgcomfort.com.au/wp-content/uploads/2024/04/Zani-End-Table-Stool.jpg" alt="" />
        </ MidlCon>
        </div>
        
        <RightCon>
          <div className="right_cart">
              <h6></h6>
              <h3>cesil micro velvet chair</h3>
              <div className='wrap_text'>
                <img src="" alt="" />   <h5>3 reviews</h5>
              </div>
          </div>

          <tr className='line'/>

          <div className="right_cart">
               <div className='midl_wrap'>
                    <div className="div1">
                         <div className='h2'>Color</div>
                         <div className='img_wrap_colorCon'>
                            <div className="images">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPJYMEuPF7I2PSNFBO0lGySWasSncNgdMaMgKHp_X6JIEoe_NhGDnKny8TjVCz0haaic&usqp=CAU" alt="" />
                            </div>
                            <div className="images">
                              <img src="https://d6qwfb5pdou4u.cloudfront.net/product-images/6780001-6790000/6786905/8d1bab4b11ac76b229c181cc69cd040aad44959c7b46a51155b86f015b4536db/500-500-crop-0.jpg" alt="" />
                            </div>
                            <div className="images">
                              <img src="https://assets.rjimgs.com/rjimgs/rk/images/dp/wcm/202427/0167/img68j.jpg" alt="" />
                            </div>
                         </div>
                    </div>
                    <div className="div1">
                         <div className='h2'>dimensions</div>
                         <div className='img_wrap_colorCon'>
                             <div className='texte1'>W:75 х H:82 cm</div>
                             <div className='texte2'>W:120 х H:100 cm</div>
                         </div>
                         
                    </div>
                    <div className="div1">
                         <div className='h2'>dimensions</div>
                         <div className='img_wrap_colorCon'>
                         <IconButton className='buttons' onClick={() => dispatch({type: 'decrement',payload: 1 })}>-</IconButton>
                         <p className='p_count'>{state.count}</p>
                         <IconButton className='buttons' onClick={() => dispatch({ type: 'increment',payload: 1 })}>+</IconButton> 
                         </div>
                    </div>
               </div>
          </div>

          <tr className='line'/>
                
          <div className="right_cart">
            <div className="bottom_Con">
                     <div className="cost">
                      <div className='h3'>$600</div>
                      <div className='h2'>$675</div>
                     </div>

                     <div className='row_line'> </div>

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
                        <button onClick={handleLikeClick} >
                           {liked ? '❤️' : <img src={like} alt="" />}
                        </button>
                    </div>
                </div>
          </div>
        </RightCon>
      </Datail_1>

      <Datail_2></Datail_2>

      <Datail_3></Datail_3>

      <Datail_4></Datail_4>

    </Datail_container> */}