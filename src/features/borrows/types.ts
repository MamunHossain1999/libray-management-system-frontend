
export interface IBorrow {
  _id?: string;
  book: string | { _id?: string; title: string };
  quantity: number;
  dueDate: string;
  borrowDate?: string;
  status?: "borrowed" | "returned";
  createdAt?: string;
  updatedAt?: string;
}

export interface BorrowSummaryItem {
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
}

export interface IBorrowResponse {
  success: boolean;
  message: string;
  data: IBorrow;
}

export interface IBorrowSummaryResponse {
  success: boolean;
  message: string;
  data: BorrowSummaryItem[];
}