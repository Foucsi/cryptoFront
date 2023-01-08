import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username: null,
    email: null,
    token: null,
    password: null,
    favoritesCrypto: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.username = action.payload.username;
      state.value.email = action.payload.email;
      state.value.token = action.payload.token;
      state.value.password = action.payload.password;
    },
    logout: (state) => {
      state.value.username = null;
      state.value.email = null;
      state.value.token = null;
      state.value.password = null;
    },
    addFavoritesCryto: (state, action) => {
      state.value.favoritesCrypto.push(action.payload);
    },
  },
});

export const { login, logout, addFavoritesCryto } = userSlice.actions;
export default userSlice.reducer;
