// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL_FOODS = import.meta.env.VITE_API_PLATOS;

//backend-restfood.vercel.app/apiRestFood/platos
export const foodApi = createApi({
    reducerPath: "foodApi",
    baseQuery: fetchBaseQuery({
        baseUrl: URL_FOODS,
    }),
    endpoints: (builder) => ({
        // get all foods
        getFoods: builder.query({
            query: () => "/platos",
        }),
        // get one food
        getOneFood: builder.query({
            query: (id) => `/platos/${id}`,
        }),
    }),
});
export const { useGetFoodsQuery, useGetOneFoodQuery } = foodApi;
