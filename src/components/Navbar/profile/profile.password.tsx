import { PagesName } from "../../main.all_categorie/catalog.page/catalog";
import {
  Chescout_Bottom,
  Chescout_Top,
  Chescout_containerWrapper,
  Chescout_one,
  Container_Chescout,
  Containre_Chescout_Content,
  Content_chesckout,
} from "../Cart/checkout/checkoutt";
import home from "../../../assets/home.svg";
import { DatailCart } from "../Cart/datail";
import { useEffect, useState } from "react";
import { BottomBtn, ContainerP, Content, Contents, Tab } from "./profle.1";
import { useNavigate } from "react-router-dom";
import { baseAPI } from "../../../utils/constanst";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";

// const ProfilePassword = (Props: any) => {
//   const navigate = useNavigate();
//   const [aut, setAut] = useState(false);
//   const [active, setactive] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [repeatPassword, setRepeatPassword] = useState("");
//   const [passwordMismatch, setPasswordMismatch] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     oldPassword: "",
//     newPassword: "",
//   });

//   // User ma'lumotlarini olish
//   useEffect(() => {
//     const fetchData = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) return (window.location.href = "/login");

//       try {
//         const { data } = await axios.get(`${baseAPI}/userFur/me`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setFormData((prevState) => ({
//           ...prevState,
//           email: data.data.email, // Email faqat formData ichida
//         }));
//       } catch (error: any) {
//         toast.error("Error fetching user data!");
//       }
//     };

//     fetchData();
//   }, []);

//   // Inputlarni o'zgartirish funksiyasi
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Repeat password uchun handler
//   const handleRepeatPasswordChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const value = e.target.value;
//     setRepeatPassword(value);
//     setPasswordMismatch(value !== formData.newPassword && value !== "");
//   };

//   // Formni yuborish
//   const submitPassword = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const { data } = await axios.post(
//         `${baseAPI}/userFur/change-password`,
//         formData
//       );

//       if (data.success) {
//         toast.success("Password changed successfully!");
//         setTimeout(() => navigate("/profile"), 2000);
//       }
//     } catch (error: any) {
//       toast.error("Error in changing password!");
//     } finally {
//       setLoading(false);
//     }
//   };
//   // logout
//   const logaut = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <Container_Chescout>
//       <Toaster position="top-right" />
//       <DatailCart>
// <PagesName style={{ marginLeft: "15px" }}>
//   <h3>Home</h3>
//   <img src={home} alt="img" />
//   <h4>{Props.name}</h4>
// </PagesName>

//         <Chescout_containerWrapper className="Chescout_containerWrapper">
//           <ContainerP className="Right_Container">
//             <Content>
//               <Tab active={active === 1} onClick={() => setactive(1)}>
//                 Personal
//               </Tab>
//               <div onClick={() => setAut(true)}>
//                 <Tab active={active === 2} onClick={() => setactive(2)}>
//                   Logout
//                 </Tab>
//               </div>
//             </Content>
//           </ContainerP>

//           <Containre_Chescout_Content className="Containre_Chescout_Content">
//             <Contents active={active === 1}>
//               <Content_chesckout onSubmit={submitPassword}>
//                 <Chescout_Bottom>
//                   <input
//                     className="labelvs"
//                     type="text"
//                     placeholder="Change password"
//                   />
//                 </Chescout_Bottom>

//                 <Chescout_Top className="Chescout_Top">
//                   <Chescout_one className="Chescout_one">
//                     {/* Eski parol */}
//                     <div className="LasName_Con d">
//                       <label className="labelv" htmlFor="oldPassword">
//                         Old Password
//                       </label>
//                       <div style={{ position: "relative" }}>
//                         <input
//                           type="password"
//                           name="oldPassword"
//                           value={formData.oldPassword}
//                           onChange={handleChange}
//                           placeholder="Old password"
//                           required
//                         />
//                       </div>
//                     </div>

