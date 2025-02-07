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

interface NameT {
  name: string;
}

const Payment = () => {
  const navigate = useNavigate();
  const [orders, setOrder] = useState<string | null>(null);
  const [method, setMethod] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [form, setForm] = useState({
    paymentMethod: method,
    cardNumber: "",
    cardExpiry: "",
  });
  const [data, setData] = useState<any[]>([]);
  const [total, setTotal] = useState<any[]>([]);
  const [set, setSet] = useState<any[]>([]);
  const [setb, setsetb] = useState<any[]>([]);

  //// user data and _id
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
      }
    } catch (error: any) {
      toast.error("Error fetch User: ", error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // payment sending
  const handlePayment = async () => {
    try {
      if (!user || !orders) {
        return user || orders;
      }

      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token topilmadi.");

      const { data } = await axios.post(
        `${baseAPI}/payment/create-payment/${user}/${orders}`,
        {
          paymentMethod: method,
          cardDetails: {
            number: form.cardNumber,
            expiry: form.cardExpiry,
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data.success) {
        toast.success("Sizning buyurtmangiz muvaffaqiyatli amalga oshirildi.");
        setTimeout(() => {
          navigate("/order");
        }, 1000);
      }
    } catch (error: any) {
      console.error("To'lovni amalga oshirishda xatolik:", error.message);
    }
  };

  /// get datas
  const fetchData = async () => {
    const token = localStorage.getItem("token");
    try {
      const userId = user;
      if (!userId) return user;

      const { data } = await axios.get(`${baseAPI}/payment/get-checkout/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const filter = data.cart;
      const filter2 = filter.items;
      const uniqueItems = filter2.filter(
        (value: any, index: any, self: any) =>
          index ===
          self.findIndex((t: any) => t.product._id === value.product._id)
      );

      const totalCostSum = uniqueItems.reduce(
        (acc: number, val: any) => acc + val.totalCost,
        0
      );
      const a: any = data.cart.subTotalCost;
      const filter4: any = a - totalCostSum;
      setData(uniqueItems);
      setSet(a);
      setsetb(totalCostSum);
      setTotal(filter4);
    } catch (error: any) {
      toast.error("Error fetching order data: " + error.message);
    }
  };

  // get order datas
  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token topilmadi.");
      const userId = user;
      if (!userId) {
        return user;
      }

      const { data } = await axios.get(`${baseAPI}/payment/get-orders/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!data.order || !data.order._id) {
        throw new Error("Buyurtma ma'lumotlari topilmadi.");
      }

      setOrder(data.order._id);
      setMethod(data.order.paymentMethod);
    } catch (error: any) {
      console.error("Buyurtma ma'lumotlarini olishda xatolik:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
    fetchUser();
    fetchOrders();
  }, [user]);

  return (
    <Container_Chescout>
      <Toaster position="top-right" />

      <DatailCart className="DatailCart">
        <PagesName style={{ marginLeft: "15px" }}>
          <h3>Home</h3>
          <img src={home} alt="img" />
          {/* <h4>{Props.name}</h4> */}
        </PagesName>

        <Chescout_containerWrapper
          onSubmit={(e) => {
            e.preventDefault();
            handlePayment();
          }}
          className="Chescout_containerWrapper"
        >
          <div className="chescoutWrapper">
            <Containre_Chescout_Content className="Containre_Chescout_Content">
              <Chescout_one>
                <InputGroup>
                  <label>Karta raqami:</label>
                  <Input
                    type="text"
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleChange}
                    placeholder="Karta raqami"
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <label>Karta muddati (MM/YY):</label>
                  <Input
                    type="text"
                    name="cardExpiry"
                    value={form.cardExpiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    required
                  />
                </InputGroup>
              </Chescout_one>
            </Containre_Chescout_Content>
          </div>

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Right_Container className="Right_Container">
              <div className="nn">
                <Top_Container>
                  <h2>Cart totals</h2>
                </Top_Container>

                <div style={{ maxHeight: "230px", overflowY: "scroll" }}>
                  {Array.isArray(data) && data.length > 0 ? (
                    data.map((val, ind) => {
                      let  ItemDimensions = '';
                      if (val.widthType === 'max') {
                        ItemDimensions = val.product.maxWidth + ' x ' + val.product.maxHeight;
                      } else if (val.widthType == 'min') {
                        ItemDimensions = val.product.minWidth + ' x ' + val.product.minHeight;
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
                                <h6>{val.product.Color}</h6>
                                <h6 className="nni">
                                  {ItemDimensions}
                                </h6>
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
                </div>

                <Bottom_Container className="Bottom_Container">
                  <div className="bottom_wrape">
                    <div className="cost">
                      <h5>Delivery (Self Pickup)</h5>
                      <h5>${total}</h5>
                    </div>
                    <div className="cost">
                      <h5>subtotal</h5>
                      <h5>${setb}</h5>
                    </div>
                    <div className="cost">
                      <h4>total</h4>
                      <h4>${set}</h4>
                    </div>

                    <div className="btn_wrape">
                      <button type="submit">
                        place order
                        <img src="" alt="" />
                      </button>
                    </div>
                  </div>
                </Bottom_Container>
              </div>
            </Right_Container>
          </div>
        </Chescout_containerWrapper>
      </DatailCart>
    </Container_Chescout>
  );
};

export default Payment;
