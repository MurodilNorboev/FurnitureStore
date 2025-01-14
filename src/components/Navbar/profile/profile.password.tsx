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
import { toast } from "react-toastify";
import { baseAPI } from "../../../utils/constanst";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

interface NameT {
  name: string;
}

const ProfilePassword = (Props: NameT) => {
  const navigate = useNavigate();
  const [aut, setAut] = useState(false);
  const [active, setactive] = useState(1);
  const [password, setPassword] = useState("");
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
      const userData = { password };

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
        setPassword("");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error?.msg || "Xatolik yuz berdi.");
    }
  };

  const logaut = () => {
    localStorage.clear();
    navigate("/login");
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
          onSubmit={updateProfile}
          className="Chescout_containerWrapper"
        >
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
              <Content_chesckout>
                <Chescout_Bottom>
                  <input
                    className="labelvs"
                    type="text"
                    placeholder="change password"
                  />
                </Chescout_Bottom>
                <Chescout_Top className="Chescout_Top">
                  <Chescout_one className="Chescout_one">
                    <div className="LasName_Con d">
                      <label className="labelv" htmlFor="first name">
                        old password
                      </label>
                      <input type="text" placeholder="Johnathan" />
                    </div>
                    <div className="LasName_Con d">
                      <label className="labels" htmlFor="phone">
                        Forgot password?
                      </label>
                      <h3 className="texts">
                        The strong password must contain <br /> uppercase and
                        lowercase Latin letters <br /> and numbers. At least 6
                        characters
                      </h3>
                    </div>
                  </Chescout_one>
                  <Chescout_one className="Chescout_one">
                    <div className="LasName_Con d">
                      <label className="labelv" htmlFor="last name">
                        new password
                      </label>
                      <input
                        type="text"
                        placeholder="Doeherty"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="LasName_Con d">
                      <label className="labelv" htmlFor="email">
                        repeat password
                      </label>
                      <input
                        type="text"
                        placeholder="Doeherty"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </Chescout_one>
                </Chescout_Top>

                <BottomBtn>
                  <div className="buttonbtn">
                    <button type="submit">change password</button>
                  </div>
                  <div className="btns is_btns">
                    <button onClick={() => navigate("/profile")}>cancel</button>
                  </div>
                </BottomBtn>
              </Content_chesckout>
            </Contents>
            <Contents active={active === 2}>
              {aut && (
                <div>
                  <button onClick={logaut}>logout ?</button>
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
