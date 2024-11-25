// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


const Sidebar = () => {
  return (
    <div className="d-flex flex-column" style={{ width: '240px', height: '100vh', backgroundColor: '#343a40' }}>
      <Nav defaultActiveKey="/app1" className="flex-column">
        <Nav.Link as={Link} to="/app1">División servidor node.js</Nav.Link>
        <Nav.Link as={Link} to="/app2">Pyodide python en html</Nav.Link>
        <Nav.Link as={Link} to="/app3">App 3</Nav.Link>
        <Nav.Link as={Link} to="https://nseguras.github.io/diagrama-interaccion/"> Diagrama Interaccion</Nav.Link>
        <Nav.Link as={Link} to="/app4">Two Js</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
