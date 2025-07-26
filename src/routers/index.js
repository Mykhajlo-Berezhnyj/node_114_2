import { Router } from "express";
import contactsRouter from "../routers/users.js";
import productsRouter from "../routers/products.js";

const router = Router();

router.use("/user", contactsRouter);
router.use("/products", productsRouter);

export default router;
