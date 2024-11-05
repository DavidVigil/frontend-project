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
    <Container sx={{mt: 20}}>

<Box sx={{ padding: '40px 20px' }}>
    <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
        {/* Logo */}
        <Grid item xs={12} md={2}>
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
                color: 'yellow', // Initial color
                '&:visited': {
                color: 'orange', // Color después de hacer clic
                },
                '&:active': {
                color: 'white', // Color when clicking on the link
                },
            }}
            >
            Main Menu
            </Link>
        </Grid>
        <Grid item xs={12} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Account</Typography>
            <Link 
                href="/signIn" 
                underline="hover"
                display="block"
                sx={{
                color: 'yellow', // Initial color
                '&:visited': {
                color: 'orange', // Color after clicking
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
                color: 'yellow', // Initial color
                '&:visited': {
                color: 'orange', // Color after clicking
                },
                '&:active': {
                color: 'white', // Color when clicking on the link
                },
            }}>
                Favorites
            </Link>
        </Grid>

        {/* News letter section */}
        <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Contact Information
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Reach out to us for updates and support
            </Typography>
            <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 1 }}>
                    Email:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    fi_market@comunidad.unam.mx
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    Phone:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                55 5622 0866
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>
                    Physical Address:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Escolar 04360, C.U., Coyoacán, 04510 Ciudad de México, CDMX
                </Typography>
            </Box>
        </Grid>
    </Grid>

    {/* Social Media and Lenguage bottom */}
    <Grid container spacing={2} justifyContent="space-between" alignItems="center" sx={{ mt: 4 }}>
        <Grid item xs={12} md={3}>
            <Select
                value={language}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ bgcolor: '#f1f1f1', color: '#000', width: '150px', borderRadius: 1 }}
                startAdornment={<LanguageIcon sx={{ marginRight: 1 }} />}
            >
                <MenuItem value="" sx = {{ color: 'black'}}>
                    <em>Select</em>
                </MenuItem >
                <MenuItem value="en" sx = {{ color: 'black'}}>English</MenuItem>
            </Select>
        </Grid>
        
        <Grid item xs={12} md={6}>
            <Typography variant="body2" color="text.secondary" align="center">
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

    </Container>
    );
}
