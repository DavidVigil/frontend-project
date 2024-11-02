"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#ff0000",
        },
        secondary: {
            main: "#eeeeee",
        },
        background: {
            default: "#cc0000",
        },
        text: {
            main: "#ffffff",
            light: "#ffffff",
            dark: "#000000",
            title: "#ff0000",
            subtitle: "#00ff00",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        h1: {
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#ff0000",
        },
        h2: {
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#00ff00",
        },
        h3: {
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#ff0000",
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#00ff00",
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: "#ff0000",
        },
        h6: {
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#00ff00",
        },
        body1: {
            fontSize: "1rem",
            fontWeight: "normal",
            color: "#ffffff",
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: "normal",
            color: "#ffffff",
        },
        button: {
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#ffffff",
        },
    },
    
})