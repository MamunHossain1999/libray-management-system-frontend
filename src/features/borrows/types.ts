export interface IBorrow {
  _id?: string;
  book: string;
  quantity: number;
  dueDate: string;
  status?: "borrowed" | "returned";
  createdAt?: string;
  updatedAt?: string;
}
