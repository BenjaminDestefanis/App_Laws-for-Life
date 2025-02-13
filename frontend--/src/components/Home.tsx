import React from 'react';
import TypingEffect from './Header';
import { Box, Button, Card, CardContent, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";


const Home: React.FC = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Aprende conceptos resolviendo problemas cotidianos utilizando 
        <TypingEffect />
      </Typography>
      <Typography variant="body1">
        Domina matemáticas, programación, estadísticas y más con ejercicios prácticos y visuales.
      </Typography>
      <Container maxWidth="lg" sx={{ textAlign: "center", py: 6 }}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h6" color="textSecondary" paragraph>
          Una plataforma interactiva para mejorar tus habilidades en matemáticas, programación, física y química con ejercicios prácticos y pruebas automáticas.
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 3 }}>
          Comenzar Ahora
        </Button>
      </motion.div>
      <Grid container spacing={4} sx={{ mt: 6 }}>
        {[
          { title: "Matemáticas", text: "Resuelve problemas matemáticos y comprueba tus respuestas automáticamente." },
          { title: "Programación", text: "Ejercicios prácticos en diferentes lenguajes con validación instantánea." },
          { title: "Física y Química", text: "Experimenta con ejercicios dinámicos y pruebas automáticas." }
        ].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {item.title}
                </Typography>
                <Typography color="textSecondary">
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    
    </Box>
  );
};

export default Home;