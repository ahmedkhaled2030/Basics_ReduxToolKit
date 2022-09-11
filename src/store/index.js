//**************************Redux ToolKit****************************
import { configureStore } from "@reduxjs/toolkit";
// configureStore => in order to combine multiple reducers
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";

const store = configureStore({ reducer: { counter: counterSlice  , auth:authSlice} });

export default store;
