//  deleteBook: builder.mutation<{ success: boolean }, string>({
//       query: (id) => ({
//         url: `/books/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Books"],
//     }),