import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBorrowBookMutation } from "../BorrowApi";


const BorrowForm = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [dueDate, setDueDate] = useState("");
  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await borrowBook({ book: bookId, quantity, dueDate });
    navigate("/borrow-summary");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-xl font-bold">📚 Borrow Book</h2>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min={1}
        className="w-full p-2 border rounded"
        placeholder="Quantity"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        disabled={isLoading}
      >
        {isLoading ? "Borrowing..." : "Borrow Book"}
      </button>
    </form>
  );
};

export default BorrowForm;
