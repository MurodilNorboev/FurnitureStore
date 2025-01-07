// import { Navlink } from "../styles/LINK"

// import { LoginRegCon, LoginWrap } from "../styles/login"
// import google from '../../assets/gogle.svg';
// import fasebook from '../../assets/facebook.svg';
// import tvitter from '../../assets/tvitter.svg';
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { baseAPI } from "../../utils/constanst";
// import { useNavigate } from "react-router-dom";

// interface SignupData {
//   full_name: string;
//   lastName: string;
//   phone_number: string;
//   email: string;
//   password: string;
//   address: {
//     country: string; 
//     city: string; 
//     street: string; 
//     apartmant: string; 
//     zip_code: string;

//   },
//   comment: string;
// }
// interface Type {
//   data: string;
//   success: string;
// }

// const RegloginComponent = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState<SignupData>({
//     full_name: '',
//     lastName: '',
//     phone_number: '',
//     email: '',
//     password: '',
//     address: {
//       country: '',
//       city: '', 
//       street: '', 
//       apartmant: '', 
//       zip_code: '',
//     },
//     comment: '',
//   });
//   const [selectedCountry, setSelectedCountry] = useState("");

//   const countries = [
//     "Uzbekistan",
//     "South Korea",
//     "United States",
//     "Germany",
//     "China",
//     "Russia",
//     "Japan"
//   ];


