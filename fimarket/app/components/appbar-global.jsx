"use client";

import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material"; // Components from material UI
import Image from "next/image"; // Image component from next
import { useRouter } from "next/navigation"; // To move between tabs
import { useEffect, useState } from "react"; // To manage states
import { theme } from "../styles/global-theme";

export default function AppBarGlobal() {
    const router = useRouter(); // Instantiating my class for the routes
    const [value, setValue] = useState(false); // State to track active tab, default is false for "Home"
    const [isAuthenticated, setIsAuthenticated] = useState(false); // To know if I'm in or out of my account

    useEffect(() => {
        // Function to handle changes in the authentication status stored in localStorage
        const handleStorageChange = () => {
            // Check if the user is authenticated based on the localStorage value
            const authStatus = localStorage.getItem("isAuthenticated") === "true";
            // Update the local state with the authentication status
            setIsAuthenticated(authStatus);
        };

        // Listen for any changes in the storage (e.g., when authentication status is updated)
        window.addEventListener("storage", handleStorageChange);

        // Cleanup function to remove the event listener when the component unmounts
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const handleChange = (newValue) => { // Function to handle changes (clicks on tabs)
        setValue(newValue);
    };

    const goToHome = () => { // To go to the home page
        setValue(false); // To remove the highlight
        router.push("/");
    };

    const goToAbout = () => { // To go to the about page
        setValue(0); // To highlight this tab
        router.push("/about");
    };
    
    const goToContact = () => { // To go to the contact page
        setValue(1); // To highlight this tab
        router.push("/contact");
    };
    
    const goToMyApps = () => { // To go to my apps page
        setValue(2); // To highlight this tab
        router.push("/myApps");
    };

    const handleSignOut = () => { // Function to exit the session when you are inside 
        setIsAuthenticated(false);
        localStorage.setItem("isAuthenticated", "false"); // Update localStorage to reflect sign out
        setValue(false); // To remove the highlight
        router.push("/"); // To return to the home page
    };

    return (
        <AppBar
            position="static" // It doesn't stay visible when scrolling 
            sx={{
                color: "secondary", // White
                minHeight: "64px", // To maintain the height of the bar on all screens
                mb: 5 // Space at the bottom
            }}
        >
            <Toolbar sx={{ minHeight: "64px" }}> {/* Ensures consistent height */}
                <Box
                    sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={goToHome} >
                    <Image
                        src="/logo.png"
                        alt="FI Marketplace"
                        width={40}
                        height={40}
                    />
                    <Typography
                        variant="h5"
                        sx={{
                            ml: 2, // Space to the left
                            mr: 3, // Space to the right
                            display: { xs: "none", md: "block" }, // Hide on xs, show on sm and up
                            whiteSpace: "nowrap" // Prevents line break
                        }}
                    >
                        FI Marketplace
                    </Typography>
                </Box>

                <Tabs
                    value={value} // Initial state
                    onChange={(_, newValue) => handleChange(newValue)} // To manage the clicks on the tabs
                    textColor="inherit" // Inherits the color of the parent
                    sx={{
                        flexGrow: 1, // To push the following sign buttons to the right
                        "& .MuiTabs-indicator": {
                            backgroundColor: value === false ? "transparent" : theme.palette.secondary.main // Yellow highlight unless on Home
                        }
                    }}
                >
                    {/* Changes the color of the letters if the tab is selected or not */}
                    <Tab label="About" onClick={goToAbout} sx={{ color: value === 0 ? theme.palette.text.light : '#ffffff' }} />
                    <Tab label="Contact" onClick={goToContact} sx={{ color: value === 2 ? theme.palette.text.light : '#ffffff' }} />
                    {isAuthenticated && (
                        <Tab label="My Apps" onClick={goToMyApps} sx={{ color: value === 1 ? theme.palette.text.light : '#ffffff' }} />
                    )}
                </Tabs>

                {isAuthenticated ? // Are we in or out?
                    (<Button color="secondary" onClick={handleSignOut} variant="outlined">Sign Out</Button>) // If we're in
                    :
                    // If we're out:
                    (
                        <>
                            <Button href="/signIn" color="secondary" sx={{ mr: 1, whiteSpace: "nowrap" }} variant="outlined">Sign In</Button>
                            <Button href="/signUp" color="secondary" sx={{ whiteSpace: "nowrap" }} variant="contained">Sign Up</Button>
                        </>
                    )
                }

            </Toolbar>
        </AppBar>
    );
}
