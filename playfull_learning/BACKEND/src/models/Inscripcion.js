import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Usuario from "./Usuario.js";
import Asignatura from "./Asignatura.js";

const Inscripcion = sequelize.define("Inscripcion", {
  id_inscripcion: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  fecha_inscripcion: { type: DataTypes.DATE, allowNull: false }
}, { tableName: "inscripciones", timestamps: false });

// Relaciones
Usuario.hasMany(Inscripcion, { foreignKey: "id_estudiante" });
Inscripcion.belongsTo(Usuario, { foreignKey: "id_estudiante" });

Asignatura.hasMany(Inscripcion, { foreignKey: "id_asignatura" });
Inscripcion.belongsTo(Asignatura, { foreignKey: "id_asignatura" });

export default Inscripcion;
