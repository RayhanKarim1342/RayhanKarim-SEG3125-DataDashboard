import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";

const Home = () => {
  return (
    <div className="home-background">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default Home;
