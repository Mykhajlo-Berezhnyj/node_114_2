import path from "node:path";
import fs from "node:fs/promises";
import { PATH_FILES_DIR } from "../constants/products.js";
import { readProducts } from "../utils/readProducts.js";

const createProductsFiles = async () => {
  try {
    const products = await readProducts();
    await Promise.all(
      products.map(async (p) => {
        const fileName = `${p.name.split(" ").join("-")}.json`;
        const PATH_FILE = path.resolve(PATH_FILES_DIR, fileName);
        await fs.writeFile(PATH_FILE, JSON.stringify(p, null, 2));
    })
);
console.log(`create Products Files:, ${products.length}`);
  } catch (error) {
    console.log("🚀 ~ createProductsFiles ~ error:", error.message);
    throw new Error(`Error create Products Files: ${error.message}`);
    
  }
};

createProductsFiles();
