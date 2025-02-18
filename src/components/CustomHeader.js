import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ajusta la ruta según corresponda

const headerStyles = {
  backgroundColor: "#003C71",
  borderBottom: "10px solid #00263A",
  display: "flex",
  alignItems: "center",
  padding: "10px 20px",
  // borderRadius: "30px 30px 0 0", // Eliminado para quitar las esquinas redondeadas
};

const logoStyles = {
  height: "100px",
  marginRight: "20px",
};

const titleStyles = {
  color: "#fff",
  fontSize: "2em",
  textDecoration: "none",
};

const CustomHeader = () => {
  return (
    <div style={headerStyles}>
      <Link to="/">
        <img src={logo} alt="Logo" style={logoStyles} />
      </Link>
      <Link to="/" style={titleStyles}>
        CSAToolbox
      </Link>
    </div>
  );
};

export default CustomHeader;
