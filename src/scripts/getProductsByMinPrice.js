import { readProducts } from "../utils/readProducts.js";

const getProductsByMinPrice = async (minPrice) => {
  try {
    const products = await readProducts();
    const productByMinPrice = products.filter(
      (product) => Number(product.price) >= minPrice
    );
    return productByMinPrice;
  } catch (error) {
    throw new Error(`Error get products by min price ${error.message} `);
  }
};
console.log(await getProductsByMinPrice(200));