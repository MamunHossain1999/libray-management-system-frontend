import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type { IBook } from "../types";
import {
  useGetBooksQuery,
  useDeleteBookMutation,
} from "../BookApi";
import { Button } from "@/components/ui/button";

const BookList = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetBooksQuery();
  const books: IBook[] = data?.data ?? [];
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
    <div className="container mx-auto p-4 md:pt-12">
      <h2 className="text-[18px] font-bold mb-4">All Books</h2>

      <div className="overflow-x-auto">
        <table className="min-w-[800px] w-full border text-left border-gray-300 text-sm">
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
            {books?.map((book) => (
              <tr key={book._id}>
                <td className="border px-4 py-2">{book.title}</td>
                <td className="border px-4 py-2">{book.author}</td>
                <td className="border px-4 py-2">{book.genre}</td>
                <td className="border px-4 py-2">{book.isbn}</td>
                <td className="border px-4 py-2">{book.copies}</td>
                <td className="border px-4 py-2">
                  {book.available ? "InStock" : "OutOfStock"}
                </td>
                <td className="border px-4 py-2 space-y-1 md:space-y-0 md:space-x-2 flex flex-col md:flex-row">
                  <Button
                    className="text-blue-600 bg-amber-200 hover:bg-amber-300"
                    onClick={() => navigate(`/edit-book/${book._id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="text-green-600 bg-green-200 hover:bg-green-300"
                    onClick={() => navigate(`/borrow/${book._id}`)}
                  >
                    Borrow
                  </Button>
                  <Button
                    className="text-red-600 bg-amber-200 hover:bg-amber-300"
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="text-indigo-600 bg-cyan-400 hover:bg-cyan-500"
                    onClick={() => navigate(`/book-details/${book._id}`)}
                  >
                    Details
                  </Button>
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
    </div>
  );
};

export default BookList;
