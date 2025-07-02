// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { bookApi } from '../../features/books/BookApi';


export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

// handy types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
