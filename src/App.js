import React from "react";
import { Routes, Route } from "react-router-dom"; // React Router
import CustomNavbar from "./components/CustomNavbar"; // Barra de navegación
import Sidebar from "./components/Sidebar"; // Barra lateral
import FlexDesign from "./components/FlexDesign"; // Componente FlexDesign
import App1 from "./components/App1"; // Componente App1
import App3 from "./components/App3"; // Componente App3
import App4 from "./components/App4"; // Componente App4
import Home from "./components/Home"; // Componente Home

function App() {
  return (
    <>
      <CustomNavbar /> {/* Barra de navegación */}
      <div className="d-flex">
        <Sidebar /> {/* Barra lateral */}
        <div className="container-fluid">
          <Routes>
            <Route path="/flexdesign" element={<FlexDesign />} />
            <Route path="/app1" element={<App1 />} />
            <Route path="/app3" element={<App3 />} />
            <Route path="/app4" element={<App4 />} />
            <Route path="/" element={<Home />} /> {/* Ruta por defecto */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
