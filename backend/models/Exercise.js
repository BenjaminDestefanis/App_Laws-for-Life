const pool = require('../config/db');

const Exercise = {
  // Obtener todos los ejercicios 
  async getAll() {
    const result = await pool.query('SELECT * FROM exercises');
    return result.rows;
  },

  // Obtener un ejercicio por ID
  async getById(id) {
    const result = await pool.query('SELECT * FROM exercises WHERE id = $1', [id]);
    return result.rows[0];
  },

  // Crear un nuevo ejercicio
  async create(title, description, difficulty) {
    const result = await pool.query(
      'INSERT INTO exercises (title, description, difficulty) VALUES ($1, $2, $3) RETURNING *',
      [title, description, difficulty]
    );
    return result.rows[0];
  },
};

module.exports = Exercise;