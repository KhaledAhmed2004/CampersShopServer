export type TProduct = {
  name: string;
  price: number;
  stockQuantity: number;
  description: string;
  category: string;
  image: string;
  ratings: number;
};

export type TProductQuery = {
  searchQuery?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortByOrder?: "asc" | "desc";
};
