'use client';

import React, { useState } from 'react';
import { CssBaseline, Box, Container } from '@mui/material';
import AppList from './components/AppList';
import SearchBar from './components/SearchBar';
import BackgroundContainer from './components/BackgroundContainer';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);

  const handleFilterClick = () => {
    setFilterDialogOpen(true);
  };

  return (
    <BackgroundContainer>
      <CssBaseline />
      <Container maxWidth="md" sx={{ pt: 4 }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onFilterClick={handleFilterClick} />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <AppList searchTerm={searchTerm} filterDialogOpen={filterDialogOpen} setFilterDialogOpen={setFilterDialogOpen} />
        </Box>
      </Container>
    </BackgroundContainer>
  );
};

export default Page;
