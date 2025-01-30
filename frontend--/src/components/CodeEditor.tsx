import React from 'react';
import { TextField, Paper } from '@mui/material';

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
}

// Simularemos con un Textarea el ditor basico --

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  return (
    <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
      <TextField
        label="Escribe tu código aquí"
        multiline
        rows={10}
        fullWidth
        value={code}
        onChange={(e) => onChange(e.target.value)}
        variant="outlined"
      />
    </Paper>
  );
};

export default CodeEditor;