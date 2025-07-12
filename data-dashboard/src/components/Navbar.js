import React, { useContext } from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";

const NavigationBar = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const brandTitle =
    language === "fr"
      ? "Tableau de bord statistique d'Ottawa"
      : "Ottawa Stats Dashboard";

  const handleLanguageSelect = (lang) => {
    changeLanguage(lang);
  };

  return (
    <Navbar
      expand="sm"
      fixed="top"
      className="px-3"
      style={{
        backgroundColor: "rgba(17, 23, 29, 0.3)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
      }}
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        <Navbar.Brand as={Link} to="/" className="mb-0 text-light fw-bold fs-4">
          {brandTitle}
        </Navbar.Brand>

        <Dropdown align="end" className="me-3" onSelect={handleLanguageSelect}>
          <Dropdown.Toggle
            id="language-dropdown"
            variant="light"
            className="ms-2 rounded-pill fw-bold"
          >
            {language === "fr" ? "Langue" : "Language"}
          </Dropdown.Toggle>

          <Dropdown.Menu
            className="rounded-4 shadow px-2 menu-fade"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <Dropdown.Item eventKey="en">English</Dropdown.Item>
            <Dropdown.Item eventKey="fr">Français</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
