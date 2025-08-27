// src/controllers/authController.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../config/db.js";

// Registrar usuario
export const register = async (req, res) => {
  try {
    const { nombre, apellido, correo, contrasena, telefono, id_rol } = req.body;

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    // Insertar usuario en la BD
    const [result] = await pool.query(
      "INSERT INTO usuarios (nombre, apellido, correo, contrasena, telefono, id_rol) VALUES (?, ?, ?, ?, ?, ?)",
      [nombre, apellido, correo, hashedPassword, telefono, id_rol]
    );

    res.status(201).json({ message: "✅ Usuario registrado con éxito", id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login de usuario
export const login = async (req, res) => {
  try {
    const { correo, contrasena } = req.body;

    const [rows] = await pool.query("SELECT * FROM usuarios WHERE correo = ?", [correo]);
    if (rows.length === 0) return res.status(400).json({ message: "❌ Usuario no encontrado" });

    const usuario = rows[0];

    const validPassword = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!validPassword) return res.status(401).json({ message: "❌ Contraseña incorrecta" });

    const token = jwt.sign(
      { id: usuario.id_usuario, rol: usuario.id_rol },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "✅ Login exitoso", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
