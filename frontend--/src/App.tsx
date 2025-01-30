import React from "react";
/* import Greeting from "./components/Greeting"; */
/* import LandingPage from "./pages/Landing"; */
/* import  TypingEffect from "./components/Header"; */
/* import { Routes, Route, useRoutes } from "react-router-dom";; */
/* import TrainingSeccion from "./pages/TrainingSeccion"; */
import Navbar from "./components/NavBar";
import  "./App.css"

/* const AppRoutes = () => {
  return useRoutes([
    { path: "/training", element: <TrainingSeccion />}
  ])
} */

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />

      {/* <h1>Aprende coneptos rersolviendo problemas cotidianos utilizando </h1> */}
      <p></p>

      {/* <Greeting name="Benjamin" /> */}
    
    {/* <Routes>
      <Route path="/training" element={<TrainingSeccion />} />
    </Routes> */}


      {/* LANDING */}

    {/* <TypingEffect /> */}
    {/* <LandingPage /> */}
    </div>
  );
}

export default App;
