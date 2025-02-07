import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseAPI } from "../../../utils/constanst";
import toast, { Toaster } from "react-hot-toast";
import { LoginRegCon, LoginWrap } from "../../styles/login";
import OtpInput from "react-otp-input";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [formData, setFormData] = React.useState({
    email: localStorage.getItem("forgotPasswordEmail") || "",
    otp: "",
    newPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${baseAPI}/userFur/reset-password`,
        formData
      );
      if (data.success) {
        toast.success("Password reset successfully!");
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error: any) {
      setLoading(false);
      toast.error("Error in reset password:", error);
    }
  };

  return (
    <LoginRegCon>
      <Toaster position="top-right" />
      <LoginWrap className="LoginWrap" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        
        {/* Email Input */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <label htmlFor="email" style={{ fontSize: "16px", color: "#AD8775" }}>
            Verify your email:
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            readOnly
            style={{
              border: "none",
              background: "transparent",
              fontSize: "16px",
              marginBottom: "20px",
              width: "100%",
              color: "#32324D",
            }}
            onFocus={(e) => (e.target.style.outline = "none")}
            onBlur={(e) => (e.target.style.outline = "none")}
          />
        </div>

        <>
          <label
            htmlFor="otp"
            style={{ fontSize: "16px", color: "#AD8775", marginBottom: "10px" }}
          >
            Enter OTP
          </label>
          <OtpInput
            value={formData.otp}
            numInputs={6}
            containerStyle={{
              justifyContent: "center",
              width: "100%",
              color: "#AD8775",
            }}
            inputStyle={{
              height: 50,
              width: 40,
              border: "1px solid #AD8775",
              borderRadius: "5px",
              color: "#32324D",
            }}
            onChange={(otp: string) =>
              handleChange({
                target: { name: "otp", value: otp },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            renderInput={(props) => <input {...props} />}
            renderSeparator={<span>-</span>}
          />
        </>

        {/* New Password Input */}
        <div className="loginis1" style={{ position: "relative" }}>
          <label>New Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Your new password"
            name="newPassword" 
            value={formData.newPassword}
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

        {/* OTP Input */}
        <div className="loginis4">
          <button>{loading ? "Resetting..." : "Reset"}</button>
        </div>
      </LoginWrap>
    </LoginRegCon>
  );
};

export default ResetPassword;
