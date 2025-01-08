import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatedButton, BtnWrap } from "../../styles/navbar";
import cart from "../../../assets/cart.svg";
import axios from "axios";
import { baseAPI } from "../../../utils/constanst";
import { useNavigate } from "react-router-dom";
import circlebutn from "../../../assets/circlewhite.svg";
import delet from "../../../assets/remove.svg";
import { toast } from "react-toastify";

const BasicMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [carts, setCarts] = useState<any[]>([]);
  const navigate = useNavigate();
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [totalCost, setTotalCost] = useState(0);
  // const [itemCosts, setItemCosts] = useState<{ [key: string]: number }>({});

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
        acc[item._id] = item.cost * (counts[item._id] || 0);
        return acc;
      },
      {}
    );
    // setItemCosts(newItemCosts);
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
              <div className="header">
                <h3>cart ({carts.length})</h3>
                <h3>${totalCost}</h3>
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
                      <h6>${val.cost}</h6>
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
                <div className="empty-cart">
                  <p>Your cart is currently empty...</p>
                </div>
              )}
            </Content>

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
          </Overlay>
        </ModalContainer>
      )}
    </div>
  );
};
export default BasicMenu;

const ModalContainer = styled.div`
  position: fixed;
  background: white;
  max-width: 468px;
  width: 70vw;
  height: 600px;
  top: 54px;
  padding-top: 25px;
  right: 50px;
  z-index: 1000;
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
`;
const Overlay = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  box-shadow: rgba(237, 228, 224, 0.25) 0px 14px 28px,
    rgba(237, 228, 224, 0.22) 0px 10px 10px !important;
`;
const Content = styled.div`
  height: 80%;
  width: 100%;
  overflow: scroll;
  padding: 0px 20px;

  .header {
    border-bottom: 1px solid #d1bcb2;
    padding: 10px 15px;
    margin-bottom: 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: "center";

    h3 {
      color: var(--main, #32324d);
      font-family: Prompt;
      font-size: 24px;
      font-style: normal;
      font-weight: bold;
      line-height: 26px; /* 108.333% */
      letter-spacing: 3px;
      text-transform: uppercase;
    }
  }
`;
const Datails = styled.div`
  border-bottom: 1px solid #d1bcb2;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
const Imag = styled.img`
  background-color: #ede4e0;
  width: 220px;
  height: 140px;
`;
const LeftDiv = styled.div`
  height: 100%;
  width: 100%;

  h4 {
    margin-bottom: 5px;
    color: var(--main, #32324d);
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  h6 {
    color: var(--middle-grey, #999);
    font-feature-settings: "liga" off, "clig" off;
    font-family: Prompt;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
  .nn {
    margin-bottom: 5px;
  }
  .line {
    border: 0.3px solid #d1bcb2;
    margin: 10px 0px;
  }

  .countwrap {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    .btina,
    .btinb {
      border: 1px solid #d1bcb2;
      padding: 7px 14px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #d1bcb2;
      font-weight: bold;
    }
    .btinc {
    }
    .btindelet {
      padding: 7px 10px;
      border-radius: 50%;
      border: 1px solid #d1bcb2;
    }
  }
  .countwrap2 {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    width: 35%;
  }
`;
