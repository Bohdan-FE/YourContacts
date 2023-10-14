import { createAsyncThunk } from "@reduxjs/toolkit";
import { signup } from "API/api";

export const signupThunk = createAsyncThunk('user/fetchUserStatus', async (data, thunkAPI) => {
    try {
        return await signup(data)
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
})