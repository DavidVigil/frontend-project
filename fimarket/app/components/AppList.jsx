import React, { useEffect, useState } from 'react';
import { Box, Button, List, ListItem, ListItemAvatar, ListItemText, Avatar, Link, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Grid2, Tooltip,IconButton } from '@mui/material'; // Importing Grid2 correctly
import FileDownloadTwoToneIcon from '@mui/icons-material/FileDownloadTwoTone';
import axios from 'axios';

const AppList = ({ filterType, searchTerm = '', apps, sortingType = '' }) => { // Default value for userApps and new props
    const [saveDialogOpen, setSaveDialogOpen] = useState(false);
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        handleStorageChange();
    });

    const get_usr_apps = async () => {
        try {
            const userID = localStorage.getItem('userID');
            if (!userID) {
                throw new Error('User ID is not available in localStorage');
            }

            const response = await axios.get('http://127.0.0.1:8000/api/v1/users/like', {
                headers: {
                    "Content-Type": "application/json",
                },
                params: {
                    "user_id": userID,
                },
            });
            const result = await response.data;
            return result;
        } catch (e) {
            console.error(e);
        }
    };

    const [userApps, setUserApps] = useState([]);

    const like_app = async (app) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/users/like',
                {
                    "user_id": localStorage.getItem('userID'),
                    "app_id": app._id,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if(response.status === 200){
                alert('App saved successfully');
            }else{
                alert('Already saved');
            }
        } catch (e) {
            switch (e.response.status) {
                case 505:
                    alert('Failed to save app: User already saved this app');
                    break;
                default:
                    console.error(e);
                    break;
            }
        }
    };

    const handleStorageChange = () => {
        // Check if the user is authenticated based on the localStorage value
        const authStatus = localStorage.getItem("isAuthenticated") === "true";
        // Update the local state with the authentication status
        setIsAuthenticated(authStatus);
    };

    const validateAppData = (appData) => {
        const requiredFields = ['name', 'info', 'description', 'url', 'logo_url', 'origin', 'author'];
        for (const field of requiredFields) {
            if (!appData[field]) {
                alert(`Field ${field} is required`);
                return false;
            }
        }
        return true;
    };
    

    const handleSaveClick = async (app) => {
        const appData = {
            name: app.name,              // Nombre de la app
            info: app.info,              // Información de la app
            description: app.description, // Descripción de la app
            url: app.url,                // URL de la app
            logo_url: app.logo_url,      // Logo URL de la app
            origin: app.origin,          // Origen de la app
            author: localStorage.getItem('userID') // Autor: ID del usuario autenticado
        };
    
        // Validar datos antes de enviarlos
        if (!validateAppData(appData)) {
            return; // Detener si faltan datos
        }
    
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/v1/apps',
                appData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
    
            if (response.status === 201) {
                alert('App successfully saved!');
            } else {
                console.error('Unexpected status code:', response.status);
            }
        } catch (e) {
            if (e.response && e.response.status === 400) {
                alert(`Validation error: ${e.response.data.error}`);
            } else {
                console.error('Error saving app:', e);
            }
        }
    };
    
    

    const handleClickDialog = () => {

    };

    const isAppSaved = async (app) => {
        try {
            if (userApps.length === 0) {
                const result = await get_usr_apps();
                if (result && result.length > 0) {
                    setUserApps(result);
                } else {
                    return false; // Retorna falso si no hay apps guardadas
                }
            }
    
            return userApps.some(userApp => app._id === userApp); // Usa `some` para verificar si existe en el array
        } catch (e) {
            console.error("Error checking if app is saved:", e);
            return false; // Retorna falso si ocurre un error
        }
    };
    

    const filteredApps = apps.filter(app => {
        // Verifica si el nombre de la aplicación incluye el término de búsqueda
        const matchesSearchTerm = app.name.toLowerCase().includes(searchTerm.toLowerCase());

        // Verifica si el tipo de filtro coincide o está configurado para incluir todos los tipos
        const matchesFilterType = !filterType || filterType === 'All' || app.origin === filterType;

        // Verifica si el tipo de ordenación coincide
        let matchesSortingType = true;
        if (sortingType === 'liked') {
            matchesSortingType = isAppSaved(app);
        } else if (sortingType === 'created') {
            matchesSortingType = app.author === localStorage.getItem('userID');
        }

        // Devuelve verdadero si todas las condiciones se cumplen
        return matchesSearchTerm && matchesFilterType && matchesSortingType;
    });


    return (
        <Box sx={{ width: '100%', bgcolor: 'transparent', backdropFilter: 'blur(5px)', borderRadius: 2, p: 2 }}>
            <List>
                {filteredApps.map((app, index) => (                                                  
                    <ListItem 
                        key={index}
                        sx={{ 
                            bgcolor: 'background.paper', 
                            borderRadius: 2, mb: 1, 
                            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' }, 
                            display: 'flex', 
                            flexDirection: 'column' 
                        }}
                        onClick={() => handleClickDialog()}
                    >                            
                        <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={12} alignItems="center">
                            <Grid2
                            ml={0}
                            size="auto"
                            >
                                <ListItemAvatar>
                                    <Avatar src={app.logo_url} sx={{ width: { xs: 40, sm: 60 }, height: { xs: 40, sm: 60 } }} />
                                </ListItemAvatar>
                            </Grid2>
                            <Grid2 
                                ml={0}
                                size={8}
                                mr="auto"
                            >
                                <ListItemText
                                    primary={app.name}
                                    secondary={`${app.info} - ${app.description}`}
                                    primaryTypographyProps={{
                                        fontWeight: 'bold',
                                        color: 'text.dark',
                                    }}
                                />
                            </Grid2>
                            <Grid2 display="flex"
                                
                                sx={{ ml: 'auto', gap: 1 }}
                                mr={0}
                                justifyContent="flex-end"
                            size="grow" alignItems="center">

                                <Link href={app.url} target="_blank" sx={{ textDecoration: 'none'}}>
                                    <Tooltip
                                        title='Download'
                                        color='primary'
                                        arrow
                                        sx={{
                                            '& .MuiTooltip-tooltip': {
                                                bgcolor: 'primary.main',
                                                color: 'white',
                                            },
                                            '& .MuiTooltip-arrow': {
                                                color: 'primary.main',
                                            },
                                        }}
                                        >
                                        <IconButton>
                                            <FileDownloadTwoToneIcon sx={{ fontSize: 30 }} />
                                        </IconButton>
                                    </Tooltip>
                                </Link>

                                {!sortingType && sortingType === '' && (
                                    <Button
                                    variant={isAppSaved(app) ? "disabled" : "contained"}
                                    color="secondary"
                                    fullWidth
                                    onClick={() => handleSaveClick(app)}
                                    >
                                        {isAppSaved(app) ? "Saved" : "Save"}
                                    </Button>
                                )}
                                
                            </Grid2>
                        </Grid2>

                    </ListItem>
                ))}
            </List>
            <Dialog
                open={saveDialogOpen}
                onClose={() => setSaveDialogOpen(false)}
                sx={{
                    backdropFilter: 'blur(5px)',
                }}
            >
                {isAuthenticated? (<DialogTitle>App saved successfully!</DialogTitle>) : (<DialogTitle>Sign in to save apps</DialogTitle>)}
            </Dialog>
        </Box>
    );
};

export default AppList;
