import React from 'react';
import { Typography, Paper } from '@mui/material';

interface ProblemStatementProps {
  statement: string;
}

// Muestra la consigna del problema --

const ProblemStatement: React.FC<ProblemStatementProps> = ({ statement }) => {
  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
      <Typography variant="h6">Consigna</Typography>
      <Typography variant="body1">{statement}</Typography>
    </Paper>
  );
};

export default ProblemStatement;