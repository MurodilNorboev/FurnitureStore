// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { baseAPI } from '../../utils/constanst';
// import { toast } from 'react-toastify';

// const MyCart = ({ carts, setCarts }: any) => {
//   const [counts, setCounts] = useState<{ [key: string]: number }>({});
//   const [totalCost, setTotalCost] = useState(0);

//   const fetchCartData = async () => {
//     try {
//       const { cartsData } = await (await fetch(`${baseAPI}/product/cart-count`)).json();
//       const allFurniture = cartsData.flatMap(({ _id: cartID, furniture }: any) =>
//         furniture.map((fur: any) => ({ ...fur, cartID }))
//       );

//       const initialCounts = Object.fromEntries(allFurniture.map((item: any) => [item._id, item.count || 1]));
//       setCounts(initialCounts);
//       calculateTotalCost(allFurniture, initialCounts);
//       setCarts(allFurniture);
//     } catch (error: any) {
//       toast.error('Error fetching cart data:', error);
//     }
//   };

//   useEffect(() => {
//     if (!carts.length) fetchCartData();
//   }, [carts]);

//   const handleDeleteCart = async (cart_id: string, fur_id: string) => {
//     try {
//       const { data: { success } } = await axios.delete(`${baseAPI}/product/cart/${cart_id}/furniture/${fur_id}`);
//       if (success) fetchCartData();
//     } catch (error) {
//       console.error('Error deleting from cart:', error);
//     }
//   };

//   const calculateTotalCost = (carts: any[], counts: { [key: string]: number }) => {
//     setTotalCost(carts.reduce((sum, item) => sum + item.cost * (counts[item._id] || 0), 0));
//   };

//   const updateCount = (id: string, isIncrement: boolean) => {
//     const newCount = { ...counts, [id]: Math.max(1, (counts[id] || 0) + (isIncrement ? 1 : -1)) };
//     setCounts(newCount);
//     calculateTotalCost(carts, newCount);
//   };

//   return (
//     <div style={{ paddingTop: '90px' }}>
//       <div style={{ marginTop: '50px' }}>
//         <h3>All Carts</h3>

//         {carts.map((val: any, ind: any) => (
//           <div key={ind} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
//             {val.categories} - ${val.cost}
//             <button onClick={() => updateCount(val._id, false)}>-</button>
//             <span>{counts[val._id]}</span>
//             <button onClick={() => updateCount(val._id, true)}>+</button>
//             <button onClick={() => handleDeleteCart(val.cartID, val._id)}>Delete</button>
//           </div>
//         ))}

//         <h3>Total Cost: ${totalCost}</h3>
//       </div>
//     </div>
//   );
// };

// export default MyCart;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseAPI } from '../../utils/constanst';
import { toast } from 'react-toastify';

const MyCart = ({ carts, setCarts }: any) => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [totalCost, setTotalCost] = useState(0);
  const [itemCosts, setItemCosts] = useState<{ [key: string]: number }>({});

  const fetchCartData = async () => {
    try {
      const { cartsData } = await (await fetch(`${baseAPI}/product/cart-count`)).json();
      const allFurniture = cartsData.flatMap(({ _id: cartID, furniture }: any) =>
        furniture.map((fur: any) => ({ ...fur, cartID }))
      );

      const initialCounts = Object.fromEntries(allFurniture.map((item: any) => [item._id, item.count || 1]));
      setCounts(initialCounts);
      calculateItemCosts(allFurniture, initialCounts);
      setCarts(allFurniture);
    } catch (error: any) {
      toast.error('Error fetching cart data:', error);
    }
  };

  useEffect(() => {
    if (!carts.length) fetchCartData();
  }, [carts]);

  const handleDeleteCart = async (cart_id: string, fur_id: string) => {
    try {
      const { data: { success } } = await axios.delete(`${baseAPI}/product/cart/${cart_id}/furniture/${fur_id}`);
      if (success) fetchCartData();
    } catch (error) {
      console.error('Error deleting from cart:', error);
    }
  };

  const calculateItemCosts = (carts: any[], counts: { [key: string]: number }) => {
    const newItemCosts = carts.reduce((acc: { [key: string]: number }, item: any) => {
      acc[item._id] = item.cost * (counts[item._id] || 0);
      return acc;
    }, {});
    setItemCosts(newItemCosts);
    setTotalCost(Object.values(newItemCosts).reduce((sum: number, cost: number) => sum + cost, 0));
  };

  const updateCount = (id: string, isIncrement: boolean) => {
    const newCount = { ...counts, [id]: Math.max(1, (counts[id] || 0) + (isIncrement ? 1 : -1)) };
    setCounts(newCount);
    calculateItemCosts(carts, newCount);
  };

  return (
    <div style={{ paddingTop: '90px' }}>
      <div style={{ marginTop: '50px' }}>
        <h3>All Carts</h3>

        {carts.map((val: any, ind: any) => (
          <div key={ind} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {val.categories} - ${itemCosts[val._id] || val.cost}
            
            <button onClick={() => updateCount(val._id, false)}>-</button>
            <span>{counts[val._id]}</span>
            <button onClick={() => updateCount(val._id, true)}>+</button>
            <button onClick={() => handleDeleteCart(val.cartID, val._id)}>Delete</button>
          </div>
        ))}

        <h3>Total Cost: ${totalCost}</h3>
      </div>
    </div>
  );
};

export default MyCart;
