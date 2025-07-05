
import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "../features/books/BookApi";
import { borrowApi } from "../features/borrows/BorrowApi";


export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    [borrowApi.reducerPath]: borrowApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(bookApi.middleware)
      .concat(borrowApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
