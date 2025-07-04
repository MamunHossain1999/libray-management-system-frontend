import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAddBookMutation } from "../BookApi";
import type { IBook } from "../types";
import { useNavigate } from "react-router-dom";



const AddBook = () => {
  const [addBook] = useAddBookMutation();
  const navigate = useNavigate();


  const [formData, setFormData] = useState<Partial<IBook>>({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: 1,
    available: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.copies! < 0) {
      toast.error("Copies cannot be negative");
      return;
    }
    try {
      await addBook(formData).unwrap();
      toast.success("Book added successfully");
      navigate("/");
    } catch {
      toast.error("Failed to add book");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-[18px] font-bold mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={formData.isbn}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          rows={3}
        />
        <input
          type="number"
          name="copies"
          placeholder="Copies"
          value={formData.copies}
          onChange={handleChange}
          min={0}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
            className="form-checkbox"
          />
          <span>Available</span>
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
