import { PagesName } from "../../main.all_categorie/catalog.page/catalog";
import {
  Chescout_containerWrapper,
  Container_Chescout,
  Containre_Chescout_Content,
  Content_chesckout,
} from "../Cart/checkout/checkoutt";
import home from "../../../assets/home.svg";
import { DatailCart } from "../Cart/datail";
import { Navlink } from "../../styles/LINK";
import {
  BottomBtn,
  Chescout_one,
  Chescout_Top,
  ContainerP,
  Content,
  Contents,
  Tab,
} from "./profle.1";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseAPI } from "../../../utils/constanst";

interface NameT {
  name: string;
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

const ProfilePersonal = (Props: NameT) => {
  const navigate = useNavigate();
  const [active, setactive] = useState(1);
  const [aut, setAut] = useState(false);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const ftechData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return (window.location.href = "/login");
      try {
        const { data } = await axios.get(`${baseAPI}/userFur/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(token);

        setProfile(data);
      } catch (error) {
        console.log(error);
      }
    };
    ftechData();
  }, []);

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
              <Content_chesckout>
                <div className="h22">
                  <h2>personal info</h2>
                </div>

                <Chescout_Top className="Chescout_Top top">
                  <Chescout_one className="Chescout_one">
                    <div
                      className="LasName_Con"
                      style={{ marginBottom: "10px" }}
                    >
                      <input
                        type="text"
                        placeholder="Personal"
                        className="Accordion aa"
                      />
                    </div>
                    <div className="LasName_Con">
                      <input type="text" placeholder="First name" />
                      <h6>
                        {profile ? (
                          <div>{profile.data.full_name}</div>
                        ) : (
                          <div>-</div>
                        )}
                      </h6>
                    </div>
                    <div className="LasName_Con">
                      <input type="text" placeholder="Last name" />
                      <h5>
                        {profile ? (
                          <div>{profile.data.lastName}</div>
                        ) : (
                          <div>-</div>
                        )}
                      </h5>
                    </div>
                    <div className="LasName_Con">
                      <input type="text" placeholder="Email" />
                      <h4>
                        {profile ? (
                          <div>{profile.data.email}</div>
                        ) : (
                          <div>-</div>
                        )}
                      </h4>
                    </div>
                    <div className="LasName_Con">
                      <input type="text" placeholder="Phone" />
                      <h6>
                        {profile ? (
                          <div>{profile.data.phone_number}</div>
                        ) : (
                          <div>-</div>
                        )}
                      </h6>
                    </div>
                  </Chescout_one>

                  <Chescout_one className="Chescout_one">
                    <div
                      className="LasName_Con"
                      style={{ marginBottom: "10px" }}
                    >
                      <input
                        type="text"
                        placeholder="Address"
                        className="Accordion aa"
                      />
                    </div>
                    <div className="LasName_Con_code">
                      <div className="inputwraps">
                        <div className="LasName_Con">
                          <input type="text" placeholder="Country" />
                          <h6>
                            {profile ? (
                              <>{profile.data.address.country}</>
                            ) : (
                              <div>-</div>
                            )}
                          </h6>
                        </div>
                        <div className="LasName_Con">
                          <input type="text" placeholder="Town/city" />
                          <h6>
                            {profile ? (
                              <>{profile.data.address.city}</>
                            ) : (
                              <div>-</div>
                            )}
                          </h6>
                        </div>
                        <div className="LasName_Con">
                          <input type="text" placeholder="Appartment" />
                          <h6>
                            {profile ? (
                              <>{profile.data.address.apartmant}</>
                            ) : (
                              <div>-</div>
                            )}
                          </h6>
                        </div>
                      </div>
                      <div className="inputwraps">
                        <div className="LasName_Con">
                          <input type="text" placeholder="ZIP Code" />
                          <h6>
                            {profile ? (
                              <div>{profile.data.address.zip_code}</div>
                            ) : (
                              <div>-</div>
                            )}
                          </h6>
                        </div>
                        <div className="LasName_Con">
                          <input type="text" placeholder="Comment" />
                          <h6>
                            {profile ? (
                              <div>{profile.data.comment}</div>
                            ) : (
                              <div>-</div>
                            )}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="LasName_Con">
                      <input type="text" placeholder="Street" />
                      <h6>
                        {profile ? (
                          <div>{profile.data.address.street}</div>
                        ) : (
                          <div>-</div>
                        )}
                      </h6>
                    </div>
                  </Chescout_one>
                </Chescout_Top>

                <BottomBtn>
                  <Navlink to={"/profile2"}>
                    <div className="buttonbtn">
                      <button>edit information</button>
                    </div>
                  </Navlink>
                  <Navlink to={"/profilePassword"}>
                    <div className="btns">
                      <button>change password</button>
                    </div>
                  </Navlink>
                </BottomBtn>
              </Content_chesckout>
            </Contents>

            <Contents active={active === 2}>
              {aut && (
                <div>
                  <button onClick={logaut}>logaut ?</button>
                </div>
              )}
            </Contents>
          </Containre_Chescout_Content>
        </Chescout_containerWrapper>
      </DatailCart>
    </Container_Chescout>
  );
};
export default ProfilePersonal;
