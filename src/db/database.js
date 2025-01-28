const { Pool } = require("pg");

// Configura tu conexión a PostgreSQL
const pool = new Pool({
  user: "tu_usuario",     // Cambia esto con tu usuario de PostgreSQL
  host: "localhost",      // Host de la base de datos
  database: "exercises",  // Nombre de la base de datos
  password: "tu_contraseña",  // Cambia esto con tu contraseña
  port: 5432,             // Puerto por defecto
});

module.exports = pool;
