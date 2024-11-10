"use client";

import { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Paper } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useRouter } from "next/navigation"; 

const SignIn = ({ onSignIn }) => { // Receive onSignIn as a prop
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

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

    const handleSU = () => {
        router.push("/signUp");
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url(/banner.jpg)',
                backgroundSize: 'cover',
            }}
        >
            <Box pt={5} pb={5}>
                <Container maxWidth="sm" >
                    <Paper elevation={3} sx={{ borderRadius: 3}}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: 4,
                            }}
                        >
                            <Typography variant="h1" sx={{ color: 'text.dark', marginBottom: 5 }}>
                                Sign In
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.dark', marginBottom: 2 }}>
                                Welcome back! Your apps are waiting for you.
                            </Typography>
                            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                                <TextField
                                    label="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    fullWidth
                                    size='small'
                                    required
                                    margin="normal"
                                    sx={{
                                        color: 'text.dark', 
                                        '& .MuiInputLabel-root': {
                                            color: 'text.dark', 
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: 'text.dark', 
                                        },
                                        '& .MuiInputBase-input': {
                                            color: 'text.dark', 
                                        },
                                        '& .MuiFormLabel-asterisk': {
                                            display: 'none',
                                        },
                                    }}
                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    fullWidth
                                    size='small'
                                    required
                                    margin="normal"
                                    sx={{
                                        color: 'text.dark', 
                                        '& .MuiInputLabel-root': {
                                            color: 'text.dark', 
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: 'text.dark', 
                                        },
                                        '& .MuiInputBase-input': {
                                            color: 'text.dark', 
                                        },
                                        '& .MuiFormLabel-asterisk': {
                                            display: 'none',
                                        },
                                    }}
                                />
                                <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
                                    Login
                                </Button>
                            </form>
                            <Box sx={{ mt: 2, textAlign: 'center' }}>
                                <Typography variant='h6' align='center' color='text.dark'>
                                    Don't have an account? {' '}
                                <Typography variant='h6' component='span' color='secondary' sx={{ cursor: 'pointer', '&:hover': {color: 'black'}}} onClick={handleSU}>Sign Up</Typography>
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </Box>
    );
};

export default SignIn;