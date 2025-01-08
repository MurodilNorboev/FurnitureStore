import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatedButton, BtnWrap } from "../../../styles/navbar";
import cart from "../../../../assets/cart.svg";
import axios from "axios";
import { baseAPI } from "../../../../utils/constanst";
import { useNavigate } from "react-router-dom";
import circlebutn from "../../../../assets/circlewhite.svg";
import delet from "../../../../assets/remove.svg";
import { toast } from "react-toastify";
import {
  ModalContainer,
  Overlay,
  Content,
  Datails,
  Imag,
  LeftDiv,
} from "./style";

const BasicMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [carts, setCarts] = useState<any[]>([]);
  const navigate = useNavigate();
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [totalCost, setTotalCost] = useState(0);

  const getCostNumber = (cost: string) => {
    return parseFloat(cost.replace("$", "").trim());
  };

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
  }, []);

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
        const cost = getCostNumber(item.cost); // Convert cost from string to number
        acc[item._id] = cost * (counts[item._id] || 0);
        return acc;
      },
      {}
    );
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

  const handleMouseEnter = () => {
    setIsVisible(true);
  };
  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const formattedTotalCost = totalCost.toLocaleString();

  return (
    <div style={{ position: "relative" }}>
      <BtnWrap onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <AnimatedButton onClick={() => navigate("/cart")}>
          <img src={cart} alt="" style={{ paddingBottom: "8px" }} />
        </AnimatedButton>
      </BtnWrap>

      {isVisible && (
        <ModalContainer
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <Overlay>
            <div style={{ border: "3px solid #DBA514", width: "100%" }}></div>
            <Content>
              <div className="header" >
                <h3>cart ({carts.length})</h3>
                <h3>${formattedTotalCost}</h3>{" "}
              </div>

              {carts.length > 0 ? (
                carts.map((val, ind) => (
                  <Datails key={ind}>
                    <Imag src={val.image} alt={val.discount} />
                    <LeftDiv>
                      <h4>{val.types}</h4>
                      <h6>{val.Color}</h6>
                      <h6 className="nn">
                        {val.Width} x {val.Hight}
                      </h6>
                      <h6>{val.cost}</h6>
                      <div className="line"></div>
                      <div className="countwrap">
                        <div className="countwrap2">
                          <div
                            className="btinb"
                            onClick={() => updateCount(val._id, false)}
                          >
                            -
                          </div>
                          <div className="btinc">{counts[val._id]}</div>
                          <div
                            className="btina"
                            onClick={() => updateCount(val._id, true)}
                          >
                            +
                          </div>
                        </div>
                        <div
                          className="btindelet"
                          onClick={() => handleDeleteCart(val.cartID, val._id)}
                        >
                          <img src={delet} alt="" />
                        </div>
                      </div>
                    </LeftDiv>
                  </Datails>
                ))
              ) : (
                <div style={{ paddingBottom: "20px" }} className="empty-cart">
                  <p>Your cart is currently empty...</p>
                </div>
              )}
            </Content>
          <div className="bottomContent">
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
              onCanPlay={() => navigate("/cart")}
              onClick={handleMouseLeave}
            >
              proceed to checkout <img src={circlebutn} alt="" />
            </button>
          </div>
          </Overlay>
        </ModalContainer>
      )}
    </div>
  );
};
export default BasicMenu;
