// src/routes/authRoutes.js
import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router();

// Ruta para registrar
router.post("/register", register);

// Ruta para login
router.post("/login", login);

export default router;
