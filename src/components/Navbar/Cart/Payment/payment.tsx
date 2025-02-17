import React, { useState, useEffect, useRef } from "react";
import { baseAPI } from "../../../../utils/constanst";
import axios from "axios";
import { PagesName } from "../../../main.all_categorie/catalog.page/catalog";
import home from "../../../../assets/home.svg";
import delet from "../../../../assets/remove.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../Redux/store";
import Checkbox from "@mui/joy/Checkbox";
import {
  setCarts,
  setItemCosts,
  updateCartItemCount,
} from "../../../Redux/cartsSlice";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";
import {
  Chescout_Bottom,
  Chescout_Top,
  Chescout_containerWrapper,
  Chescout_one,
  Container_Chescout,
  Containre_Chescout_Content,
  Content,
  Content_chesckout,
  Datails,
  Imag,
  LeftDiv,
  Right_Container,
  Bottom_Container,
  DatailCart,
  Top_Container,
  Form,
  InputGroup,
  Input,
  SubmitButton,
} from "./style";
import Button from "@mui/joy/Button";
import SvgIcon from "@mui/joy/SvgIcon";
const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const Payment = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any[]>([]);
  const [PMETHOD, SETPMETHOD] = useState<string>("");
  const [SMETHOD, SETSMETHOD] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [form, setForm] = useState({
    orderId: "",
    userId: "",
    checkImg: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`${baseAPI}/userFur/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const filter = data.data._id;
        if (data.success) {
          setUser(filter);
          setForm((prevForm) => ({
            ...prevForm,
            userId: filter,
          }));
        }
      } catch (error: any) {
        toast.error("Error fetch User: ", error.message);
      }
    };

    fetchUser();
    fetchData();
  }, [user]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    try {
      const userId = user;
      if (!userId) return user;
      const { data } = await axios.get(`${baseAPI}/order/get-orders/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(data.order.slice(-1)[0].OrderItems); // Yangi ma'lumotlarni o'rnatish
      SETPMETHOD(data.order.slice(-1)[0].paymentMethod);
      console.log(data.order);

      SETSMETHOD(data.order.slice(-1)[0].shippingMethod);
      setForm((prevForm) => ({
        ...prevForm,
        orderId: data.order[0]._id,
      }));
    } catch (error: any) {
      toast.error("Error fetching order data: " + error.message);
    }
  };
  const uploadFile = async (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const formData = new FormData();
    formData.append(fieldName, e.target.files[0]);
    const token = localStorage.getItem("token");

    try {
      const { data } = await axios.post<any>(`${baseAPI}/upload/`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setForm((prev: any) => ({
          ...prev,
          [fieldName]: data.filePaths[0],
        }));
        toast.success(`${fieldName} uploaded successfully`);
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.error?.msg || "Fayl yuklashda xatolik yuz berdi."
      );
    }
  };

  const handlePayment = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token topilmadi.");
      const { data } = await axios.post(
        `${baseAPI}/payment/create-checkout-session`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (PMETHOD === "CASH" && data.success) {
        toast.success(data.message);
        setTimeout(() => {
          navigate("/order");
          setForm({
            orderId: "",
            userId: "",
            checkImg: "",
          });
          fetchData();
        }, 2000);
      } else {
        window.location.href = data.url;
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Container_Chescout>
      <Toaster position="top-right" />

      <DatailCart
        className="DatailCart"
        onSubmit={(e) => {
          e.preventDefault();
          handlePayment();
        }}
      >
        <PagesName style={{ marginLeft: "15px" }}>
          <h3>Home</h3>
          <img src={home} alt="img" />
          {/* <h4>{Props.name}</h4> */}
        </PagesName>

        <Chescout_containerWrapper className="Chescout_containerWrapper">
          {PMETHOD === "VISA" ? (
            <div className="chescoutWrapper">
              <Containre_Chescout_Content className="Containre_Chescout_Content">
                {Array.isArray(data) && data.length > 0 ? (
                  data.map((val, ind) => {
                    const widthTypes =
                      val.widthType === "min"
                        ? val.product.minWidth + " x " + val.product.minHeight
                        : val.product.maxWidth + " x " + val.product.maxHeight;
                    return (
                      <Content key={ind}>
                        <Datails style={{ borderTop: ( ind === 0 ? "1px solid #d1bcb2" : "0px solid #d1bcb2") }}>
                          <Imag
                            src={val.product.image}
                            alt={val.product.discount}
                          />
                          <LeftDiv>
                            <div className="item1">
                              <h4>{val.product.types}</h4>
                              <h6>{val.setColors}</h6>
                              <h6 className="nni">{widthTypes}</h6>
                            </div>
                            <div className="item2">
                              <h6>x{val.quantity}</h6>
                            </div>
                            <div className="item3">
                              <h6>${val.totalCost}</h6>
                            </div>
                          </LeftDiv>
                        </Datails>
                      </Content>
                    );
                  })
                ) : (
                  <div>No data</div>
                )}
              </Containre_Chescout_Content>
            </div>
          ) : (
            <div className="chescoutWrapper">
              <Containre_Chescout_Content className="Containre_Chescout_Content">
                <div className="wraper">
                  <div className="imgContent">
                    <img
                      className="images"
                      src={
                        form.checkImg ||
                        "https://us.123rf.com/450wm/avaicon/avaicon2202/avaicon220200138/181341773-ic%C3%B4ne-d-image-signe-et-symbole-de-la-galerie-de-photos-ic%C3%B4ne-d-image.jpg?ver=6"
                      }
                      alt="Image"
                    />
                    <Button
                      style={{ border: "1px solid #d1bcb2" }}
                      component="label"
                      role={undefined}
                      tabIndex={-1}
                      variant="outlined"
                      color="neutral"
                      startDecorator={
                        <SvgIcon>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                            />
                          </svg>
                        </SvgIcon>
                      }
                    >
                      Upload Check
                      <VisuallyHiddenInput
                        type="file"
                        name="checkImg" // Update fieldName with the relevant field
                        onChange={(e) => uploadFile(e, "checkImg")} // Update fieldName with the relevant field
                      />
                    </Button>
                  </div>
                  <p>
                    Please pay the total amount shown in TOTAL through your
                    phone, bank, or ATM. Then, upload the payment confirmation
                    by clicking 'Upload Check'. After uploading, click 'Confirm
                    Payment'. <br /> Once confirmed, we will prepare and ship
                    your product soon. For assistance, feel free to contact us.
                  </p>
                </div>
              </Containre_Chescout_Content>
            </div>
          )}

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            {data.length > 0 && (
              <Right_Container className="Right_Container">
                <div className="nn">
                  <Top_Container>
                    <h2>Cart totals</h2>
                  </Top_Container>
                  {PMETHOD === "CASH" && (
                    <div style={{ maxHeight: "230px", overflowY: "scroll" }}>
                      {data.map((val, ind) => {
                        let ItemDimensions = "";
                        if (val.widthType === "max") {
                          ItemDimensions =
                            val.product.maxWidth +
                            " x " +
                            val.product.maxHeight;
                        } else if (val.widthType == "min") {
                          ItemDimensions =
                            val.product.minWidth +
                            " x " +
                            val.product.minHeight;
                        }
                        return (
                          <Content key={ind}>
                            <Datails>
                              <Imag
                                src={val.product.image}
                                alt={val.product.discount}
                              />
                              <LeftDiv>
                                <div className="item1">
                                  <h4>{val.product.types}</h4>
                                  <h6>{val.setColors}</h6>
                                  <h6 className="nni">{ItemDimensions}</h6>
                                </div>
                                <div className="item2">
                                  <h6>x{val.quantity}</h6>
                                </div>
                                <div className="item3">
                                  <h6>${val.totalCost}</h6>
                                </div>
                              </LeftDiv>
                            </Datails>
                          </Content>
                        );
                      })}
                    </div>
                  )}
                  <Bottom_Container className="Bottom_Container">
                    <div className="bottom_wrape">
                      <div className="cost">
                        <h5>Delivery (Self Pickup)</h5>
                        <h5>${SMETHOD === "FEDEX" ? 15 : 0}</h5>
                      </div>
                      <div className="cost">
                        <h5>subtotal</h5>
                        <h5>
                          ${data.reduce((acc, val) => acc + val.totalCost, 0)}
                        </h5>{" "}
                        {/* Jami subtotalni hisoblash */}
                      </div>
                      <div className="cost">
                        <h4>total</h4>
                        <h4>
                          $
                          {SMETHOD === "FEDEX"
                            ? data.reduce(
                                (acc, val) => acc + val.totalCost,
                                0
                              ) + 15
                            : data.reduce((acc, val) => acc + val.totalCost, 0)}
                        </h4>
                      </div>

                      <div className="btn_wrape">
                        <button type="submit">
                          Confirm Payment
                          <img src="" alt="" />
                        </button>
                      </div>
                    </div>
                  </Bottom_Container>
                </div>
              </Right_Container>
            )}
          </div>
        </Chescout_containerWrapper>
      </DatailCart>
    </Container_Chescout>
  );
};

export default Payment;
