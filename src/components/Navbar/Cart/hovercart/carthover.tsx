import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { baseAPI } from "../../../../utils/constanst";
import { Content, Datails, Imag, LeftDiv, Overlay } from "./style";
import circlebutn from "../../../../assets/circlewhite.svg";
import { useNavigate } from "react-router-dom";
import delet from "../../../../assets/remove.svg";
import {
  setCarts,
  setCounts,
  setTotalCost,
  updateCartItemCount,
  deleteItemFromCart,
} from "../../../Redux/cartsSlice";

export default function MyCart_in() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    items: carts,
    totalCost,
    counts,
  } = useSelector((state: any) => state.cart);

  const fetchCartData = async () => {
    try {
      const token = localStorage.getItem("token");
      const { cartsData } = await (
        await fetch(`${baseAPI}/product/cart-count`, {
          headers: { Authorization: `Bearer ${token}` },
        })
      ).json();
      const allFurniture = cartsData.flatMap(({ _id: cartID, items }: any) =>
        items.map((fur: any) => ({ ...fur, cartID }))
      );

      const initialCounts = Object.fromEntries(
        allFurniture.map((item: any) => [item._id, item.count || 1])
      );
      dispatch(setCounts(initialCounts)); // setCounts'ni chaqirish
      dispatch(
        setTotalCost(
          allFurniture.reduce(
            (sum: any, item: any) =>
              sum + item.cost * (initialCounts[item._id] || 0),
            0
          )
        )
      );
      dispatch(setCarts(allFurniture)); // setCarts'ni chaqirish
    } catch (error: any) {
      toast.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const handleAddCart = async (fur_id: string) => {
    try {
      const {
        data: { success },
      } = await axios.post(`${baseAPI}/product/order`, {
        user: { _id: "603d9f3f494f1c3a9c4f2345" },
        fur_id,
      });
      if (success) fetchCartData();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleDeleteCart = async (cart_id: string, fur_id: string) => {
    try {
      const {
        data: { success },
      } = await axios.delete(
        `${baseAPI}/product/cart/${cart_id}/furniture/${fur_id}`
      );
      if (success) {
        dispatch(deleteItemFromCart(fur_id)); // deleteItemFromCart'ni chaqirish
        fetchCartData();
      }
    } catch (error) {
      console.error("Error deleting from cart:", error);
    }
  };

  const updateCount = (id: string, isIncrement: boolean) => {
    dispatch(
      updateCartItemCount({
        _id: id,
        count: counts[id] + (isIncrement ? 1 : -1),
      })
    ); // updateCartItemCount'ni chaqirish
  };

  return (
    <Overlay>
      <div style={{ border: "3px solid #DBA514", width: "100%" }}></div>
      <Content>
        <div className="header">
          <h3>cart ({carts.length})</h3>
          <h3>${totalCost}</h3>
        </div>

        {carts.length > 0 ? (
          carts.map((val: any, ind: any) => {
            return (
              <Datails key={ind}>
                <Imag src={val.product.image} alt={val.product.discount} />
                <LeftDiv>
                  <h4>{val.product.types}</h4>
                  <h6>{val.product.Color}</h6>
                  <h6 className="nn">
                    {val.product.minWidth} x {val.product.minHeight}
                  </h6>
                  <h6>{val.product.cost}</h6>
                  <div className="line"></div>
                </LeftDiv>
              </Datails>
            );
          })
        ) : (
          <div style={{ paddingBottom: "20px" }} className="empty-cart">
            <p>Your cart is currently empty...</p>
          </div>
        )}
      </Content>
      <div className="bottomContent" onClick={() => navigate("/cart")}>
        <button
          style={{
            backgroundColor: "#D1BCB2",
            color: "white",
            width: "90%",
            height: "50px",
            borderRadius: "0px",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: "bold",
            gap: "10px",
          }}
        >
          proceed to checkout <img src={circlebutn} alt="" />
        </button>
      </div>
    </Overlay>
  );
}
