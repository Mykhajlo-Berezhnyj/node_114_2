import { Product } from "../db/schemas/Product.js";

export const getProducts = (filter) => {
  let productQuery = Product.find();

  if (filter.name) {
    productQuery.where("name").regex(new RegExp(filter.name, "i"));
  }

  if (filter.price) {
    const priceQuery = {};
    if (filter.price.min !== undefined) {
      priceQuery.$gte = filter.price.min;
    }
    if (filter.price.max !== undefined) {
      priceQuery.$lte = filter.price.max;
    }

    productQuery.where("price", priceQuery);
  }

  if (filter.category) {
    const category = Array.isArray(filter.category)
      ? filter.category
      : [filter.category];
    productQuery.where("category").in(category);
  }
};

export const getProductById = (productId) => Product.findById(productId);

export const createProduct = (payload) => Product.create(payload);

export const updateProduct = (productId, payload) =>
  Product.findByIdAndUpdate(productId, payload, { new: true });

export const deleteProduct = (productId) =>
  Product.findByIdAndDelete(productId);
