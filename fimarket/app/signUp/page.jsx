'use client';

import * as React from 'react';
import { useState } from 'react';

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

import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';



const SignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Instantiating my class for the routes

  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Set the authentication status to true in localStorage
    localStorage.setItem("isAuthenticated", "true");

    // Dispatch a storage event to notify other components (like AppBarGlobal)
    // that the authentication status has changed
    window.dispatchEvent(new Event("storage"));

    // Redirect the user to the home page after successful login
    router.push("/");
  }

  const handleSI = () => { // Function to signUp
    router.push("/signIn");
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: 'white',
        p: 3,
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={10}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 1 }}>
              <Typography variant='h1' >
                FI MARKETPLACE
              </Typography>
              <Typography variant='h2' >
                  Do you want to save your favorite apps?
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FavoriteTwoToneIcon
                color='primary'
                sx={{
                    mr: 1,
                    fontSize: 50,
                    '&:hover': {
                      transform: 'scale(1.2)',
                    } }}
              />
              <Box>
                <Typography variant='h5'>Curate Your Favorites</Typography>
                <Typography variant='h6' sx={{textAlign:'justify'}}>
                  Easily save and organize your favorite applications in one convenient library, tailored to your needs.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AccessTimeTwoToneIcon
                color='primary'
                sx={{
                    mr: 1,
                    fontSize: 50,
                    '&:hover': {
                      transform: 'scale(1.2)',
                    } }}
              />
              <Box>
                <Typography variant='h5'>Access Anytime, Anywhere</Typography>
                <Typography variant='h6' sx={{textAlign:'justify'}}>
                  Your personalized library is available on any device, making it easy to access your favorite apps whenever you need them.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <HandymanTwoToneIcon
                color='primary'
                sx={{
                    mr: 1,
                    fontSize: 50,
                    '&:hover': {
                      transform: 'scale(1.2)',
                    } }}
              />
              <Box>
                <Typography variant='h5'>High-Performance Tools</Typography>
                <Typography variant='h6' sx={{textAlign:'justify'}}>
                  Access calculation, simulation, and design applications to maximize your efficiency on every project.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TipsAndUpdatesTwoToneIcon
              color='primary'
                sx={{
                    mr: 1,
                    fontSize: 50,
                    '&:hover': {
                      transform: 'scale(1.2)',
                    } }}
              />
              <Box>
                <Typography variant='h5'>Innovative functionality</Typography>
                <Typography variant='h6' sx={{textAlign:'justify'}}>
                  Stay ahead with features that set new standards, addressing your evolving needs better than the rest.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/*Right Column*/}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 6, borderRadius: 2, bgcolor: 'primary.main', boxShadow: 3 }}>
              <Typography variant='h2' color='white'>
                Sign Up
              </Typography>

              <form onSubmit={handleSubmit} >
              <TextField
                label={<Typography variant='h6' color='white'>EMAIL</Typography>}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required

                margin="normal"
                sx={{
                  '& .MuiFormLabel-asterisk': {
                    display: 'none',
                  },

                  "& .MuiOutlinedInput-root": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "background.default",
                      borderWidth: "2px",
                    },
                    "&.Mui-focused": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "text.main",
                        borderWidth: "3px",
                      },
                    },
                    "&:hover:not(.Mui-focused)": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "text.main",
                      },
                    },
                    '& .MuiInputBase-input': {
                      color: 'text.main',
                    },
                  },

                  "& .MuiInputLabel-outlined": {

                    "&.Mui-focused": {
                      color: "text.main",
                      fontWeight: "bold",
                    },
                  },
                }}
              />
              <TextField
                label={<Typography variant='h6' color='white'>PASSWORD</Typography>}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
                margin="normal"
                sx={{
                  '& .MuiFormLabel-asterisk': {
                    display: 'none',
                  },

                  "& .MuiOutlinedInput-root": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "background.default",
                      borderWidth: "2px",
                    },
                    "&.Mui-focused": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "text.main",
                        borderWidth: "3px",
                      },
                    },
                    "&:hover:not(.Mui-focused)": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "text.main",
                      },
                    },
                    '& .MuiInputBase-input': {
                      color: 'text.main',
                    },
                  },

                  "& .MuiInputLabel-outlined": {

                    "&.Mui-focused": {
                      color: "text.main",
                      fontWeight: "bold",
                    },
                  },
                }}
              />

              <Button type="submit" variant='contained' color='secondary' fullWidth>
                Sign Up
              </Button>

              </form>

              <Divider
                sx={{
                  my: 2,
                  '&::before, &::after': {
                  borderColor: 'text.main', // Cambia el color de la línea
                },}}>or</Divider>
              <Button
                variant='outlined'
                fullWidth
                startIcon={<GoogleIcon />}
                sx={{ mb: 1 }}
                color='secondary'
              >
                Sign Up with Google
              </Button>
              <Button
                variant='outlined'
                fullWidth
                startIcon={<FacebookIcon />}
                color='secondary'
              >
                Sign Up with Facebook
              </Button>
              <Box sx={{ mt: 2 }}>
                <Typography variant='h6' align='center'>
                  Do you have an account?
                  <Typography component='span' color='secondary' sx={{ cursor: 'pointer' }} onClick={handleSI} >Sign In</Typography>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SignUp;
