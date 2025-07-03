import { createBrowserRouter } from "react-router-dom";
import BookList from "../features/books/pages/Booklist";
import AddBook from "../features/books/pages/AddBook";
import EditBook from "../features/books/pages/EditBook";
import MainLayOut from "../layout/mainLayOut/MainLayOut";

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
    ],
  },
]);

export default router;
