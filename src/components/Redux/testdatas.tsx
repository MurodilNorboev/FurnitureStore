import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { setCarts } from "./cartsSlice";
import { toast } from "react-toastify";
import { baseAPI } from "../../utils/constanst";
import axios from "axios";

// const YourComponent = ({ cartLength }: { cartLength: number }) => {
//   const carts = useSelector((state: RootState) => state.carts.items);
//   const dispatch = useDispatch<AppDispatch>();
//   const [user, setUser] = useState<any | null>([]);

//   const fetchUser = async () => {
//     const token = localStorage.getItem("token");
//     const { data } = await axios.get(`${baseAPI}/userFur/me`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     setUser(data.data._id)
//   };

//   const fetchCartData = async () => {
//     try {
//       if (!user) return user;
//       const response = await fetch(`${baseAPI}/product/order-get/${user}`);
//       const { cartsData } = await response.json();


//       const allFurniture = cartsData.flatMap(
//         ({ _id: cartID, furniture }: any) =>
//           furniture.map((fur: any) => ({ ...fur, cartID }))
//       );
//       dispatch(setCarts(allFurniture));
//     } catch (error: any) {
//       console.error("Xatolik yuz berdi:", error);
//       toast.error("Error fetching cart data:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchCartData();
//     fetchUser();
//   }, []);

//   return <>{cartLength}</>;
// };

// export default YourComponent;

const YourComponent = ({ cartLength }: { cartLength: number }) => {
  const carts = useSelector((state: RootState) => state.carts.items || []);
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`${baseAPI}/userFur/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data.data._id);
      } catch (error) {
        console.error("User ma'lumotini olishda xatolik:", error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const userId = user;
        if (!userId) {
          return;
        }

        const { data } = await axios.get(
          `${baseAPI}/product/order-get/${userId}`
        );

        // To'g'ri items massivini olish
        const allFurniture = data.userId.items || [];

        if (data.success) {
          dispatch(setCarts(allFurniture));
        } else {
          console.error("Xatolik yuz berdi: ", data);
        }
      } catch (error: any) {
        console.error("Xatolik yuz berdi:", error);
        toast.error(`Error fetching cart data: ${error.message}`);
      }
    };

    if (user) {
      fetchCartData();
    }
  }, [user]);

  return <>{carts.length}</>; // `carts.length` ni ko'rsatish
};

export default YourComponent;


