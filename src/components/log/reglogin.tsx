import React from 'react'
import { LoginRegCon, LoginWrap } from '../styles/login'
import { Navlink } from '../styles/LINK'

const RegloginComponent = () => {
  return (
    <LoginRegCon>
        <LoginWrap className='LoginWrap'>
                <h2>Registrate</h2>
                <div className="loginis1">
                    <label>Email</label>
                    <input type="email" placeholder='Your email' />
                </div>
                <div className="loginis1">
                <label>Password</label>
                <input type="email" placeholder='Your password' />
                </div>
                <div className="loginis1">
                <label>Repeat Your Password</label>
                <input type="email" placeholder='Your password' />
                </div>
                <div className="loginis3">
                <div className='chackbox1'>
                       <input className='intut' type={'checkbox'}/>
                       <label>Keep mee logged in</label></div>
                </div>
                <Navlink to={'/login'}>
                <div className="loginis8">
                    <button>REGISTRATE</button>
                </div>
                </Navlink>
        </LoginWrap>
    </LoginRegCon>
  )
}

export default RegloginComponent