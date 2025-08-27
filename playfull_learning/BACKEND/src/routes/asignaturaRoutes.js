import express from "express";
import { crearAsignatura, listarAsignaturas } from "../controllers/asignaturaController.js";

const router = express.Router();

// Ruta para crear una asignatura
router.post("/", crearAsignatura);

// Ruta para listar todas las asignaturas
router.get("/", listarAsignaturas);

export default router;
