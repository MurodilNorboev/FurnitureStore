
import { Navlink } from "../styles/LINK"
import { LoginCon, LoginWraps } from "../styles/login"
import google from '../../assets/gogle.svg';
import fasebook from '../../assets/facebook.svg';
import tvitter from '../../assets/tvitter.svg';


const LoginComponent = () => {
  return (
    <LoginCon>
    <LoginWraps className='LoginWrap'>
                <h2>Login</h2>
                <div className="loginis1">
                    <label>Email</label>
                    <input type="email" placeholder='Your email' />
                </div>
                <div className="loginis1">
                <label>Password</label>
                <input type="email" placeholder='Your password' />
                </div>
                <div className="loginis3">
                     <div className='chackbox1'>
                       <input className='intut' type={'checkbox'}/>
                       <label>Keep mee logged in</label>
                     </div>
                    <h3>Forget your password?</h3>
                </div> 
                <Navlink  to={'/regLogin'}>
                <div className="loginis7">
                    <h3 className="buttons">CREATE ACCOUNT</h3>
                </div> 
                </Navlink>

                <Navlink to={'/'}>
                <div className="loginis4">
                    <button>login</button>
                </div>
                </Navlink>

                <div className="loginis5">
                <div className='lang'></div><h4>or </h4><div className='lang'></div>
                </div>

                <div className="loginis6">
                  <div className="text_wrapp">
                    <h2>sign in by social profiles</h2>
                  </div>
                  <div className="img_wrappp">
                    <img src={google} alt="naver-img" />
                    <img src={fasebook} alt="google-img" />
                    <img src={tvitter} alt="talk-img" />
                  </div>
                    
                </div> 
    </LoginWraps>
       
    </LoginCon>
  )
}

export default LoginComponent