import { Router } from "express";
import CategoriesController from "../controllers/categories/categoriesController";

const routeCategories = Router();
const categoriesController = new CategoriesController();

routeCategories.post("", categoriesController.store);
routeCategories.get("", categoriesController.index);
routeCategories.get("/:id", categoriesController.show);
routeCategories.patch("/:id", categoriesController.update);

export default routeCategories;