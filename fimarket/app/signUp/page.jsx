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
import { ContentCutOutlined } from '@mui/icons-material';

import axios from 'axios';

const SignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); //function to redirect "Don't have an account? Sign Up"
  const [users, setUsers] = useState([]);

  useEffect(() => {
    FetchUsers();
    }, []
  );

  const FetchUsers = async () => {
    try{
      const response = await axios.get('http://127.0.0.1:5000/api/v1/users');
      setUsers(response.data);
    }
    catch (error) {
      console.error("Error fetching users: ", error);
      setUsers([]);
    }
  };

  const handleSubmit = (e) => {
    // Prevent the default form submission behavior.
    e.preventDefault();

    // await until the users are fetched
  
    /*---------------------SIGN UP LOGIC--------------------------*/
    if(users.find(u => u.email === email)){
      alert("This email is already registered. Please, try another.");
      console.log("This email is already registered. Please, try another.");
    }

    // users.push(user);

    // localStorage.setItem('users', JSON.stringify(users));

    // router.push("/");

    console.log("Saved users on LocalStorage:", users);
    /*-----------------------------------------------------------*/


    // Set the authentication status to true in localStorage
    // localStorage.setItem("isAuthenticated", "true");
     
    // Dispatch a storage event to notify other components (like AppBarGlobal)
    // that the authentication status has changed
    // window.dispatchEvent(new Event("storage"));

    //Looks for SignUp email and password.
    console.log("Signup email:", email, "password:", password);

    // setUsers([]);
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
}

export default SignUp;
