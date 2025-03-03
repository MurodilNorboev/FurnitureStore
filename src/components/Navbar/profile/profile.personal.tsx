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
  ContianerOrders,
  LeftContent,
  NameT,
  RightContent,
  Tab,
} from "./profle.1";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseAPI } from "../../../utils/constanst";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import toast from "react-hot-toast";
import { Button } from "@mui/joy";

const ProfilePersonal = (Props: NameT) => {
  const navigate = useNavigate();
  const [active, setactive] = useState(1);
  const [aut, setAut] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [user_id, setUser_id] = useState<string | null>(null);

  const logaut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const fetchOrders = async () => {
    const token = localStorage.getItem("token");
    if (!user_id) return; // `user_id` bo'sh bo'lsa, qaytadi
    try {
      const { data } = await axios.get(`${baseAPI}/payment/order/${user_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data.success) {
        setOrders(data.orders);
      } else {
        console.error("Buyurtmalarni olishda xatolik yuz berdi.");
      }
    } catch (error) {
      console.error("API xatosi:", error);
    }
  };

  const ftechData = async () => {
    const token = localStorage.getItem("token");
    if (!token) return (window.location.href = "/login");
    try {
      const { data } = await axios.get(`${baseAPI}/userFur/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(data);
      setUser_id(data.data._id); // `user_id` ni yangilash
    } catch (error: any) {
      toast.error(error);
    }
  };

  useEffect(() => {
    ftechData();
    if (user_id) {
      // fetchOrders();
    }
  }, [user_id]);

  return (
    <Container_Chescout>
      <DatailCart>
        <PagesName style={{ marginLeft: "15px" }}>
          <h3 onClick={() => navigate("/")}>Home</h3>
          <img src={home} alt="img" />
          <h4>{Props.name}</h4>
        </PagesName>

        <Chescout_containerWrapper className="Chescout_containerWrapper">
          <ContainerP className="Right_Container">
            <Content>
              <Tab $active={active === 1} onClick={() => setactive(1)}>
                Personal
              </Tab>

              <div onClick={() => setAut(true)}>
                <Tab $active={active === 3} onClick={() => setactive(3)}>
                  Orders
                </Tab>
              </div>

              <div onClick={() => setAut(true)}>
                <Tab $active={active === 2} onClick={() => setactive(2)}>
                  Logout
                </Tab>
              </div>
            </Content>
          </ContainerP>

          <Containre_Chescout_Content className="Containre_Chescout_Content">
            <Contents $active={active === 1}>
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

            <Contents $active={active === 2}>
              {aut && (
                <div>
                  <Button color="neutral" onClick={logaut}>
                    logaut ?
                  </Button>
                </div>
              )}
            </Contents>

            <Contents $active={active === 3}>
              <ContianerOrders>
                <h2 className="h2">Current orders ({orders.length})</h2>
                {orders.map((order: any, index: number) => {
                  const {
                    userinfo: { first_name, last_name, email, phone_number },
                    deliveryAddress,
                    sana,
                    items,
                    shippingMethod,
                    paymentMethod,
                  } = order;
                  const filterImage = order.items[0];
                  return (
                    <Accordion
                      style={{
                        maxWidth: "900px",
                        width: "100vw",
                        boxShadow: "none",
                        borderTop: "1px solid #D1BCB2",
                        borderBottom: "1px solid #D1BCB2",
                        marginTop: "-1px",
                        borderRadius: "0px",
                      }}
                      sx={{
                        "&::before": {
                          display: "none",
                        },
                      }}
                    >
                      <AccordionSummary
                        sx={{
                          width: "100%",
                          marginTop: "-1px",
                          borderBottom: "none",
                        }}
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <div className="ItemContainer">
                          <div className="item1">
                            <h1>#{index + 1}</h1>{" "}
                            <h2>
                              {new Date(sana).toLocaleDateString()}{" "}
                              {new Date(sana).toLocaleTimeString()}
                            </h2>
                          </div>
                          <div className="item2">
                            <h1>${order.totalCost}</h1>
                          </div>
                        </div>
                      </AccordionSummary>

                      <AccordionDetails style={{ display: "flex" }}>
                        <LeftContent className="leftContainer">
                          {items.map((item: any, itemIndex: number) => {
                            let ItemDimensions = "";
                            if (item.widthType === "max") {
                              ItemDimensions =
                                item.product.maxWidth +
                                " x " +
                                item.product.maxHeight;
                            } else if (item.widthType == "min") {
                              ItemDimensions =
                                item.product.minWidth +
                                " x " +
                                item.product.minHeight;
                            }

                            return (
                              <div key={itemIndex} className="itemContainer">
                                <img src={filterImage.product.image} alt="" />
                                <div className="itemWrapper">
                                  <div className="item1">
                                    <h5>{item.product.types}</h5>
                                    <h6>{item.setColors}</h6>
                                    <h6>{ItemDimensions} </h6>
                                  </div>
                                  <div className="item2">
                                    <h5>x{item.quantity}</h5>
                                  </div>
                                  <div className="item3">
                                    <h5>${item.totalCost}</h5>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </LeftContent>
                        <div className="line"></div>
                        <RightContent className="rightContainer">
                          <h1>
                            {shippingMethod === "SELF_PICKUP"
                              ? "FEDEX ($15)"
                              : "SELF PICKUP (FREE)"}
                          </h1>
                          <h1>
                            {paymentMethod === "CASH"
                              ? "CASH ON DELIVERY"
                              : "VISA/MASTERCARD"}
                          </h1>
                          <h2>
                            {first_name} {last_name}
                          </h2>
                          <h2>{email}</h2>
                          <h2>{phone_number}</h2>
                          <h2>
                            {deliveryAddress.city}, {deliveryAddress.street},{" "}
                            {deliveryAddress.Appartment},{" "}
                            {deliveryAddress.zip_code} (
                            {deliveryAddress.comment})
                          </h2>
                        </RightContent>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </ContianerOrders>
            </Contents>
          </Containre_Chescout_Content>
        </Chescout_containerWrapper>
      </DatailCart>
    </Container_Chescout>
  );
};
export default ProfilePersonal;
