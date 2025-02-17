import React, { useState } from "react";

const API_URL = "https://csatoolbox-ww7p.onrender.com/flexdesign/design";

const FlexDesign = () => {
  const [formData, setFormData] = useState({
    M_u: 9,
    h: 500,
    b: 400,
    eps_u: 0.003,
    Es: 200000,
    fy: 420,
    fc: 30,
    rec: 50,
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
        <h1>FLUOR</h1>
        <p>
          CSA ToolBox - <i>FlexDesign</i>
        </p>
      </header>

      <section id="form-section">
        <h2>Parámetros de Diseño</h2>
        <form id="flexionForm" onSubmit={handleSubmit}>
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
          <div className="form-group">
            <label htmlFor="h">Altura "h" de la sección [mm]:</label>
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
            <label htmlFor="b">Ancho "b" de la sección [mm]:</label>
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
          <div className="form-group">
            <label htmlFor="eps_u">
              Deformación última del hormigón ε<sub>u</sub>:
            </label>
            <input
              type="number"
              id="eps_u"
              name="eps_u"
              step="0.0001"
              value={formData.eps_u}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Es">Módulo de elasticidad del acero:</label>
            <select
              id="Es"
              name="Es"
              value={formData.Es}
              onChange={handleChange}
              required
            >
              <option value="200000">200.000 MPa</option>
              <option value="210000">210.000 MPa</option>
              <option value="220000">220.000 MPa</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fy">Calidad del acero de refuerzo:</label>
            <select
              id="fy"
              name="fy"
              value={formData.fy}
              onChange={handleChange}
              required
            >
              <option value="280">A440-280H MPa</option>
              <option value="420">A630-420H MPa</option>
            </select>
          </div>
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
          <div className="form-group">
            <label htmlFor="rec">
              Recubrimiento al centro de la barra [mm]:
            </label>
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
