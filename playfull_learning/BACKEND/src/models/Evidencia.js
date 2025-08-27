import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Usuario from "./Usuario.js";
import Asignatura from "./Asignatura.js";

const Evidencia = sequelize.define("Evidencia", {
  id_evidencia: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  descripcion: { type: DataTypes.TEXT },
  fecha_entrega: { type: DataTypes.DATE },
  braincoins_obtenidos: { type: DataTypes.INTEGER, defaultValue: 0 }
}, { tableName: "evidencias", timestamps: false });

// Relaciones
Usuario.hasMany(Evidencia, { foreignKey: "id_estudiante" });
Evidencia.belongsTo(Usuario, { foreignKey: "id_estudiante" });

Asignatura.hasMany(Evidencia, { foreignKey: "id_asignatura" });
Evidencia.belongsTo(Asignatura, { foreignKey: "id_asignatura" });

export default Evidencia;
