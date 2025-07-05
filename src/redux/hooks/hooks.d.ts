export declare const useAppDispatch: import("react-redux").UseDispatch<import("redux-thunk").ThunkDispatch<{
    bookApi: import("@reduxjs/toolkit/query").CombinedState<{
        getBooks: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", {
            data: import("../../features/books/types").IBook[];
        }, "bookApi", unknown>;
        getBookById: import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", import("../../features/books/types").IApiResponse, "bookApi", unknown>;
        addBook: import("@reduxjs/toolkit/query").MutationDefinition<Partial<import("../../features/books/types").IBook>, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", import("../../features/books/types").IBook, "bookApi", unknown>;
        updateBook: import("@reduxjs/toolkit/query").MutationDefinition<{
            id: string;
            book: Partial<import("../../features/books/types").IBook>;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", import("../../features/books/types").IApiResponse, "bookApi", unknown>;
        deleteBook: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", {
            success: boolean;
        }, "bookApi", unknown>;
    }, "Books", "bookApi">;
    borrowApi: import("@reduxjs/toolkit/query").CombinedState<{
        createBorrow: import("@reduxjs/toolkit/query").MutationDefinition<Partial<import("../../features/borrows/types").IBorrow>, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Borrow", import("../../features/borrows/types").IBorrowResponse, "borrowApi", unknown>;
        getBorrowSummary: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Borrow", import("../../features/borrows/types").IBorrowSummaryResponse, "borrowApi", unknown>;
        getAllBorrows: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Borrow", {
            success: boolean;
            data: import("../../features/borrows/types").IBorrow[];
        }, "borrowApi", unknown>;
        deleteBorrow: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Borrow", {
            message: string;
        }, "borrowApi", unknown>;
        returnBook: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Borrow", {
            message: string;
        }, "borrowApi", unknown>;
    }, "Borrow", "borrowApi">;
}, undefined, import("redux").UnknownAction> & import("redux").Dispatch<import("redux").UnknownAction>>;
export declare const useAppSelector: import("react-redux").UseSelector<{
    bookApi: import("@reduxjs/toolkit/query").CombinedState<{
        getBooks: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", {
            data: import("../../features/books/types").IBook[];
        }, "bookApi", unknown>;
        getBookById: import("@reduxjs/toolkit/query").QueryDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", import("../../features/books/types").IApiResponse, "bookApi", unknown>;
        addBook: import("@reduxjs/toolkit/query").MutationDefinition<Partial<import("../../features/books/types").IBook>, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", import("../../features/books/types").IBook, "bookApi", unknown>;
        updateBook: import("@reduxjs/toolkit/query").MutationDefinition<{
            id: string;
            book: Partial<import("../../features/books/types").IBook>;
        }, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", import("../../features/books/types").IApiResponse, "bookApi", unknown>;
        deleteBook: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Books", {
            success: boolean;
        }, "bookApi", unknown>;
    }, "Books", "bookApi">;
    borrowApi: import("@reduxjs/toolkit/query").CombinedState<{
        createBorrow: import("@reduxjs/toolkit/query").MutationDefinition<Partial<import("../../features/borrows/types").IBorrow>, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Borrow", import("../../features/borrows/types").IBorrowResponse, "borrowApi", unknown>;
        getBorrowSummary: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Borrow", import("../../features/borrows/types").IBorrowSummaryResponse, "borrowApi", unknown>;
        getAllBorrows: import("@reduxjs/toolkit/query").QueryDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Borrow", {
            success: boolean;
            data: import("../../features/borrows/types").IBorrow[];
        }, "borrowApi", unknown>;
        deleteBorrow: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Borrow", {
            message: string;
        }, "borrowApi", unknown>;
        returnBook: import("@reduxjs/toolkit/query").MutationDefinition<string, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "Borrow", {
            message: string;
        }, "borrowApi", unknown>;
    }, "Borrow", "borrowApi">;
}>;
