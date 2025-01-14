import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { setCarts } from "./cartsSlice";
import { toast } from "react-toastify";
import { baseAPI } from "../../utils/constanst";

const YourComponent = ({ cartLength }: { cartLength: number }) => {
  const carts = useSelector((state: RootState) => state.carts.items);
  const dispatch = useDispatch<AppDispatch>();

  const fetchCartData = async () => {
    try {
      const response = await fetch(`${baseAPI}/product/cart-count`);
      const { cartsData } = await response.json();
      
      const allFurniture = cartsData.flatMap(({ _id: cartID, furniture }: any) =>
        furniture.map((fur: any) => ({ ...fur, cartID }))
      );
      dispatch(setCarts(allFurniture)); 

    } catch (error: any) {
      console.error("Xatolik yuz berdi:", error); 
      toast.error("Error fetching cart data:", error.message); 
    }
  };

  useEffect(() => {
    fetchCartData(); 
  }, []); 

  return (
    <>
      {cartLength}
    </>
  );
};

export default YourComponent;