//   const [error, setError] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     console.log(formData);
    
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post<Type>(baseAPI + '/user/sign-upp', formData);
//       if (response.data.success) {
//         navigate('/login');  
//       }
//     } catch (err) {
//       setError('Ro\'yxatdan o\'tishda xatolik yuz berdi.');
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   return (
//     <LoginRegCon>
//     <LoginWrap className='LoginWrap' onSubmit={handleSubmit}>
//                 <h2>Login</h2>

//                 <div className="loginis0">

//                     <input style={{width:"50%"}}
//                     type="name" 
//                     placeholder='First Name'
//                     name="full_name"
//                     onChange={handleChange}
//                     required />
 
//                     <input style={{width:"50%"}}
//                     type="name" 
//                     placeholder='Last Name'
//                     name="full_name"
//                     onChange={handleChange}
//                     required />

//                 </div>

//                 <div className="loginis1">
//                     <label>Email</label>
//                     <input 
//                     type="email" 
//                     placeholder='customer_1995gmail.com'
//                     name="email"
//                     onChange={handleChange}
//                     required />
//                 </div>

//                 <div className="loginis1">
//                 <label>Phone Number</label>
//                 <input 
//                 type="text" 
//                 placeholder='Your Phone Number'
//                 name="phone_number"
//                 onChange={handleChange}
//                 required
//                  />
//                 </div>

//                 <div className="loginis1">
//                 <label>Password</label>
//                 <input 
//                 type="password" 
//                 placeholder='Your password'
//                 name="password"
//                 onChange={handleChange}
//                 required
//                  />
//                 </div>

//                 <div className="loginis1">
//                 <label>Repeat password</label>
//                 <input type="email" placeholder='Repeat password' />
//                 </div>
                
//                 <div className="loginis4">
//                 <button type="submit" disabled={loading}>
//              {loading ? 'Yuborilmoqda...' : 'REGISTRATE'}
//            </button>
//                 </div>

//                 <div className="loginis3">
//                      <div className='chackbox1'>
//                        <input className='intut' type={'checkbox'}/>
//                        <label>Have an account already? –</label>
//                      </div>
                     
//                      <Navlink to={'/login'}>
//                        <h3 style={{marginBottom:"-1px"}}>Login</h3>
//                     </Navlink>
//                 </div> 

//                 <div className="loginis6">
//                   <div className="text_wrapp">
//                     <h2>sign up by social profiles</h2>
//                   </div>
//                   <div className="img_wrappp">
//                     <img src={google} alt="naver-img" />
//                     <img src={fasebook} alt="google-img" />
//                     <img src={tvitter} alt="talk-img" />
//                   </div>
                    
//                 </div> 
//     </LoginWrap>
//     </LoginRegCon>
//   )
// }

// export default RegloginComponent

import { Navlink } from "../styles/LINK";
import { LoginRegCon, LoginWrap } from "../styles/login";
import google from '../../assets/gogle.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/tvitter.svg';
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { baseAPI } from "../../utils/constanst";
import { useNavigate } from "react-router-dom";

interface SignupData {
  full_name: string;
  lastName: string;
  phone_number: string;
  email: string;
  password: string;
  address: {
    country: string;
    city: string;
    street: string;
    apartmant: string;
    zip_code: string;
  };
  comment: string;
}
interface Type {
  data: string;
  success: string;
}

const RegloginComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignupData>({
    full_name: '',
    lastName: '',
    phone_number: '',
    email: '',
    password: '',
    address: {
      country: '',
      city: '',
      street: '',
      apartmant: '',
      zip_code: '',
    },
    comment: '',
  });
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const countries = [
    "Uzbekistan",
    "South Korea",
    "United States",
    "Germany",
    "China",
    "Russia",
    "Japan",
  ];

  // const validateForm = () => {
  //   const phoneRegex = /^\+?[0-9]{12}$/; // Telefon raqam uchun validatsiya
  //   const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Parol murakkabligi

  //   if (!formData.full_name || !formData.lastName) {
  //     toast.error("First name va last name maydonlarini to'ldiring.");
  //     return false;
  //   }

  //   if (!phoneRegex.test(formData.phone_number)) {
  //     toast.error("Telefon raqami noto‘g‘ri formatda.");
  //     return false;
  //   }

  //   if (!passwordRegex.test(formData.password)) {
  //     toast.error("Parol kamida 8 ta belgidan iborat bo‘lib, katta harf, kichik harf, son va maxsus belgi bo‘lishi kerak.");
  //     return false;
  //   }

  //   if (formData.password !== repeatPassword) {
  //     toast.error("Parollar mos kelmadi.");
  //     return false;
  //   }

  //   if (!formData.address.country || !formData.address.city || !formData.address.street) {
  //     toast.error("Address ma'lumotlari to'liq kiritilmagan.");
  //     return false;
  //   }

  //   return true;
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name.includes("address.")) {
      const addressField = name.split(".")[1];
      setFormData({
        ...formData,
        address: { ...formData.address, [addressField]: value },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await axios.post<Type>(`${baseAPI}/userFur/sign-up`, formData);
      if (response.data.success) {
        toast.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
        navigate('/login');
      }
    } catch (err: any) {
      toast.error(err.response?.data?.msg || "Ro'yxatdan o'tishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginRegCon>
      <LoginWrap className="LoginWrap" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <div className="loginis0">
          <input
            type="text"
            placeholder="First Name"
            name="full_name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            required
          />
        </div>

        <div className="loginis1">
          <label>Email</label>
          <input
            type="email"
            placeholder="customer_1995@gmail.com"
            name="email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="loginis1">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Your Phone Number"
            name="phone_number"
            onChange={handleChange}
            required
          />
        </div>

        <div className="loginis1">
          <label>Password</label>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>

        <div className="loginis1">
          <label>Repeat Password</label>
          <input
            type="password"
            placeholder="Repeat password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
        </div>

        <div className="loginis1">
          <label>Country</label>
          <select
            name="address.country"
            value={formData.address.country}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Choose a country
            </option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="loginis1">
          <label>City</label>
          <input
            type="text"
            placeholder="City"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="loginis1">
          <label>Street</label>
          <input
            type="text"
            placeholder="Street"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            required
          />
        </div>

        <div className="loginis1">
          <label>Apartmant</label>
          <input
            type="text"
            placeholder="Apartmant"
            name="address.apartmant"
            value={formData.address.apartmant}
            onChange={handleChange}
          />
        </div>

        <div className="loginis1">
          <label>Zip Code</label>
          <input
            type="text"
            placeholder="Zip Code"
            name="address.zip_code"
            value={formData.address.zip_code}
            onChange={handleChange}
          />
        </div>

        <div className="loginis4">
          <button type="submit" disabled={loading}>
            {loading ? 'Yuborilmoqda...' : 'REGISTER'}
          </button>
        </div>

        <div className="loginis3">
          <div className="checkbox1">
            <input className="input" type="checkbox" />
            <label>Have an account already? –</label>
          </div>
          <Navlink to="/login">
            <h3 style={{ marginBottom: "-1px" }}>Login</h3>
          </Navlink>
        </div>

        <div className="loginis6">
          <div className="text_wrap">
            <h2>Sign up by social profiles</h2>
          </div>
          <div className="img_wrappp">
            <img src={google} alt="google-img" />
            <img src={facebook} alt="facebook-img" />
            <img src={twitter} alt="twitter-img" />
          </div>
        </div>
        
      </LoginWrap>
    </LoginRegCon>
  );
};

export default RegloginComponent;