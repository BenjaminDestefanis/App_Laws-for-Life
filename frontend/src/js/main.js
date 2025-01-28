document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('http://localhost:5000/api/exercises');
      const exercises = await response.json();
  
      const exercisesContainer = document.getElementById('exercises');
      exercises.forEach(exercise => {
        const exerciseElement = document.createElement('div');
        exerciseElement.innerHTML = `
          <h2>${exercise.title}</h2>
          <p>${exercise.description}</p>
          <p><strong>Dificultad:</strong> ${exercise.difficulty}</p>
        `;
        exercisesContainer.appendChild(exerciseElement);
      });
    } catch (error) {
      console.error('Error al cargar los ejercicios:', error);
    }
  });