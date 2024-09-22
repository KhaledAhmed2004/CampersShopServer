import { model, Schema } from "mongoose";

import { TOrder, TOrderProducts } from "./order.interface";

const TOrderProducts = new Schema<TOrderProducts>({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const orderSchema = new Schema<TOrder>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    cashOnDelivery: {
      type: Boolean,
      required: true,
    },
    products: [TOrderProducts],
  },
  {
    timestamps: true,
  }
);

export const Order = model<TOrder>("Order", orderSchema);
