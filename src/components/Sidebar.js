// src/components/Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const sidebarStyle = {
    width: "240px",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  };

  const navLinkStyle = {
    color: "#333",
    padding: "10px",
    borderRadius: "5px",
    transition: "background 0.3s ease",
  };

  const navLinkHoverStyle = {
    backgroundColor: "#e9e9e9",
  };

  const navLinkActiveStyle = {
    backgroundColor: "#003C71",
    color: "#fff",
  };

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div style={sidebarStyle}>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link
          as={Link}
          to="/flexdesign"
          style={
            hoveredLink === "flexdesign"
              ? { ...navLinkStyle, ...navLinkHoverStyle }
              : navLinkStyle
          }
          onMouseEnter={() => handleMouseEnter("flexdesign")}
          onMouseLeave={handleMouseLeave}
        >
          Diseño Flexión Simple
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/app1"
          style={
            hoveredLink === "app1"
              ? { ...navLinkStyle, ...navLinkHoverStyle }
              : navLinkStyle
          }
          onMouseEnter={() => handleMouseEnter("app1")}
          onMouseLeave={handleMouseLeave}
        >
          Largo de Desarrollo Barras
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/app3"
          style={
            hoveredLink === "app3"
              ? { ...navLinkStyle, ...navLinkHoverStyle }
              : navLinkStyle
          }
          onMouseEnter={() => handleMouseEnter("app3")}
          onMouseLeave={handleMouseLeave}
        >
          Espectro de diseño NCh2369 2003 y 2023
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/1DFoundation"
          style={
            hoveredLink === "1DFoundation"
              ? { ...navLinkStyle, ...navLinkHoverStyle }
              : navLinkStyle
          }
          onMouseEnter={() => handleMouseEnter("1DFoundation")}
          onMouseLeave={handleMouseLeave}
        >
          Fundación 1D
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/app4"
          style={
            hoveredLink === "app4"
              ? { ...navLinkStyle, ...navLinkHoverStyle }
              : navLinkStyle
          }
          onMouseEnter={() => handleMouseEnter("app4")}
          onMouseLeave={handleMouseLeave}
        >
          Two Js Try
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
