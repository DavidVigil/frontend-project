'use client';
import React from 'react';
import { Box, Container } from '@mui/material';

const BackgroundContainer = ({ children }) => {
  return (
    <Box
      sx={{
        background: `url('/assets/floating.gif') no-repeat center center fixed`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(5px)',
          borderRadius: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default BackgroundContainer;
