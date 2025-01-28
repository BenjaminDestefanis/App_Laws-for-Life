const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgre_user',       // Usuario de PostgreSQL
  host: 'localhost',        // Host de la base de datos
  database: 'logica_db',    // Nombre de la base de datos
  password: 1234, // Contraseña de PostgreSQL
  port: 5432,               // Puerto de PostgreSQL
});

module.exports = pool;