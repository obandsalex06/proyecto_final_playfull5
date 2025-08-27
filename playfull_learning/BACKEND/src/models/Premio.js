import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Premio = sequelize.define("Premio", {
  id_premio: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  tipo: { type: DataTypes.STRING },
  costo_braincoins: { type: DataTypes.INTEGER, allowNull: false }
}, { tableName: "premios", timestamps: false });

export default Premio;
