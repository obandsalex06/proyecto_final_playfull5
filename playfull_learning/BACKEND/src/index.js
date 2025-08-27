import express from "express";
import cors from "cors";

import sequelize from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import asignaturaRoutes from "./routes/asignaturaRoutes.js";

import Inscripcion from "./models/Inscripcion.js";
import Evidencia from "./models/Evidencia.js";
import Premio from "./models/Premio.js";
import Canje from "./models/Canje.js";




const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/asignaturas", asignaturaRoutes);

sequelize.authenticate()
  .then(() => console.log("✅ Conectado a MySQL"))
  .catch(err => console.error("❌ Error de conexión:", err));

app.listen(4000, () => console.log("🚀 Servidor corriendo en http://localhost:4000"));
