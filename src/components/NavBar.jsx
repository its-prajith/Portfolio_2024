import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaLink, FaLaptopCode } from 'react-icons/fa'; // Import icons

function NavBar() {
    return (
        <AppBar position="static" className="bg-black"> {/* Black background for the navbar */}
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Left side - Software Developer Icon */}
                    <IconButton
                        component="a"
                        href="/"
                        className="text-white mr-2"
                    >
                        <FaLaptopCode className="text-2xl" /> {/* Developer icon in white */}
                    </IconButton>

                    {/* Right side - Social Media and Email Icons */}
                    <Box className="flex-grow flex justify-end items-center">
                        {/* LinkedIn */}
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/its-prajith/"
                            target="_blank"
                            className="text-white hover:text-blue-700 transition-colors duration-300" // Default white, hover blue
                        >
                            <FaLinkedin className="text-2xl" />
                        </IconButton>

                        {/* GitHub */}
                        <IconButton
                            component="a"
                            href="https://github.com/its-prajith"
                            target="_blank"
                            className="text-white hover:text-black transition-colors duration-300" // Default white, hover black
                        >
                            <FaGithub className="text-2xl" />
                        </IconButton>

                        {/* WhatsApp */}
                        <IconButton
                            component="a"
                            href="https://wa.me/919789746808"
                            target="_blank"
                            className="text-white hover:text-green-500 transition-colors duration-300" // Default white, hover green
                        >
                            <FaWhatsapp className="text-2xl" />
                        </IconButton>

                        {/* Email */}
                        <IconButton
                            component="a"
                            href="mailto:prajithcbe@gmail.com"
                            className="text-white hover:text-red-600 transition-colors duration-300" // Default white, hover red
                        >
                            <FaEnvelope className="text-2xl" />
                        </IconButton>

                        {/* Linktree */}
                        <IconButton
                            component="a"
                            href="https://linktr.ee/itsprajith?utm_source=linktree_admin_share"
                            target="_blank"
                            className="text-white hover:text-gray-400 transition-colors duration-300" // Default white, hover gray
                        >
                            <FaLink className="text-2xl" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
