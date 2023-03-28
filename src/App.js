import React from "react";

import "./App.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
      </div>
      <LandingPage />
    </>
  );
}

export default App;
