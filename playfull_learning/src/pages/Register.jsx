import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    contraseña: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registrando usuario:", formData);
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-50 items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-3xl grid md:grid-cols-2 w-full max-w-4xl overflow-hidden">
        
        {/* Lado izquierdo: mensaje */}
        <div className="bg-purple-600 text-white flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-bold text-center">¡Únete a Playful Learning 🚀!</h2>
          <p className="mt-4 text-center text-lg">
            ¿Ya tienes cuenta?  
          </p>
          <Link
            to="/login"
            className="mt-6 px-6 py-3 bg-white text-purple-600 font-bold rounded-xl shadow hover:bg-gray-100 transition"
          >
            Inicia sesión
          </Link>
        </div>

        {/* Lado derecho: formulario */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-purple-700 text-center">
            Crear cuenta
          </h1>
          <p className="text-gray-500 text-center mt-2">
            Regístrate y empieza tu aventura de aprendizaje ✨
          </p>

          <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              required
              className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-purple-600 text-white font-bold rounded-xl shadow hover:bg-purple-700 transition"
            >
              Registrarse
            </button>
          </form>

          <Link
            to="/home"
            className="block mt-6 text-purple-600 font-semibold hover:underline text-center"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
