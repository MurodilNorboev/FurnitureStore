import { LoginRegCon, LoginWrap } from "../../styles/login";
import React, { useState, useEffect } from "react";
import { baseAPI } from "../../../utils/constanst";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function VerifyOTP() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: localStorage.getItem("email") || "", 
      otp: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
      };
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      try {
        const response = await axios.post(`${baseAPI}/userFur/verify`, formData);
        if (response.data.success) {
          toast.success("Successfully verified!");
          setTimeout(() => navigate("/login"), 2000);
        }
      } catch (error: any) {
        toast.error("Error in verify OTP:", error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <LoginRegCon>
        <Toaster position="top-right" />
        <LoginWrap className="LoginWrap" onSubmit={handleSubmit}>
          <h2>Verify</h2>
  
          {/* Email Input */}
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%" }}>
            <label htmlFor="email" style={{ fontSize: "16px", color: "#AD8775" }}>Verify your email:</label>
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
              onFocus={(e) => e.target.style.outline = "none"}
              onBlur={(e) => e.target.style.outline = "none"}
            />
          </div>
  
          {/* OTP Input */}
          <label htmlFor="otp" style={{ fontSize: "16px", color: "#AD8775", marginBottom: "20px" }}>Enter OTP</label>
          <OtpInput
            value={formData.otp}
            numInputs={6}
            containerStyle={{ justifyContent: "center", width: "100%", color: "#AD8775" }}
            inputStyle={{
              height: 50,
              width: 40,
              border: "1px solid #AD8775",
              borderRadius: "5px",
              color: "#32324D",
            }}
            onChange={(otp: string) => handleChange({ target: { name: "otp", value: otp } } as React.ChangeEvent<HTMLInputElement>)}
            renderInput={(props) => <input {...props} />}
            renderSeparator={<span>-</span>}
          />
  
          {/* Submit Button */}
          <div className="loginis4">
            <button disabled={loading} type="submit">
              {loading ? "Yuborilmoqda..." : "Verify"}
            </button>
          </div>
        </LoginWrap>
      </LoginRegCon>
    );
  }