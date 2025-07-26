import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper";

const router = Router();

router.post('/register', ctrlWrapper(registerUserController));


export default router;