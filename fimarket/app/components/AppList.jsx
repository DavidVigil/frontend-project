import React, { useState } from 'react';
import { Box, Button, List, ListItem, ListItemAvatar, ListItemText, Avatar, Link, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Grid2 } from '@mui/material'; // Importing Grid2 correctly

const AppList = ({ searchTerm, isAuthenticated, userApps = [], setUserApps, filterDialogOpen, setFilterDialogOpen, sortingApps, appDef }) => { // Default value for userApps and new props
    const [saveDialogOpen, setSaveDialogOpen] = useState(false);
    const [filterSource, setFilterSource] = useState('');

    const handleSaveClick = (app) => {
        if (!isAuthenticated) {
            setSaveDialogOpen(true);
        } else {
            // Check if the app is already saved
            if (!isAppSaved(app)) {
                const updatedUserApps = [...userApps, app];
                setUserApps(updatedUserApps);
                localStorage.setItem("userApps", JSON.stringify(updatedUserApps)); // Save to localStorage
            }
        }
    };

    const handleFilterOptionClick = (source) => {
        setFilterSource(source);
        setFilterDialogOpen(false);
    };

    const filteredApps = sortingApps.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!filterSource || filterSource === 'All' || app.source === filterSource) // Filtering logic
    );

    const isAppSaved = (app) => userApps.some(userApp => userApp.title === app.title);

    return (
        <Box sx={{ width: '100%', bgcolor: 'transparent', backdropFilter: 'blur(5px)', borderRadius: 2, p: 2 }}>
            <List>
                {filteredApps.map((app, index) => (
                    <ListItem key={index} sx={{ bgcolor: 'background.paper', borderRadius: 2, mb: 1, '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' }, display: 'flex', flexDirection: 'column' }}>
                        <Grid2 container spacing={2} alignItems="center"> {/* Using Grid2 from @mui/material */}
                            <Grid2 xs={12} sm={2}> {/* Correctly using Grid2's item property */}
                                <ListItemAvatar>
                                    <Avatar src={app.logo} sx={{ width: { xs: 40, sm: 60 }, height: { xs: 40, sm: 60 } }} />
                                </ListItemAvatar>
                            </Grid2>
                            <Grid2 xs={12} sm={6}> {/* Correctly using Grid2's item property */}
                                <ListItemText primary={app.title} secondary={`${app.info} - ${app.description}`} />
                            </Grid2>
                            <Grid2 xs={12} sm={4} display="flex" justifyContent="flex-end"> {/* Correctly using Grid2's item property */}
                                <Link href={app.url} target="_blank" sx={{ textDecoration: 'none', mr: 1 }}>
                                    <Button variant="contained" color="primary" fullWidth>Download</Button>
                                </Link>
                                <Button
                                    variant={isAppSaved(app) ? "disabled" : "outlined"}
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
                sx={{
                    backdropFilter: 'blur(5px)',
                }}
                open={saveDialogOpen} onClose={() => setSaveDialogOpen(false)}>
                <DialogTitle
                    sx={{ color: 'text.title' }}
                >Save</DialogTitle>
                <DialogContent>
                    <Typography
                        sx={{ color: 'text.subtitle' }}
                    >You must sign in to do this action!</Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        sx={{ color: 'text.dark' }}
                        onClick={() => setSaveDialogOpen(false)}>Close</Button>
                    <Button
                        href='/signIn'
                        sx={{ color: 'text.dark' }}
                        onClick={() => alert('Redirect to sign-in')}>Sign In</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                sx={{
                    backdropFilter: 'blur(1px)',
                }}
                open={filterDialogOpen} onClose={() => setFilterDialogOpen(false)}>
                <DialogTitle>Filter Options</DialogTitle>
                <DialogContent>
                    <Button onClick={() => handleFilterOptionClick('All')}>All</Button>
                    <Button onClick={() => handleFilterOptionClick('FI')}>FI</Button>
                    <Button onClick={() => handleFilterOptionClick('Extern')}>Extern</Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setFilterDialogOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AppList;
