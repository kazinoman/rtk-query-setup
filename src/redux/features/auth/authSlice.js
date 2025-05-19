// features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null, // Or retrieve from localStorage/sessionStorage on initial load
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      // Store token in localStorage for persistence (see token management)
      localStorage.setItem("token", token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  // Handle async thunks (e.g., from older auth logic if not fully on RTK Query)
  // Or use extraReducers to react to RTK Query endpoint matches (e.g., login.matchFulfilled)
  extraReducers: (builder) => {
    // Example: If you have a login endpoint in your apiSlice
    // builder.addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
    //   state.user = payload.user;
    //   state.token = payload.token;
    //   state.isAuthenticated = true;
    //   localStorage.setItem('token', payload.token);
    // });
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
