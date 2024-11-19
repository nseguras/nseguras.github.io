import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de React Router
import { Navbar, Nav, Container } from 'react-bootstrap'; // Bootstrap components
import logo from '../assets/logo.png'; // Ajusta la ruta según corresponda


const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Logo o nombre */}
        <Navbar.Brand as={Link} to="/app1">  
        <img
          src={logo}
          alt="Logo"
          style={{ height: '100px' }} // Ajusta el tamaño según necesites
        />
        PROYECTOS PERSONALES
        </Navbar.Brand>

        {/* Enlaces de navegación */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/app1">App 1</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
