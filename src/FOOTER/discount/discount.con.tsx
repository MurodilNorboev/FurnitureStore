import React, { useState } from 'react'
import { Content, DiscountConataiter, DiscountConent, DiscountLeft, DiscountRight, Tab } from './discount.Style'
import { PagesName } from '../../components/MainPage2/catalog.page/catalog'
import home from '../../assets/home.svg'


const DiscountComponent = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <DiscountConataiter>
      <PagesName style={{display:"grid",gap:"50px"}}>
       <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
       <h3>Home</h3>
        <img src={home} alt="Home icon" />
        <h4>discounts</h4>
       </div>
      <div className='Blog'><h1>Service rules</h1></div>
      </PagesName>

      <DiscountConent className='DiscountConent'>
            <DiscountRight className='DiscountRight'>

                <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
                Main rules
                </Tab>
                <Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>
                desclaimer
                </Tab>
                <Tab active={activeTab === 3} onClick={() => setActiveTab(3)}>
                Contact information
                </Tab>

            </DiscountRight>

            <DiscountLeft className='DiscountLeft'>
            <Content active={activeTab === 1}>
              <div className="lorem">
                <h3>Main Rules</h3>
                <p>Most of us wonder if there is a God and if He really is the God of the Bible. In the Bible God says ‘I will make your name great’ and today the name of Abraham/Abram is known worldwide. This promise has come true. The earliest copy of Genesis found in the Dead Sea Scrolls is dated 200-100 B.C. which means the promise has been in writing since at least that time. At that time the name of Abraham was not well-known so the promise came true only after it was written down, not before. <br />
                The Jews who descended from Abraham were never really the nation we associate with greatness.  They did not conquer and build a great empire like the Romans did or build large monuments like the Egyptians did with the pyramids. Their fame comes from the Law and Book which they wrote; from some remarkable individuals that were Jewish; and that they have survived as a somewhat different people group for thousands of years.  Their greatness is not because of anything they did, but rather what was done to and through them.  The promise says repeatedly “I will …” – that would be the power behind the promise.  Their unique greatness happened because God made it happen rather than some ability, conquest or power of their own.</p>
              </div>
              <div className="lorem">
                <h3>desclaimer</h3>
                <p>Most of us wonder if there is a God and if He really is the God of the Bible. In the Bible God says ‘I will make your name great’ and today the name of Abraham/Abram is known worldwide. This promise has come true. The earliest copy of Genesis found in the Dead Sea Scrolls is dated 200-100 B.C. which means the promise has been in writing since at least that time. At that time the name of Abraham was not well-known so the promise came true only after it was written down, not before.</p>
              </div>
              <div className="lorem">
                <h3>Contact information</h3>
                <p>Even though Israel is a small country it is always in the news.  The news continues to report on Jews moving to Israel, on the technology invented there, but also on conflict, wars and tensions with surrounding people.  Why? A look at Israel’s history in the book of Genesis in the Bible reveals that 4000 years ago a man, who is now very well known, went on a camping trip in that part of the world.  The Bible says that his story affects our future. This ancient man is Abraham (also known as Abram).  We can take his story seriously because the places and cities he visited are mentioned in other old writings.</p>
              </div>
              </Content>
              <Content active={activeTab === 2}>
                   Content of Tab 2
              </Content>
              <Content active={activeTab === 3}>
                   Content of Tab 3
              </Content>
            </DiscountLeft>
      </DiscountConent>
    </DiscountConataiter>
  )
}

export default DiscountComponent