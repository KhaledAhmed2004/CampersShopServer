import { z } from "zod";

const TOrderProductsValidationSchema = z.object({
  product: z.string(),
  quantity: z.number(),
});

const createOrderValidation = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is Required" }),
    email: z.string({ required_error: "Email is Required" }),
    number: z.string({ required_error: "Number is Required" }),
    address: z.string({ required_error: "address is Required" }),
    cashOnDelivery: z.boolean(),

    products: z.array(TOrderProductsValidationSchema),
  }),
});

export const orderValidations = {
  createOrderValidation,
};
