
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/userLogin/authSlice";
import { bookApi } from "../features/books/BookApi";
import { borrowApi } from "../features/borrows/BorrowApi";
import { authApi } from "@/features/userLogin/authApi";


export const store = configureStore({
  reducer: {
    auth: authReducer, // 
    [authApi.reducerPath]: authApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [borrowApi.reducerPath]: borrowApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(bookApi.middleware)
      .concat(borrowApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
