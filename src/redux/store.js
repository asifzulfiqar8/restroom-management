import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/authSlice";
import buildingsReducer from "./reducers/buildingSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    buildings: buildingsReducer,

    // [buildingApi.reducerPath]: buildingApi.reducer,
    // [sensorApi.reducerPath]: sensorApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat([
  //     buildingApi.middleware,
  //     sensorApi.middleware,
  //   ]),
});

export default store;
