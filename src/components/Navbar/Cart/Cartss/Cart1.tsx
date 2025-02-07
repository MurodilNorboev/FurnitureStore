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
import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";
const MyCartCompoenent = () => {
  const navigate = useNavigate(); /// navigatsiya uchun
  const [user, setUser] = useState<any[]>([]);
  const [value, setValue] = React.useState<string>("FEDEX");
  const [value2, setValue2] = React.useState<string>("CASH");
  const carts: any[] = useSelector((state: RootState) => state.carts.items);
  const dispatch = useDispatch<AppDispatch>();
  const [itemCost, setItemCost] = useState<any[]>([]);
  const [item_Data, setItem_Data] = useState<any[]>([]);
  const [productID, setProductID] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false); 
  const fetchCartData = async () => {
    try {
      const response = await fetch(`${baseAPI}/product/cart-count`);
      const { cartsData } = await response.json();

      // Initialize an empty object to store updated counts
      const updatedCounts: { [key: string]: number } = {};

      // Loop through all carts and items to get the quantity
      cartsData.forEach((cart: any) => {
        if (cart.items && cart.items.length > 0) {
          cart.items.forEach((item: any) => {
            // Ensure the item has a valid quantity
            if (item.quantity !== undefined && item.product) {
              // Set the item_id with its corresponding quantity
              updatedCounts[item.item_id] = item.quantity; // Ensure item_id is used here
            }
          });
        }
      });
      const itemWidthTypes: any = [];

      if (cartsData && cartsData[0].items.length > 0) {
        cartsData[0].items.forEach((i: any) => {
          itemWidthTypes.push({
            widthType: i.widthType,
            itemId: i.item_id,
          });
        });
      }
      setProductID(itemWidthTypes);
      const filters = cartsData[0]?.items || [];
      setItem_Data(
        filters.map((item: any) => ({
          ...item,
          productDetails: item.product, // Attach product details
          quantity: updatedCounts[item.item_id] || 0, // Use item_id for matching
          totalCost: item.totalCost,
        }))
      );
    } catch (error: any) {
      toast.error("Error fetching cart data.");
    }
  };
  const handleDeleteCart = async (furnitureId: any) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found");
      return;
    }

    try {
      const { data } = await axios.delete(
        `${baseAPI}/product/delete`, // Cartni o'chirish URL
        {
          headers: { Authorization: `Bearer ${token}` }, // Tokenni yuborish
          data: { furId: furnitureId },
        }
      );

      if (data.success) {
        setItem_Data([]);
        fetchCartData(); // Cartni yangilash
        fetchUpdatedCartData(); // Cart ma'lumotlarini yangilash
      }
    } catch (error) {
      toast.error("Error deleting item from cart.");
    }
  };
  const updateCart = async () => {
    try {
      const token = localStorage.getItem("token");
      setIsLoading(true);
      for (const item of item_Data) {
        const response = await axios.post(
          `${baseAPI}/product/update`,
          {
            fur_id: item.productDetails._id,
            item_id: item.item_id,
            quantity: item.quantity,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const a = response.data.datas        
        setItemCost(a.items.length)
      }
      toast.success("Cart updated successfully");
      fetchUpdatedCartData();
    } catch (error: any) {
      toast.error(
        "Error updating cart: " +
          (error.response?.data?.message || error.message)
      );
    } finally {
      setIsLoading(false);
    }
  };
  const updateCount = (
    itemId: string,
    quantity: number,
    isIncrement: boolean,
    types: string // `types` endi string bo‘ldi
  ) => {
    const newQuantity: number = Math.max(1, quantity + (isIncrement ? 1 : -1));

    // Update the quantity in item_Data state
    const updatedItemData = item_Data.map((item) => {
      if (item.item_id === itemId) {
        let newTotalCost: any;

        // Agarda `types` "max" bo‘lsa, bigCost bilan hisoblash
        if (types === "max") {
          newTotalCost = item.productDetails.bigCost * newQuantity;
        }
        // Agarda `types` "min" bo‘lsa, cost bilan hisoblash
        else if (types === "min") {
          newTotalCost = item.productDetails.cost * newQuantity;
        }

        // Return the updated item
        return { ...item, quantity: newQuantity, totalCost: newTotalCost };
      }
      return item;
    });

    setItem_Data(updatedItemData);
  };

  /// cartdan update bolgan datalarni chiqarish
  const fetchUpdatedCartData = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!user || user.length === 0) {
        return;
      }

      const { data } = await axios.get(
        `${baseAPI}/product/get-updated/${user}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data.success && data.cart) {
        const cart = data.cart;
        const itemCosts: any = [];

        if (cart.items && cart.items.length > 0) {
          cart.items.forEach((item: any) => {
            itemCosts.push(item.totalCost);
          });
        }

        setItemCost(cart.subTotalCost);
        dispatch(setItemCosts(itemCosts));
      }
    } catch (error) {
      console.error("Error fetching updated cart data:", error);
    }
  };
  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`${baseAPI}/userFur/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data.data._id);
      } catch (error: any) {
        toast.error("Error fetching user data:", error);
      }
    };

    getUser();
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
      setValue2("CASH");
    } else {
      setValue2("VISA");
    }
  };
  const updateShippingAndPayment = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${baseAPI}/payment/chescout`,
        {
          userId: user,
          productId: productID[0].item.item_id,
          shippingMethod: value, // FEDEX yoki SELF_PICKUP
          paymentMethod: value2, // CASH yoki VISA
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        toast.success("Shipping and Payment updated successfully");
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
  useEffect(() => {
    fetchCartData();
    fetchUpdatedCartData();
  }, []);

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
            {item_Data && item_Data.length > 0 ? (
              item_Data.map((item: any, ind: any) => {
                const { productDetails, quantity, totalCost } = item;

                return (
                  <div className="Content" key={ind}>
                    <img src={productDetails.image} alt="product" />
                    <div className="info">
                      <div className="item1">
                        <h5>{productDetails.types}</h5>
                        <h6>{item.setColors}</h6>
                        <h6>
                          {productID[0].itemId === item.item_id &&
                          productID[0].widthType === "max"
                            ? productDetails.maxWidth +
                              " x " +
                              productDetails.maxHeight
                            : productDetails.minWidth +
                              " x " +
                              productDetails.minHeight}
                        </h6>
                      </div>
                      <div className="item2">
                        {item.widthType === "max"
                          ? item.product.bigCost
                          : item.product.cost}
                      </div>

                      <div className="item3">
                        <button
                          onClick={() =>
                            updateCount(
                              item.item_id,
                              quantity,
                              false,
                              item.widthType
                            )
                          }
                        >
                          -
                        </button>
                        <span>{quantity}</span>
                        <button
                          onClick={() =>
                            updateCount(
                              item.item_id,
                              quantity,
                              true,
                              item.widthType
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                      <div className="item4">
                        <span>${totalCost}</span> {/* hisoblangan narx */}
                      </div>
                      <div className="item5">
                        <button onClick={() => handleDeleteCart(item.item_id)}>
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
                {/* <button
                  onClick={() => updateCart()}
                  style={{
                    background: carts?.length > 0 ? "#d1bcb2" : "#EDE4E0",
                  }}
                  disabled={!(carts && carts?.length > 0)}
                >
                  update cart
                </button> */}
                <button
                  onClick={updateCart}
                  style={{
                    background: carts?.length > 0 ? "#d1bcb2" : "#EDE4E0",
                  }}
                  disabled={isLoading || !(carts && carts?.length > 0)}
                >
                  {isLoading ? "Updating..." : "Update Cart"}
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
                  disabled={itemCost.length === 0}
                  value="Fedex ($15)"
                  control={<Radio className="inputs" />}
                  checked={value === "FEDEX"}
                  label="Fedex ($15)"
                  className={value === "FEDEX" ? "qora" : "sariq"}
                />
                <FormControlLabel
                  disabled={itemCost.length === 0}
                  value="Self pickup (free)"
                  control={<Radio className="inputs" />}
                  checked={value === "SELF_PICKUP"}
                  label="Self pickup (free)"
                  className={value === "SELF_PICKUP" ? "qora" : "sariq"}
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
                  disabled={itemCost.length === 0}
                  value="cash on delivery"
                  control={<Radio className="inputs" />}
                  checked={value2 === "CASH"}
                  label="cash on delivery"
                  color="primary"
                  className={value2 === "CASH" ? "qora" : "sariq"}
                />
                <FormControlLabel
                  disabled={itemCost.length === 0}
                  value="male"
                  className={value2 === "VISA" ? "qora" : "sariq"}
                  control={<Radio className="inputs" />}
                  checked={value2 === "VISA"}
                  label="Visa/mastercard"
                />
              </RadioGroup>
            </Midl_id_con>

            <Right_in_bottom className="Bottom_Container">
              <div className="bottom_wrape">
                <div className="cost">
                  <h5>Delivery</h5>
                  <h5>${value === "FEDEX" ? 15 : 0}</h5>{" "}
                  {/* FEDEX bo'lsa $15 */}
                </div>
                <div className="cost">
                  <h5>subtotal</h5>
                  <h5>${itemCost}</h5> {/* Subtotal */}
                </div>
                <div className="cost">
                  <h4>total</h4>
                  <h4>${value === "FEDEX" ? +itemCost + 15 : itemCost}</h4>{" "}
                  {/* Total: Subtotal + Delivery */}
                </div>
                <div className="btn_wrape">
                  <button
                    onClick={() => {
                      if (carts.length > 0) {
                        toast.success("Order placed successfully");
                        setTimeout(() => {
                          updateShippingAndPayment();
                          navigate("/chekout");
                        }, 1000);
                      } else {
                        toast.error("Please add items to your cart first");
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
