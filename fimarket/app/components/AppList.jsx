import React, { useEffect, useState } from 'react';
import { Box, Button, List, ListItem, ListItemAvatar, ListItemText, Avatar, Link, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Grid2, Tooltip,IconButton } from '@mui/material'; // Importing Grid2 correctly
import FileDownloadTwoToneIcon from '@mui/icons-material/FileDownloadTwoTone';
import axios from 'axios';

const AppList = ({ filterType, searchTerm, sortingApps }) => { // Default value for userApps and new props
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

    const handleSaveClick = (app) => {
        handleStorageChange();
        if (!isAuthenticated) {
            setSaveDialogOpen(true);
            return;
        }
        setUserApps([]);
        // Check if the app is already saved
        if (!isAppSaved(app)) {
            like_app(app) // Save it
        }else{
            alert('App already saved');
        }  
    };

    const handleClickDialog = () => {

    };

    const isAppSaved = (app) => {

        if(userApps.length == 0){
            get_usr_apps().then((result) => {
                    setUserApps(result);
                    if(result.length == 0){
                        return false;
                    }
                }
            );
        }
        for (let i = 0; i < userApps.length; i++) {
            if (app._id === userApps[i]) {
                return true;
            }
        }
        localStorage.setItem("userApps", JSON.stringify(userApps));
        return false;
    };

    const filteredApps = sortingApps.filter(app =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!filterType || filterType === 'All' || app.origin === filterType) // Filtering logic
    );

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
                            <Grid2 container spacing={2} alignItems="center"> {/* Using Grid2 from @mui/material */}                                
                                <Grid2 xs={12} sm={2}> {/* Correctly using Grid2's item property */}
                                    <ListItemAvatar>
                                        <Avatar src={app.logo_url} sx={{ width: { xs: 40, sm: 60 }, height: { xs: 40, sm: 60 } }} />
                                    </ListItemAvatar>
                                </Grid2>
                                <Grid2 sx={{
                                        xs: 12,
                                        sm: 6,
                                        mr: "auto"
                                    }} 
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
                                <Grid2
                                    display="flex" 
                                    justifyContent="flex-end" 
                                    sx = {{ 
                                        xs: 12, 
                                        sm: 4, 
                                        ml: "auto"
                                    }} 
                                >
                                    <Link href={app.url} target="_blank" sx={{ textDecoration: 'none', mr: 1 }}>
                                        <Tooltip 
                                            ml ='auto'
                                            title='Download'
                                            color='primary'
                                            arrow
                                            sx={{
                                                '& .MuiTooltip-tooltip': { // Cambia esta clase
                                                    bgcolor: 'primary.main', // Cambia el color de fondo
                                                    color: 'white',          // Cambia el color del texto
                                                },
                                                '& .MuiTooltip-arrow': {     // Cambia el color de la flecha
                                                    color: 'primary.main',   // Haz que coincida con el fondo
                                                },
                                            }}                                       
                                        > 
                                        <IconButton>
                                            <FileDownloadTwoToneIcon sx={{ fontSize:30 }} />
                                        </IconButton>
                                        </Tooltip>
                                    </Link>

                                    <Button
                                        variant={isAppSaved(app) ? "disabled" : "contained"}
                                        color="secondary"
                                        fullWidth
                                        onClick={() => handleSaveClick(app)}
                                    >
                                            
                                        {isAppSaved(app) ? "Saved" : "Save"}
                                    </Button>
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
