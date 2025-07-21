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

  console.log(books)
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

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

  const openModal = (id: string) => {
    setDeleteId(id);
    setShowModal(true);
  };

  if (isLoading) return <p className="text-center mt-6">Loading books...</p>;
  if (isError) return <p className="text-center mt-6 text-red-500">Failed to load books.</p>;

  return (
    <div className="container mx-auto p-4 md:pt-12">
      <h2 className="text-[20px] font-bold mb-6">All Books</h2>

      {books.length === 0 ? (
        <p className="text-center text-gray-500">No books found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 flex flex-col"
            >
              {/* Book Image */}
              <img
                src={book.image || "https://via.placeholder.com/300x180?text=No+Image"}
                alt={book.title}
                className="h-48 w-full object-cover"
              />

              {/* Book Info */}
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-green-700">{book.title}</h3>
                  <p><span className="font-medium">Author:</span> {book.author}</p>
                  <p><span className="font-medium">Genre:</span> {book.genre}</p>
                  <p><span className="font-medium">ISBN:</span> {book.isbn}</p>
                  <p><span className="font-medium">Copies:</span> {book.copies}</p>
                  <p>
                    <span className="font-medium">Status:</span>{" "}
                    {book.available ? (
                      <span className="text-green-600 font-semibold">In-Stock</span>
                    ) : (
                      <span className="text-red-500 font-semibold">Out-Of-Stock</span>
                    )}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 pt-4">
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
                    disabled={isDeleting}
                    className="text-red-600 bg-amber-200 hover:bg-amber-300"
                    onClick={() => openModal(book._id!)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="text-indigo-600 bg-cyan-400 hover:bg-cyan-500"
                    onClick={() => navigate(`/book-details/${book._id}`)}
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

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
