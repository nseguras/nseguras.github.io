import React, { useState } from "react";
import "./FlexDesign.css";

const API_URL = "https://csatoolbox-ww7p.onrender.com/flexdesign/design";

const FlexDesign = () => {
  const [formData, setFormData] = useState({
    M_u: 9,
    h: 500,
    b: 400,
    fc: 30,
    rec: 50,
    eps_u: 0.003, //Valor fijo
    Es: 200000, //Valor fijo
    fy: 420, //Valor fijo
  });

  const [results, setResults] = useState({
    As_req: 0,
    cantidad: 0,
    FU: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Ocurrió un error al calcular. Revisa la consola.");
      });
  };

  return (
    <div className="container">
      <header>
        <h1>Diseño flexión simple </h1>
      </header>

      <section id="form-section">
        <h2>Parámetros de Diseño</h2>
        <form id="flexionForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fc">Grado del hormigón:</label>
            <select
              id="fc"
              name="fc"
              value={formData.fc}
              onChange={handleChange}
              required
            >
              <option value="20">G20</option>
              <option value="25">G25</option>
              <option value="30">G30</option>
              <option value="35">G35</option>
              <option value="40">G40</option>
            </select>
          </div>

          <div className="form-layout">
            <div className="form-group">
              <label htmlFor="M_u">Momento Último [tonf-m]:</label>
              <input
                type="number"
                id="M_u"
                name="M_u"
                step="0.01"
                value={formData.M_u}
                onChange={handleChange}
                required
              />
            </div>

            <div className="image-container">
              <img
                src={require("./assets/flexdesign-fig.png")}
                alt="FlexDesign"
                className="flexdesign-image"
              />
            </div>

            <div className="input-group">
              <div className="form-group">
                <label htmlFor="h">Altura "h" [mm]:</label>
                <input
                  type="number"
                  id="h"
                  name="h"
                  step="0.01"
                  value={formData.h}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="rec">Recubrimiento "rec" [mm]:</label>
                <input
                  type="number"
                  id="rec"
                  name="rec"
                  step="0.01"
                  value={formData.rec}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="b">Ancho "b" [mm]:</label>
              <input
                type="number"
                id="b"
                name="b"
                step="0.01"
                value={formData.b}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit">Calcular</button>
        </form>
      </section>

      <section id="results-section">
        <h2>Resultados</h2>
        <div id="resultadosGenerales">
          <p>
            <strong>Área de acero requerida (As):</strong>{" "}
            <span id="asReq">{results.As_req.toFixed(2)}</span> mm²
          </p>
          <p>
            <strong>Cantidad de combinaciones posibles:</strong>{" "}
            <span id="cantidadCombinaciones">{results.cantidad}</span>
          </p>
        </div>

        <h3>Factores de Utilización</h3>
        <div className="table-container">
          <table id="tablaFU">
            <thead>
              <tr>
                <th>Combinación (nb, db)</th>
                <th>Factor de Utilización</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(results.FU).map(
                ([combinacion, factorUtilizacion]) => (
                  <tr key={combinacion}>
                    <td>{combinacion}</td>
                    <td
                      className="fu-color"
                      style={{ "--fu-value": factorUtilizacion }}
                    >
                      {factorUtilizacion.toFixed(3)}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default FlexDesign;
