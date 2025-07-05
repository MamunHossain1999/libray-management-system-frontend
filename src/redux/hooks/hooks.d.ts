export declare const useAppDispatch: import("react-redux").UseDispatch<import("redux-thunk").ThunkDispatch<{
    bookApi: import("@reduxjs/toolkit/query").CombinedState<{
        getBooks: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", {
            data: import("../../features/books/types").IBook[];
        }, "bookApi", unknown>;
        getBookById: import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", import("../../features/books/types").IBook, "bookApi", unknown>;
        addBook: import("@reduxjs/toolkit/query").MutationDefinition<Partial<import("../../features/books/types").IBook>, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", import("../../features/books/types").IBook, "bookApi", unknown>;
        updateBook: import("@reduxjs/toolkit/query").MutationDefinition<{
            id: string;
            book: Partial<import("../../features/books/types").IBook>;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", import("../../features/books/types").IBook, "bookApi", unknown>;
        deleteBook: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", {
            success: boolean;
        }, "bookApi", unknown>;
    }, "Books", "bookApi">;
    borrowApi: import("@reduxjs/toolkit/query").CombinedState<{
        borrowBook: import("@reduxjs/toolkit/query").MutationDefinition<Partial<import("../../features/borrows/types").IBorrow>, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "borrow", import("../../features/borrows/types").IBorrow, "borrowApi", unknown>;
        getAllBorrows: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "borrow", import("../../features/borrows/types").IBorrow[], "borrowApi", unknown>;
        getBorrowSummary: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "borrow", {
            title: string;
            isbn: string;
            totalQuantity: number;
        }[], "borrowApi", unknown>;
        returnBook: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "borrow", void, "borrowApi", unknown>;
    }, "borrow", "borrowApi">;
}, undefined, import("redux").UnknownAction> & import("redux").Dispatch<import("redux").UnknownAction>>;
export declare const useAppSelector: import("react-redux").UseSelector<{
    bookApi: import("@reduxjs/toolkit/query").CombinedState<{
        getBooks: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", {
            data: import("../../features/books/types").IBook[];
        }, "bookApi", unknown>;
        getBookById: import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", import("../../features/books/types").IBook, "bookApi", unknown>;
        addBook: import("@reduxjs/toolkit/query").MutationDefinition<Partial<import("../../features/books/types").IBook>, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", import("../../features/books/types").IBook, "bookApi", unknown>;
        updateBook: import("@reduxjs/toolkit/query").MutationDefinition<{
            id: string;
            book: Partial<import("../../features/books/types").IBook>;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", import("../../features/books/types").IBook, "bookApi", unknown>;
        deleteBook: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", {
            success: boolean;
        }, "bookApi", unknown>;
    }, "Books", "bookApi">;
    borrowApi: import("@reduxjs/toolkit/query").CombinedState<{
        borrowBook: import("@reduxjs/toolkit/query").MutationDefinition<Partial<import("../../features/borrows/types").IBorrow>, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "borrow", import("../../features/borrows/types").IBorrow, "borrowApi", unknown>;
        getAllBorrows: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "borrow", import("../../features/borrows/types").IBorrow[], "borrowApi", unknown>;
        getBorrowSummary: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "borrow", {
            title: string;
            isbn: string;
            totalQuantity: number;
        }[], "borrowApi", unknown>;
        returnBook: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "borrow", void, "borrowApi", unknown>;
    }, "borrow", "borrowApi">;
}>;
