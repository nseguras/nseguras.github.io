import React, { useEffect } from "react";

function App2() {
  useEffect(() => {
    // Cargar Pyodide cuando el componente se monte
    const loadPyodideAndSetup = async () => {
      const pyodide = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.22.1/full/",
      });

      // Guardamos pyodide para usarlo después
      window.pyodide = pyodide;
    };

    loadPyodideAndSetup();
  }, []);

  // Función para ejecutar el código Python
  const ejecutarPython = async () => {
    if (!window.pyodide) {
      alert("Pyodide aún se está cargando. Por favor, espera.");
      return;
    }

    // Código Python que quieres ejecutar
    const resultado = window.pyodide.runPython(`
      num1 = 5
      num2 = 10
      resultado = num1 + num2
      resultado
    `);

    // Actualizar el resultado en el DOM
    document.getElementById("resultado").innerText =
      "El resultado de la suma es: " + resultado;
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ color: "#4CAF50" }}>Ejecuta código Python en tu navegador</h1>
      <p>Haz clic en el botón para calcular la suma de dos números usando Python:</p>
      <button
        onClick={ejecutarPython}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Calcular
      </button>
      <div
        id="resultado"
        style={{
          marginTop: "20px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      ></div>
    </div>
  );
}

export default App2;
