import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts, login, signup, addContact, deleteContact, logout, refreshUser } from "API/api";

export const signupThunk = createAsyncThunk('user/register', async (data, thunkAPI) => {
    try {
        return await signup(data)
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const loginThunk = createAsyncThunk('user/login', async (data, thunkAPI) => {
    try {
        return await login(data)
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logoutThunk = createAsyncThunk('user/logout', async (_, thunkAPI) => {
    try {
        await logout() 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const refreshUserThunk = createAsyncThunk('user/refreshUser', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      return await refreshUser(persistedToken)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
})

export const getContacsThunk = createAsyncThunk('contacts/getContacts', async (_, thunkAPI) => {
    try {
        return await getContacts()
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const addContactThunk = createAsyncThunk('contacts/addContact', async (data, thunkAPI) => {
    try {
        return await addContact(data)
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (data, thunkAPI) => {
    try {
        return await deleteContact(data)
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})