
import { Navlink } from "../styles/LINK"
import { LoginCon, LoginWraps } from "../styles/login"


const LoginComponent = () => {
  return (
    <LoginCon>
    <LoginWraps className='LoginWrap'>
                <h2>Sign in</h2>
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
                <Navlink to={'/'}>
                <div className="loginis4">
                    {/* <button onClick={onLogin}>SIGN IN</button> */}
                    <button>SIGN IN</button>
                </div>
                </Navlink>
                <div className="loginis5">
                <div className='lang'></div><h4>or </h4><div className='lang'></div>
                    </div>
                <div className="loginis6">
                    {/* <img src={naver} alt="naver-img" />
                    <img src={googling} alt="google-img" />
                    <img src={talk} alt="talk-img" /> */}
                </div> <Navlink  to={'/regLogin'}>
                <div className="loginis7">
                    <button>CREATE ACCOUNT</button>
                </div> 
                </Navlink>
    </LoginWraps>
       
    </LoginCon>
  )
}

export default LoginComponent