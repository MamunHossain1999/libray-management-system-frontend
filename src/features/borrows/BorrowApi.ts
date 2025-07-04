import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IBorrow } from "./types";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["borrow"],
  endpoints: (builder) => ({
    // Create borrow
    borrowBook: builder.mutation<IBorrow, Partial<IBorrow>>({
      query: (data) => ({
        url: "/borrow",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["borrow"],
    }),

    // Get all borrows
    getAllBorrows: builder.query<IBorrow[], void>({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),

    // Get borrow summary 
    getBorrowSummary: builder.query<
      { title: string; isbn: string; totalQuantity: number }[],
      void
    >({
      query: () => "/borrow/summary",
      providesTags: ["borrow"],
    }),

    // Return a borrowed book
    returnBook: builder.mutation<void, string>({
      query: (borrowId) => ({
        url: `/borrow/${borrowId}`, 
        method: "POST",
      }),
      invalidatesTags: ["borrow"],
    }),
  }),
});

export const {
  useBorrowBookMutation,
  useGetAllBorrowsQuery,
  useGetBorrowSummaryQuery,
  useReturnBookMutation,
} = borrowApi;
