import { readProducts } from "../utils/readProducts.js";

const getUniqueCategories = async () => {
  try {
    const products = await readProducts();
    const category = products.map((p) => p.category);
    const uniqueCategory = [...new Set(category)];
    return uniqueCategory;
  } catch (error) {
    throw new Error(`Error get Unique Categories ${error.message}`);
  }
};

console.log("Unique category:", await getUniqueCategories());
