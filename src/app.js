import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import routeCategories from "./routers/categories.routes";
import routeProducts from "./routers/products.routes";

const app = express();

app.use(express.json());
app.use("/categories", routeCategories);
app.use("/products", routeProducts);

export default app.listen(3333, () => {
  startDatabase();
  console.log("Server running");
});
