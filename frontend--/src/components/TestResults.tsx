import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

interface TestResult {
  test: string;
  passed: boolean;
}

interface TestResultsProps {
  results: TestResult[];
}

const TestResults: React.FC<TestResultsProps> = ({ results }) => {
  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
      <Typography variant="h6">Resultados de las pruebas</Typography>
      <List>
        {results.map((result, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Prueba ${index + 1}: ${result.test}`}
              secondary={result.passed ? '✅ Pasó' : '❌ Falló'}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TestResults;