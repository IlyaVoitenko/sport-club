import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isMessageError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
    setIsMessageError: (state, action) => {
      state.isMessageError = action.payload;
    },
  },
});

export const { setIsAuth, setIsMessageError } = authSlice.actions;

export default authSlice.reducer;
