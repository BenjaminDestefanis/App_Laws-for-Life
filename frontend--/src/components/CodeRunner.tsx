import React, { useState } from 'react';
import { Button, Paper } from '@mui/material';
import TestResults from './TestResults';

interface CodeRunnerProps {
  code: string;
  onRunTests: (code: string) => TestResult[];
}

interface TestResult {
  test: string;
  passed: boolean;
}

const CodeRunner: React.FC<CodeRunnerProps> = ({ code, onRunTests }) => {
  const [results, setResults] = useState<TestResult[]>([]);

  const handleRunTests = () => {
    const testResults = onRunTests(code);
    setResults(testResults);
  };

  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
      <Button variant="contained" color="primary" onClick={handleRunTests}>
        Ejecutar pruebas
      </Button>
      <TestResults results={results} />
    </Paper>
  );
};

export default CodeRunner;