//                     {/* Forgot password */}
//                     <div className="LasName_Con d">
//                       <label
//                         className="labels"
//                         htmlFor="forgotPassword"
//                         onClick={() => navigate("/forgot-password")}
//                       >
//                         Forgot password?
//                       </label>
//                       <h3 className="texts">
//                         The strong password must contain <br />
//                         uppercase and lowercase Latin letters <br />
//                         and numbers. At least 6 characters.
//                       </h3>
//                     </div>
//                   </Chescout_one>

//                   <Chescout_one className="Chescout_one">
//                     {/* Yangi parol */}
//                     <div className="LasName_Con d">
//                       <label className="labelv">New Password</label>
//                       <div style={{ position: "relative" }}>
//                         <input
//                           type="password"
//                           name="newPassword"
//                           value={formData.newPassword}
//                           onChange={handleChange}
//                           placeholder="New password"
//                           required
//                           style={{ borderColor: passwordMismatch ? "red" : "" }}
//                         />
//                       </div>
//                     </div>

//                     {/* Repeat Password */}
//                     <div className="LasName_Con d">
//                       <label className="labelv">Repeat Password</label>
//                       <div style={{ position: "relative" }}>
//                         <input
//                           type="password"
//                           value={repeatPassword}
//                           onChange={handleRepeatPasswordChange}
//                           required
//                           placeholder="Repeat password"
//                           style={{
//                             borderColor: repeatPassword
//                               ? passwordMismatch
//                                 ? "red"
//                                 : "green"
//                               : "",
//                           }}
//                         />
//                       </div>
//                       {passwordMismatch && repeatPassword && (
//                         <div style={{ color: "red", fontSize: "12px" }}>
//                           Passwords do not match!
//                         </div>
//                       )}
//                     </div>
//                   </Chescout_one>
//                 </Chescout_Top>

//                 <BottomBtn>
//                   <button disabled={loading} type="submit">
//                     {loading ? "Changing..." : "Change Password"}
//                   </button>
//                   <button onClick={() => navigate("/profile")}>Cancel</button>
//                 </BottomBtn>
//               </Content_chesckout>
//             </Contents>
//             <Contents active={active === 2}>
//               {aut && (
//                 <div>
//                   <button onClick={logaut}>logout ?</button>
//                 </div>
//               )}
//             </Contents>
//           </Containre_Chescout_Content>
//         </Chescout_containerWrapper>
//       </DatailCart>
//     </Container_Chescout>
//   );
// };

// export default ProfilePassword;

