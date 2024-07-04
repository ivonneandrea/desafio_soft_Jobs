import { Router } from "express";

// Middlewares
import validSignIn from "../../middlewares/validate.sign-in.js";
import verifyToken from "../../middlewares/verifyToken.js";

// Controllers
import { getUser, postUser } from "../../src/controllers/sign-in.controller.js";



const router = Router();

// GET /usuarios
router.get("/usuarios", verifyToken, getUser);

// POST /usuarios
router.post("/usuarios", validSignIn, postUser);

export default router;