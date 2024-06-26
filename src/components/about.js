import { Box, Button, Typography, Link } from "@mui/material";  // Use MUI's Link component for links

import Navbar from "./navbar";

import phoneWave from "./images/WaveMobile.png";
import wave from "./images/base.png";

export default function Download() {
    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex', alignItems: 'top', height: '80vh', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', height: '70vh', width: '80vw', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '20px', alignItems: 'center', marginTop: '2%' }}>
                    <Typography sx={{ marginTop: '1%', fontSize: '125%' }}>About Us</Typography>
                    <Typography sx={{ color: "white" }}> A simple file sharing platform </Typography>
                    <Typography sx={{ color: "white" }}> Made by Aryan Malik </Typography>
                    <Link href="https://www.linkedin.com/in/aryan-malik-8a2613256/" sx={{ color: 'blue' }}>My LinkedIn</Link>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none', xl: 'none' }, width: '100vw', alignItems: "flex-end" }}>
                <img src={phoneWave} height={70} width="100%" alt="" />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex', xl: 'flex' }, width: '100vw', alignItems: "flex-end" }}>
                <img src={wave} height={80} width="100%" alt="" />
            </Box>
        </>
    );
}
