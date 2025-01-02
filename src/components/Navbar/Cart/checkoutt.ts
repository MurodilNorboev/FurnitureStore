import styled from "styled-components";

export const Container_Chescout = styled.div`
padding-top: 0px;
.nn {
    background-color: #FFF;
    box-shadow: 0px 10px 20px 0px rgba(209, 188, 178, 0.25);
}
`;
export const Chescout_containerWrapper = styled.form`
display: flex;
gap: 25px;
.dropdown {
    margin: 35px 0px 0px 0px;
    border: 1px solid #D1BCB2;
    border-left: none;
    border-right: none;
}
input {
    border: 1px solid #D1BCB2;
}
@media only screen and (max-width: 1400px) {
    margin: none;
    display: grid;
    width: 78.20vw;
    max-width: 1000px;
    justify-content: center;
    .Containre_Chescout_Content {
        width: 78.20vw;
        max-width: 1000px;
    }
    .Right_Container {
        max-width: 1000px;
        width: 78.20vw;
    } .dropdown {
        max-width: 1000px;
        width: 78.20vw;
        position: none;
        .Accordion {
            max-width: 1000px;
            
        }
    } .Bottom_Container {
        height: auto;
        .bottom_wrape{
            height: auto;
        }
    }
}
@media only screen and (max-width: 1220px){
    padding: 0px;
    .Containre_Chescout_Content {
        width: 100%;
    }
    .Chescout_Top {
        padding: 0px;
        display: grid;
        justify-content: center;
        width: 100%;
    } .Chescout_one { 
        padding: 0px;
        width: 100%;
        .LasName_Con {
            padding: 0px;
        display: flex;
        width: 100%;
        input {
            width: 70vw;
            box-sizing: border-box;
        }
        .Accordion {
            max-width: 860px;
        }
    } .LasName_Con_code {
        padding: 0px;
        input {
            width: 100%;
        }
    }
    } 

}

`;
export const Containre_Chescout_Content = styled.div`
background-color: #FFF;
max-width: 1000px;
width: 100vw;
padding: 80px;
`;
export const Content_chesckout = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
tr {
    margin: 40px 0px;
    border: 1px solid #D1BCB2;
    align-self: stretch;
}
`;
export const Chescout_Top = styled.div`
display: flex;
justify-content: space-between;
gap: 30px;
`;
export const Chescout_one = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
.h22 {
    position: absolute;
    width: 100%;
    h2 {
    color: var(--main, #32324D);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 125% */
    letter-spacing: 3px;
    text-transform: uppercase;
    }
}
.LasName_Con {
    gap: 10px;
    display: flex;
    flex-direction: column;
    .labelv {
        color: var(--middle-grey, #999);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 14px; /* 116.667% */
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    .labels {
        color: var(--dark, #AD8775);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }
    .texts {
        color: var(--middle-grey, #999);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 125% */
    }
    input {
        padding: 10px 15px;
        width: 380px;
    } 
    select {
        padding: 12px 15px;
        width: 380px;
        border: 1px solid #D1BCB2;
        color: var(--dark-grey, #666);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }
}
.LasName_Con_code {
    display: flex;
    gap: 30px;
    input {
        padding: 10px 15px;
        width: 175px;
    }
    
}
`;
export const Chescout_Bottom = styled.div`
display: flex;
align-items: center;
width: 100%;
gap: 10px;
.labelvs {
    border: none;
    border-bottom: 1px solid #D1BCB2;
        color: var(--main, #32324D);
        font-feature-settings: 'liga' off, 'clig' off;
        font-family: Prompt;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 125% */
        letter-spacing: 2px;
        text-transform: uppercase;
    }
.chesbox_wrap {
    display: flex;
}
h4 {
    margin-bottom: -1px;
    color: var(--main, #32324D);
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
    letter-spacing: 2px;
    text-transform: uppercase;
} input {
    width: 100%;
    padding: 10px 15px;
}
`;
export const Right_Container = styled.div`
max-width: 530px;
border-top: 2px solid #DBA514;
width: 100%;
/* background-color: #FFF; */
`;


/// pk.4f1260517ad6abfdc84df4fde8e0b4dd

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { baseAPI } from "../../../utils/constanst";
// import { toast } from "react-toastify";
// import { jwtDecode } from "jwt-decode";

// const ProfilePersonal2page = () => {
//   const [full_name, setFull_name] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone_number, setPhone_number] = useState('');
//   const [address, setAddress] = useState({
//     country: '', street: "", city: "", apartmant: "", zip_code: ""
//   });
//   const [comment, setComment] = useState('');
//   const [selectID, setSelectID] = useState('');

//   const initializeUser = () => {
//     const token = localStorage.getItem('token');
//     if (!token) return toast.error("Token mavjud emas.");
//     try {
//       const { id }: any = jwtDecode(token); // Token ichidan `id`ni olish
//       setSelectID(id);
//       console.log("Token ichidan ID:", id);
//     } catch {
//       toast.error("Token noto'g'ri yoki muddati o'tgan.");
//     }
//   };

//   useEffect(() => {
//     initializeUser();
//   }, []);

