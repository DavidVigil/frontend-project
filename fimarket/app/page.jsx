'use client';

import React, { useState, useEffect} from 'react';
import { Box, Container, Typography } from '@mui/material';
import AppList from './components/AppList';
import SearchBar from './components/SearchBar';
//import { allApps } from './data/apps';
import axios from 'axios';

const Page = () => {
  // BackgroundAvatars.jsx
  const [avatars, setAvatars] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userApps, setUserApps] = useState([]);
  const [allApps, setAllApps] = useState([]);
  
  const FetchApps = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8001/api/v1/apps');
      setAllApps(response.data);
    } catch (e) {
        switch (e.response.status) {
            case 500:
                alert('Failed to fetch apps');
                break;
            default:
                console.log(e.response.data);
                break;
        }
    }
  };

  const handleFilterOption = (source) => {
    setFilterSource(source);
  };

  useEffect(() => {
    FetchApps();
  }, []);

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
              apps={allApps}
              sortingType='' // it can be '', 'liked', 'created'
            />
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Page;
