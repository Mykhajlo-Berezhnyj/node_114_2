import { readProducts } from "../utils/readProducts.js";

const groupProductsByCategories = async () => {
  try {
    const products = await readProducts();
    const grouped = products.reduce((acc, { category, name }) => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(name);
      return acc;
    }, {});
    return grouped;
  } catch (error) { 
    throw new Error(`Error group Products By Categories: ${error.message}`);
  }
};

console.log(await groupProductsByCategories());
