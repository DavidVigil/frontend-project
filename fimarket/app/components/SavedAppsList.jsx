import React from 'react';
import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Link, Grid2, Typography, Button } from '@mui/material';

const SavedAppsList = ({ userApps }) => {
    return (
        <Box sx={{ width: '100%', bgcolor: 'transparent', backdropFilter: 'blur(5px)', borderRadius: 2, p: 2 }}>
            <List>
                {userApps.length === 0 ? (
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <Typography>No saved apps.</Typography>
                    </Box>
                ) : (
                    userApps.map((app, index) => (
                        <ListItem key={index} sx={{ bgcolor: 'background.paper', borderRadius: 2, mb: 1, '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' }, display: 'flex', flexDirection: 'column' }}>
                            <Grid2 container spacing={2} alignItems="center">
                                <Grid2 xs={12} sm={2}>
                                    <ListItemAvatar>
                                        <Avatar src={app.logo} sx={{ width: { xs: 40, sm: 60 }, height: { xs: 40, sm: 60 } }} />
                                    </ListItemAvatar>
                                </Grid2>
                                <Grid2 xs={12} sm={6}>
                                    <ListItemText primary={app.title} secondary={`${app.info} - ${app.description}`} />
                                </Grid2>
                                <Grid2 xs={12} sm={4} display="flex" justifyContent="flex-end">
                                    <Link href={app.url} target="_blank" sx={{ textDecoration: 'none', mr: 1 }}>
                                        <Button variant="contained" color="primary" fullWidth>Download</Button>
                                    </Link>
                                </Grid2>
                            </Grid2>
                        </ListItem>
                    ))
                )}
            </List>
        </Box>
    );
};

export default SavedAppsList;
