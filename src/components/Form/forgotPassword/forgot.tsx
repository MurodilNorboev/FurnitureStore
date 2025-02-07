import React, { useState } from "react";
import axios from "axios";
import { LoginCon, LoginWraps } from "../../styles/login";
import { baseAPI } from "../../../utils/constanst";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${baseAPI}/userFur/forgot-password`, {
        email,
      });
      if (response.data.success) {
        toast.success("Password reset email sent to your email!");
        localStorage.setItem("forgotPasswordEmail", email);
        setTimeout(() => {
            navigate("/reset-password");
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error in forgot password:", error);
    }
  };

  return (
    <LoginCon style={{ paddingTop: "90px" }}>
      <Toaster position="top-right" />
      <LoginWraps
        className="LoginWrap"
        style={{ position: "absolute", top: "20%" }}
      >
        <h2>Forgot Password</h2>
        {/* // send email code */}
        <div className="loginis1">
          <label htmlFor="email" style={{ fontSize: "16px", color: "#AD8775" }}>
            Reset Password
          </label>
          <input
            type="email"
            name=""
            id=""
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="loginis4">
          <button disabled={loading} onClick={() => handleForgotPassword()}>
            {loading ? "Yuborilmoqda..." : "Verify"}
          </button>
        </div>
      </LoginWraps>
    </LoginCon>
  );
};
export default ForgotPassword;
