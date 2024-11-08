// import { createSlice } from "@reduxjs/toolkit";

// const buildingsSlice = createSlice({
//   name: "buildings",
//   initialState: {
//     data: [],
//   },
//   reducers: {
//     addBuildingData: (state, action) => {
//       state.data.push(action.payload);
//     },
//   },
// });

// export const { addBuildingData } = buildingsSlice.actions;

// export default buildingsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const buildingsSlice = createSlice({
  name: "buildings",
  initialState: {
    data: [],
  },
  reducers: {
    addBuildingData: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addBuildingData } = buildingsSlice.actions;

export default buildingsSlice.reducer;
