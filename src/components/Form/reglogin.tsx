import { Navlink } from "../styles/LINK";
import { LoginRegCon, LoginWrap } from "../styles/login";
import google from '../../assets/gogle.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/tvitter.svg';
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { baseAPI } from "../../utils/constanst";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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

const countries = [
  "Uzbekistan",
  "South Korea",
  "United States",
  "Germany",
  "China",
  "Russia",
  "Japan",
];

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
  const [showPassword, setShowPassword] = useState<boolean>(false); // Parolni ko'rsatish holatini saqlash
  const [showRepeatPassword, setShowRepeatPassword] = useState<boolean>(false); // Repeat parolni ko'rsatish
  const [passwordMismatch, setPasswordMismatch] = useState<boolean>(false); // Password mismatch state

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleRepeatPasswordVisibility = () => setShowRepeatPassword(!showRepeatPassword);

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

    // Check if passwords match
    if (name === "password" || name === "repeatPassword") {
      setPasswordMismatch(formData.password !== repeatPassword && repeatPassword !== "");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordMismatch) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post<Type>(`${baseAPI}/userFur/sign-up`, formData);
      localStorage.setItem("email", formData.email);
      if (response.data.success) {
        toast.success("Successfully registered!");
        setTimeout(() => {
          navigate('/verify');
        }, 2000);
      }
    } catch (err: any) {
      toast.error(err.response?.data?.msg || "Ro'yxatdan o'tishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginRegCon>
      <Toaster position="top-center" />
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
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Use !, numbers & A-Z"
              name="password"
              onChange={handleChange}
              required
              style={{ borderColor: passwordMismatch ? 'red' : '' }}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
              }}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash /> }
            </button>
          </div>
        </div>

        <div className="loginis1">
          <label>Repeat Password</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showRepeatPassword ? "text" : "password"}
              placeholder="Repeat password"
              value={repeatPassword}
              onChange={(e) => {
                setRepeatPassword(e.target.value);
                setPasswordMismatch(formData.password !== e.target.value);
              }}
              required
              style={{ borderColor: passwordMismatch ? 'red' : '' }}
            />
            <button
              type="button"
              onClick={toggleRepeatPasswordVisibility}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
              }}
            >
              {showRepeatPassword ? <FaEye /> :  <FaEyeSlash />}
            </button>
          </div>
          {passwordMismatch && (
            <div style={{ color: 'red', fontSize: '12px' }}>Passwords do not match!</div>
          )}
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
