import { createSelector } from "@reduxjs/toolkit"

export const isLoggedInSelector = (state) => state.auth.isLoggedIn
export const userSelector = (state) => state.auth.user
export const contactsSelector = (state) => state.contacts.contacts
export const filterSelector = (state) => state.filter.filter
export const isRefreshingSelector = (state) => state.auth.isRefreshing

export const visibleItemsSelector = createSelector([contactsSelector, filterSelector], (contacts, filter) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
)