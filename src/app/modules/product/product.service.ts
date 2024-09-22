import { TProduct, TProductQuery } from "./product.intereface";
import { Product } from "./product.model";

// Create a new product in the database
const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

// Build query for retrieving products
const getAllProductsFromDB = async (querys: TProductQuery) => {
  const { searchQuery, category, minPrice, maxPrice, sortByOrder } = querys;

  const query: any = {};

  // Search Query Functionality
  if (searchQuery) {
    query.$or = [
      { name: { $regex: searchQuery, $options: "i" } },
      { description: { $regex: searchQuery, $options: "i" } },
    ];
  }

  // Filter by Category
  if (category && category !== "All") {
    query.category = category;
  }

  // Filter by price range
  if (minPrice !== undefined || maxPrice !== undefined) {
    query.price = {};
    if (minPrice !== undefined) query.price.$gte = minPrice;
    if (maxPrice !== undefined) query.price.$lte = maxPrice;
  }

  // Sort by price
  const sort: any = sortByOrder === "asc" ? { price: 1 } : { price: -1 };
  const result = await Product.find(query).sort(sort);

  return result;
};

// Get a single product by ID
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// Update an existing product by ID
const updateProductFromDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

// Delete a product by ID
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
