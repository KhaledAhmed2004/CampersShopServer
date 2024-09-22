import { z } from "zod";

const createProductValidation = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is Required" }),
    price: z.number({ required_error: "Price is Required" }),
    stockQuantity: z.number({ required_error: "Stock is Required" }),
    description: z.string({ required_error: "Description is Required" }),
    category: z.string({ required_error: "Category is Required" }),
    image: z.string({ required_error: "Image is Required" }),
    ratings: z.number(),
  }),
});
const updateProductValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().optional(),
    stockQuantity: z.number().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    image: z.string().optional(),
    ratings: z.number().optional(),
  }),
});

export const productValidations = {
  createProductValidation,
  updateProductValidation,
};
