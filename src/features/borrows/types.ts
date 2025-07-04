export interface IBorrow {
  _id?: string;
  book: {
    _id: string;
    title: string;
  };
//   user?: {
//     _id: string;
//     name: string;
//   };
  quantity: number;
  dueDate: string;
  status?: "borrowed" | "returned";
  createdAt?: string;
  updatedAt?: string;
}
