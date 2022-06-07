// Creation du store redux/toolkit
import { configureStore } from "@reduxjs/toolkit";
// Import du reducer contenu dans le slice
import userReducer from "../feature/user.slice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
