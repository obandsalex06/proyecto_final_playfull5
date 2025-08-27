import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Rol = sequelize.define("Rol", {
  id_rol: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre_rol: { type: DataTypes.STRING, allowNull: false, unique: true }
}, { tableName: "roles", timestamps: false });

export default Rol;
