import { createSlice } from "@reduxjs/toolkit";
import { logout } from './authSlice'



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
  extraReducers: {
    
  //extraReducer > هو معمول عشان استمع لاكشن مبني اصلا خارج السلايز
  //state is the state of counterSlice
  //action is the action of authSlice
    [logout]: (state, action) => {
      state.value = 0 
    }
  }

});


export default counterSlice.reducer;
export const {increase , decrease} = counterSlice.actions