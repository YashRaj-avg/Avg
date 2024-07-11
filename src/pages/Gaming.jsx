// src/App.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import Slider from '../components/Slider'; // Adjust path as per your project structure

function App() {
  return (
    <main className="flex-grow bg-slate-800">
      <Container maxWidth="lg" className="py-8">
        <Typography variant="h4" component="h1" gutterBottom>
          Resident Evil Store
        </Typography>
        <Slider />
      </Container>
    </main>
  );
}

export default App;
