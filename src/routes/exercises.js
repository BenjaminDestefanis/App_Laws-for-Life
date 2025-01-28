const express = require("express");
const router = express.Router();
const pool = require("../db/database");

// Obtener todos los ejercicios
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM exercises");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

// Crear un nuevo ejercicio
router.post("/", async (req, res) => {
  const { title, description, difficulty } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO exercises (title, description, difficulty) VALUES ($1, $2, $3) RETURNING *",
      [title, description, difficulty]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

// Eliminar un ejercicio por ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM exercises WHERE id = $1", [id]);
    res.json({ message: `Ejercicio con ID ${id} eliminado.` });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
