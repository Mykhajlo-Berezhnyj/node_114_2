import fs from "node:fs/promises";

import { createFakeProduct } from "../utils/createFakeProduct.js";
import { PATH_DB } from "../constants/products.js";
import { readProducts } from "../utils/readProducts.js";

const generateProducts = async (amount) => {
  try {
    // const data = await fs.readFile(PATH_DB, { encoding: "utf-8" });
    // const data = await fs.readFile(PATH_DB, "utf-8");
    // const products = JSON.parse(data);
    // for (let i = 1; i <= amount; i += 1) {
    //   products.push(createFakeProduct());
    // }
    const products = await readProducts();
    const newProducts = Array.from(({length: amount}), () => createFakeProduct());
    const updateProducts = [...products, ...newProducts];
    await fs.writeFile(PATH_DB, JSON.stringify(updateProducts, null, 2));
    console.log(`Generation and add ${amount} products`);
     console.log(`Total products now ${updateProducts.length} `);
  } catch (error) {
    console.log(error.message);
  }
};

generateProducts(2);