//   const updateProfile = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       const userData = { full_name, lastName, phone_number, email, address, comment };

//       console.log("Bu ID:", selectID);
//       console.log("Bu token:", token);

//       const { data } = await axios.put<any>(
//         `${baseAPI}/userFur/edit-user/${selectID}`,
//         userData,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       if (data.success) {
//         toast.success("Profil muvaffaqiyatli yangilandi!");
//         setFull_name("");
//         setLastName("");
//         setPhone_number("");
//         setEmail("");
//         setAddress({
//           country: '', street: '', city: '', apartmant: '', zip_code: ''
//         });
//         setComment("");
//       }
//     } catch (error: any) {
//       toast.error(error.response?.data?.error?.msg || 'Xatolik yuz berdi.');
//     }
//   };

//   return (
//     <div style={{ paddingTop: "90px" }}>
//       <form onSubmit={updateProfile}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={full_name}
//           onChange={(e) => setFull_name(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           value={phone_number}
//           onChange={(e) => setPhone_number(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Country"
//           value={address.country}
//           onChange={(e) => setAddress((prev) => ({ ...prev, country: e.target.value }))}
//         />
//         <input
//           type="text"
//           placeholder="City"
//           value={address.city}
//           onChange={(e) => setAddress((prev) => ({ ...prev, city: e.target.value }))}
//         />
//         <input
//           type="text"
//           placeholder="Street"
//           value={address.street}
//           onChange={(e) => setAddress((prev) => ({ ...prev, street: e.target.value }))}
//         />
//         <input
//           type="text"
//           placeholder="Apartment"
//           value={address.apartmant}
//           onChange={(e) => setAddress((prev) => ({ ...prev, apartmant: e.target.value }))}
//         />
//         <input
//           type="text"
//           placeholder="ZIP Code"
//           value={address.zip_code}
//           onChange={(e) => setAddress((prev) => ({ ...prev, zip_code: e.target.value }))}
//         />
//         <input
//           type="text"
//           placeholder="Comment"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//         />
//         <button type="submit">Update Profile</button>
//       </form>
//     </div>
//   );
// };

// export default ProfilePersonal2page;

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { baseAPI } from "../../../utils/constanst";
// import { toast } from "react-toastify";
// import { jwtDecode } from "jwt-decode"; 

// const ProfilePersonal2page = () => {
//   const [full_name, setFull_name] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone_number, setPhone_number] = useState('');
//   const [address, setAddress] = useState({
//     country: '', street: "", city: "", apartmant: "", zip_code: ""
//   });
//   const [comment, setComment] = useState('');
//   const [selectID, setSelectID] = useState(''); 

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         const decodedToken: any = jwtDecode(token); 
//         setSelectID(decodedToken.id);
//         console.log("Token ichidan ID:", decodedToken.id);
//       } catch (error) {
//         toast.error("Token noto'g'ri yoki muddati o'tgan.");
//       }
//     } else {
//       toast.error("Token mavjud emas.");
//     }
//   }, []);

//   const updateProfile = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       const userData = { full_name, lastName,phone_number, email, address, comment };

//       console.log("Bu ID:", selectID);
//       console.log("Bu token:", token);

//       const { data } = await axios.put<any>(
//         `${baseAPI}/userFur/edit-user/${selectID}`,
//         userData,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       if (data.success) {
//         toast.success("Profil muvaffaqiyatli yangilandi!");
//         setFull_name("");
//         setLastName("");
//         setPhone_number("");
//         setEmail("");
//         setAddress({
//           country: '', street: '', city: '', apartmant: '', zip_code: ''
//         });
//         setComment("");
//       }
//     } catch (error: any) {
//       toast.error(error.response?.data?.error?.msg || 'Xatolik yuz berdi.');
//     }
//   };

//   return (
//     <div style={{ paddingTop: "90px" }}>
//       <form onSubmit={updateProfile}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={full_name}
//           onChange={(e) => setFull_name(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           value={phone_number}
//           onChange={(e) => setPhone_number(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Country"
//           value={address.country}
//           onChange={(e) => setAddress((prev) => ({ ...prev, country: e.target.value }))}
//         />
//         <input
//           type="text"
//           placeholder="City"
//           value={address.city}
//           onChange={(e) => setAddress((prev) => ({ ...prev, city: e.target.value }))}
//         />
//         <input
//           type="text"
//           placeholder="Street"
//           value={address.street}
//           onChange={(e) => setAddress((prev) => ({ ...prev, street: e.target.value }))}
//         />
//         <input
//           type="text"
//           placeholder="Apartment"
//           value={address.apartmant}
//           onChange={(e) => setAddress((prev) => ({ ...prev, apartmant: e.target.value }))}
//         />
//         <input
//           type="text"
//           placeholder="ZIP Code"
//           value={address.zip_code}
//           onChange={(e) => setAddress((prev) => ({ ...prev, zip_code: e.target.value }))}
//         />
//         <input
//           type="text"
//           placeholder="Comment"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//         />
//         <button type="submit">Update Profile</button>
//       </form>
//     </div>
//   );
// };

// export default ProfilePersonal2page;

