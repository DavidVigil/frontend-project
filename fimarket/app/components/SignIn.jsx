"use client";

import { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from "@mui/material";


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            newWindow.document.write('<h1>Iniciaste sesión</h1>');
            newWindow.document.title = "Mensaje de inicio de sesión";
        }

        try {
            const res = await fetch('/api/saveUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                const data = await res.json();
                console.log(data.message);
                setEmail('');
                setPassword('');
            } else {
                console.error('Error al guardar los datos:', res.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
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
                </Box>
            </Container>
        </Box>
    );
};

export default SignIn;
