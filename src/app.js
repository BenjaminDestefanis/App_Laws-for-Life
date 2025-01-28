const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const exercisesRoutes = require("./routes/exercises");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api/exercises", exercisesRoutes);

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
