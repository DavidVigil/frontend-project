import React from 'react';
import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Link, Typography, Button, Grid } from '@mui/material';

const SavedAppsList = ({ userApps, handleDelete }) => {
    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: 'transparent', // Transparent background with blur
                backdropFilter: 'blur(5px)', // Adds a blur effect to the background
                borderRadius: 2, // Rounded corners for the container
                p: 2, // Padding inside the container
            }}
        >
            <List>
                {userApps.length === 0 ? (
                    // If no apps are saved, show a "No saved apps" message
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <Typography>No saved apps.</Typography>
                    </Box>
                ) : (
                    userApps.map((app, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                bgcolor: 'rgba(255, 255, 255, 0.9)', // Light background color for the list item
                                color: 'text.primary', // Ensures the text color matches the theme
                                borderRadius: 2, // Rounded corners
                                mb: 1, // Margin below each list item
                                '&:hover': {
                                    // Hover styles
                                    bgcolor: 'text.main', // Light primary color on hover
                                    color: 'text.primary', // Keeps text legible
                                },
                                display: 'flex',
                                flexDirection: 'column', // Ensures elements stack vertically
                                boxShadow: 1, // Subtle shadow for depth
                                transition: 'all 0.3s ease', // Smooth transition for hover effects
                            }}
                        >
                            <Grid container spacing={2} alignItems="center">
                                {/* Avatar Section */}
                                <Grid item xs={12} sm={2}>
                                    <ListItemAvatar>
                                        <Avatar
                                            src={app.logo} // Avatar image
                                            sx={{
                                                width: { xs: 40, sm: 60 }, // Responsive sizing
                                                height: { xs: 40, sm: 60 },
                                                border: '2px solid rgba(92, 10, 35, 0.5)', // Border around the avatar
                                            }}
                                        />
                                    </ListItemAvatar>
                                </Grid>

                                {/* App Information Section */}
                                <Grid item xs={12} sm={6}>
                                    <ListItemText
                                        primary={app.title} // App title
                                        secondary={`${app.info} - ${app.description}`} // App details
                                        sx={{
                                            '& .MuiTypography-root': {
                                                fontWeight: 'bold', // Bold text for the title
                                                color: 'text.primary', // Ensures readability
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* Action Buttons Section */}
                                <Grid item xs={12} sm={4} display="flex" justifyContent="flex-end">
                                    {/* Download Button */}
                                    <Link
                                        href={app.url}
                                        target="_blank"
                                        sx={{
                                            textDecoration: 'none', // Removes underline
                                            mr: 1, // Margin between buttons
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            color="primary" // Primary button color
                                            fullWidth
                                            sx={{
                                                textTransform: 'none', // Keeps text capitalization normal
                                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
                                                '&:hover': {
                                                    backgroundColor: 'rgba(92, 10, 35, 0.8)', // Darker hover effect
                                                },
                                            }}
                                        >
                                            Download
                                        </Button>
                                    </Link>

                                    {/* Delete Button */}
                                    <Button
                                        variant="contained"
                                        color="secondary" // Secondary button color
                                        fullWidth
                                        onClick={() => handleDelete(index)} // Deletes the app when clicked
                                        sx={{
                                            textTransform: 'none',
                                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 176, 95, 0.8)', // Soft hover effect
                                            },
                                            ml: 1, // Margin between buttons
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </Grid>
                            </Grid>
                        </ListItem>
                    ))
                )}
            </List>
        </Box>
    );
};

export default SavedAppsList;
