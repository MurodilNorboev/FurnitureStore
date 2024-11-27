import { PagesName } from "../../main.all_categorie/catalog.page/catalog"
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

const ProfilePassword = ( Props: NameT ) => {
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

export default ProfilePassword