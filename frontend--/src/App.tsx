import React from "react";
import Greeting from "./components/Greeting";
import  "./App.css"

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>¡Bienvenido a tu plataforma de aprendizaje!</h1>
      <p>Comencemos a construir.</p>

      <Greeting name="Benjamin" />
    </div>
  );
}

export default App;
