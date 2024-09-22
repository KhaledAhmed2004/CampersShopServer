import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { orderValidations } from "./order.validation";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post(
  "/create-order",
  validateRequest(orderValidations.createOrderValidation),
  OrderControllers.createOrder
);

export const OrderRoute = router;
