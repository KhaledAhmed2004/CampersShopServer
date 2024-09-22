import { catchAsync } from "../../utils/catchAsync";
import { ProductServices } from "./product.service";

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);
  res.status(201).json({
    success: true,
    message: "Product Created Successfully",
    data: result,
  });
});
const getAllProducts = catchAsync(async (req, res) => {
  const { searchQuery, category, minPrice, maxPrice, sortByOrder } = req.query;

  const result = await ProductServices.getAllProductsFromDB({
    searchQuery: searchQuery as string,
    category: category as string,
    minPrice: minPrice ? Number(minPrice) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined,
    sortByOrder: sortByOrder as "asc" | "desc",
  });
  res.status(201).json({
    success: true,
    message: "Product Retrieved Successfully",
    data: result,
  });
});
const getFeaturedProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.featuredProducts();
  res.status(201).json({
    success: true,
    message: "Featured Products Retrieved Successfully",
    data: result,
  });
});
const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.getSingleProductFromDB(id);
  res.status(201).json({
    success: true,
    message: "Single Product Retrieved Successfully",
    data: result,
  });
});
const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.updateProductFromDB(id, req.body);
  res.status(201).json({
    success: true,
    message: "Product Updated Successfully",
    data: result,
  });
});
const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  await ProductServices.deleteProductFromDB(id);
  res.status(201).json({
    success: true,
    message: "Product Deleted Successfully",
    data: null,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getFeaturedProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
