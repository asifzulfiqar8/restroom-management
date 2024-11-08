// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   profile: null,
// };

// export const profileSlice = createSlice({
//   name: "profile",
//   initialState,
//   reducers: {
//     setProfile: (state, action) => {
//       state.profile = action.payload;
//       localStorage.setItem("userProfile", JSON.stringify(action.payload));
//     },
//     updateProfile: (state, action) => {
//       state.profile = { ...state.profile, ...action.payload };
//       localStorage.setItem("userProfile", JSON.stringify(state.profile));
//     },
//     clearProfile: (state) => {
//       state.profile = null;
//       localStorage.removeItem("userProfile");
//     },
//   },
// });

// export const { setProfile, clearProfile, updateProfile } = profileSlice.actions;

// export const selectProfile = (state) => state.profile.profile;

// export default profileSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    clearProfile: (state) => {
      state.profile = null;
    },
  },
});

export const { setProfile, clearProfile, updateProfile } = profileSlice.actions;

export const selectProfile = (state) => state.profile.profile;

export default profileSlice.reducer;
