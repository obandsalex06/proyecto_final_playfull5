import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Usuario from "./Usuario.js";

const Asignatura = sequelize.define("Asignatura", {
  id_asignatura: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.TEXT },
  braincoins_acumulables: { type: DataTypes.INTEGER, defaultValue: 0 }
}, { tableName: "asignaturas", timestamps: false });

Usuario.hasMany(Asignatura, { foreignKey: "id_docente" });
Asignatura.belongsTo(Usuario, { foreignKey: "id_docente" });

export default Asignatura;
