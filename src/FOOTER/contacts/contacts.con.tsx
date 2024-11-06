import { PagesName } from '../../components/MainPage2/catalog.page/catalog'
import { BottomBtn, Chescout_containerWrapper, Chescout_one, Chescout_Top, ContactContainter, Content_chesckout, For_PartnerCon, For_PartnerConetent } from './contatct.Style'
import circlebtn from '../../assets/circlewhite.svg'
import home from '../../assets/home.svg'
import message from '../../assets/message.svg'
import phone from '../../assets/phone.svg'

const Contactcomponent = () => {
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
   
                           <Chescout_Top className="Chescout_Top top">
                               <Chescout_one className="Chescout_one">
                                <div className="name_emailWrap">
                                   <div className="LasName_Con">
                                        <label>name*</label>
                                       <input type="text" placeholder="Johnathan" />
                                   </div>
                                   <div className="LasName_Con">
                                        <label>email*</label>
                                       <input type="text" placeholder="customer_1995gmail.com" />
                                   </div>
                                   </div>

                                   <div className="LasName_Con">
                                        <label>Message</label>
                                       <input className='message' type="text" placeholder="message" />
                                   </div>
                               </Chescout_one>
                               
                           </Chescout_Top>
   
                               <BottomBtn className='BottomBtn'>
                                <div className="buttonbtn">
                                  <button>send message <img src={circlebtn} alt="" /></button>
                                </div>
                               </BottomBtn>
   
                       </Content_chesckout>
                   </Chescout_containerWrapper>
   
        </For_PartnerCon>
      </For_PartnerConetent>

    </ContactContainter>
  )
}

export default Contactcomponent