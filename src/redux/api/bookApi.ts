// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { bookApi } from '../features/book/bookApi';

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer, // ⬅️ add the API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware), // ⬅️ add the RTK Query middleware
});

// handy types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
