import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Statelar interface si :
interface LikeState {
  likes: any[];
}

// boshlang'ich holati :
const initialState: LikeState = {
  likes: [],
};

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    // backend dan kelgan like malumotlarini statega yuklash
    setLikes: (state, action: PayloadAction<any[]>) => {
      state.likes = action.payload;
    }, // bu backentdan kelgan barcha like malumotlarini statega yuklaydi !
    addLike: (state, action: PayloadAction<any[]>) => {
      state.likes = action.payload;
    }, // bu yangi bir likeni qoshadi ! ya'ni mahsulotga like qilganida chaqirilidi !
    removeLike: (state, action: PayloadAction<string>) => {
      state.likes = state.likes.filter((item) => item._id !== action.payload);
    }, // bu esa like bosilgan mahsulotni id si boyicha olip tashlaydi !
  },
});

export const { setLikes, addLike, removeLike } = likeSlice.actions;
export default likeSlice.reducer;
