import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CartItem {
  _id: string;
  cost: number;
  bigCost: number;
  image: string;
  types: string;
  Color: string;
  ColorSet: any[];
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
  cartID: string;
  setColors: string[]; // Ranglar
  widthType: string;
  furniture: string;
  user: {
    _id: string;
  };
}
interface CartState {
  items: CartItem[];
  counts: { [key: string]: number };
  itemCosts: { [key: string]: number };
  totalCost: number;
}
const initialState: CartState = {
  items: [],
  counts: {},
  itemCosts: {},
  totalCost: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCarts: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
    setCounts: (state, action: PayloadAction<{ [key: string]: number }>) => {
      state.counts = action.payload;
    },
    setItemCosts: (state, action: PayloadAction<{ [key: string]: number }>) => {
      state.itemCosts = action.payload;
    },
    setTotalCost: (state, action: PayloadAction<number>) => {
      state.totalCost = action.payload;
    },
    updateCartItemCount: (
      state,
      action: PayloadAction<{ _id: string; count: number }>
    ) => {
      state.counts[action.payload._id] = action.payload.count;
    },
    addToCart: (
      state,
      action: PayloadAction<{ _id: string; user: string; furniture: string }>
    ) => {
      state.items.push({
        _id: action.payload._id,
        user: { _id: action.payload.user },
        furniture: action.payload.furniture,
        cost: 0, // Placeholder for cost, can be updated later
        bigCost: 0,
        image: "",
        types: "",
        Color: "",
        ColorSet: [],
        minWidth: 0,
        maxWidth: 0,
        minHeight: 0,
        maxHeight: 0,
        setColors: [],
        widthType: "",
        cartID: "",
      });
    },

    // **Delete Item from Cart**: Removes an item from the cart by ID
    deleteItemFromCart: (state, action: PayloadAction<string>) => {
      const idToDelete = action.payload;
      state.items = state.items.filter((item) => item._id !== idToDelete);
      delete state.counts[idToDelete];
      delete state.itemCosts[idToDelete];
    },
  },
});

export const {
  setCarts,
  addToCart,
  setCounts,
  setItemCosts,
  setTotalCost,
  updateCartItemCount,
  deleteItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
