import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from "@reduxjs/toolkit/query";
import { foodApi } from "../apiSlice";
// slice usuario
import { userSliceReducer } from "../userSlice";

export const store = configureStore({
    reducer: {
        [foodApi.reducerPath]: foodApi.reducer,
        user: userSliceReducer, // Agrega el slice de usuario al reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(foodApi.middleware),
});
