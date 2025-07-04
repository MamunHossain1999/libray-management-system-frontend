export interface IBorrow {
  _id?: string;
  book: string | {
    _id?: string;
    title: string;
  };
  quantity: number;
  dueDate: string;
  borrowDate: string;
  status?: "borrowed" | "returned";
  createdAt?: string;
  updatedAt?: string;
}
