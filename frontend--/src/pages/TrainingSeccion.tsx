import React, { useState } from 'react';
import { Container } from '@mui/material';
import ProblemStatement from '../components/ProblemStatement';
import CodeEditor from '../components/CodeEditor';
import CodeRunner from '../components/CodeRunner';

const TrainingSeccion: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const problemStatement = "Escribe una función que sume dos números.";

  const handleRunTests = (code: string) => {
    // Aquí puedes implementar la lógica para ejecutar las pruebas.
    // Por ahora, simularemos algunos resultados.
    try {
      // Ejecutar el código (esto es solo un ejemplo, no es seguro ejecutar código de esta manera).
      const func = new Function('a', 'b', code);
      const result = func(2, 3);
      return [
        { test: 'Suma de 2 y 3 debe ser 5', passed: result === 5 },
        { test: 'Suma de -1 y 1 debe ser 0', passed: func(-1, 1) === 0 },
      ];
    } catch (error) {
      return [{ test: 'Error en el código', passed: false }];
    }
  };

  return (
    <Container>
      <ProblemStatement statement={problemStatement} />
      <CodeEditor code={code} onChange={setCode} />
      <CodeRunner code={code} onRunTests={handleRunTests} />
    </Container>
  );
};

export default TrainingSeccion;