import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const TypingEffect: React.FC = () => {
  const staticText = "Soluciona problemas abstractos de manera sencilla usando ";
  const words = ["Programación", "Matemáticas", "Química", "Física"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 150; // Velocidad al escribir
  const deletingSpeed = 100; // Velocidad al borrar
  const pauseTime = 1200; // Pausa antes de borrar la palabra

  useEffect(() => {
    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1)); // Borra un carácter
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1)); // Escribe un carácter
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime); // Pausa antes de borrar
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length); // Pasa a la siguiente palabra
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const typingInterval = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingInterval);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="typing-effect">
      <h1>{staticText} {text}|</h1>
    </div>
  );
};

export default TypingEffect;
