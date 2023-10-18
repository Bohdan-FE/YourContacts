import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts, getUser, login, signup, addContact, deleteContact } from "API/api";

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