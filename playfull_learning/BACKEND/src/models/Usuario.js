import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Rol from "./Rol.js";

const Usuario = sequelize.define("Usuario", {
  id_usuario: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  apellido: { type: DataTypes.STRING, allowNull: false },
  correo: { type: DataTypes.STRING, allowNull: false, unique: true },
  contrasena: { type: DataTypes.STRING, allowNull: false },
  telefono: { type: DataTypes.STRING },
  estado: { type: DataTypes.ENUM("activo", "suspendido"), defaultValue: "activo" }
}, { tableName: "usuarios", timestamps: false });

Rol.hasMany(Usuario, { foreignKey: "id_rol" });
Usuario.belongsTo(Rol, { foreignKey: "id_rol" });

export default Usuario;
