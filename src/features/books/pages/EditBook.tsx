import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetBookByIdQuery, useUpdateBookMutation } from "../BookApi";
import type { IBook} from "../types";

const EditBook = () => {
  const { id } = useParams<{ id: string }>();
  const { data: bookResponse, isLoading, isError } = useGetBookByIdQuery(id!);
  const [updateBook] = useUpdateBookMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Partial<IBook>>({});

  useEffect(() => {
    if (bookResponse?.data) {
      setFormData(bookResponse.data);
    }
  }, [bookResponse]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.copies! < 0) {
      toast.error("Copies cannot be negative");
      return;
    }
    try {
      await updateBook({ id: id!, book: formData }).unwrap();
      toast.success("Book updated successfully");
      navigate("/");
    } catch {
      toast.error("Failed to update book");
    }
  };

  if (isLoading) return <p className="text-center py-4">Loading book data...</p>;
  if (isError || !bookResponse) return <p className="text-center py-4 text-red-500">Failed to load book data.</p>;

  return (
    <div className="max-w-xl mx-auto p-4 pt-12">
      <h2 className="text-[18px] font-bold mb-4 text-center">Edit Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title || ""}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author || ""}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre || ""}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={formData.isbn || ""}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description || ""}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          rows={3}
        />
        <input
          type="number"
          name="copies"
          placeholder="Copies"
          value={formData.copies || 0}
          onChange={handleChange}
          min={0}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="available"
            checked={formData.available || false}
            onChange={handleChange}
            className="form-checkbox"
          />
          <span>Available</span>
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
