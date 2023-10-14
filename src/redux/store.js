import { configureStore } from "@reduxjs/toolkit";
import {  persistedReducer } from "./contactsSlice";
import { filterReduser } from "./filterSlice";
import { persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import { authReducer } from "./authSlice";

export const store = configureStore({
  reducer: {
        auth: authReducer,
        contacts: persistedReducer,
        filter: filterReduser
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)