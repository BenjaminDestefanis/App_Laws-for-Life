const express = require('express');
const Exercise = require('../models/Exercise');  // Importamos los modelos de consulta --


const router = express.Router();

// Obtener todos los ejercicios
router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.getAll();
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los ejercicios' });
  }
});

// Obtener un ejercicio por ID
router.get('/:id', async (req, res) => {
  try {
    const exercise = await Exercise.getById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }
    res.json(exercise);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el ejercicio' });
  }
});

module.exports = router;