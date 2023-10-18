import { loginThunk, signupThunk } from "./thunk";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase(signupThunk.fulfilled, (state, {payload}) => {
            state.user = payload.user
            state.token = payload.token
            state.isLoggedIn = true
        })
        .addCase(loginThunk.fulfilled, (state, {payload}) => {
            state.user = payload.user
            state.token = payload.token
            state.isLoggedIn = true
        })
    }
})

export const authReducer = authSlice.reducer