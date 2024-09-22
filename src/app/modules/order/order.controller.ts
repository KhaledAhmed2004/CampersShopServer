import { catchAsync } from "../../utils/catchAsync";
import { OrderServices } from "./order.service";

const createOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.createOrderIntoDB(req.body);
  res.status(201).json({
    success: true,
    message: "Order Created Successfully",
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
};
