import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
/* import App from '../App'; */
import TrainingSeccion from '../pages/TrainingSeccion';
import Home from './Home';


// Tipado de rutas
type RouteConfig = {
  path: string;
  element: React.ReactNode;
};

// Configuración de rutas
const routes: RouteConfig[] = [
  /* { path: '/', element: <App /> }, */
  { path: '/training', element: <TrainingSeccion /> }, // Nueva ruta
  { path: '/', element: <Home />}
];

const Navbar: React.FC = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          {routes.map((route) => (
            <Button key={route.path} color="inherit" component={Link} to={route.path}>
              {route.path === '/' ? 'Home' : route.path.slice(1)}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Container>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Container>
    </Router>
  );
};

export default Navbar;