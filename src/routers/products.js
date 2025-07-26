import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  updateProductController,
} from "../controllers/products.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createProductSchema, editProductSchema } from "../validation/product.js";
import { isValidId } from "../middlewares/isValidId.js";

const productsRouter = new Router();

productsRouter.get("/", ctrlWrapper(getProductsController));

productsRouter.get("/:productId", isValidId('productId'), ctrlWrapper(getProductByIdController));

productsRouter.post("/", validateBody(createProductSchema), ctrlWrapper(createProductController));

productsRouter.patch("/:productId", validateBody(editProductSchema), isValidId('productId'), ctrlWrapper(updateProductController));

productsRouter.delete("/:productId", isValidId('productId'), ctrlWrapper(deleteProductController));

export default productsRouter;
