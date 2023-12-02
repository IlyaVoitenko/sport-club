import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [],
  player: null,
  isCloseModal: false,
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setPlayersList: (state, action) => {
      state.players = [...action.payload];
    },
    setPlayer: (state, action) => {
      state.player = action.payload;
    },
    setIsCloseModal: (state, action) => {
      state.isCloseModal = action.payload;
    },
  },
});

export const { setPlayersList, setPlayer, setIsCloseModal } =
  playersSlice.actions;

export default playersSlice.reducer;
