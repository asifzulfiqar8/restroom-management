import { configureStore } from "@reduxjs/toolkit";
import authApi from "../services/auth/authApi";
import authSlice from "../services/auth/authSlice";


const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
        [authApi.reducerPath]: authApi.reducer
    }
})

export default store;