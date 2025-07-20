import { useState } from "react";
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
  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();

  // Modal control state
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Delete handle function
  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await deleteBook(deleteId).unwrap();
      toast.success("Book deleted successfully");
      setShowModal(false);
      setDeleteId(null);
    } catch {
      toast.error("Failed to delete book");
    }
  };

  // Open modal and set deleteId
  const openModal = (id: string) => {
    setDeleteId(id);
    setShowModal(true);
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
            {books.length === 0 && (
              <tr>
                <td className="border px-4 py-2 text-center" colSpan={7}>
                  No books found.
                </td>
              </tr>
            )}
            {books.map((book) => (
              <tr key={book._id}>
                <td className="border px-4 py-2">{book.title}</td>
                <td className="border px-4 py-2">{book.author}</td>
                <td className="border px-4 py-2">{book.genre}</td>
                <td className="border px-4 py-2">{book.isbn}</td>
                <td className="border px-4 py-2">{book.copies}</td>
                <td className="border px-4 py-2">
                  {book.available ? "In-Stock" : "Out-Of-Stock"}
                </td>
                <td className="border justify-between px-4 py-2 space-y-1 md:space-y-0 md:space-x-2 flex flex-col md:flex-row">
                  <Button
                    className="text-blue-600 bg-amber-200 hover:bg-amber-300 cursor-pointer"
                    onClick={() => navigate(`/edit-book/${book._id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="text-green-600 bg-green-200 hover:bg-green-300 cursor-pointer"
                    onClick={() => navigate(`/borrow/${book._id}`)}
                  >
                    Borrow
                  </Button>
                  <Button
                    disabled={isDeleting}
                    className="text-red-600 bg-amber-200 hover:bg-amber-300 cursor-pointer"
                    onClick={() => openModal(book._id!)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="text-indigo-600 bg-cyan-400 hover:bg-cyan-500 cursor-pointer"
                    onClick={() => navigate(`/book-details/${book._id}`)}
                  >
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p>Are you sure you want to delete this book?</p>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
