import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../features/baseApi/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
