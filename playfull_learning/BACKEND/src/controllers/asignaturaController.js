import Asignatura from "../models/Asignatura.js";

export const crearAsignatura = async (req, res) => {
  try {
    const { nombre, descripcion, id_docente, braincoins_acumulables } = req.body;

    const asignatura = await Asignatura.create({
      nombre,
      descripcion,
      id_docente,
      braincoins_acumulables
    });

    res.json(asignatura);
  } catch (error) {
    res.status(500).json({ msg: "Error creando asignatura", error: error.message });
  }
};

export const listarAsignaturas = async (req, res) => {
  try {
    const asignaturas = await Asignatura.findAll();
    res.json(asignaturas);
  } catch (error) {
    res.status(500).json({ msg: "Error listando asignaturas", error: error.message });
  }
};
