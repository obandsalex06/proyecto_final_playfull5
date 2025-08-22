import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function Register() {
  const [formData, setFormData] = useState({ nombre: "", email: "", contraseña: "", confirmarContraseña: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.contraseña !== formData.confirmarContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Registrando usuario:", formData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-8">
          <h1 className="text-3xl font-bold text-purple-700 text-center">Crear una cuenta</h1>
          <p className="text-gray-500 text-center mt-2">¡Únete a Playful Learning y empieza a aprender jugando!</p>

          <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} required className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <input type="password" name="contraseña" placeholder="Contraseña" value={formData.contraseña} onChange={handleChange} required className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <input type="password" name="confirmarContraseña" placeholder="Confirmar contraseña" value={formData.confirmarContraseña} onChange={handleChange} required className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <button type="submit" className="mt-4 px-6 py-3 bg-purple-600 text-white font-bold rounded-xl shadow hover:bg-purple-700 transition">Registrarse</button>
          </form>

          <p className="mt-4 text-gray-500 text-center">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-purple-600 font-semibold hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
