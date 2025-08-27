import Usuario from "../models/Usuario.js";
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
  try {
    const { nombre, apellido, correo, contrasena, telefono, id_rol } = req.body;
    const hashedPass = await bcrypt.hash(contrasena, 10);

    const usuario = await Usuario.create({
      nombre, apellido, correo,
      contrasena: hashedPass, telefono, id_rol
    });

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ msg: "Error creando usuario", error: error.message });
  }
};

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ msg: "Error listando usuarios", error: error.message });
  }
};
