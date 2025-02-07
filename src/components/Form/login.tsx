
import { Navlink } from "../styles/LINK"
import { LoginCon, LoginWraps } from "../styles/login"
import google from '../../assets/gogle.svg';
import fasebook from '../../assets/facebook.svg';
import tvitter from '../../assets/tvitter.svg';
import React, { useState } from "react";
import axios from 'axios';
import { baseAPI } from "../../utils/constanst";
import { useNavigate } from "react-router-dom";

interface LoginData {
  email: string;
  password: string;
}

interface Type {
  success: boolean;
  access_token: string; 
}

const LoginComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

      const response = await axios.post<Type>(baseAPI + '/userFur/login', formData);

      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token); 
        navigate('/'); 
      } 
    } catch (err) {
      console.error('Xatolik yuz berdi:', err);
    } 
  };
  return (
    <LoginCon>
    <LoginWraps className='LoginWrap' onSubmit={handleSubmit}>
                <h2>Login</h2>

                <div className="loginis1">
                    <label>Email</label>
                    <input 
                    type="email" 
                    placeholder='Your email'
                    name="email"
                    onChange={handleChange} />
                </div>

                <div className="loginis1">
                <label>Password</label>
                <input 
                type="password" 
                placeholder='Your password'
                name="password"
                onChange={handleChange} />
                </div>

                <div className="loginis3">
                     <div className='chackbox1'>
                       <input 
                       className='intut' 
                       type={'checkbox'}
                       name="checkbox"
                       onChange={handleChange}/>
                       <label>Keep mee logged in</label>
                     </div>
                    <h3>Forget your password?</h3>
                </div> 

                <Navlink  to={'/regLogin'}>
                <div className="loginis7">
                    <h3 className="buttons">CREATE ACCOUNT</h3>
                </div> 
                </Navlink>

                <div className="loginis4">
                    <button>login</button>
                </div>

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