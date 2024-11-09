'use client';

import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import AppList from './components/AppList';
import SearchBar from './components/SearchBar';
import BackgroundContainer from './components/BackgroundContainer';
import { allApps } from './data/apps';
import { theme } from './styles/global-theme';


const Page = () => {
  // BackgroundAvatars.jsx
  const [avatars, setAvatars] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userApps, setUserApps] = useState([]);

  const handleFilterClick = () => {
    setFilterDialogOpen(true);
  };

  const appDefinition = {
    title: '',
    info: '',
    description: '',
    logo: '',
    url: '',
    source: ''
  };

  return (
    <Container maxWidth="lg" sx={{ pt: 4, border: '2px solid blue' }}>
      <Box sx={{backgroundImage: "url(/banner.jpg)",
        backgroundSize: 'cover',
        height: '200px',

        
      }}>
        <Typography
          variant='h1'
          align='center'
          sx={{
            fontSize: '75px',
            fontWeight: 'none',
            fontFamily:'Playfair Display',
            pt:7,
            textShadow: '2px 2px 4px #000000',
            }}>
          FI Market
        </Typography>
      </Box>
      <Box
        sx={{border:'2px solid #bbbbbb',
        mt: 2,
        mb: 2,
        borderRadius: '2px'
        }}/>
      <Box
        align="center"
        sx={{border:'2px solid red'}}>
        <Typography
          variant="h2"
          sx={{
            fontSize: '65px',
            fontWeight: 'none',
            pt:1,
            textShadow: '2px 2px 4px #000000',
            }}>
          Apps
        </Typography>
        <Box/>
        <Container maxWidth="md" sx={{ pt: 4 }}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onFilterClick={handleFilterClick} />
          <Box sx={{border: '2px solid black', display: 'flex', justifyContent: 'center' }}>
            <AppList
              searchTerm={searchTerm}
              filterDialogOpen={filterDialogOpen}
              setFilterDialogOpen={setFilterDialogOpen}
              isAuthenticated={isAuthenticated}
              userApps={userApps}
              setUserApps={setUserApps}
              sortingApps={allApps}
              appDef={appDefinition}
            />
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Page;
