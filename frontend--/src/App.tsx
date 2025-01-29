import React from "react";
import Greeting from "./components/Greeting";
import LandingPage from "./pages/Landing";
import  "./App.css"

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Aprende coneptos rersolviendo problemas cotidianos utilizando </h1>
      <p>Domina matemáticas, programación, estadísticas y más con ejercicios prácticos y visuales.</p>

      <Greeting name="Benjamin" />




      {/* LANDING */}

    <LandingPage />
    </div>
  );
}

export default App;