const ProfilePassword = (Props: any) => {
  const navigate = useNavigate();
  const [aut, setAut] = useState(false);
  const [active, setactive] = useState(1);
  const [loading, setLoading] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return (window.location.href = "/login");

      try {
        const { data } = await axios.get(`${baseAPI}/userFur/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setFormData((prevState) => ({
          ...prevState,
          email: data.data.email,
        }));
      } catch (error: any) {
        toast.error("Error fetching user data!");
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setRepeatPassword(value);
    setPasswordMismatch(value !== formData.newPassword && value !== "");
  };

  const submitPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${baseAPI}/userFur/change-password`,
        formData
      );

      if (data.success) {
        toast.success("Password changed successfully!");
        setTimeout(() => navigate("/profile"), 2000);
      }
    } catch (error: any) {
      toast.error("Error in changing password!");
    } finally {
      setLoading(false);
    }
  };

  const logaut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Container_Chescout>
      <Toaster position="top-right" />

      <PagesName style={{ marginLeft: "15px" }}>
        <h3>Home</h3>
        <img src={home} alt="img" />
        <h4>{Props.name}</h4>
      </PagesName>

      <DatailCart>
        <Chescout_containerWrapper className="Chescout_containerWrapper">
          <ContainerP className="Right_Container">
            <Content>
              <Tab active={active === 1} onClick={() => setactive(1)}>
                Personal
              </Tab>
              <div onClick={() => setAut(true)}>
                <Tab active={active === 2} onClick={() => setactive(2)}>
                  Logout
                </Tab>
              </div>
            </Content>
          </ContainerP>

          <Containre_Chescout_Content className="Containre_Chescout_Content">
            <Contents active={active === 1}>
              <Content_chesckout onSubmit={submitPassword}>
                <Chescout_Bottom>
                  <input
                    className="labelvs"
                    type="text"
                    placeholder="Change password"
                    readOnly
                    onFocus={(e) => e.target.style.outline = "none"}
              onBlur={(e) => e.target.style.outline = "none"}
                  />
                </Chescout_Bottom>

                <Chescout_Top className="Chescout_Top">
                  <Chescout_one className="Chescout_one">
                    <div className="LasName_Con d">
                      <label className="labelv" htmlFor="oldPassword">
                        Old Password
                      </label>
                      <div style={{ position: "relative" }}>
                        <input
                          type={showOldPassword ? "text" : "password"}
                          name="oldPassword"
                          value={formData.oldPassword}
                          onChange={handleChange}
                          placeholder="Old password"
                          required
                        />
                        <EyeIcon
                          onClick={() => setShowOldPassword(!showOldPassword)}
                        >
                          {showOldPassword ? <FaEye /> : <FaEyeSlash />}
                        </EyeIcon>
                      </div>
                    </div>

                    <div className="LasName_Con d">
                      <label
                        className="labels"
                        htmlFor="forgotPassword"
                        onClick={() => navigate("/forgot-password")}
                      >
                        Forgot password?
                      </label>
                      <h3 className="texts">
                        The strong password must contain <br />
                        uppercase and lowercase Latin letters <br />
                        and numbers. At least 6 characters.
                      </h3>
                    </div>
                  </Chescout_one>

                  <Chescout_one className="Chescout_one">
                    <div className="LasName_Con d">
                      <label className="labelv">New Password</label>
                      <div style={{ position: "relative" }}>
                        <input
                          type={showNewPassword ? "text" : "password"}
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleChange}
                          placeholder="New password"
                          required
                          style={{ borderColor: passwordMismatch ? "red" : "" }}
                        />
                        <EyeIcon
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                           {showNewPassword ? <FaEye /> : <FaEyeSlash />}
                        </EyeIcon>
                      </div>
                    </div>

                    <div className="LasName_Con d">
                      <label className="labelv">Repeat Password</label>
                      <div style={{ position: "relative" }}>
                        <input
                          type={showRepeatPassword ? "text" : "password"}
                          value={repeatPassword}
                          onChange={handleRepeatPasswordChange}
                          required
                          placeholder="Repeat password"
                          style={{
                            borderColor: repeatPassword
                              ? passwordMismatch
                                ? "red"
                                : "green"
                              : "",
                          }}
                        />
                        <EyeIcon
                          onClick={() =>
                            setShowRepeatPassword(!showRepeatPassword)
                          }
                        >
                           {showRepeatPassword ? <FaEye /> : <FaEyeSlash />}
                        </EyeIcon>
                      </div>
                      {passwordMismatch && repeatPassword && (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          Passwords do not match!
                        </div>
                      )}
                    </div>
                  </Chescout_one>
                </Chescout_Top>

                <BottomBtn>
                  <div className="buttonbtn">
                    <button disabled={loading} type="submit">
                      {loading ? "Changing..." : "Change Password"}
                    </button>
                  </div>
                  <div className="btns is_btns">
                    <button onClick={() => navigate("/profile")}>Cancel</button>
                  </div>
                </BottomBtn>

              </Content_chesckout>
            </Contents>
            <Contents active={active === 2}>
              {aut && (
                <div>
                  <button onClick={logaut}>Logout ?</button>
                </div>
              )}
            </Contents>
          </Containre_Chescout_Content>
        </Chescout_containerWrapper>
      </DatailCart>
    </Container_Chescout>
  );
};

export default ProfilePassword;

const EyeIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 18px;
  color: #555;
`;
