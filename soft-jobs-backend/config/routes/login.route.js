import { Router } from "express";
import loginUser from "../../src/controllers/login.controller.js";
import validLogin from "../../middlewares/validate.login.js";

const router = Router();

// POST /login
router.post("/login", validLogin, loginUser);

export default router;