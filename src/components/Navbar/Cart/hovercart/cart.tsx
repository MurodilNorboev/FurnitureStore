import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCarts, deleteItemFromCart } from "../../../Redux/cartsSlice";
import { AnimatedButton, BtnWrap } from "../../../styles/navbar";
import cart from "../../../../assets/cart.svg";
import { baseAPI } from "../../../../utils/constanst";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Badge from "@mui/joy/Badge";
import { ModalContainer } from "./style";
import MyCart_in from "./carthover";

const BasicMenu: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const carts = useSelector((state: any) => state.cart.items);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch(`${baseAPI}/product/cart-count`);
        const data = await response.json();
        if (data.success) {
          const allFurniture = data.cartsData.flatMap(
            ({ _id: cartID, furniture }: any) =>
              furniture.map((fur: any) => ({ ...fur, cartID }))
          );

          dispatch(setCarts(allFurniture));

          const itemId = "your_item_id_here";
          dispatch(deleteItemFromCart(itemId));
        } else {
          console.error("Error fetching cart data:", data.msg);
        }
      } catch (error: any) {
        toast.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, [dispatch]);

  const cartCount = carts.reduce((acc: any, cart: any) => {
    if (cart.furniture && Array.isArray(cart.furniture)) {
      return acc + cart.furniture.length;
    }
    return acc;
  }, carts.length);

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
          <Badge color="warning" badgeContent={cartCount}>
            <img src={cart} alt="" style={{ paddingBottom: "8px" }} />
          </Badge>
        </AnimatedButton>
      </BtnWrap>

      {isVisible && (
        <ModalContainer
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          <MyCart_in />
        </ModalContainer>
      )}
    </div>
  );
};

export default BasicMenu;
