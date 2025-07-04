import { createBrowserRouter } from "react-router-dom";
import BookList from "../features/books/pages/Booklist";
import AddBook from "../features/books/pages/AddBook";
import EditBook from "../features/books/pages/EditBook";
import MainLayOut from "../layout/mainLayOut/MainLayOut";
import BorrowList from "@/features/borrows/pages/BorrowList";
import BorrowForm from "@/features/borrows/pages/BorrowForm";
import BorrowSummary from "@/features/borrows/pages/BorrowSummery";
import BookDetails from "@/features/books/pages/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <BookList />,
      },
      {
        path: "/create-book",
        element: <AddBook />,
      },
      {
        path: "/edit-book/:id",
        element: <EditBook />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/borrow",
        element: <BorrowList />,
      },

      { path: "/borrow/:bookId", element: <BorrowForm /> },
      { path: "/borrow-summary", element: <BorrowSummary /> },
    ],
  },
]);

export default router;
