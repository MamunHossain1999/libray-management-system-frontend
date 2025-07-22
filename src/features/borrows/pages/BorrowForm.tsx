import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCreateBorrowMutation } from "../BorrowApi"; 
import { useGetBooksQuery } from "@/features/books/BookApi";

const BorrowForm = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");

  const [createBorrow, { isLoading, error }] = useCreateBorrowMutation(); 
  const {refetch} = useGetBooksQuery();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookId) return toast.error("Invalid book selected!");
    try {
      await createBorrow({ book: bookId, quantity, dueDate }).unwrap(); 
      toast.success("Book borrowed successfully!");
      refetch();
      navigate("/borrow-summary");
    } catch {
      toast.error("Failed to borrow book. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-xl font-bold">📚 Borrow Book</h2>

      <label className="block">
        Quantity
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full p-2 border rounded mt-1"
          required
        />
      </label>

      <label className="block">
        Due Date
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 border rounded mt-1"
          required
          min={new Date().toISOString().split("T")[0]} 
        />
      </label>

      {error && (
        <p className="text-red-600">
          {typeof error === "object" && "status" in error
            ? "Failed to borrow book."
            : String(error)}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-green-400 text-white py-2 rounded hover:bg-green-500 disabled:bg-blue-400"
        disabled={isLoading}
      >
        {isLoading ? "Borrowing..." : "Borrow Book"}
      </button>
    </form>
  );
};

export default BorrowForm;
