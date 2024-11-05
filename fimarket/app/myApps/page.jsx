'use client';

import React, { useState, useEffect } from 'react';
import { CssBaseline, Box, Container, Typography } from '@mui/material';
import SavedAppsList from '../components/SavedAppsList.jsx';
import BackgroundContainer from '../components/BackgroundContainer.jsx';

const SavedPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userApps, setUserApps] = useState([]);

    useEffect(() => {
        // Check initial authentication status
        const authStatus = localStorage.getItem("isAuthenticated") === "true";
        setIsAuthenticated(authStatus);

        // Load user apps from localStorage or some other persistent storage
        const savedApps = JSON.parse(localStorage.getItem("userApps")) || [];
        setUserApps(savedApps);

        // Listen to storage events to update authentication status
        const handleStorageChange = () => {
            const newAuthStatus = localStorage.getItem("isAuthenticated") === "true";
            setIsAuthenticated(newAuthStatus);

            const newSavedApps = JSON.parse(localStorage.getItem("userApps")) || [];
            setUserApps(newSavedApps);
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    return (
        <Container maxWidth="md" sx={{ pt: 4, mt: 40 }}>
            <BackgroundContainer>
                <CssBaseline />
                <Container maxWidth="md" sx={{ pt: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h1" sx={{ color: 'text.h1', marginBottom: 2 }}>
                            Saved Apps
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <SavedAppsList userApps={userApps} />
                    </Box>
                </Container>
            </BackgroundContainer>
        </Container>
    );
};

export default SavedPage;
