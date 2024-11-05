'use client';

import * as React from 'react';
import { useRouter } from "next/navigation"; // To move between tabs


//Components MUI
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

//Icons import
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Favorite from '@mui/icons-material/Favorite';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ConstructionIcon from '@mui/icons-material/Construction';

export default function signUp() {
  const router = useRouter(); // Instantiating my class for the routes

  const handleSI = () => { // Function to signUp
    router.push("/signIn");
  };

  const handleSubmit = (e) => {
    // Prevent the default form submission
    e.preventDefault();

    // Set authentication status to true in localStorage
    localStorage.setItem("isAuthenticated", "true");

    // Dispatch a storage event to notify other components (like AppBarGlobal)
    // that the authentication status has changed
    window.dispatchEvent(new Event("storage"));

    // Redirect the user to the home page after successful sign-up
    router.push("/");
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 3,
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant='h1' color='primary' gutterBottom>
                FI MARKETPLACE
              </Typography>
              <Typography variant='h2' color='text'>
                  Do you want to save your favorite apps? 
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Favorite color='secondary' sx={{ mr: 1 }} />
              <Box>
                <Typography variant='h6'>Curate Your Favorites</Typography>
                <Typography variant='body2'>
                  Easily save and organize your favorite applications in one convenient library, tailored to your needs.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AccessTimeFilledIcon color='secondary' sx={{ mr: 1 }} />
              <Box>
                <Typography variant='h6'>Access Anytime, Anywhere</Typography>
                <Typography variant='body2'>
                  Your personalized library is available on any device, making it easy to access your favorite apps whenever you need them.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <ConstructionIcon color='secondary' sx={{ mr: 1 }} />
              <Box>
                <Typography variant='h6'>High-Performance Tools</Typography>
                <Typography variant='body2'>
                  Access calculation, simulation, and design applications to maximize your efficiency on every project.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FlashOnIcon color='secondary' sx={{ mr: 1 }} />
              <Box>
                <Typography variant='h6'>Innovative functionality</Typography>
                <Typography variant='body2'>
                  Stay ahead with features that set new standards, addressing your evolving needs better than the rest.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/*Right Column*/}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 6, borderRadius: 2, bgcolor: 'white', boxShadow: 3 }}>
              <Typography variant='h2' gutterBottom>
                Sign Up
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label={<Typography variant='h6'>EMAIL</Typography>}
                  fullWidth
                  margin='normal'
                  variant='outlined'
                  sx='primary'
                />
                <TextField
                  label={<Typography variant='h6'>PASSWORD</Typography>}
                  type='password'
                  fullWidth
                  margin='normal'
                  variant='outlined'
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 1,
                    mb: 2,
                  }}
                >
                  <FormControlLabel 
                    control={<Checkbox color='primary' />} 
                    label={<Typography color='primary'>Remember me</Typography>} 
                  />

                  <Typography variant='h6' color='primary' sx={{ cursor: 'pointer' }}>
                    Forgot your password?
                  </Typography>
                </Box>
                <Button type="submit" variant='contained' color='primary' fullWidth>
                  Sign Up
                </Button>
              </form>
              <Divider sx={{ my: 2 }}>or</Divider>
              <Button
                variant='outlined'
                fullWidth
                startIcon={<GoogleIcon />}
                sx={{ mb: 1 }}
              >
                Sign Up with Google
              </Button>
              <Button
                variant='outlined'
                fullWidth
                startIcon={<FacebookIcon />}
              >
                Sign Up with Facebook
              </Button>
              <Box sx={{ mt: 2 }}>
                <Typography variant='h6' align='center'>
                  Do you have an account? 
                  <Typography component='span' color='primary' sx={{ cursor: 'pointer' }} onClick={handleSI} >Sign In</Typography>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

