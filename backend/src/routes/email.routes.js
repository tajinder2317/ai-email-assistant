import { Router } from "express";
import { emailTest } from "../controllers/email.controller.js";

const router = Router();

router.get("/email/test", emailTest);

export default router;

