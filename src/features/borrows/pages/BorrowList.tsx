import { useGetAllBorrowsQuery, useReturnBookMutation } from "../BorrowApi";


const BorrowList = () => {
  const { data: borrows, isLoading } = useGetAllBorrowsQuery();
  const [returnBook] = useReturnBookMutation();

  const handleReturn = async (id: string) => {
    await returnBook(id);
  };

  if (isLoading) return <p>Loading borrow records...</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">📚 Borrowed Books</h2>
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">User</th>
            <th className="p-2 border">Book</th>
            <th className="p-2 border">Borrowed At</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {borrows?.map((item: any, index: number) => (
            <tr key={item._id} className="text-center">
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{item.userId?.name || "N/A"}</td>
              <td className="p-2 border">{item.bookId?.title || "N/A"}</td>
              <td className="p-2 border">{new Date(item.borrowDate).toLocaleDateString()}</td>
              <td className="p-2 border">{item.status}</td>
              <td className="p-2 border">
                {item.status === "borrowed" ? (
                  <button
                    onClick={() => handleReturn(item._id)}
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Return
                  </button>
                ) : (
                  <span className="text-gray-500">Returned</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowList;
