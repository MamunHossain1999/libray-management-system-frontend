import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../BookApi";


const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading, isError } = useGetBookByIdQuery(id!);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !book) return <p>Failed to load book details.</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Copies:</strong> {book.copies}</p>
      <p><strong>Available:</strong> {book.available ? "Yes" : "No"}</p>
      <p className="mt-4"><strong>Description:</strong></p>
      <p>{book.description || "No description provided."}</p>
    </div>
  );
};

export default BookDetails;
