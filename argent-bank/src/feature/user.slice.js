import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    /************** Partie Login *************/
    // reducers permettant de recuperer respectivement le token et le header Authorization avec les datas
    sendTokenAPI: (state, { payload }) => {
      state.user.token = payload;
    },
    sendHeaderAuthorization: (state, { payload }) => {
      state.user.headerAuth = payload;
    },
  },
});

export const { sendTokenAPI, sendHeaderAuthorization } = userSlice.actions;
export default userSlice.reducer;
