
export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface IApiResponse {
  success: boolean;
  message: string;
  data: IBook;
}
