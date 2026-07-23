export type IUserID = string | number;

export interface IUser {
  id: IUserID;
  name: string;
  email: string;
}

export type IOrderItem = {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: "completed" | "pending" | "cancelled";
  date: string;
};


export type IProduct = {
  id: string | number;
  name: string;
  img: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: "sale" | "new" | string;
};