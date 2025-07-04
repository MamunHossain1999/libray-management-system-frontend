import { createBrowserRouter } from "react-router-dom";
import BookList from "../features/books/pages/Booklist";
import AddBook from "../features/books/pages/AddBook";
import EditBook from "../features/books/pages/EditBook";
import MainLayOut from "../layout/mainLayOut/MainLayOut";
import BorrowList from "@/features/borrows/pages/BorrowList";

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
        path: '/borrow',
        element:<BorrowList/>
      }
    ],
  },
]);

export default router;
