import { PATH_DB } from "../constants/products.js";
import { readProducts } from "../utils/readProducts.js";
import fs from "node:fs/promises"

const modifyProducts = async () => {
try {
    const products = await readProducts();
    const modify = products.map(({description,...rest}) => rest);
   await fs.writeFile(PATH_DB, JSON.stringify(modify, null, 2));
   return modify;
} catch (error) {
    throw new Error(`Error modify Products: ${error.message}`);
    
}
};

 console.log("modifyProducts:", await modifyProducts());