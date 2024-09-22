import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { productValidations } from "./product.validation";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post(
  "/create-product",
  validateRequest(productValidations.createProductValidation),
  ProductControllers.createProduct
);
router.get("/", ProductControllers.getAllProducts);
router.get("/featuredProducts", ProductControllers.getFeaturedProducts);
router.get("/:id", ProductControllers.getSingleProduct);

router.put(
  "/:id",
  validateRequest(productValidations.updateProductValidation),
  ProductControllers.updateProduct
);
router.delete("/:id", ProductControllers.deleteProduct);

export const ProductRoute = router;
