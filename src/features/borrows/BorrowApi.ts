import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  IBorrow,
  IBorrowResponse,
  IBorrowSummaryResponse,
} from "./types";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl}),
  tagTypes: ["Borrow"],
  endpoints: (builder) => ({
    // Create Borrow
    createBorrow: builder.mutation<IBorrowResponse, Partial<IBorrow>>({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["Borrow"],
    }),

    // Get Borrow Summary
    getBorrowSummary: builder.query<IBorrowSummaryResponse, void>({
      query: () => "/borrow/summary",
    }),

    // Get All Borrows
    getAllBorrows: builder.query<{ success: boolean; data: IBorrow[] }, void>({
      query: () => "/borrow",
      providesTags: ["Borrow"],
    }),

    // Delete Borrow
    deleteBorrow: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/borrow/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Borrow"],
    }),

    // ✅ Return Book
    returnBook: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/borrow/return/${id}`,
        method: "PATCH", 
      }),
      invalidatesTags: ["Borrow"],
    }),
  }),
});

export const {
  useCreateBorrowMutation,
  useGetBorrowSummaryQuery,
  useGetAllBorrowsQuery,
  useDeleteBorrowMutation,
  useReturnBookMutation, // ✅ export the new hook
} = borrowApi;
