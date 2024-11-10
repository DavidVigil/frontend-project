"use client";

import * as React from 'react';
import { Box, Container, Grid, Typography, Button, TextField, Select, MenuItem, IconButton, Link } from "@mui/material";


import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


import LanguageIcon from '@mui/icons-material/Language';

export default function Footer() {

const [language, setLanguage] = React.useState('');

const handleChange = (event) => {
    setLanguage(event.target.value);
};



return (
    <Grid component="footer" sx={{mt: 20, bgcolor: 'primary.main'}}>
        <Box sx={{ padding: '40px 20px'}}>
        <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
            {/* Logo */}
            <Grid item xs={12} md={2} align="center">
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    <img src="/logo.png" alt="Logo" style={{ width: '150px' }} />
                </Typography>
            </Grid>

            {/* Link Section */}
            <Grid item xs={12} md={2}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Market Inc</Typography>
                <Link
                    href="/"
                    underline="hover"
                    display="block"
                    sx={{
                        color: 'secondary.main', // Initial color
                        '&:visited': {
                        color: 'secondary.main', // Color after clicking
                        },
                        '&:active': {
                        color: 'white', // Color when clicking on the link
                        },
                    }}
                >
                    Main Menu
                </Link>
                <Link
                    href="/about"
                    underline="hover"
                    display="block"
                    sx={{
                        color: 'secondary.main', // Initial color
                        '&:visited': {
                        color: 'secondary.main', // Color after clicking
                        },
                        '&:active': {
                        color: 'white', // Color when clicking on the link
                        },
                    }}
                >
                    About
                </Link>
                <Link
                    href="/contact"
                    underline="hover"
                    display="block"
                    sx={{
                        color: 'secondary.main', // Initial color
                        '&:visited': {
                        color: 'secondary.main', // Color after clicking
                        },
                        '&:active': {
                        color: 'white', // Color when clicking on the link
                        },
                    }}
                >
                    Contact
                </Link>
            </Grid>
            <Grid item xs={12} md={2}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Account</Typography>
                <Link 
                    href="/signIn" 
                    underline="hover"
                    display="block"
                    sx={{
                    color: 'secondary.main', // Initial color
                    '&:visited': {
                    color: 'secondary.main', // Color after clicking
                    },
                    '&:active': {
                    color: 'white', // Color when clicking on the link
                    },
                }}>
                    Sing in</Link>
            </Grid>
            <Grid item xs={12} md={2}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Apps</Typography>
                <Link 
                    href="/myApps" 
                    underline="hover"
                    display="block"
                    sx={{
                    color: 'secondary.main', // Initial color
                    '&:visited': {
                    color: 'secondary.main', // Color after clicking
                    },
                    '&:active': {
                    color: 'white', // Color when clicking on the link
                    },
                }}>
                    Favorites
                </Link>
            </Grid>

            {/* News letter section */}
            
        </Grid>

        {/* Social Media and Lenguage bottom */}
        <Grid container spacing={2} justifyContent="space-between" alignItems="center" sx={{ mt: 4 }}>
            <Grid item xs={12} md={3}>
                <Select
                    value={language}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{ bgcolor: 'secondary.main', color: '#000', width: '150px', borderRadius: 4 }}
                    startAdornment={<LanguageIcon sx={{ marginRight: 1 }} />}
                >
                    <MenuItem value="" sx = {{ color: 'text.dark'}}>
                        <em>Select</em>
                    </MenuItem >
                    <MenuItem value="en" sx = {{ color: 'text.dark'}}>English</MenuItem>
                </Select>
            </Grid>
            
            <Grid item xs={12} md={6}>
                <Typography variant="body2" color="text.light" align="center">
                    Fi Market Inc. 2024
                </Typography>
            </Grid>
            
            {/* Redes sociales */}
            <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
                color="secondary"
                href="https://facebook.com/"
                sx={{
                "&:hover": {
                    backgroundColor: "#e3f2fd",
                    color: "#1DA1F2",
                    transform: "scale(1.2)",
                    transition: "transform 0.3s ease-in-out",
                },
                }}
            >
                <FacebookIcon />
            </IconButton>


                <IconButton
                href="https://twitter.com/"
                    color="secondary"
                    sx={{
                        "&:hover": {
                            backgroundColor: "#e3f2fd",
                            color: "#1DA1F2",
                            transform: "scale(1.2)",
                            transition: "transform 0.3s ease-in-out",
                        },
                    }}
                >
                    <TwitterIcon />
                </IconButton>


            <IconButton
            color="secondary"
            href="https://mx.linkedin.com/"
            sx={{
                "&:hover": {
                backgroundColor: "#e3f2fd",
                color: "#0077B5",
                transform: "scale(1.2)",
                transition: "transform 0.3s ease-in-out",
                },
            }}
            >
                <LinkedInIcon />
            </IconButton>

            <IconButton
            color="secondary"
            href="https://youtube.com/"
            sx={{
                "&:hover": {
                backgroundColor: "#e3f2fd",
                color: "#FF0000",
                transform: "scale(1.2)",
                transition: "transform 0.3s ease-in-out",
                },
            }}
            >
                <YouTubeIcon />
            </IconButton>

            </Grid>
        </Grid>
        </Box>

    </Grid>
    );
}
