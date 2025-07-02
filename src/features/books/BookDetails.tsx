import type { IBook } from "./types";

 getBookById: builder.query<IBook, string>({
      query: (id) => `/books/${id}`,
      providesTags: ["Books"],
    }),