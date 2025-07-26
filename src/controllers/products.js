import createHttpError from "http-errors";
import {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/products.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";

export const getProductsController = async (req, res) => {
  const filter = parseFilterParams(req.query);

  const products = await getProducts(filter);
  res.json({
    status: 200,
    message: "Successfully found products!",
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductById(productId);

  if (!product) {
    throw createHttpError(404, `Product with ${productId} not found`);
  }
  res.json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};

export const createProductController = async (req, res) => {
  const { name, price, category, description } = req.body;
  if (!name || !price || !category) {
    throw createHttpError(400, "Missing required fields");
  }
  const product = await createProduct({
    name,
    price: Number(price),
    category,
    description,
  });
  res.status(201).json({
    status: 201,
    message: "Successfully created a product!",
    data: product,
  });
};

export const updateProductController = async (req, res) => {
  const { productId } = req.params;
  const product = await updateProduct(productId, req.body);
  if (!product) {
    throw createHttpError(404, `Product with ${productId} not found`);
  }
  res.status(200).json({
    status: 200,
    message: "Successfully patched a product!",
    data: product,
  });
};

export const deleteProductController = async (req, res) => {
  const { productId } = req.params;
  const product = await deleteProduct(productId);
  if (!product) {
    throw createHttpError(404, `Product with ${productId} not found`);
  }
  res.status(204).send();
};
