'use client';

import * as React from 'react';
import { Link } from "next/navigation"; // To move SignUp
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

  const handleSU = () => { // Function to signUp
    router.push("/signUp");
  };

  return (
    <Box sx={{ display: 'flex', p: 2.5,}}>
      <Container maxWidth='sm'>
          <Grid  item xs={12} md={6} >
            <Box sx={{ p: 6, borderRadius: 2, bgcolor: 'white', boxShadow: 3 }}>
              <Typography variant='h2' gutterBottom>
                Sign In
              </Typography>
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
              <Button variant='contained' color='primary' fullWidth>
                Sign in
              </Button>
              <Divider sx={{ my: 2 }}>or</Divider>
              <Button
                variant='outlined'
                fullWidth
                startIcon={<GoogleIcon />}
                sx={{ mb: 1 }}
              >
                Sign in with Google
              </Button>
              <Button
                variant='outlined'
                fullWidth
                startIcon={<FacebookIcon />}
              >
                Sign in with Facebook
              </Button>
              <Box sx={{ mt: 2 }}>
                <Typography variant='h6' align='center'>
                  Don't have an account? 
                  <Typography component='span' color='primary' sx={{ cursor: 'pointer' }} onClick={handleSU}>Sign up</Typography>
                </Typography>
              </Box>
            </Box>
          </Grid>
      </Container>
    </Box>
  );
}
