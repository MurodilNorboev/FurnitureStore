import { PagesName } from "../../MainPage2/catalog.page/catalog"
import { Chescout_containerWrapper, Container_Chescout, Containre_Chescout_Content, Content_chesckout } from "../Cart/checkoutt"
import home from '../../../assets/home.svg'
import { DatailCart } from "../Cart/datail"
import { Navlink } from "../../styles/LINK"
import { BottomBtn, Chescout_one, Chescout_Top, ContainerP, Content, Contents, Tab } from "./profle.1"
import { useState } from "react";

interface NameT {
    name: string
}

const ProfilePersonal = ( Props: NameT) => {
  const [ active, setactive ] = useState(1);

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

                        <Chescout_Top className="Chescout_Top top">
                            <Chescout_one className="Chescout_one">
                                <div className="LasName_Con" style={{marginBottom:"10px"}}>
                                <input type="text" placeholder="Personal"  className="Accordion aa"/>
                                </div>
                                <div className="LasName_Con">
                                    <input type="text" placeholder="First name" />
                                     <h6>Andre</h6>
                                </div>
                                <div className="LasName_Con">
                                    <input type="text" placeholder="Last name" />
                                     <h5>Labadie</h5>
                                </div>
                                <div className="LasName_Con">
                                    <input type="text" placeholder="Email" />
                                     <h4>angrealabadie@gmail.com</h4>
                                </div>
                                <div className="LasName_Con">
                                    <input type="text" placeholder="Phone" />
                                     <h6>–</h6>
                                </div>
                            </Chescout_one>

                            <Chescout_one className="Chescout_one">
                                <div className="LasName_Con" style={{marginBottom:"10px"}}>
                                     <input type="text" placeholder="Address" className="Accordion aa" />
                                </div>
                                <div className="LasName_Con_code">
                                  <div className="inputwraps">
                                     <div className="LasName_Con"><input type="text" placeholder="Country" /><h6>–</h6></div>
                                     <div className="LasName_Con"><input type="text" placeholder="Town/city" /><h6>–</h6></div>
                                     <div className="LasName_Con"><input type="text" placeholder="Street" /><h6>–</h6></div>
                                     <div className="LasName_Con"><input type="text" placeholder="Appartment" /><h6>–</h6></div>
                                  </div> 
                                  <div className="inputwraps">
                                     <div className="LasName_Con"><input type="text" placeholder="ZIP Code" /><h6>–</h6></div>
                                     <div className="LasName_Con"><input type="text" placeholder="Comment" /><h6>–</h6></div>
                                  </div>
                                    
                                </div>
                            </Chescout_one>

                            
                        </Chescout_Top>

                            <BottomBtn>
                              <Navlink to={'/profile2'}><div className="buttonbtn"><button>edit information</button></div></Navlink>
                              <Navlink to={'/profilePassword'}><div className="btns"><button>change password</button></div></Navlink>
                            </BottomBtn>

                    </Content_chesckout>
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

export default ProfilePersonal