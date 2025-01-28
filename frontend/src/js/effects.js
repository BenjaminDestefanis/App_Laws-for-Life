/* Efecto tipografia -- Init */

const typewriterElement = document.getElementById("typewriter");
const words = ["programación", "matemáticas", "estadísticas", "química"]; // Palabras a mostrar
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const type = () => {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    // Escribir la palabra
    typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000); // Pausa después de escribir
    } else {
      setTimeout(type, 100); // Velocidad de escritura
    }
  } else {
    // Borrar la palabra
    typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Cambiar a la siguiente palabra
      setTimeout(type, 500); // Pausa antes de escribir la siguiente palabra
    } else {
      setTimeout(type, 50); // Velocidad de borrado
    }
  }
};

// Iniciar el efecto
type();

/*  Efecto tipografia -- final */