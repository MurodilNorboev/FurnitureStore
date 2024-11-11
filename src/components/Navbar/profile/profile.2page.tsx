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
import { BottomBtn, ContainerP, Content, Contents, Tab } from "./profle.1"

interface NameT {
    name: string
}

const ProfilePersonal2page = ( Props: NameT) => {
  const [ active, setactive ] = useState(1);
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
                    <Tab active={active === 1} onClick={() => setactive(1)}>
                      Personal
                    </Tab>
                    <Tab active={active === 2} onClick={() => setactive(2)}>
                     Logaut
                    </Tab>
                    </Content>
                  </ContainerP>

                <Containre_Chescout_Content className="Containre_Chescout_Content">

                    <Contents active={active === 1}>
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
                    <BottomBtn>
                        <div className="buttonbtn"><button>save changes</button></div>
                        <div className="btns is_btns"><button>cancel</button></div>
                    </BottomBtn>
                    </Contents>
                    <Contents active={active === 2}>
                      content 2
                    </Contents>

                </Containre_Chescout_Content>

                 

                </Chescout_containerWrapper>
        </DatailCart>
    </Container_Chescout>
  )
}

export default ProfilePersonal2page