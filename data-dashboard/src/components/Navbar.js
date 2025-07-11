import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar
      expand="sm"
      fixed="top"
      className="px-3"
      style={{
        backgroundColor: "rgba(33, 37, 41, 0.9)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
      }}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="mb-0 text-light fw-bold fs-4">
          Ottawa Stats Dashboard
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
