import { toast } from "react-toastify";
import React, { useState, useEffect, useRef } from "react";
import { baseAPI } from "../../../../utils/constanst";
import axios from "axios";
import {
  Container,
  LeftCon,
  Right_in_bottom,
  Right_in_top,
  RightCon,
} from "./styles";
import { PagesName } from "../../../main.all_categorie/catalog.page/catalog";
import home from "../../../../assets/home.svg";
import delet from "../../../../assets/remove.svg";
import { useNavigate } from "react-router-dom";

const MyCartCompoenent = ({ carts, setCarts }: any) => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [totalCost, setTotalCost] = useState(0);
  const [itemCosts, setItemCosts] = useState<{ [key: string]: number }>({});
  const navigate = useNavigate();

  const fetchCartData = async () => {
    try {
      const { cartsData } = await (
        await fetch(`${baseAPI}/product/cart-count`)
      ).json();
      const allFurniture = cartsData.flatMap(
        ({ _id: cartID, furniture }: any) =>
          furniture.map((fur: any) => ({ ...fur, cartID }))
      );

      const initialCounts = Object.fromEntries(
        allFurniture.map((item: any) => [item._id, item.count || 1])
      );
      setCounts(initialCounts);
      calculateItemCosts(allFurniture, initialCounts);
      setCarts(allFurniture);
    } catch (error: any) {
      toast.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    if (!carts.length) fetchCartData();
  }, [carts, totalCost]);

  const handleDeleteCart = async (cart_id: string, fur_id: string) => {
    try {
      const {
        data: { success },
      } = await axios.delete(
        `${baseAPI}/product/cart/${cart_id}/furniture/${fur_id}`
      );
      if (success) fetchCartData();
    } catch (error) {
      console.error("Error deleting from cart:", error);
    }
  };

  const calculateItemCosts = (
    carts: any[],
    counts: { [key: string]: number }
  ) => {
    const newItemCosts = carts.reduce(
      (acc: { [key: string]: number }, item: any) => {
        acc[item._id] = item.cost * (counts[item._id] || 0);
        return acc;
      },
      {}
    );
    setItemCosts(newItemCosts);
    setTotalCost(
      Object.values(newItemCosts).reduce(
        (sum: number, cost: number) => sum + cost,
        0
      )
    );
  };

  const updateCount = (id: string, isIncrement: boolean) => {
    const newCount = {
      ...counts,
      [id]: Math.max(1, (counts[id] || 0) + (isIncrement ? 1 : -1)),
    };
    setCounts(newCount);
    calculateItemCosts(carts, newCount);
  };

  return (
    <Container>
      <PagesName style={{ marginLeft: "15px" }}>
        <h3>Home</h3>
        <img src={home} alt="img" />
        <h4>Cart</h4>
      </PagesName>
      <div className="Wrapper">
        <LeftCon className="Containre_Chescout_Content">
          {carts && carts.length > 0 ? (
            carts.map((val: any, ind: any) => (
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
                  <div className="item2">${val.cost}</div>
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
                    <span>${itemCosts[val._id] || val.cost}</span>
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
            ))
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
                style={{
                  background: carts.length > 0 ? "#d1bcb2" : "#EDE4E0",
                }}
                disabled={!(carts && carts.length > 0)} >
                update cart
              </button>
            </div>
          </div>
        </LeftCon>

        <RightCon className="Right_Container">
          <div className="nn">
            <Right_in_top>
              <h2>Cart totals</h2>
            </Right_in_top>

            <Right_in_bottom className="Bottom_Container">
              <div className="bottom_wrape">
                <div className="cost">
                  <h5>Delivery (Self Pickup)</h5>
                  <h5>$0</h5>
                </div>
                <div className="cost">
                  <h5>Delivery (Self Pickup)</h5>
                  <h5>$11 500</h5>
                </div>
                <div className="cost">
                  <h4>total</h4>
                  <h4>$11 500</h4>
                </div>
                <div className="btn_wrape">
                  <button onClick={() => navigate("/chekout")}>
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