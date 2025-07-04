
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type { IBook } from "../types";
import {
  useGetBooksQuery,
  useDeleteBookMutation,
} from "../BookApi";

const BookList = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetBooksQuery();
  const books: IBook[] = data?.data ?? [];
  console.log("Books:", books);

  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async (id: string) => {
    
    try {
      await deleteBook(id).unwrap();
      toast.success("Book deleted successfully");
    } catch {
      toast.error("Failed to delete book");
    }
  };

  if (isLoading) return <p className="text-center mt-6">Loading books...</p>;
  if (isError) return <p className="text-center mt-6 text-red-500">Failed to load books.</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-[18px] font-bold mb-4">All Books</h2>
     

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Author</th>
            <th className="border px-4 py-2">Genre</th>
            <th className="border px-4 py-2">ISBN</th>
            <th className="border px-4 py-2">Copies</th>
            <th className="border px-4 py-2">Available</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book: IBook) => (
            <tr key={book._id}>
              <td className="border px-4 py-2">{book.title}</td>
              <td className="border px-4 py-2">{book.author}</td>
              <td className="border px-4 py-2">{book.genre}</td>
              <td className="border px-4 py-2">{book.isbn}</td>
              <td className="border px-4 py-2">{book.copies}</td>
              <td className="border px-4 py-2">
                {book.available === true ? "Yes" : "No"}
              </td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => navigate(`/edit-book/${book._id}`)}
                >
                  Edit
                </button>
                <button
                  className="text-green-600 hover:underline"
                  onClick={() => navigate(`/borrow/${book._id}`)}
                >
                  Borrow
                </button>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {!books?.length && (
            <tr>
              <td className="border px-4 py-2 text-center" colSpan={7}>
                No books found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
