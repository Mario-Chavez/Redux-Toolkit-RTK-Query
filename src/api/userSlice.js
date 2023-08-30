import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullName: "",
    email: "",
    contraseña: "",
    orders: [],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setUserOrder: (state, action) => {
            state.user.orders.push(action.payload);
        },
        deletOneOrder: (state, action) => {
            const productEdit = state.user.orders.filter(
                (product) => product.nombre !== action.payload
            );
            state.user.orders = productEdit;
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
});

export const { setUser, clearUser, setUserOrder, deletOneOrder } = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
