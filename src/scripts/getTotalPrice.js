import { readProducts } from "../utils/readProducts.js";

const getTotalPrice = async () => {
  try {
    const products = await readProducts();
    const total = products.reduce((acc, p) => {
      const price = Number(p.price);
    return !isNaN(price) ? acc +price : acc;
    }, 0);
    return Number(total.toFixed(2));
  } catch (error) {
    throw new Error(`Error get total price ${error.message}`);
  }
};

console.log('Total price:', await getTotalPrice());