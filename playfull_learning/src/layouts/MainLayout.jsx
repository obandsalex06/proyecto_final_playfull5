import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <Outlet /> {/* Aquí se renderizan las páginas hijas */}
      </main>
    </div>
  );
}
