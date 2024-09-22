import { z } from "zod";

// Schema for creating a product
const createProductValidation = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Name is required" }),
    price: z
      .number()
      .min(0, { message: "Price is required and must be a positive number" }),
    stockQuantity: z.number().min(0, {
      message: "Stock quantity is required and must be a non-negative number",
    }),
    description: z.string().min(1, { message: "Description is required" }),
    category: z.string().min(1, { message: "Category is required" }),
    image: z
      .string()
      .url({ message: "Image URL is required and must be valid" }),
    ratings: z.number().min(0).max(5).optional(),
  }),
});

// Schema for updating a product
const updateProductValidation = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, { message: "Name must be provided if present" })
      .optional(),
    price: z
      .number()
      .min(0, { message: "Price must be a positive number if provided" })
      .optional(),
    stockQuantity: z
      .number()
      .min(0, {
        message: "Stock quantity must be a non-negative number if provided",
      })
      .optional(),
    description: z
      .string()
      .min(1, { message: "Description must be provided if present" })
      .optional(),
    category: z
      .string()
      .min(1, { message: "Category must be provided if present" })
      .optional(),
    image: z
      .string()
      .url({ message: "Image URL must be valid if provided" })
      .optional(),
    ratings: z.number().min(0).max(5).optional(),
  }),
});

export const productValidations = {
  createProductValidation,
  updateProductValidation,
};
