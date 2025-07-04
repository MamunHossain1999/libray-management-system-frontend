export interface IBorrow {
  _id?: string;
  book: string; 
  quantity: number;
  dueDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
