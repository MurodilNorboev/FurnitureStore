import { Navlink } from "../styles/LINK"
import { LoginRegCon, LoginWrap } from "../styles/login"
import google from '../../assets/gogle.svg';
import fasebook from '../../assets/facebook.svg';
import tvitter from '../../assets/tvitter.svg';

const RegloginComponent = () => {
  return (
    <LoginRegCon>
    <LoginWrap className='LoginWrap'>
                <h2>Login</h2>
                <div className="loginis1">
                    <input type="email" placeholder='Name' />
                </div>
                <div className="loginis1">
                    <label>Email</label>
                    <input type="email" placeholder='customer_1995gmail.com' />
                </div>
                <div className="loginis1">
                <label>Password</label>
                <input type="email" placeholder='Your password' />
                </div>
                <div className="loginis1">
                <label>Repeat password</label>
                <input type="email" placeholder='Repeat password' />
                </div>
                
                <div className="loginis4">
                    <button>register</button>
                </div>

                <div className="loginis3">
                     <div className='chackbox1'>
                       <input className='intut' type={'checkbox'}/>
                       <label>Have an account already? –</label>
                     </div>
                     
                     <Navlink to={'/login'}>
                       <h3 style={{marginBottom:"-1px"}}>Login</h3>
                    </Navlink>
                </div> 

                <div className="loginis6">
                  <div className="text_wrapp">
                    <h2>sign up by social profiles</h2>
                  </div>
                  <div className="img_wrappp">
                    <img src={google} alt="naver-img" />
                    <img src={fasebook} alt="google-img" />
                    <img src={tvitter} alt="talk-img" />
                  </div>
                    
                </div> 
    </LoginWrap>
    </LoginRegCon>
  )
}

export default RegloginComponent