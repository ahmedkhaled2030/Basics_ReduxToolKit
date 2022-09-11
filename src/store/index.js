//**************************Redux ToolKit****************************
import { createSlice, createStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from 'react-redux';


const initState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
  },
});

const store = createStore(counterSlice.reducer);

export const { increase, decrease } = counterSlice.actions;

export default store;
