import React, { useState, useEffect, useRef } from "react";
import { baseAPI } from "../../../../utils/constanst";
import axios from "axios";
import {
  Container,
  LeftCon,
  Midl_id_con,
  Right_in_bottom,
  Right_in_top,
  RightCon,
} from "./styles";
import { PagesName } from "../../../main.all_categorie/catalog.page/catalog";
import home from "../../../../assets/home.svg";
import delet from "../../../../assets/remove.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../Redux/store";
import {
  setCarts,
  setItemCosts,
  updateCartItemCount,
} from "../../../Redux/cartsSlice";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import toast, { Toaster } from 'react-hot-toast';

const MyCartCompoenent = () => {
  const [value, setValue] = React.useState<string>("FEDEX"); // Shipping method uchun state
  const [value2, setValue2] = React.useState<string>("CASH"); // Payment method uchun state
  const navigate = useNavigate();
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const carts: any[] = useSelector((state: RootState) => state.carts.items);
  const dispatch = useDispatch<AppDispatch>();
  const [editedItem, setEditedItem] = useState<any[] | any>([]);
  const [itemCost, setItemCost] = useState<any[]>([]);

  const getCostNumber = (cost: string | number) =>
    typeof cost === "string"
      ? parseFloat(cost.replace("$", "").replace(/\s/g, "").trim())
      : cost;

  const fetchCartData = async () => {
    try {
      const { cartsData } = await (
        await fetch(`${baseAPI}/product/cart-count`)
      ).json();
      const allFurniture = cartsData.flatMap(
        ({ _id: cartID, furniture }: any) =>
          furniture.map((fur: any) => ({
            ...fur,
            cartID, // cartID qo'shildi
            cost: fur.cost || 0, // cost qo'shildi
          }))
      );

      dispatch(setCarts(allFurniture));

      const initialCounts = Object.fromEntries(
        allFurniture.map((item: any) => [item._id, item.count || 1])
      );
      setCounts(initialCounts);
    } catch (error: any) {
      toast.error("Error fetching cart data:", error);
    }
  };

  const updateCount = (id: string, isIncrement: boolean) => {
    const newCount = {
      ...counts,
      [id]: Math.max(1, (counts[id] || 0) + (isIncrement ? 1 : -1)),
    };
    setCounts(newCount);
    dispatch(updateCartItemCount({ _id: id, count: newCount[id] }));
  };

  const handleDeleteCart = async (cart_id: string, fur_id: string) => {
    try {
      const {
        data: { success },
      } = await axios.delete(
        `${baseAPI}/product/cart/${cart_id}/furniture/${fur_id}`
      );
      if (success) {
        fetchCartData(); // Cartni yangilash
        fetchUpdatedCartData("some_fur_id", "603d9f3f494f1c3a9c4f2345"); // Yangilangan ma'lumotni olish
      }
    } catch (error) {
      console.error("Error deleting from cart:", error);
    }
  };

  const fetchUpdatedCartData = async (fur_id: string, user_id: string) => {
    try {
      const { data } = await axios.get(
        `${baseAPI}/product/carts?userId=${user_id}`
      );

      if (data.success && data.cart) {
        const cart = data.cart;
        const cartTotalCost = cart.totalCost;

        setEditedItem([cartTotalCost]); // editedItem ni yangilash
        const itemCosts: any = [];

        if (cart.items && cart.items.length > 0) {
          cart.items.forEach((item: any) => {
            itemCosts.push(item.totalCost);
          });
        }

        setItemCost(itemCosts); // itemCost ni yangilash
        dispatch(setItemCosts(itemCosts));
      }
    } catch (error) {
      console.error("Error fetching updated cart data:", error);
    }
  };

  const updateCart = async () => {
    try {
      const updates = carts.map((item: any) => ({
        furnitureId: item._id,
        quantity: counts[item._id] || 1,
        totalCost: getCostNumber(item.cost) * (counts[item._id] || 0),
      }));

      let totalCostFromItems = 0;

      for (const update of updates) {
        const response = await axios.post(`${baseAPI}/product/checkout`, {
          userId: "603d9f3f494f1c3a9c4f2345",
          furnitureId: update.furnitureId,
          quantity: update.quantity,
          totalCost: update.totalCost,
        });

        if (!response.data.success) {
          toast.error(`Failed to update item ${update.furnitureId}`);
          return;
        }

        const cart = response.data.cart;

        if (cart.items) {
          totalCostFromItems += cart.items.reduce(
            (sum: number, item: any) => sum + item.totalCost,
            0
          );
        }
      }
      toast.success("Cart updated successfully");

      // fetchUpdatedCartData funksiyasini chaqirib, yangilangan ma'lumotni olish
      fetchUpdatedCartData("some_fur_id", "603d9f3f494f1c3a9c4f2345");
    } catch (error: any) {
      toast.error(
        "Error updating cart: " + error.response?.data?.message || error.message
      );
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartData();
    fetchUpdatedCartData("some_fur_id", "603d9f3f494f1c3a9c4f2345");
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedShipping = event.target.value.trim();

    if (selectedShipping === "Fedex ($15)") {
      setValue("FEDEX");
    } else {
      setValue("SELF_PICKUP");
    }
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPayment = event.target.value.trim(); // Tanlangan qiymatni olamiz

    if (selectedPayment === "cash on delivery") {
      setValue2("CASH"); // Backend uchun mos keladigan qiymatni saqlaymiz
    } else {
      setValue2("VISA");
    }
  };

  const updateShippingAndPayment = async () => {
    try {
      const response = await axios.post(`${baseAPI}/payment/update`, {
        userId: "603d9f3f494f1c3a9c4f2345",
        shippingMethod: value, // FEDEX yoki SELF_PICKUP
        paymentMethod: value2, // CASH yoki VISA
      });

      if (response.data.success) {
        console.log("Sent Data:", {
          shippingMethod: value,
          paymentMethod: value2,
        });
      } else {
        toast.error("Failed to update Shipping and Payment!");
      }
    } catch (error: any) {
      toast.error(
        "Error updating shipping and payment: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <Container>
      <PagesName style={{ marginLeft: "15px" }}>
        <h3>Home</h3>
        <img src={home} alt="img" />
        <h4>Cart</h4>
      </PagesName>

      <Toaster position="top-right" />

      <div className="Wrapper">
        <LeftCon className="Containre_Chescout_Content">
          <div className="Content2">
            {carts.length > 0 ? (
              carts.map((val: any, ind: any) => {
                const itemCost =
                  getCostNumber(val.cost) * (counts[val._id] || 0);
                return (
                  <div className="Content" key={ind}>
                    <img src={val.image} alt="" />
                    <div className="info">
                      <div className="item1">
                        <h5>{val.types}</h5>
                        <h6>{val.Color}</h6>
                        <h6>
                          {val.Width} x {val.Hight}
                        </h6>
                      </div>
                      <div className="item2">{val.cost}</div>
                      <div className="item3">
                        <button onClick={() => updateCount(val._id, false)}>
                          -
                        </button>
                        <span>{counts[val._id]}</span>
                        <button onClick={() => updateCount(val._id, true)}>
                          +
                        </button>
                      </div>
                      <div className="item4">
                        <span>${itemCost}</span>
                      </div>
                      <div className="item5">
                        <button
                          onClick={() => handleDeleteCart(val.cartID, val._id)}
                        >
                          <img src={delet} alt="trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="empty-cart">
                <p>Your cart is currently empty...</p>
              </div>
            )}

            <div className="bottomContent">
              <div className="left">
                <input type="text" className="inputText" />
                <input type="submit" value="Apply" className="inputSubmit" />
              </div>
              <div className="right">
                <button
                  onClick={() => updateCart()}
                  style={{
                    background: carts.length > 0 ? "#d1bcb2" : "#EDE4E0",
                  }}
                  disabled={!(carts && carts.length > 0)}
                >
                  update cart
                </button>
              </div>
            </div>
          </div>
        </LeftCon>

        <RightCon className="Right_Container">
          <div className="nn">
            <Right_in_top>
              <h2>Cart totals</h2>
            </Right_in_top>

            <Midl_id_con>
              <h3>Shipping method</h3>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Fedex ($15)"
                  control={<Radio className="inputs" />}
                  checked={itemCost.length > 0 && value === "FEDEX"}
                  label="Fedex ($15)"
                  className={itemCost.length > 0 && value === "FEDEX" ? "qora" : "sariq"}
                />
                <FormControlLabel
                  value="Self pickup (free)"
                  control={<Radio className="inputs" />}
                  checked={itemCost.length > 0 && value === "SELF_PICKUP"}
                  label="Self pickup (free)"
                  className={itemCost.length > 0 && value === "SELF_PICKUP" ? "qora" : "sariq"}
                />
              </RadioGroup>

              <h3>payment method</h3>

              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value2}
                onChange={handleChange2}
              >
                <FormControlLabel
                  value="cash on delivery"
                  control={<Radio className="inputs" />}
                  checked={itemCost.length > 0 && value2 === "CASH"}
                  label="cash on delivery"
                  color="primary"
                  className={itemCost.length > 0 && value2 === "CASH" ? "qora" : "sariq"}
                />
                <FormControlLabel
                  value="male"
                  className={itemCost.length > 0 && value2 === "VISA" ? "qora" : "sariq"}
                  control={<Radio className="inputs" />}
                  checked={itemCost.length > 0 && value2 === "VISA"}
                  label="Visa/mastercard"
                />
              </RadioGroup>
            </Midl_id_con>

            <Right_in_bottom className="Bottom_Container">
              <div className="bottom_wrape">
                <div className="cost">
                  <h5>Delivery</h5>
                  <h5>${itemCost.length > 0 && value === "FEDEX" ? 15 : 0}</h5>
                </div>
                <div className="cost">
                  <h5>subtotal</h5>
                  <h5>${editedItem}</h5>
                </div>
                <div className="cost">
                  <h4>total</h4>
                  <h4>
                    $
                    {itemCost.length > 0 && value === "FEDEX"
                      ? +editedItem + 15
                      : editedItem || 0}
                  </h4>
                </div>
                <div className="btn_wrape">
                  <button
                    onClick={() => {
                      if (itemCost.length > 0) {
                        toast.success('Order placed successfully');
                        setTimeout(() => {
                          updateShippingAndPayment();
                          navigate("/chekout");
                        }, 1000);
                      } else {
                        toast.error('Please add items to your cart first');
                      }
                    }}
                  >
                    place order
                    <img src="" alt="" />
                  </button>
                </div>
              </div>
            </Right_in_bottom>
          </div>
        </RightCon>
      </div>
    </Container>
  );
};

export default MyCartCompoenent;
