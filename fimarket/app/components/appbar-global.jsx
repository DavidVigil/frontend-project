"use client";

import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { theme } from "../styles/global-theme";

export default function AppBarGlobal() {
    const router = useRouter();
    const [value, setValue] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    // Función para actualizar el estado de autenticación
    const updateAuthStatus = () => {
        const authStatus = localStorage.getItem("isAuthenticated") === "true";
        setIsAuthenticated(authStatus);
    };

    useEffect(() => {
        // ** Inicializa el estado de autenticación desde localStorage **
        updateAuthStatus();

        // ** Revisa el estado de autenticación cada segundo **
        const intervalId = setInterval(updateAuthStatus, 1000);

        return () => {
            clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
        };
    }, []);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const goToHome = () => {
        setValue(false);
        router.push("/");
    };

    const goToAbout = () => {
        setValue(0);
        router.push("/about");
    };

    const goToContact = () => {
        setValue(1);
        router.push("/contact");
    };

    const goToMyApps = () => {
        setValue(2);
        router.push("/myApps");
    };

    const handleSignOut = () => {
        setIsAuthenticated(false);
        localStorage.setItem("isAuthenticated", "false"); // Actualiza el localStorage
        setValue(false);
        router.push("/");
    };

    return (
        <AppBar
            position="static"
            sx={{
                color: "secondary",
                minHeight: "64px",
                mb: 5,
            }}
        >
            <Toolbar sx={{ minHeight: "64px" }}>
                <Box
                    sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                    onClick={goToHome}
                >
                    <Image
                        src="/logo.png"
                        alt="FI Marketplace"
                        width={40}
                        height={40}
                    />
                    <Typography
                        variant="h5"
                        sx={{
                            ml: 2,
                            mr: 3,
                            display: { xs: "none", md: "block" },
                            whiteSpace: "nowrap",
                        }}
                    >
                        FI Marketplace
                    </Typography>
                </Box>

                <Tabs
                    value={value}
                    onChange={(_, newValue) => handleChange(newValue)}
                    textColor="inherit"
                    sx={{
                        flexGrow: 1,
                        "& .MuiTabs-indicator": {
                            backgroundColor: value === false ? "transparent" : theme.palette.secondary.main,
                        },
                    }}
                >
                    <Tab label="About" onClick={goToAbout} sx={{ color: value === 0 ? theme.palette.text.light : '#ffffff' }} />
                    <Tab label="Contact" onClick={goToContact} sx={{ color: value === 1 ? theme.palette.text.light : '#ffffff' }} />
                    {isAuthenticated && (
                        <Tab label="My Apps" onClick={goToMyApps} sx={{ color: value === 2 ? theme.palette.text.light : '#ffffff' }} />
                    )}
                </Tabs>

                {/* Botones dinámicos basados en la autenticación */}
                {isAuthenticated === null ? null : isAuthenticated ? (
                    <Button color="secondary" onClick={handleSignOut} variant="outlined">Sign Out</Button>
                ) : (
                    <>
                        <Button href="/signIn" color="secondary" sx={{ mr: 1, whiteSpace: "nowrap" }} variant="outlined">Sign In</Button>
                        <Button href="/signUp" color="secondary" sx={{ whiteSpace: "nowrap" }} variant="contained">Sign Up</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}
