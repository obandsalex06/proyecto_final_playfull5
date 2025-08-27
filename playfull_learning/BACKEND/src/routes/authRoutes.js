import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router();

// Registro de usuarios
router.post("/register", register);

// Login de usuarios
router.post("/login", login);

export default router;
