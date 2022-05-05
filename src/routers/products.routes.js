import { Router } from "express";
import ProductsController from "../controllers/products/productsController";

const routeProducts = Router();

const productsController = new ProductsController();

routeProducts.post("", productsController.store);
routeProducts.get("", productsController.index);
routeProducts.get("/:id", productsController.show);
routeProducts.get("/category/:id", productsController.showWithCategory);
routeProducts.patch("/:id", productsController.update);
routeProducts.delete("/:id", productsController.delete);

export default routeProducts;
