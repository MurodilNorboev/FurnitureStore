import React from 'react'
import { BottomBtn, Chescout_containerWrapper, Chescout_one, Chescout_Top, Content_chesckout, For_PartnerCon, For_PartnerConetent, For_PartnerContainter } from './for_partner.Style'
import { PagesName } from '../../components/MainPage2/catalog.page/catalog'
import home from '../../assets/home.svg'
import circlebtn from '../../assets/circlewhite.svg'

const For_PartnerComponent = () => {
  return (
    <For_PartnerContainter>
      <PagesName style={{display:"grid",gap:"50px"}}>
       <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
       <h3>Home</h3>
        <img src={home} alt="Home icon" />
        <h4>For partners</h4>
       </div>
      <div className='Blog'><h1>For partners</h1></div>
      </PagesName>

      <For_PartnerConetent>
        <For_PartnerCon>
          <div className="menus">
            <h1>Information for the partners</h1>
            <h2>So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward. Thrown any behind afford either the set depend one temper. Instrument melancholy in acceptance collecting frequently be if. Zealously now pronounce existence add you instantly say offending. Merry their far had widen was. Concerns no in expenses raillery formerly. 
            Inhabit hearing perhaps on ye do no. It maids decay as there he. Smallest on suitable disposed do although blessing he juvenile in. Society or if excited forbade. Here name off yet she long sold easy whom. Differed oh cheerful procured pleasure securing suitable in. Hold rich on an he oh fine. Chapter ability shyness article welcome be do on service.
            Attended no do thoughts me on dissuade scarcely. Own are pretty spring suffer old denote his. By proposal speedily mr striking am. But attention sex questions applauded how happiness.</h2>
          </div>
          <div className="menus a"></div>

          <Chescout_containerWrapper className="Chescout_containerWrapper">
                       <Content_chesckout className='menus b'>
                       <div className="h22"><h1>Request a partnership</h1></div>
   
                           <Chescout_Top className="Chescout_Top top">
                               <Chescout_one className="Chescout_one">
                                   <div className="LasName_Con">
                                        <label>name*</label>
                                       <input type="text" placeholder="Johnathan" />
                                   </div>
                                   <div className="LasName_Con">
                                        <label>email*</label>
                                       <input type="text" placeholder="customer_1995gmail.com" />
                                   </div>
                                   <div className="LasName_Con">
                                        <label>Message</label>
                                       <input className='message' type="text" placeholder="message" />
                                   </div>
                               </Chescout_one>
                               
                           </Chescout_Top>
   
                               <BottomBtn className='BottomBtn'>
                                <div className="buttonbtn">
                                  <button>send request <img src={circlebtn} alt="" /></button>
                                </div>
                               </BottomBtn>
   
                       </Content_chesckout>
                   </Chescout_containerWrapper>
   
        </For_PartnerCon>
      </For_PartnerConetent>

    </For_PartnerContainter>
  )
}

export default For_PartnerComponent