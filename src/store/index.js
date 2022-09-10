
//**************************old Redux****************************
// import { createStore } from 'redux';


// const initState = { value: 0 , showCounter : true };

// const counterReducer = (state = initState, action) => {
//     if (action.type === "increase") {
//         return {...state ,value :  state.value + action.payload}
//     }
    
//     if (action.type === "decrease") {
//         return {...state ,value : state.value  - action.payload }
//     }

//     if (action.type === 'toggleCounter') {
//         return {...state ,  showCounter : !state.showCounter }
//     }
//     return state;
// }

// const store = createStore(counterReducer);

//**************************old Redux****************************

//**************************Redux ToolKit****************************
import {createSlice , createStore } from '@reduxjs/toolkit';

const initState = { value: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        increase: (state, action) => {
            state.value += 1;
        },
        decrease: (state, action) => {
            state.value -= 1;
        },
    }
   

})

const store = createStore(counterSlice.reducer)




export default store; 