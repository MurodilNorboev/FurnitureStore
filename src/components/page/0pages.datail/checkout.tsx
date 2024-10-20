import { PagesName } from "../3catalog.page/catalog"
import { Chescout_Bottom, Chescout_Top, Chescout_containerWrapper, Chescout_one, Container_Chescout, Containre_Chescout_Content, Content_chesckout } from "./checkoutt"
import home from '../../../assets/home.svg'
import { Bottom_Container, DatailCart, Right_Container, Top_Container } from "./datail"
import { Navlink } from "../../styles/LINK"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Checkbox from '@mui/joy/Checkbox';
interface NameT {
    name: string
}

const Checkout = ( Props: NameT) => {
  return (
    <Container_Chescout>
        <DatailCart>
        <PagesName style={{marginLeft:"15px"}}>
        <h3>Home</h3><img src={home} alt="img" /><h4>{Props.name}</h4> 
        </PagesName>
       <div className='cart_name'>Checkout</div>
                <Chescout_containerWrapper className="Chescout_containerWrapper">
                
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

                  <Right_Container className='Right_Container'>
                    <Top_Container>
                      <h2>Cart totals</h2>
                    </Top_Container>
                    <div className="dropdown" >
                    <Accordion className="Accordion" sx={{
                           maxWidth:"411px",
                           boxShadow:"none",
                           padding:"1px 0px",
                           color:"#999",
                           border: "none #D1BCB2",
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
                    <Bottom_Container className="Bottom_Container">
                    <div className='bottom_wrape'>
                    <div className="cost"><h5>Delivery (Self Pickup)</h5><h5>$0</h5></div>
                    <div className="cost"><h5>Delivery (Self Pickup)</h5><h5>$11 500</h5></div>
                    <div className="cost"><h4>total</h4><h4>$11 500</h4></div>
                    <Navlink to={"/chekout"}>
                    <div className="btn_wrape">
                      <button>place order<img src="" alt="" /></button>
                    </div>
                    </Navlink>
                    </div>
                    </Bottom_Container>
                  </Right_Container>

                </Chescout_containerWrapper>
        </DatailCart>
    </Container_Chescout>
  )
}

export default Checkout