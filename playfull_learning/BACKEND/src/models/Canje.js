import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Usuario from "./Usuario.js";
import Premio from "./Premio.js";

const Canje = sequelize.define("Canje", {
  id_canje: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  fecha: { type: DataTypes.DATE, allowNull: false },
  braincoins_utilizados: { type: DataTypes.INTEGER, allowNull: false }
}, { tableName: "canjes", timestamps: false });

// Relaciones
Usuario.hasMany(Canje, { foreignKey: "id_estudiante" });
Canje.belongsTo(Usuario, { foreignKey: "id_estudiante" });

Premio.hasMany(Canje, { foreignKey: "id_premio" });
Canje.belongsTo(Premio, { foreignKey: "id_premio" });

export default Canje;
