import { Navlink } from "../styles/LINK";
import { LoginCon, LoginWraps } from "../styles/login";
import google from "../../assets/gogle.svg";
import fasebook from "../../assets/facebook.svg";
import tvitter from "../../assets/tvitter.svg";
import React, { useState } from "react";
import axios from "axios";
import { baseAPI } from "../../utils/constanst";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

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
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<Type>(
        baseAPI + "/userFur/login",
        formData
      );

      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
        toast.success("Successfully logged in!");
       setTimeout(() =>  navigate("/"), 2000);
      }
    } catch (err: any) {
      toast.error("Error in login:", err);
    }
  };

  return (
    <LoginCon>
      <Toaster position="top-right" />
      <LoginWraps className="LoginWrap" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="loginis1">
          <label>Email</label>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div style={{ position: "relative" }} className="loginis1">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"} // Parol ko'rsatilayotgan bo'lsa, type ni "text" qilib o'zgartiramiz
            placeholder="Your password"
            name="password"
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              top: "75%",
              transform: "translateY(-50%)",
              background: "transparent",
              border: "none",
            }}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        <div className="loginis3">
          <div className="chackbox1">
            <input
              className="intut"
              type={"checkbox"}
              name="checkbox"
              onChange={handleChange}
            />
            <label>Keep me logged in</label>
          </div>
          <h3 onClick={() => navigate("/forgot-password")}>Forget your password?</h3>
        </div>

        <div className="loginis7"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => navigate("/regLogin")}
        >
          <h3 className="buttons">CREATE ACCOUNT</h3>
        </div>

        <div className="loginis4">
          <button>login</button>
        </div>

        <div className="loginis5">
          <div className="lang"></div>
          <h4>or </h4>
          <div className="lang"></div>
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
  );
};

export default LoginComponent;
