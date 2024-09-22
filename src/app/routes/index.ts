import { Router } from "express";
import { ProductRoute } from "../modules/product/product.route";
import { OrderRoute } from "../modules/order/order.route";

const router = Router();

// Define the module routes
const moduleRoutes = [
  {
    path: "/products",
    route: ProductRoute,
  },
  {
    path: "/orders",
    route: OrderRoute,
  },
];
// Use the routes in the router
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
