'use client';

import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import AppList from './components/AppList';
import SearchBar from './components/SearchBar';
import { allApps } from './data/apps';
import { theme } from './styles/global-theme';


const Page = () => {
  // BackgroundAvatars.jsx
  const [avatars, setAvatars] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userApps, setUserApps] = useState([]);
  
  const handleFilterOption = (source) => {
    setFilterSource(source);
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
    <Container maxWidth="lg">
      <Box sx={{
        backgroundImage: "url(/banner.jpg)",
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
        sx={{
          mt: 2,
          mb: 2,
        }}/>
      <Box align="center" >
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
          <SearchBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            setFilterType={setFilterType}
          />
          <Box sx={{
                        maxHeight: 300, 
                        overflowY: 'scroll', 
                        backgroundColor: 'main', 
                        padding: 2,
                    }}>
            <AppList
              searchTerm={searchTerm}
              filterType={filterType}
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
