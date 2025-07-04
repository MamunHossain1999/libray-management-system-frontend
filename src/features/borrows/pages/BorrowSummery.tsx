import { useGetBorrowSummaryQuery } from "../BorrowApi";

interface BorrowSummaryItem {
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
}

const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery();
  const summary: BorrowSummaryItem[] = data?.data || [];

  if (isLoading) return <p className="text-center py-4">Loading summary...</p>;
  if (isError)
    return (
      <p className="text-center py-4 text-red-500">Failed to load summary.</p>
    );
  if (!summary.length)
    return (
      <p className="text-center py-4 text-gray-500">
        No borrow summary available.
      </p>
    );

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-[18px] font-bold mb-6 text-center">Borrow Summary</h2>

      <div className="overflow-x-auto shadow rounded border">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 border">#</th>
              <th className="p-3 border text-left">Book Title</th>
              <th className="p-3 border text-left">ISBN</th>
              <th className="p-3 border text-center">Total Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {summary?.map((item, i) => (
              <tr
                key={item.book.isbn || i}
                className="text-center hover:bg-gray-50"
              >
                <td className="p-2 border">{i + 1}</td>
                <td className="p-2 border text-left">{item.book.title}</td>
                <td className="p-2 border text-left">{item.book.isbn}</td>
                <td className="p-2 border">{item.totalQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowSummary;
