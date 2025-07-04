import type { IBorrow } from "./types";


export const borrowApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    borrowBook:  builder.mutation<IBorrow, { id: string; book: Partial<IBorrow> }>({
      query: (data) => ({
        url: "/borrows/borrow",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Borrow"],
    }),
    returnBook: builder.mutation({
      query: (borrowId) => ({
        url: `/borrows/return/${borrowId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Borrow"],
    }),
      
    getAllBorrows: builder.query({
      query: () => "/borrows",
      providesTags: ["Borrow"],
    }),
  }),
});

export const {
  useBorrowBookMutation,
  useReturnBookMutation,
  useGetAllBorrowsQuery,
} = borrowApi;
// updateBook: builder.mutation<IBook, { id: string; book: Partial<IBook> }>({
//       query: ({ id, book }) => ({