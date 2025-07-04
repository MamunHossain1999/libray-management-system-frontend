import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IBorrow } from "./types"; // Make sure IBorrow is properly defined

export const borrowApi = createApi({
  reducerPath: "borrowApi", // ✅ Correct name
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["borrow"], // ✅ Use lowercase for consistency
  endpoints: (builder) => ({
    // ✅ Create borrow
    borrowBook: builder.mutation<IBorrow, Partial<IBorrow>>({
      query: (data) => ({
        url: "/borrow",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["borrow"],
    }),

    // ✅ Get all borrows
    getAllBorrows: builder.query<IBorrow[], void>({
      query: () => "/borrows",
      providesTags: ["borrow"],
    }),

    // ✅ Get borrow summary (example summary type)
    getBorrowSummary: builder.query<
      { title: string; isbn: string; totalQuantity: number }[],
      void
    >({
      query: () => "/borrows/summary",
      providesTags: ["borrow"],
    }),
  }),
});

export const {
  useBorrowBookMutation,
  useGetAllBorrowsQuery,
  useGetBorrowSummaryQuery,
} = borrowApi;
