import catchAsync from "../../utils/catchAsync";
import { OrderServices } from "./order.service";

// Controller for creating an order
const createOrder = catchAsync(async (req, res, next) => {
  // Call service to create an order in the database
  const result = await OrderServices.createOrderIntoDB(req?.body);

  // Respond with success message and order data
  res.status(201).json({
    success: true,
    message: "Order created successfully",
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
};
