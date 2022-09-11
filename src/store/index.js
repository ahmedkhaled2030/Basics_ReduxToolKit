//**************************Redux ToolKit****************************
import { configureStore } from "@reduxjs/toolkit";
// configureStore => in order to combine multiple reducers
import  counterSlice  from "./counterSlice";

const store = configureStore({ reducer: { counter: counterSlice } });

export default store;
