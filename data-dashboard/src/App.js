import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LanguageProvider } from "./LanguageContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function AppContent() {
  return (
    <div className="app-wrapper d-flex flex-column min-vh-100 home-background">
      <div className="flex-grow-1 d-flex flex-column app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <footer
        className="footer bg-dark text-white d-flex justify-content-center align-items-center"
        style={{ height: "48px" }}
      >
        <Container className="text-center m-0 p-0">
          Rayhan Karim &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; akari033@uottawa.ca
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 300377828
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;🍁&nbsp;
          <a
            href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410045901"
            style={{ textDecoration: "underline", color: "inherit" }}
          >
            Source: StatsCan
          </a>
        </Container>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
