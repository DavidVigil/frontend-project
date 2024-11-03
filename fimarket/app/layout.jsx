import { Css } from "@mui/icons-material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import localFont from "next/font/local";
import { theme } from "./styles/global-theme";
//import "./globals.css";

//Footer import
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "FI Market",
  description: "Frontend project for FI Market",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
