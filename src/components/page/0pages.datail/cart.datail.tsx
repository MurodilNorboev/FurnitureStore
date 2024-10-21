import React, { useEffect, useReducer, useState } from 'react'
import { Bottom_Container, CartContainer, CartContainerWrapper, CartContent, DatailCart, LeftContent, RightContent, Right_Container, Top_Container } from './datail';
import dlete from '../../../assets/delete.svg'
import { IconButton } from '@mui/material';
import { PagesName } from '../3catalog.page/catalog';
import home from '../../../assets/home.svg'
import './cartc.css'
import { Navlink } from '../../styles/LINK';

interface Name {
  name: string;
}
interface interP {
  count: number;
}
interface interT {
  type: 'increment' | 'decrement';
  payload?: number;
}
const interProps: interP = { count: 0 };

function reducer( state:interP, action: interT ) {
  switch(action.type) {
    case 'increment': 
    return { count: state.count + (action.payload || 0)};
    case 'decrement':
      return { count: Math.max(0, state.count - (action.payload || 0))};
      default : 
      return { count: 0}
  }
}
const CartDatail = (Props: Name) => {
  const [selected, setSelected] = useState('');
  const [rippleEffect, setRippleEffect] = useState(false);

  const handleChange = (value: string) => {
    setSelected(value);
    setRippleEffect(true);
    setTimeout(() => {
      setRippleEffect(false); 
    }, 600);
  };

  const [ state, dispatch ] = useReducer( reducer, interProps );
  return (
    <DatailCart>

      <PagesName style={{marginLeft:"15px"}}>
        <h3>Home</h3><img src={home} alt="img" /><h4>{Props.name}</h4> 
      </PagesName>

      <div className='cart_name'>Cart</div>

      <CartContainerWrapper>
        <CartContainer className='CartContainer'>

        <CartContent className='CartContent'>
          <LeftContent><img src="" alt="cart-img" /></LeftContent>
          <RightContent className='RightContent'>
            <div className="content_Cart">
                  <h4>coffee table</h4>
                  <h6>gold</h6>
                  <h6>50 sm х 30 sm</h6>
            </div>
            <div className="content_Cart a">
              <h5>$3 500</h5>
            </div>

            <div className='nastroyki_btn'>
            <div className="content_Cart_sl">
              <div className="content_btn">
                <IconButton onClick={() => dispatch({type: 'decrement',payload: 1})}>
                  -
                </IconButton>
              </div>
              <p>{state.count}</p>
              <div className="content_btn">
                <IconButton onClick={() => dispatch({type: 'increment', payload: 1})}>
                  +
                </IconButton>
              </div>
            </div> 
              <div className="content_Cart_dlete l">
              <IconButton><img src={dlete} alt="delete" /></IconButton>
              </div>
              </div>

            <div className="content_Cart a">
              <h5>$7 000</h5>
            </div>
            <div className="content_Cart_dlete a">
              <IconButton><img src={dlete} alt="delete" /></IconButton>
            </div>
          </RightContent>
        </CartContent>

       <h3 className='tr'></h3>

        <CartContent className='CartContent'>
          <LeftContent><img src="" alt="cart-img" /></LeftContent>
          <RightContent className='RightContent'>
            <div className="content_Cart">
                  <h4>combined table</h4>
                  <h6>black</h6>
                  <h6>50 sm х 30 sm</h6>
            </div>
            <div className="content_Cart a">
              <h5>$100</h5>
            </div>

            <div className='nastroyki_btn'>
            <div className="content_Cart_sl">
              <div className="content_btn">
                <IconButton onClick={() => dispatch({type: 'decrement',payload: 1})}>
                  -
                </IconButton>
              </div>
              <p>{state.count}</p>
              <div className="content_btn">
                <IconButton onClick={() => dispatch({type: 'increment', payload: 1})}>
                  +
                </IconButton>
              </div>
            </div>
            <div className="content_Cart_dlete l">
              <IconButton><img src={dlete} alt="delete" /></IconButton>
            </div>
            </div>

            <div className="content_Cart a">
              <h5>$300</h5>
            </div>
            <div className="content_Cart_dlete a">
              <IconButton><img src={dlete} alt="delete" /></IconButton>
            </div>
          </RightContent>
        </CartContent>

       <h3 className='trs'></h3>

        <CartContent className='CartContent'>

          <div className="content_input_wrap">
          <input type="text" placeholder='Coupon' className='inputt'/>
          <input type="submit" value={"Apply"} className='submit'/>
          </div>
 
          <div className="content_update_bt">
            <button>update cart</button>
          </div>
        </CartContent>

        </CartContainer>

        <Right_Container className='Right_Container'>
          <Top_Container>
            <h2>Cart totals</h2>
          </Top_Container>
          <Bottom_Container>
            <h3>Shipping method</h3>
            <div className='checkbox_Container'>

            <div className='checkbox_wrap'>
                  <label>
                 <input
                   type="radio"
          name="customRadio"
          value="option1"
          checked={selected === 'option1'}
          onChange={() => handleChange('option1')}
          style={{
            opacity: 0,
            position: "absolute",
                   }}
                    />
                  <span
                     style={{
                       width: "20px",
                       height: "20px",
                       border: "1px solid #DBA514",
                       borderRadius: "50%",
                       display: "inline-block",
                       position: "relative",
                       overflow: "hidden",
                     }}
                     className=
                     {rippleEffect && selected === 'option1' ? "ripple-container ripple" : "ripple-container"} >
                     {selected === 'option1' && (
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: "#DBA514",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}/>
                     )}
                  </span>
                  {selected === 'option1' && (
                     <h4 style={{
                      marginBottom: "-1px",
                      color:"#32324D",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                     }}>Fedex ($15)</h4>
                  )}
                  {selected === 'option1' || (
                     <h4 style={{
                      marginBottom: "-1px",
                      color:"#AD8775",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                     }}>Fedex ($15)</h4>
                  )}
                 
                  </label>
            </div>
            
            <div className='checkbox_wrap'>
                  <label>
                  <input
                    type="radio"
                    name="customRadio"
                    value="option2"
                    checked={selected === 'option2'}
                    onChange={() => handleChange('option2')}
                    style={{
                      opacity: 0,
                      position: "absolute",
                    }}
                  />
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "1px solid #DBA514",
                      borderRadius: "50%",
                      display: "inline-block",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    className={rippleEffect && selected === 'option2' ? "ripple-container ripple" : "ripple-container"}
                  >
                    {selected === 'option2' && (
                      <span
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "#DBA514",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    )}
                  </span>
                  {selected === 'option2' && (
                     <h4 style={{
                      marginBottom: "-1px",
                      color:"#32324D",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                     }}>Self pickup (free)</h4>
                  )}
                  {selected === 'option2' || (
                     <h4 style={{
                      marginBottom: "-1px",
                      color:"#AD8775",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                     }}>Self pickup (free)</h4>
                  )}
                  </label>
            </div>

            </div>

            <h3 style={{marginTop:"35px"}}>payment method</h3>
            <div className='checkbox_Container'>
              {/* /// tepa */}
            <div className='checkbox_wrap'>
                  <label>
                 <input
                   type="radio"
                     name="customRadio"
                     value="option3"
                     checked={selected === 'option3'}
                     onChange={() => handleChange('option3')}
                     style={{
                       opacity: 0,
                       position: "absolute",
                   }}
                    />
                  <span
                     style={{
                       width: "20px",
                       height: "20px",
                       border: "1px solid #DBA514",
                       borderRadius: "50%",
                       display: "inline-block",
                       position: "relative",
                       overflow: "hidden",
                     }}
                     className={rippleEffect && selected === 'option3' ? "ripple-container ripple" : "ripple-container"} >
                     {selected === 'option3' && (
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: "#DBA514",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}/>
                     )}
                  </span>
                  {selected === 'option3' && (
                     <h4 style={{
                      marginBottom: "-1px",
                      color:"#32324D",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                     }}>cash on delivery</h4>
                  )}
                  {selected === 'option3' || (
                     <h4 style={{
                      marginBottom: "-1px",
                      color:"#AD8775",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                     }}>cash on delivery</h4>
                  )}
                 
                  </label>
            </div> 

            {/* // past  */}
            <div className='checkbox_wrap'>
                  <label>
                  <input
                    type="radio"
                    name="customRadio"
                    value="option2"
                    checked={selected === 'option4'}
                    onChange={() => handleChange('option4')}
                    style={{
                      opacity: 0,
                      position: "absolute",
                    }}
                  />
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "1px solid #DBA514",
                      borderRadius: "50%",
                      display: "inline-block",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    className={rippleEffect && selected === 'option4' ? "ripple-container ripple" : "ripple-containe"}
                  >
                    {selected === 'option4' && (
                      <span
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: "#DBA514",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    )}
                  </span>
                  {selected === 'option4' && (
                     <h4 style={{
                      marginBottom: "-1px",
                      color:"#32324D",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                     }}>Visa/mastercard</h4>
                  )}
                  {selected === 'option4' || (
                     <h4 style={{
                      marginBottom: "-1px",
                      color:"#AD8775",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                     }}>Visa/mastercard</h4>
                  )}
                  </label>
            </div>

            </div>

            <div className='bottom_wrape'>
              <div className="cost"><h5>Delivery</h5><h5>$0</h5></div>
              <div className="cost"><h5>subtotal</h5><h5>$11 500</h5></div>
              <div className="cost"><h4>total</h4><h4>$11 500</h4></div>
              <Navlink to={"/chekout"}>
              <div className="btn_wrape">
                <button>proceed to checkout <img src="" alt="" /></button>
              </div>
              </Navlink>
            </div>
            
          </Bottom_Container>
        </Right_Container>
      </CartContainerWrapper>

    </DatailCart>
  )
}

export default CartDatail


