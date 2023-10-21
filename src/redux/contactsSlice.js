import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, deleteContactThunk, getContacsThunk } from "./thunk";


const contactsInitialState = { contacts: [] };

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: builder => {
        builder.addCase(addContactThunk.fulfilled, (state, { payload }) => {
                state.contacts.push(payload)
            })
            .addCase(getContacsThunk.fulfilled, (state, { payload }) => {
                state.contacts = payload
            })
            .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
                state.contacts = state.contacts.filter(contact => contact.id !== payload.id)
            })
    }
})


export const contactsReducer = contactsSlice.reducer;

