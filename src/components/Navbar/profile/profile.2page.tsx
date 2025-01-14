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
import Checkbox from "@mui/joy/Checkbox";
import { useEffect, useState } from "react";
import { BottomBtn, ContainerP, Content, Contents, Tab } from "./profle.1";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import axios from "axios";
import { baseAPI } from "../../../utils/constanst";
import { City, mockData, Street } from "./mock";

interface NameT {
  name: string;
}

const ProfilePersonal2page = (Props: NameT) => {
  const navigate = useNavigate();
  const [aut, setAut] = useState(false);
  const [active, setActive] = useState(1);
  const [full_name, setFull_name] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setAddress] = useState({
    country: "",
    city: "",
    street: "",
    apartmant: "",
    zip_code: "",
  });
  const [comment, setComment] = useState("");
  const [selectID, setSelectID] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        setSelectID(decodedToken.id);
        console.log("Token ichidan ID:", decodedToken.id);
      } catch (error) {
        toast.error("Token noto'g'ri yoki muddati o'tgan.");
      }
    } else {
      toast.error("Token mavjud emas.");
    }
  }, []);

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const userData = {
        full_name,
        lastName,
        phone_number,
        email,
        address,
        comment,
      };

      console.log("Bu ID:", selectID);
      console.log("Bu token:", token);

      const { data } = await axios.put<any>(
        `${baseAPI}/userFur/edit-user/${selectID}`,
        userData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data.success) {
        toast.success("Profil muvaffaqiyatli yangilandi!");
        setFull_name("");
        setLastName("");
        setPhone_number("");
        setEmail("");
        setAddress({
          country: "",
          street: "",
          city: "",
          apartmant: "",
          zip_code: "",
        });
        setComment("");
        navigate("/profile");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error?.msg || "Xatolik yuz berdi.");
    }
  };

  const logaut = () => {
    localStorage.clear();
    navigate("/login");
  };
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;
    setAddress({ ...address, country, city: "" });
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value;
    setAddress({ ...address, city });
  };

  return (
    <Container_Chescout>
      <DatailCart>
        <PagesName style={{ marginLeft: "15px" }}>
          <h3>Home</h3>
          <img src={home} alt="img" />
          <h4>{Props.name}</h4>
        </PagesName>

        <Chescout_containerWrapper
          className="Chescout_containerWrapper"
          onSubmit={updateProfile}
        >
          <ContainerP className="Right_Container">
            <Content>
              <Tab active={active === 1} onClick={() => setActive(1)}>
                Personal
              </Tab>
              <div onClick={() => setAut(true)}>
                <Tab active={active === 2} onClick={() => setActive(2)}>
                  Logout
                </Tab>
              </div>
            </Content>
          </ContainerP>

          <Containre_Chescout_Content className="Containre_Chescout_Content">
            <Contents active={active === 1}>
              <Content_chesckout>
                <div className="h22">
                  <h2>personal info</h2>
                </div>

                <Chescout_Top className="Chescout_Top">
                  <Chescout_one className="Chescout_one">
                    <div className="LasName_Con d">
                      <label htmlFor="first name">first name</label>
                      <input
                        type="text"
                        placeholder="Johnathan"
                        value={full_name}
                        onChange={(e) => setFull_name(e.target.value)}
                      />
                    </div>
                    <div className="LasName_Con d">
                      <label htmlFor="phone">phone</label>
                      <input
                        type="text"
                        placeholder="+4 098 677 67 26"
                        value={phone_number}
                        onChange={(e) => setPhone_number(e.target.value)}
                      />
                    </div>
                  </Chescout_one>

                  <Chescout_one className="Chescout_one">
                    <div className="LasName_Con d">
                      <label htmlFor="last name">last name</label>
                      <input
                        type="text"
                        placeholder="Doeherty"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div className="LasName_Con d">
                      <label htmlFor="email">email</label>
                      <input
                        type="text"
                        placeholder="customer_1995@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </Chescout_one>
                </Chescout_Top>

                <Chescout_Bottom>
                  <Checkbox label="Warning" color="warning" />
                  <h4>don’t call me</h4>
                </Chescout_Bottom>

                <div className="h22">
                  <h2>delivery</h2>
                </div>

                <Chescout_Top className="Chescout_Top">
                  <Chescout_one className="Chescout_one">
                    <div className="LasName_Con">
                      <select
                        id="country"
                        value={address.country}
                        onChange={handleCountryChange}
                      >
                        <option value="">Select country</option>
                        {mockData.countries.map((country) => (
                          <option key={country.id} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="LasName_Con">
                      <input
                        type="text"
                        placeholder="Street name"
                        value={address.street}
                        onChange={(e) =>
                          setAddress({ ...address, street: e.target.value })
                        }
                      />
                    </div>
                  </Chescout_one>

                  <Chescout_one className="Chescout_one">
                    <div className="LasName_Con">
                      <select
                        id="city"
                        value={address.city}
                        onChange={handleCityChange}
                        disabled={!address.country}
                      >
                        <option value="">Select city</option>
                        {address.country &&
                          mockData.cities[
                            mockData.countries.find(
                              (c: any) => c.name === address.country
                            )?.id as "1" | "2"
                          ]?.map((city: City) => (
                            <option key={city.id} value={city.name}>
                              {city.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="LasName_Con_code">
                      <input
                        type="text"
                        placeholder="Apartment"
                        value={address.apartmant}
                        onChange={(e) =>
                          setAddress({ ...address, apartmant: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        value={address.zip_code}
                        onChange={(e) =>
                          setAddress({ ...address, zip_code: e.target.value })
                        }
                      />
                    </div>
                  </Chescout_one>
                </Chescout_Top>

                <Chescout_Bottom>
                  <input
                    type="text"
                    placeholder="Your comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Chescout_Bottom>
              </Content_chesckout>
              <BottomBtn>
                <div className="buttonbtn">
                  <button type="submit">Save Changes</button>
                </div>
                <div className="btns is_btns">
                  <button onClick={() => navigate("/profile")}>Cancel</button>
                </div>
              </BottomBtn>
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

export default ProfilePersonal2page;
