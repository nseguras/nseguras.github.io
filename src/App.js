import React from 'react';
import { Routes, Route } from 'react-router-dom'; // React Router
import CustomNavbar from './components/CustomNavbar'; // Barra de navegación
import Sidebar from './components/Sidebar'; // Barra lateral
import App1 from './components/App1'; // Componente App1
// import App2 from './components/App2'; // Componente App2
import App3 from './components/App3'; // Componente App3
import App4 from './components/App4'; // Componente App3
import Home from './components/Home'; // Componente Home

function App() {
  return (
    <>
      <CustomNavbar /> {/* Barra de navegación */}
      <div className="d-flex">
        <Sidebar /> {/* Barra lateral */}
        <div className="container-fluid">
          <Routes>
            <Route path="/app1" element={<App1 />} />
            <Route path="/app2" element={<App1 />} />
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
