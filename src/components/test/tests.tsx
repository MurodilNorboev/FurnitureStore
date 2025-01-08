// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { baseAPI } from '../../utils/constanst';
// import { toast } from 'react-toastify';

// const MyComponent = () => {
//   const [data, setData] = useState<any[]>([]);
//   const [carts, setCarts] = useState<any[]>([]);
//   const [counts, setCounts] = useState<{ [key: string]: number }>({});
//   const [totalCost, setTotalCost] = useState(0);

//   const fetchData = async () => {
//     try {
//       const { data: { data } } = await axios.get(`${baseAPI}/product/all`);
//       setData(data);
//     } catch (error: any) {
//       toast.error('Error fetching data:', error);
//     }
//   };

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
//     fetchData();
//     fetchCartData();
//   }, []);

//   const handleAddCart = async (fur_id: string, user_id: string) => {
//     try {
//       const { data: { success } } = await axios.post(`${baseAPI}/product/order`, {
//         // user: { _id: user_id },
//         user: { _id: '603d9f3f494f1c3a9c4f2345' },
//         fur_id,
//       });
//       if (success) fetchCartData();
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

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
//       <h1>All Data</h1>
//       {data.map((val, ind) => (
//         <div key={ind} style={{ display: 'flex', gap: '20px' }}>
//           {val.categories}
//           <button onClick={() => handleAddCart(val._id, 'null')}>Add to Cart</button>
//         </div>
//       ))}

//       <div style={{ marginTop: '50px' }}>
//         <h3>All Carts</h3>
//         {carts.map((val, ind) => (
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

// export default MyComponent;


// import axios from 'axios';
// import { baseAPI } from '../../utils/constanst';
// import { toast } from 'react-toastify';
// import MyCart from './datas';
// import { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';

// const socket = io(baseAPI);

// const MyComponent = () => {
//   const [data, setData] = useState<any[]>([]);
//   const [carts, setCarts] = useState<any[]>([]);

//   const fetchData = async () => {
//     try {
//       const { data: { data } } = await axios.get(`${baseAPI}/product/all`);
//       setData(data);
//     } catch (error: any) {
//       toast.error('Error fetching data:', error.message);
//     }
//   };

//   const fetchCartData = async () => {
//     try {
//       const { data: { cartsData } } = await axios.get(`${baseAPI}/product/cart-count`);
//       const allFurniture = cartsData.flatMap(({ _id: cartID, furniture }: any) =>
//         furniture.map((fur: any) => ({ ...fur, cartID }))
//       );
//       setCarts(allFurniture);
//     } catch (error: any) {
//       toast.error('Error fetching cart data:', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//     fetchCartData();

//     // WebSocket orqali ma'lumotlarni yangilash
//     socket.on('cartUpdated', (updatedCart) => {
//       setCarts(updatedCart);
//     });

//     return () => {
//       socket.off('cartUpdated');
//     };
//   }, []);

//   const handleAddCart = async (fur_id: string) => {
//     try {
//       const { data: { success, updatedCart } } = await axios.post(`${baseAPI}/product/order`, {
//         user: { _id: '603d9f3f494f1c3a9c4f2345' },
//         fur_id,
//       });
//       if (success) {
//         toast.success('Item added to cart!');
//         socket.emit('updateCart', updatedCart);
//       }
//     } catch (error: any) {
//       toast.error('Error adding to cart:', error.message);
//     }
//   };

//   return (
//     <div style={{ paddingTop: '90px' }}>
//       <h1>All Products</h1>
//       {data.map((val, ind) => (
//         <div key={ind} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
//           <span>{val.categories}</span>
//           <button onClick={() => handleAddCart(val._id)}>Add to Cart</button>
//         </div>
//       ))}
//       <MyCart carts={carts} setCarts={setCarts} />
//     </div>
//   );
// };

// export default MyComponent;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseAPI } from '../../utils/constanst';
import { toast } from 'react-toastify';

const MyComponent = () => {
  const [data, setData] = useState<any[]>([]);
  const [carts, setCarts] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const { data: { data } } = await axios.get(`${baseAPI}/product/all`);
      setData(data);
    } catch (error: any) {
      toast.error('Error fetching data:', error);
    }
  };

  const fetchCartData = async () => {
    try {
      const { cartsData } = await (await fetch(`${baseAPI}/product/cart-count`)).json();
      const allFurniture = cartsData.flatMap(({ _id: cartID, furniture }: any) =>
        furniture.map((fur: any) => ({ ...fur, cartID }))
      );
      setCarts(allFurniture);
    } catch (error: any) {
      toast.error('Error fetching cart data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCartData();
  }, []);

  const handleAddCart = async (fur_id: string, user_id: string) => {
    try {
      const { data: { success } } = await axios.post(`${baseAPI}/product/order`, {
        user: { _id: '603d9f3f494f1c3a9c4f2345' },
        fur_id,
      });
      if (success) fetchCartData();  // Cartlarni yangilash
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div style={{ paddingTop: '90px' }}>
      <h1>All Data</h1>
      {data.map((val, ind) => (
        <div key={ind} style={{ display: 'flex', gap: '20px' }}>
          {val.categories}
          <button onClick={() => handleAddCart(val._id, '1' )}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
