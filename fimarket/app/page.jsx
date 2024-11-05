'use client';

import React, { useState } from 'react';
import { CssBaseline, Box, Container, Typography } from '@mui/material';
import AppList from './components/AppList';
import SearchBar from './components/SearchBar';
import BackgroundContainer from './components/BackgroundContainer';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userApps, setUserApps] = useState([]);

  const handleFilterClick = () => {
    setFilterDialogOpen(true);
  };

  return (
    <Container maxWidth="md" sx={{ pt: 4, mt: 40 }}>
      <BackgroundContainer sx={{}}>
        <CssBaseline />
        <Box maxWidth sx={{
          mt: 2,
          borderRadius: 2,
          boxShadow: 3,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Typography variant="h1" sx={{ color: "#cc0000", fontWeight: "bold" }}>
            Apps
          </Typography>
          <Box sx={{ border: "4px solid #cc0000", width: 250, mb: 1 }} />
        </Box>
        <Container maxWidth="md" sx={{ pt: 4 }}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onFilterClick={handleFilterClick} />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <AppList
              searchTerm={searchTerm}
              filterDialogOpen={filterDialogOpen}
              setFilterDialogOpen={setFilterDialogOpen}
              isAuthenticated={isAuthenticated}
              userApps={userApps}
              setUserApps={setUserApps}
            />
          </Box>
        </Container>
      </BackgroundContainer>
    </Container>
  );
};

export default Page;
