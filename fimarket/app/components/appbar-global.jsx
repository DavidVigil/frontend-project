"use client";

import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material"; // Components from material UI
import Image from "next/image"; // Image component from next
import { useRouter } from "next/navigation"; // To move between tabs
import { useState } from "react"; // To manage states

export default function AppBarGlobal(){

    const router = useRouter(); // Instantiating my class for the routes

    const [value, setValue] = useState(false); // State to track active tab, default is false for "Home"
    const [isAuthenticated, setIsAuthenticated] = useState(false); // To know if i'm in or out of my account

    const handleChange = (newValue) => { // Function to handle changes (clics on tabs)
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

    const goToMyApps = () => { // To go to my apps page
        setValue(1); // To highlight this tab
        router.push("/myApps");
    };

    const handleSignIn = () => { // Function to enter the session when you are outside
        setIsAuthenticated(true);
        setValue(false); // To remove the highlight
    };

    const handleSignOut = () => { // Function to exit the session when you are inside 
        setIsAuthenticated(false);
        setValue(false); // To remove the highlight
        router.push("/"); // To return to the home page
    };

    return (
        <AppBar 
            position="static" // It doesn't stay visible when scrolling 
            sx={{ 
                backgroundColor: "#121214", // Black
                color: "secondary", // White
                minHeight: "64px" // To maintain the height of the bar on all screens
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
                            textDecoration: "none", // Remove any decoration
                            color: "inherit", // Inherits the color of the father
                            ml: 2, // Space to the left
                            mr: 3, // Space to the right
                            display: { xs: "none", sm: "block" }, // Hide on xs, show on sm and up
                            whiteSpace: "nowrap" // Prevents line break
                        }}
                    >
                        FI Marketplace
                    </Typography>
                </Box>

                <Tabs
                    value={value} // Initial state
                    onChange={(_, newValue) => handleChange(newValue)} // To manage the clics on the tabs
                    textColor="inherit" // Inherits the color of the father
                    sx={{ 
                        flexGrow: 1, // To push the following sign buttons to the right
                        "& .MuiTabs-indicator": {
                            backgroundColor: value === false ? "transparent" : "yellow" // Yellow highlight unless on Home
                        }
                    }}
                >
                    {/* Changes the color of the letters if the tab is selected or not */}
                    <Tab label= "About" onClick={goToAbout} sx={{ color: value === 0 ? 'secondary' : '#ffffff' }}/> 
                    <Tab label= "My Apps" onClick={goToMyApps} sx={{ color: value === 1 ? 'secondary' : '#ffffff' }}/>
                </Tabs>

                { isAuthenticated ? // Are we in or out?
                    (<Button color="inherit" onClick={handleSignOut}>Sign Out</Button>) // If we're in
                    :
                    // If wer'e out:
                    (
                        <>
                            <Button color="inherit" sx={{ mr: 1, whiteSpace: "nowrap"}} onClick={handleSignIn}>Sign In</Button>
                            <Button color="primary" sx={{ whiteSpace: "nowrap"}} variant= "contained" onClick={handleSignIn}>Sign Up</Button>
                        </>
                    )
                }
            
            </Toolbar>
        </AppBar>
    )
}