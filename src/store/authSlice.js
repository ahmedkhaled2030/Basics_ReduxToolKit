import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: true },
    reducers: {
        logIn: (state) => {
            state.isLoggedIn = true
        },
        logOut: (state) => {
            state.isLoggedIn = false
        }
    }
})

export const { logIn, logOut } = authSlice.actions
export default authSlice.reducer