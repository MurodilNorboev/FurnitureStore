import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseAPI } from "../../utils/constanst";
import { toast } from "react-toastify";
import YourComponent from "../Redux/testdatas";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { setCarts, setItemCosts, updateCartItemCount } from "../Redux/cartsSlice";

interface CartItem {
  _id: string;
  name: string;
  cost: string | number;
  categories: string;
  cartID: string;
  count: number;
  carts: {
    items: any[];
  };
}

const MyComponent = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [totalCost, setTotalCost] = useState(0);
  const [data, setData] = useState<CartItem[]>([]);
  const carts: any[] = useSelector((state: RootState) => state.carts.items);
  const dispatch = useDispatch<AppDispatch>();
  const [editedItem, setEditedItem] = useState<any[]>([]);
  const [itemCost, setItemCost] = useState<any[]>([]);

  const getCostNumber = (cost: string | number) =>
    typeof cost === "string"
      ? parseFloat(cost.replace("$", "").replace(/\s/g, "").trim())
      : cost; 

  const fetchData = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(`${baseAPI}/product/all`);
      setData(data);
    } catch (error: any) {
      toast.error("Error fetching data:", error);
    }
  };

  const fetchCartData = async () => {
    try {
      const { cartsData } = await (await fetch(`${baseAPI}/product/cart-count`)).json();
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
      calculateTotalCost(allFurniture, initialCounts);
    } catch (error: any) {
      toast.error("Error fetching cart data:", error);
    }
  }; //

  const calculateTotalCost = (
    carts: CartItem[],
    counts: { [key: string]: number }
  ) => {
    setTotalCost(
      carts.reduce((sum: number, item) => {
        const cost: number = getCostNumber(item.cost) * (counts[item._id] || 0);
        return sum + cost;
      }, 0)
    );
  }; //

  const updateCount = (id: string, isIncrement: boolean) => {
    const newCount = {
      ...counts,
      [id]: Math.max(1, (counts[id] || 0) + (isIncrement ? 1 : -1)),
    };
    setCounts(newCount);
    calculateTotalCost(carts, newCount);
    dispatch(updateCartItemCount({ _id: id, count: newCount[id] }));
  }; //

  const handleAddCart = async (fur_id: string, user_id: string) => {
    try {
      const {
        data: { success },
      } = await axios.post(`${baseAPI}/product/order`, {
        user: { _id: user_id },
        fur_id,
      });
      if (success) {
        fetchCartData(); // Yangilangan ma'lumotlar bilan cartni qayta olish
      }
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
      if (success) fetchCartData();
    } catch (error) {
      console.error("Error deleting from cart:", error);
    }
  };

  // const handleDeleteCart = async (cart_id: string, fur_id: string) => {
  //   try {
  //     const {
  //       data: { success },
  //     } = await axios.delete(
  //       `${baseAPI}/product/cart/${cart_id}/furniture/${fur_id}`
  //     );
  //     if (success) {
  //       fetchCartData(); // Cartni yangilash
  //       fetchUpdatedCartData("some_fur_id", "603d9f3f494f1c3a9c4f2345"); // Yangilangan ma'lumotni olish
  //     }
  //   } catch (error) {
  //     console.error("Error deleting from cart:", error);
  //   }
  // };
  
  const fetchUpdatedCartData = async (fur_id: string, user_id: string) => {
    try {
      const { data } = await axios.get(`${baseAPI}/product/carts?userId=${user_id}`);
  
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
      const updates = carts.map((item: CartItem) => ({
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
      toast.error("Error updating cart: " + error.response?.data?.message || error.message);
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchData();
    fetchCartData();
    fetchUpdatedCartData("some_fur_id", "603d9f3f494f1c3a9c4f2345");
  }, []);
  
  return (
    <div style={{ paddingTop: "90px" }}>
      <h1>All Data</h1>
      {data.map((val, ind) => (
        <div key={ind} style={{ display: "flex", gap: "20px" }}>
          {val.categories}
          <button onClick={() => handleAddCart(val._id, "603d9f3f494f1c3a9c4f2345")}>
            Add to Cart
          </button>
        </div>
      ))}

      <div style={{ marginTop: "50px" }}>
        {carts.map((val: CartItem, ind: number) => {
          const itemCost = getCostNumber(val.cost) * (counts[val._id] || 0);
          return (
            <div
              key={ind}
              style={{ display: "flex", gap: "20px", alignItems: "center" }}
            >
              {val.categories} - ${itemCost}
              <button onClick={() => updateCount(val._id, false)}>-</button>
              <span>{counts[val._id]}</span>
              <button onClick={() => updateCount(val._id, true)}>+</button>
              <button onClick={() => handleDeleteCart(val.cartID, val._id)}>
                Delete
              </button>
            </div>
          );
        })}

        <h3>Total Cost: ${totalCost}</h3>
        <button onClick={() => updateCart()}>Update Cart</button>
      </div>

      <h1>All Carts</h1>
      <YourComponent cartLength={carts.length} />

      <h1>Added Item</h1>
      <p>{editedItem}</p>
      {itemCost?.map((val, ind) => (
  <div key={ind} style={{ display: "flex", gap: "20px" }}>
    {val}
  </div>
))}


    </div>
  );
};

export default MyComponent;
