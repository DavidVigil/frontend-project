'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';

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
  Grid2,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
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
import { ContentCutOutlined, Password } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';

import axios from 'axios';

const SignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); //function to redirect "Don't have an account? Sign Up" 
  
  const passwordRequirements = [
    { text: "At least one uppercase letter", regex: /[A-Z]/ }, 
    { text: "Minimum of 8 characters", regex: /.{8,}/ }, 
    { text: "At least one special character", regex: /[!@#$%^&*(),.?":{}|<>]/ },
  ];

  const checkRequirement = (r) => r.regex.test(password);

  const CreateUser = async () => {
    try { const response = await axios.post('http://127.0.0.1:5000/api/v1/users', 
      { email: email, password: password }, 
      { headers: { 'Content-Type': 'application/json' } }); 
      console.log('User created:', response.data);
      // set local storage
      localStorage.setItem('user', JSON.stringify(response.data.email));
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userID', response.data._id);
      // redirect to home page
      router.push("/");
    }
    catch (e) {
      if (e.response) { 
        switch (e.response.data.error) {
          case 'User already exists':
            alert("This email is already registered. Please, try another.");
            break;
          case 'Invalid email':
            alert("Please, enter a valid email.");
            break;
          case 'Validation failed: Password must be at least 8 characters long':
            alert("Please, enter a valid password.");
            break;
          default:
            console.error('Error response:', e.response); 
            break;
        }
      } 
      else if (error.request) { // The request was made but no response was received 
          console.error('Error request:', error.request); 
      } 
      else { // Something happened in setting up the request that triggered an Error 
          console.error('Error message:', error.message); 
      } 
    }
  };

  const handleSubmit = (e) => {
    // Prevent the default form submission behavior.
    e.preventDefault();

    if(email === '' || password === '') {
      return;
    }

    CreateUser();
  };



  const handleSI = () => { // "Don't have an account? Sign Up"
    router.push("/signIn");
  };

  return (
    <Box        
      sx={{
        minHeight: 'flex',
        p: 3,
      }}
    >
      <Container maxWidth='lg'>
        <Grid2 sx={{mb: 8}}>
          <Box align={"center"}>
              <Typography variant='h2' >
                  Do you want to save your favorite apps?
              </Typography>
          </Box>
        </Grid2>
        <Grid container alignItems={"center"} spacing={10}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FavoriteTwoToneIcon
                  color='secondary'
                  sx={{
                      mr: 1,
                      fontSize: 50,
                      '&:hover': {
                        transform: 'scale(1.2)',
                      } }}
                />
                <Box>
                  <Typography variant='h5' sx={{color: "text.dark"}}>Curate Your Favorites</Typography>
                  <Typography variant='h6' sx={{textAlign:'justify', color: "text.dark"}}>
                    Easily save and organize your favorite applications in one convenient library, tailored to your needs.
                  </Typography>
                </Box>
              </Box>
            </Paper>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTimeTwoToneIcon
                  color='secondary'
                  sx={{
                      mr: 1,
                      fontSize: 50,
                      '&:hover': {
                        transform: 'scale(1.2)',
                      } }}
                />
                <Box>
                  <Typography variant='h5' sx={{color: "text.dark"}}>Access Anytime, Anywhere</Typography>
                  <Typography variant='h6' sx={{textAlign:'justify', color: "text.dark"}}>
                    Your personalized library is available on any device, making it easy to access your favorite apps whenever you need them.
                  </Typography>
                </Box>
              </Box>
            </Paper>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HandymanTwoToneIcon
                  color='secondary'
                  sx={{
                      mr: 1,
                      fontSize: 50,
                      '&:hover': {
                        transform: 'scale(1.2)',
                      } }}
                />
                <Box>
                  <Typography variant='h5' sx={{color: "text.dark"}}>High-Performance Tools</Typography>
                  <Typography variant='h6' sx={{textAlign:'justify', color: "text.dark"}}>
                    Access calculation, simulation, and design applications to maximize your efficiency on every project.
                  </Typography>
                </Box>
              </Box>
            </Paper>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TipsAndUpdatesTwoToneIcon
                color='secondary'
                  sx={{
                      mr: 1,
                      fontSize: 50,
                      '&:hover': {
                        transform: 'scale(1.2)',
                      } }}
                />
                <Box>
                  <Typography variant='h5' sx={{color: "text.dark"}}>Innovative functionality</Typography>
                  <Typography variant='h6' sx={{textAlign:'justify', color: "text.dark"}}>
                    Stay ahead with features that set new standards, addressing your evolving needs better than the rest.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/*Right Column*/}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 6, borderRadius: 2, bgcolor: 'primary.main', boxShadow: 3 }}>
              <Typography mb={6} variant='h2' color='text.light'>
                Sign Up
              </Typography>
              <form onSubmit={handleSubmit} >
                <TextField
                  label={<Typography variant='h6' color='text.light'>EMAIL</Typography>}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  required
                  margin="normal"
                  size='small'
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
                          borderColor: "secondary.main",
                          borderWidth: "3px",
                        },
                      },
                      "&:hover:not(.Mui-focused)": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "secondary.dark",
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: 'text.light',
                      },
                    },

                    "& .MuiInputLabel-outlined": {

                      "&.Mui-focused": {
                        color: "text.light",
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
                  size='small'
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
                          borderColor: "secondary.main",
                          borderWidth: "3px",
                        },
                      },
                      "&:hover:not(.Mui-focused)": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "secondary.dark",
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: 'text.light',
                      },
                    },

                    "& .MuiInputLabel-outlined": {

                      "&.Mui-focused": {
                        color: "text.light",
                        fontWeight: "bold",
                      },
                    },
                  }}
                />
                <List> {passwordRequirements.map((req, index) => (
                  <ListItem key={index}> 
                    <ListItemIcon sx={{ color: 'secondary.main' }}> 
                      {checkRequirement(req) ? <CheckIcon/> : null} 
                    </ListItemIcon> 
                  <ListItemText primary={<Typography color='text.light'>{req.text}</Typography>} /> 
                  </ListItem>))} 
                </List>
                

                <FormControlLabel
                  control={
                    <Checkbox sx={{
                      color: 'secondary.main',
                      '&.Mui-checked': {
                        color: 'secondary.main',
                      },
                    }}/>
                  }
                  label={
                    <Typography variant='h6' color='text.light'>
                      I agree to the Terms and conditions
                    </Typography>
                  }
                  sx={{
                    '& .MuiTypography-body1': {
                      color: 'text.light',
                    },
                  }}
                />

                <Button sx={{mt:6}} type="submit" variant='contained' color='secondary' fullWidth>
                  Sign Up
                </Button>
              </form>
              <Box sx={{ mt: 2 }}>
                <Typography variant='h6' align='center' color='text.light'>
                  Do you have an account? {' '}
                  <Typography component='span' color='secondary' sx={{ cursor: 'pointer' }} onClick={handleSI} >Sign In</Typography>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignUp;
