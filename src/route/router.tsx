import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/mainLayOut/MainLayOut";
import BookList from "../features/books/pages/Booklist";
import AddBook from "../features/books/pages/AddBook";
import EditBook from "../features/books/pages/EditBook";
import BookDetails from "../features/books/pages/BookDetails";
import BorrowList from "../features/borrows/pages/BorrowList";
import BorrowForm from "../features/borrows/pages/BorrowForm";
import BorrowSummary from "../features/borrows/pages/BorrowSummery";
import LoginPage from "@/components/loginPage/LoginPage";
import ResgisterPage from "@/components/registerpage/RegisterPage";
import PrivateRoute from "@/privatePage/PrivateRoute";
import HomePage from "@/features/homePage/HomePage";
import ContactUs from "@/components/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/booklist",
        element: <PrivateRoute><BookList /></PrivateRoute>,
      },
      {
        path: "/create-book",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-book/:id",
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/book-details/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/borrow",
        element: (
          <PrivateRoute>
            <BorrowList />
          </PrivateRoute>
        ),
      },

      {
        path: "/borrow/:bookId",
        element: (
          <PrivateRoute>
            <BorrowForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/borrow-summary",
        element: (
          <PrivateRoute>
            <BorrowSummary />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/loginPage",
        element: <LoginPage />,
      },
      {
        path: "/registerPage",
        element: <ResgisterPage />,
      },
    ],
  },
]);

export default router;
