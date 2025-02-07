import { PagesName } from '../../components/main.all_categorie/catalog.page/catalog'
import { BottomBtn, Chescout_containerWrapper, Chescout_one, Chescout_Top, ContactContainter, Content_chesckout, For_PartnerCon, For_PartnerConetent } from './contatct.Style'
import circlebtn from '../../assets/circlewhite.svg'
import home from '../../assets/home.svg'
import message from '../../assets/message.svg'
import phone from '../../assets/phone.svg'
import { useState } from 'react'
import emailjs from "emailjs-com";
import { Box } from "@mui/joy";
import toast from 'react-hot-toast'

const Contactcomponent = () => {
  const [text, setText] = useState(""); 
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState(""); 

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_m4t5v1d",
        "template_ahjdy59",
        {
          user_name: text, 
          user_email: email, 
          user_comment: question, 
        },
        "jSN7HYs8ebbzEF7Ox"
      )
      .then(
        (result) => {
          toast.success(result.text);
          setText("");
          setEmail("");
          setQuestion("");
        },
        (error) => {
          console.error(error.text);
        }
      );
  };
  return (
    <ContactContainter>

      <PagesName style={{display:"grid",gap:"50px"}}>
       <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
       <h3>Home</h3>
        <img src={home} alt="Home icon" />
        <h4>Contacts</h4>
       </div>
      <div className='Blog'><h1>Contacts</h1></div>
      </PagesName>

      <For_PartnerConetent>
        <For_PartnerCon>
          <div className="menuswrap">

          <div className="menuswraptwo">
            <img src={message} alt="" />
          <div className="menus">
            <h1>Information for the partners</h1>
            <h2>SEO – Alex Browning</h2>
            <p>alexbrown@hotmai <br />924-533-1103 <br />432-783-6534</p>
          </div>
          </div>

          <div className="menus c"></div>

          <div className="menuswraptwo">
            <img src={phone} alt="" />
          <div className="menus">
            <h1>Information for the partners</h1>
            <h2>We accept orders from <br /> 9:00 to 22:00 <br /> Order sending Mon-Sat – 9:00-19:00 <br /> Sun – day off</h2>
          </div>
          </div>
          
          </div>
          <div className="menus a"></div>

          <Chescout_containerWrapper className="Chescout_containerWrapper">
                       <Content_chesckout className='menus b'>
                       <div className="h22"><h1>Have any questions? – Write us</h1></div>

                        <Box 
                        className="box"
                        component="form"
                        onSubmit={handleSend}>
                           <Chescout_Top className="Chescout_Top top">
                               <Chescout_one className="Chescout_one">
                                <div className="name_emailWrap">
                                   <div className="LasName_Con">
                                        <label>name*</label>
                                       <input type="text" placeholder="Johnathan" 
                                          value={text}
                                          onChange={(e) => setText(e.target.value)}
                                          required />
                                   </div>
                                   <div className="LasName_Con">
                                        <label>email*</label>
                                       <input type="email" placeholder="customer_1995gmail.com" 
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       required />
                                   </div>
                                   </div>

                                   <div className="LasName_Con">
                                        <label>Message</label>
                                       <input className='message' type="text" placeholder="message" 
                                       value={question}
                                       onChange={(e) => setQuestion(e.target.value)}
                                       required />
                                   </div>
                               </Chescout_one>
                               
                           </Chescout_Top>
   
                            <BottomBtn className='BottomBtn' style={{marginTop:"50px"}}>
                             <div className="buttonbtn">
                               <button type="submit">send message <img src={circlebtn} alt="" /></button>
                             </div>
                            </BottomBtn>
                        </Box>
   
                       </Content_chesckout>
                   </Chescout_containerWrapper>
   
        </For_PartnerCon>
      </For_PartnerConetent>

    </ContactContainter>
  )
}

export default Contactcomponent