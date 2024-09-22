import mongoose from "mongoose";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";
import { Product } from "../product/product.model";

// const createOrderIntoDB = async (payload: TOrder) => {
//   const result = await Order.create(payload);
//   return result;
// };
const createOrderIntoDB = async (payload: TOrder) => {
  // console.log(payload.products);
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Create the order in the database
    const result = await Order.create([payload], { session });

    // Deduct the product quantities from stock
    for (const product of payload.products) {
      // console.log(product);
      await Product.findByIdAndUpdate(
        product.product,
        { $inc: { stockQuantity: -product.quantity } },
        { session }
      );
    }
    // for (let i = 0; i < payload.products.length; i++) {
    //   const product = payload.products[i];
    //   console.log(product);

    //   await Product.findByIdAndUpdate(
    //     product.product,
    //     { $inc: { stockQuantity: -product.quantity } },
    //     { session }
    //   );
    // }

    // Commit the transaction
    await session.commitTransaction();
    return result;
  } catch (error) {
    // Rollback the transaction in case of error
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

export const OrderServices = {
  createOrderIntoDB,
};
