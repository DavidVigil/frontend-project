'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Dialog, DialogContent, DialogActions, DialogTitle, TextField, Grid } from '@mui/material';
import SavedAppsList from '../components/SavedAppsList.jsx';
import BackgroundContainer from '../components/BackgroundContainer.jsx';
import AppList from '../components/AppList.jsx';
import axios, { formToJSON } from 'axios';
import { headers } from 'next/headers.js';

const SavedPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userApps, setUserApps] = useState([]);
    const [open, setOpen] = useState(false);
    
    const [appName, setAppName] = useState("");
    const [info, setInfo] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [logo_url, setLogo_url] = useState("");
    const [origin, setOrigin] = useState("");
    
    const [allApps, setAllApps] = useState([]);

    const FetchApps = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8001/api/v1/apps');
            setAllApps(response.data);
        } catch (e) {
            if (e.response) {
                switch (e.response.status) {
                    case 500:
                        alert('Failed to fetch apps');
                        break;
                    default:
                        console.log(e.response.data);
                        break;
                }
            } else {
                console.error('Error:', e.message);
            }
        }
    };

    const addApp = async (app) => {
        try {
            const author = localStorage.getItem('userID');
            if (!author) {
                throw new Error('User ID is not available in localStorage');
            }

            app.author = author;

            const response = await axios.post('http://127.0.0.1:8001/api/v1/apps',
                {
                    "author": app.author,
                    "description": app.description,
                    "info": app.info,
                    "logo_url": app.logo_url,
                    "name": app.name,
                    "origin": app.origin,
                    "url": app.url
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if(response.status === 201){
                alert('App saved successfully');
                FetchApps();
            }else{
                alert(response.status);
            }
        }catch (e) {
            console.error('Error:', e.message);
        }
    };        


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

        FetchApps();

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const handleDelete = (index) => {
        const updatedApps = userApps.filter((_, i) => i !== index);
        setUserApps(updatedApps);
        localStorage.setItem("userApps", JSON.stringify(updatedApps));
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        handleCancel();
    };

    const handleSaveApp = () => {
        const newApp = {
            name: appName,
            info: info,
            description: description,
            url: url,
            logo_url: logo_url,
            origin: origin,
        };

        addApp(newApp);

        FetchApps();
        handleClose();
    };

    const handleCancel = () => {
        setAppName("");
        setInfo("");
        setDescription("");
        setUrl("");
        setLogo_url("");
    };


    return (
        <Container maxWidth="md" sx={{ pt: 4, mt: 5 }}>
            <BackgroundContainer>
                <Container maxWidth="md" sx={{ pt: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h1" sx={{ color: 'text.dark', marginBottom: 2 }}>
                            My Apps
                        </Typography>
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleOpen}
                        sx={{ ":hover": { backgroundColor: "secondary.main", color: "primary.main" } }}
                    >
                        Add App
                    </Button>
                    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                        <DialogTitle sx={{ backgroundColor: "primary.main", color: "white", textAlign: 'center' }}>
                            App Upload Form
                        </DialogTitle>
                        <DialogContent sx={{ backgroundColor: "main", color: "white" }}>
                            <Box
                                component="form"
                                noValidate
                                autoComplete="off"
                                sx={{ marginTop: 2 }}
                            >
                                <TextField
                                    fullWidth
                                    label="App Name"
                                    value={appName}
                                    onChange={(e) => setAppName(e.target.value)}
                                    margin="normal"
                                    InputLabelProps={{ style: { color: "black" } }}
                                    InputProps={{ style: { color: "black" } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Info"
                                    value={info}
                                    onChange={(e) => setInfo(e.target.value)}
                                    margin="normal"
                                    InputLabelProps={{ style: { color: "black" } }}
                                    InputProps={{ style: { color: "black" } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    margin="normal"
                                    multiline
                                    rows={4}
                                    InputLabelProps={{ style: { color: "black" } }}
                                    InputProps={{ style: { color: "black" } }}
                                />
                                <TextField
                                    fullWidth
                                    label="App URL"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    margin="normal"
                                    InputLabelProps={{ style: { color: "black" } }}
                                    InputProps={{ style: { color: "black" } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Logo URL"
                                    value={logo_url}
                                    onChange={(e) => setLogo_url(e.target.value)}
                                    margin="normal"
                                    InputLabelProps={{ style: { color: "black" } }}
                                    InputProps={{ style: { color: "black" } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Origin"
                                    value={origin}
                                    onChange={(e) => setOrigin(e.target.value)}
                                    margin="normal"
                                    InputLabelProps={{ style: { color: "black" } }}
                                    InputProps={{ style: { color: "black" } }}
                                />
                            </Box>
                        </DialogContent>
                        <DialogActions sx={{ backgroundColor: "primary.main" }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        onClick={handleSaveApp}
                                        sx={{ backgroundColor: "primary.main", color: "white", ":hover": { backgroundColor: "secondary.main", color: "primary.main" } }}
                                    >
                                        Add
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        onClick={handleClose}
                                        sx={{ color: "white", ":hover": { backgroundColor: "secondary.main", color: "primary.main" } }}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid>
                        </DialogActions>
                    </Dialog>
                    <Box sx={{
                        maxHeight: 300, 
                        overflowY: 'scroll', 
                        backgroundColor: 'primary.main', 
                        padding: 2,
                    }}>
                    <AppList 
                        apps={allApps}
                        sortingType='created'
                    />

                    </Box>
                    
                </Container>
                
                <Container maxWidth="md" sx={{ pt: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h1" sx={{ color: 'text.dark', marginBottom: 2 }}>
                            Favorites Apps
                        </Typography>
                    </Box>
                    <Box sx={{
                        maxHeight: 300, 
                        overflowY: 'scroll', 
                        backgroundColor: 'primary.main', 
                        padding: 2, 
                    }}>
                        <AppList
                            apps={allApps}
                            sortingType='liked'
                        />
                    </Box>
                </Container>
            </BackgroundContainer>
        </Container>
    );
};

export default SavedPage;
