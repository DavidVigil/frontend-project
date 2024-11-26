import React from 'react';
import { Box, Container } from '@mui/material';
import BackgroundAvatars from './BackgroundAvatars';

const BackgroundContainer = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'secondary.main'
      }}
    >
      <BackgroundAvatars />
      <Container
        maxWidth="md"
        sx={{
          bgcolor: 'secondary.main',
          backdropFilter: 'blur(5px)',
          borderRadius: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default BackgroundContainer;
