"use client";

import { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from "@mui/material";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Abre una nueva ventana y escribe el mensaje "Iniciaste sesión"
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
                console.log(data.message); // Muestra el mensaje de respuesta
                // Opcional: reiniciar los campos del formulario
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
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'background.default',
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h2" sx={{ color: 'text.title', marginBottom: 2 }}>
                    Iniciar Sesión
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        label="Correo electrónico"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <TextField
                        label="Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Iniciar sesión
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default SignIn;
