import { configureStore } from "@reduxjs/toolkit";
import authApi from "../services/auth/authApi";
import authSlice from "../services/auth/authSlice";
import buildingSlice from "../services/building/buildingSlice";


const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [buildingSlice.name]: buildingSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(authApi.middleware)
    }
})

export default store;