import { useGetAllBorrowsQuery, useReturnBookMutation } from "../BorrowApi";
import type { IBorrow } from "../types";

const BorrowList = () => {
  const { data: borrowsResponse, isLoading, isError } = useGetAllBorrowsQuery();
  const borrows = borrowsResponse?.data || [];

  const [returnBook, { isLoading: isReturning }] = useReturnBookMutation();

  const handleReturn = async (id: string | undefined) => {
    if (!id) return;
    try {
      await returnBook(id).unwrap();
      // Optionally: show toast or confirmation here
    } catch (error) {
      console.error("Failed to return book:", error);
    }
  };

  if (isLoading) return <p>Loading borrow records...</p>;
  if (isError)
    return <p className="text-red-600">Failed to load borrow records.</p>;

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-semibold mb-4">📚 Borrowed Books</h2>
      <div className="overflow-x-auto border rounded shadow">
        <table className="w-full text-sm border-collapse border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border text-left">Book</th>
              <th className="p-2 border">Borrowed At</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {borrows.length > 0 ? (
              borrows.map((item: IBorrow, index: number) => (
                <tr key={item._id} className="text-center hover:bg-gray-50">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border text-left">
                    {item.book &&
                    typeof item.book === "object" &&
                    "title" in item.book
                      ? item.book.title
                      : "Unknown Book"}
                  </td>
                  <td className="p-2 border">
                    {item.borrowDate
                      ? new Date(item.borrowDate).toLocaleDateString()
                      : "N/A"}
                  </td>

                  <td className="p-2 border capitalize">{item.status}</td>
                  <td className="p-2 border">
                    {item.status === "borrowed" ? (
                      <button
                        onClick={() => handleReturn(item._id)}
                        disabled={isReturning}
                        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-green-400"
                      >
                        {isReturning ? "Returning..." : "Return"}
                      </button>
                    ) : (
                      <span className="text-gray-500">Returned</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No borrow records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowList;
