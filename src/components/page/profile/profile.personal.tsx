import { PagesName } from "../3catalog.page/catalog"
import { Chescout_Bottom, Chescout_Top, Chescout_containerWrapper, Chescout_one, Container_Chescout, Containre_Chescout_Content, Content_chesckout } from "../0pages.datail/checkoutt"
import home from '../../../assets/home.svg'
import { Bottom_Container, DatailCart, Right_Container, Top_Container } from "../0pages.datail/datail"
import { Navlink } from "../../styles/LINK"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Checkbox from '@mui/joy/Checkbox';
import { ContainerP, Content } from "./profle.1"
import { useState } from "react";

interface NameT {
    name: string
}

const ProfilePersonal = ( Props: NameT) => {
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
                    <div className="h22"><h2>personal info</h2></div>

                        <Chescout_Top className="Chescout_Top">
                            <Chescout_one className="Chescout_one">
                                <div className="LasName_Con d">
                                    <label htmlFor="first name">first name</label>
                                    <input type="text" placeholder="Johnathan" />
                                </div>
                                <div className="LasName_Con d">
                                    <label htmlFor="phone">phone</label>
                                    <input type="text" placeholder="+4 098 677 67 26" />
                                </div>
                            </Chescout_one>
                            <Chescout_one className="Chescout_one">
                                <div className="LasName_Con d">
                                    <label htmlFor="last name">last name</label>
                                    <input type="text" placeholder="Doeherty" />
                                </div>
                                <div className="LasName_Con d">
                                    <label htmlFor="email">email</label>
                                    <input type="text" placeholder="customer_1995@gmail.com" />
                                </div>
                            </Chescout_one>
                        </Chescout_Top>
                        <Chescout_Bottom>
                                <Checkbox label="Warning" color="warning" />
                                <h4>don’t call me</h4>
                        </Chescout_Bottom>
                    <tr />
                    <div className="h22"><h2>delivery</h2></div>
                        <Chescout_Top className="Chescout_Top">
                            <Chescout_one className="Chescout_one">
                                <div className="LasName_Con">
                                    <Accordion className="Accordion" sx={{
                                        boxShadow:"none",
                                        maxWidth:"380px",
                                        padding:"1px 0px",
                                        color:"#999",
                                        border: "1px solid #D1BCB2",
                                        background: "#FFF",
                                     }}>
                                       <AccordionSummary
                                         expandIcon={<ExpandMoreIcon sx={{
                                            color:"#999"
                                         }} />}
                                         aria-controls="panel3-content"
                                         id="panel3-header"
                                       >
                                         Select country*
                                       </AccordionSummary>
                                       <AccordionDetails>
                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                         malesuada lacus ex, sit amet blandit leo lobortis eget.
                                       </AccordionDetails>
                                       <AccordionActions>
                                         <Button>Cancel</Button>
                                         <Button>Agree</Button>
                                       </AccordionActions>
                                     </Accordion>
                                </div>
                                <div className="LasName_Con">
                                    <input type="text" placeholder="Street name*" />
                                </div>
                            </Chescout_one>
                            <Chescout_one className="Chescout_one">
                                <div className="LasName_Con">
                                     <Accordion className="Accordion" sx={{
                                        maxWidth:"380px",
                                        boxShadow:"none",
                                        padding:"1px 0px",
                                        color:"#999",
                                        border: "1px solid #D1BCB2",
                                        background: "#FFF",
                                     }}>
                                       <AccordionSummary
                                         expandIcon={<ExpandMoreIcon sx={{
                                            color:"#999"
                                         }} />}
                                         aria-controls="panel3-content"
                                         id="panel3-header"
                                       >
                                         Town/city*
                                       </AccordionSummary>
                                       <AccordionDetails>
                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                         malesuada lacus ex, sit amet blandit leo lobortis eget.
                                       </AccordionDetails>
                                       <AccordionActions>
                                         <Button>Cancel</Button>
                                         <Button>Agree</Button>
                                       </AccordionActions>
                                     </Accordion>
                                </div>
                                <div className="LasName_Con_code">
                                    <input type="text" placeholder="Appartment" />
                                    <input type="text" placeholder="ZIP Code" />
                                </div>
                            </Chescout_one>
                        </Chescout_Top>
                        <Chescout_Bottom>
                               <input type="text" placeholder="Your comment"/>
                        </Chescout_Bottom>

                    </Content_chesckout>

                </Containre_Chescout_Content>

                 

                </Chescout_containerWrapper>
        </DatailCart>
    </Container_Chescout>
  )
}

export default ProfilePersonal