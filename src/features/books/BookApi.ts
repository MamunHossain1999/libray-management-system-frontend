import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IBook } from "./types";


export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://your-backend-url/api" }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBooks: builder.query<IBook[], void>({
      query: () => "/books",
      providesTags: ["Books"],
    }),
    getBookById: builder.query<IBook, string>({
      query: (id) => `/books/${id}`,
      providesTags: ["Books"],
    }),
    addBook: builder.mutation<IBook, Partial<IBook>>({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation<IBook, { id: string; book: Partial<IBook> }>({
      query: ({ id, book }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
