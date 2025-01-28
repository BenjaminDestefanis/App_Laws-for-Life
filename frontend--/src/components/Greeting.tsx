// components/Greeting.tsx
import React from "react";

// Definir las props
interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h2>Hola, {name}!</h2>;
};

export default Greeting;
