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
        clearUser: (state) => {
            state.user = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
