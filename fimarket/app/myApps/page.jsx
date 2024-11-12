'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Dialog, DialogContent, DialogActions, DialogTitle, TextField, Grid } from '@mui/material';
import SavedAppsList from '../components/SavedAppsList.jsx';
import BackgroundContainer from '../components/BackgroundContainer.jsx';

const SavedPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userApps, setUserApps] = useState([]);
    const [open, setOpen] = useState(false);
    const [appName, setAppName] = useState("");
    const [info, setInfo] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [logo, setLogo] = useState("");

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
            title: appName,
            info: info,
            description: description,
            url: url,
            logo: logo
        };

        const updatedApps = [...userApps, newApp];
        setUserApps(updatedApps);
        localStorage.setItem("userApps", JSON.stringify(updatedApps));

        handleClose();
    };

    const handleCancel = () => {
        setAppName("");
        setInfo("");
        setDescription("");
        setUrl("");
        setLogo("");
    };


    return (
        <Container maxWidth="md" sx={{ pt: 4, mt: 5 }}>
            <BackgroundContainer>
                <Container maxWidth="md" sx={{ pt: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h1" sx={{ color: 'text.h1', marginBottom: 2 }}>
                            My Apps
                        </Typography>
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleOpen}
                        sx={{ ":hover": { backgroundColor: "secondary.main", color: "primary.main" } }}
                    >
                        Añadir App
                    </Button>
                    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                        <DialogTitle sx={{ backgroundColor: "primary.main", color: "white", textAlign: 'center' }}>
                            Formulario para Subir App
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
                                    label="Nombre de la App"
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
                                    label="Descripción"
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
                                    label="URL de la App"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    margin="normal"
                                    InputLabelProps={{ style: { color: "black" } }}
                                    InputProps={{ style: { color: "black" } }}
                                />
                                <TextField
                                    fullWidth
                                    label="Logo URL"
                                    value={logo}
                                    onChange={(e) => setLogo(e.target.value)}
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
                                        Añadir
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
                                        Cancelar
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
                    <SavedAppsList userApps={userApps} handleDelete={handleDelete} />

                    </Box>
                    
                </Container>
                
                <Container maxWidth="md" sx={{ pt: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h1" sx={{ color: 'text.h1', marginBottom: 2 }}>
                            Favorites Apps
                        </Typography>
                    </Box>
                    <Box sx={{
                        maxHeight: 300, 
                        overflowY: 'scroll', 
                        backgroundColor: 'primary.main', 
                        padding: 2, 
                    }}>
                        <SavedAppsList userApps={userApps} />
                    </Box>
                </Container>
            </BackgroundContainer>
        </Container>
    );
};

export default SavedPage;
