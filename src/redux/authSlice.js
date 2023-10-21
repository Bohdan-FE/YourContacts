import { loginThunk, logoutThunk, refreshUserThunk, signupThunk } from "./thunk";

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
        .addCase(logoutThunk.fulfilled, (state) => {
            state.user = { name: null, email: null }
            state.token = null
            state.isLoggedIn = false
        })
        .addCase(refreshUserThunk.pending, (state) =>{
            state.isRefreshing = true;
        })
        .addCase(refreshUserThunk.fulfilled, (state, {payload}) => {
            state.user = payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshUserThunk.rejected, (state) => {
            state.user = { name: null, email: null }
            state.token = null
            state.isLoggedIn = false
            state.isRefreshing = false
        })
    }
})


export const authReducer = authSlice.reducer