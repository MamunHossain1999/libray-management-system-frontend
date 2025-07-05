import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../BookApi";
import type { IBook } from "../types";

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data:details, isLoading, isError } = useGetBookByIdQuery(id!);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError || !details) return <p className="text-center mt-10 text-red-500">Failed to load book details.</p>;

  const book: IBook = details.data;

  return (
    <div className="max-w-2xl mx-auto p-4 mt-12">
      <h1 className="text-2xl font-bold mb-6 text-center">Book Details</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <tbody>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 w-1/3">Title</th>
              <td className="border px-4 py-2">{book.title}</td>
            </tr>
            <tr>
              <th className="border px-4 py-2">Author</th>
              <td className="border px-4 py-2">{book.author}</td>
            </tr>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Genre</th>
              <td className="border px-4 py-2">{book.genre}</td>
            </tr>
            <tr>
              <th className="border px-4 py-2">ISBN</th>
              <td className="border px-4 py-2">{book.isbn}</td>
            </tr>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Copies</th>
              <td className="border px-4 py-2">{book.copies}</td>
            </tr>
            <tr>
              <th className="border px-4 py-2">Available</th>
              <td className="border px-4 py-2">{book.available ? "Yes" : "No"}</td>
            </tr>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 align-top">Description</th>
              <td className="border px-4 py-2">{book.description || "No description provided."}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookDetails;
