import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAddBookMutation } from "../BookApi";
import type { IBook } from "../types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const AddBook = () => {
  const [addBook] = useAddBookMutation();
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState<Partial<IBook>>({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    image: "",
    copies: 1,
    available: true,
  });

  // 🔄 Handle form input change
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

  // 📷 Handle image upload to imgbb
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formDataImg = new FormData();
    formDataImg.append("image", file);

    try {
      setUploading(true);
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formDataImg
      );
      const imageUrl = response.data.data.url;
      setFormData((prev) => ({ ...prev, image: imageUrl }));
      toast.success("Image uploaded!");
    } catch {
      toast.error("Image upload failed!");
    } finally {
      setUploading(false);
    }
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto md:pt-12 md:mt-7 p-4 shadow-2xl"
    >
      <h2 className="text-[20px] font-bold mb-4">Add New Book</h2>
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

        {/* 📤 File upload field */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Upload Cover Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full"
          />
          {uploading && (
            <p className="text-sm text-blue-500 mt-1">Uploading...</p>
          )}
          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="w-32 h-40 object-cover mt-2 rounded border"
            />
          )}
        </div>

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
          disabled={uploading}
          className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-500"
        >
          {uploading ? "Uploading Image..." : "Add Book"}
        </button>
      </form>
    </motion.div>
  );
};

export default AddBook;
