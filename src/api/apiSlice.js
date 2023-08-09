// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//backend-restfood.vercel.app/apiRestFood/platos
export const foodApi = createApi({
    reducerPath: "foodApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://backend-restfood.vercel.app/apiRestFood",
    }),
    endpoints: (builder) => ({
        getFoods: builder.query({
            query: () => "/platos",
        }),
    }),
});
export const { useGetFoodsQuery } = foodApi;
