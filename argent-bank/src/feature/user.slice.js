import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    /************** Partie Login *************/
    // reducers permettant de recuperer respectivement le token, le status et le header Authorization avec les datas
    sendTokenAPI: (state, { payload }) => {
      state.user.token = payload;
    },
    getRequestStatus: (state, { payload }) => {
      state.user.status = payload;
    },
    sendHeaderAuthorization: (state, { payload }) => {
      state.user.headerAuth = payload;
    },
    /***************** Partie Update **********************/
    putUpdateInfos: (state, { payload }) => {
      state.user = payload;
    },
    /***************** Partie Logout **********************/
    sendLogout: (state) => {
      state.user = {};
    },
  },
});

export const {
  sendTokenAPI,
  sendHeaderAuthorization,
  getRequestStatus,
  putUpdateInfos,
  sendLogout,
} = userSlice.actions;
export default userSlice.reducer;
