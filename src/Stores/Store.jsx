import { configureStore } from "@reduxjs/toolkit";
import Doctorslice from "./DoctorlistSlice";
export const Store = configureStore({
  reducer: {
    doctorlist: Doctorslice,
  },
});
