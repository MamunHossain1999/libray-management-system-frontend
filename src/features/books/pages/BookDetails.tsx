import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../BookApi";
import type { IBook } from "../types";
import { motion } from "framer-motion";

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: details, isLoading, isError } = useGetBookByIdQuery(id!);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError || !details)
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load book details.
      </p>
    );

  const book: IBook = details.data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-4 mt-12"
    >
      <h1 className="text-3xl font-semibold text-center mb-8">
        📘 Book Details
      </h1>

      <div className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200">
        {/* ✅ Cover Image */}
        {book.image && (
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-64 object-cover"
          />
        )}

        <div className="p-6 space-y-4">
          <DetailRow label="Title" value={book.title} />
          <DetailRow label="Author" value={book.author} />
          <DetailRow label="Genre" value={book.genre} />
          <DetailRow label="ISBN" value={book.isbn} />
          <DetailRow label="Copies" value={book.copies.toString()} />
          <DetailRow label="Available" value={book.available ? "Yes" : "No"} />
          <DetailRow
            label="Description"
            value={book.description || "No description provided."}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BookDetails;

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-start border-b pb-3 last:border-none last:pb-0">
    <span className="font-medium text-gray-600 w-1/3">{label}:</span>
    <span className="text-gray-800 w-2/3">{value}</span>
  </div>
);
