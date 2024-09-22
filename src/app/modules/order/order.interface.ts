import { Types } from "mongoose";

export type TOrderProducts = {
  product: Types.ObjectId;
  quantity: number;
};

export type TOrder = {
  name: string;
  email: string;
  number: string;
  address: string;

  products: [TOrderProducts];
  cashOnDelivery: boolean;
};
