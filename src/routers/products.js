import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  updateProductController,
} from "../controllers/products.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const productsRouter = new Router();

productsRouter.get("/", ctrlWrapper(getProductsController));

productsRouter.get("/:productId", ctrlWrapper(getProductByIdController));

productsRouter.post("/", ctrlWrapper(createProductController));

productsRouter.patch("/:productId", ctrlWrapper(updateProductController));

productsRouter.delete("/:productId", ctrlWrapper(deleteProductController));

export default productsRouter;
