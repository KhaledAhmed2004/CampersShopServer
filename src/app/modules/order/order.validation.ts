import { z } from "zod";

const TOrderProductsValidationSchema = z.object({
  product: z.string().min(1, { message: "Product name is required" }),
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
});

const createOrderValidation = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email format" }),
    number: z.number().min(1, { message: "Phone number is required" }),
    address: z.string().min(1, { message: "Address is required" }),
    products: z
      .array(TOrderProductsValidationSchema)
      .min(1, { message: "At least one product is required" }),
    cashOnDelivery: z.boolean(),
  }),
});

export const orderValidations = {
  createOrderValidation,
};
