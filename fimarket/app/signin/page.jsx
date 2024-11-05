"use client";

import { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useRouter } from "next/navigation"; 

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        router.push("/myApps");
        /*
        e.preventDefault();
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            newWindow.document.write('<h1>Iniciaste sesión</h1>');
            newWindow.document.title = "Mensaje de inicio de sesión";
        }
        */
    };

    const handleSU = () => { // Function to signUp
        router.push("/signUp");
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
            }}
        >
            <Container maxWidth="sm">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'secondary.main',
                        padding: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                >
                    <Typography variant="h1" sx={{ color: 'text.h1', marginBottom: 2 }}>
                        Sign In
                    </Typography>
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <TextField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
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
                            }}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
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
                            }}
                        />
                        <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
                            Login
                        </Button>
                    </form>
                    <Button
                        variant='outlined'
                        fullWidth
                        startIcon={<GoogleIcon />}
                        sx={{ mt: 2, mb: 1 }}
                    >
                        Sign in with Google
                    </Button>

                    <Button
                        variant='outlined'
                        fullWidth
                        startIcon={<FacebookIcon />}
                        sx={{ mb: 1 }}
                    >
                        Sign in with Facebook
                    </Button>

                    <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <Typography variant='h6' align='center'>
                            Don't have an account?
                        </Typography>
                        <Typography
                            variant='h6'
                            color='primary'
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    color: 'black',
                                },
                            }}
                            onClick={handleSU}
                        >
                            Sign up
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default SignIn;