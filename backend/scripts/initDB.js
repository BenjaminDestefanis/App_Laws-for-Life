const pool = require('../config/db');

const initDb = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS exercises (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        difficulty VARCHAR(50)
      );
    `);
    console.log('Tabla de ejercicios creada correctamente.');
  } catch (error) {
    console.error('Error al crear la tabla:', error);
  } finally {
    pool.end();
  }
};

initDb();