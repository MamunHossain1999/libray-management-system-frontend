import { useGetBorrowSummaryQuery } from "../BorrowApi";
import { motion } from "framer-motion";

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
    <div className="container mx-auto mt-10 px-4">
      <h2 className="text-[20px] font-bold mb-6 text-center">Borrow Summary</h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {summary.map((item, i) => (
          <motion.div
            key={item.book.isbn || i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * .8 }}
            viewport={{ once: false }} 
            className="bg-white border shadow-sm rounded-lg p-5 space-y-2"
          >
            <div className="text-sm text-gray-500">#{i + 1}</div>
            <h3 className="text-lg font-semibold text-green-700">
              {item.book.title}
            </h3>
            <p>
              <span className="font-medium">ISBN:</span> {item.book.isbn}
            </p>
            <p>
              <span className="font-medium">Total Borrowed:</span>{" "}
              <span className="text-blue-600 font-semibold">
                {item.totalQuantity}
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BorrowSummary;
