import { PagesName } from "../../MainPage2/catalog.page/catalog"
import { Chescout_Bottom, Chescout_Top, Chescout_containerWrapper, Chescout_one, Container_Chescout, Containre_Chescout_Content, Content_chesckout } from "../Cart/checkoutt"
import home from '../../../assets/home.svg'
import { Bottom_Container, DatailCart, Right_Container, Top_Container } from "../Cart/datail"
import { Navlink } from "../../styles/LINK"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Checkbox from '@mui/joy/Checkbox';
import { useState } from "react"
import { BottomBtn, ContainerP, Content } from "./profle.1"

interface NameT {
    name: string
}

const ProfilePassword = ( Props: NameT ) => {
    const [selected, setSelected] = useState('');
    const [rippleEffect, setRippleEffect] = useState(false);
  
    const handleChange = (value: string) => {
      setSelected(value);
      setRippleEffect(true);
      setTimeout(() => {
        setRippleEffect(false); 
      }, 600);
    };
  return (
    <Container_Chescout>
        <DatailCart>
        <PagesName style={{marginLeft:"15px"}}>
        <h3>Home</h3><img src={home} alt="img" /><h4>{Props.name}</h4> 
        </PagesName>

       <div className='cart_name'>Profile</div>

                <Chescout_containerWrapper className="Chescout_containerWrapper">
                    
                 <ContainerP className='Right_Container'>

                    <Content>
                    <div className='checkbox_wrap'>
                  <label style={{height:"30px"}}>
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
                        zIndex: 1,
                       width: "70px",
                       height: "20px",
                       display: "inline-block",
                       position: "relative",
                     }}
                     className=
                     {rippleEffect && selected === 'option1' ? "ripple-container rippl" : "ripple-container"} >
                     {selected === 'option1' && (
                    <span/>
                     )}
                  </span>
                  {selected === 'option1' && (
                     <h4 style={{
                        marginTop:"-25px",
                      color:"#32324D",
                      borderBottom:"2px solid #DBA514",
                      paddingBottom:"7px",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                     }}>Personal</h4>
                  )}
                  {selected === 'option1' || (
                     <h4 style={{
                        marginTop:"-25px",
                      color:"#AD8775",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                     }}>Personal</h4>
                  )}
                 
                  </label>
                    </div>

                    <div className='checkbox_wrap'>
                  <label style={{height:"30px"}}>
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
                    className={rippleEffect && selected === 'option2' ? "ripple-container rippl" : "ripple-container"}
                  >
                    {selected === 'option2' && (
                      <span
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                        }}
                      />
                    )}
                  </span>
                  {selected === 'option2' && (
                     <h4 style={{
                      marginTop:"-25px",
                      color:" #32324D",
                      paddingBottom:"7px",
                      borderBottom:"2px solid #DBA514",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                     }}>logout</h4>
                  )}
                  {selected === 'option2' || (
                     <h4 style={{
                      marginTop:"-25px",
                      color:"#AD8775",
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                     }}>logout</h4>
                  )}
                  </label>
                    </div>
                    </Content>

                  </ContainerP>

                <Containre_Chescout_Content className="Containre_Chescout_Content">

                    <Content_chesckout>
                    {/* <div className="h22"><h2>change password</h2></div> */}
                        <Chescout_Bottom>
                               <input className="labelvs" type="text" placeholder="change password"/>
                        </Chescout_Bottom>
                        <Chescout_Top className="Chescout_Top">
                            <Chescout_one className="Chescout_one">
                                <div className="LasName_Con d">
                                    <label className="labelv" htmlFor="first name">old password</label>
                                    <input type="text" placeholder="Johnathan" />
                                </div>
                                <div className="LasName_Con d">
                                    <label className="labels" htmlFor="phone">Forgot password?</label>
                                    <h3 className="texts">The strong password must contain <br /> uppercase and lowercase Latin letters <br /> and numbers. At least 6 characters</h3>
                                </div>
                            </Chescout_one>
                            <Chescout_one className="Chescout_one">
                                <div className="LasName_Con d">
                                    <label className="labelv" htmlFor="last name">new password</label>
                                    <input type="text" placeholder="Doeherty" />
                                </div>
                                <div className="LasName_Con d">
                                    <label className="labelv" htmlFor="email">repeat password</label>
                                    <input type="text" placeholder="customer_1995@gmail.com" />
                                </div>
                            </Chescout_one>
                        </Chescout_Top>

                        <BottomBtn>
                        <div className="buttonbtn"><button>change password</button></div>
                        <div className="btns is_btns"><button>cancel</button></div>
                    </BottomBtn>

                    </Content_chesckout>

                </Containre_Chescout_Content>

                 

                </Chescout_containerWrapper>
        </DatailCart>
    </Container_Chescout>
  )
}

export default ProfilePassword