import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaLink, FaLaptopCode } from 'react-icons/fa'; // Import the software developer icon       FaInstagram, 

function NavBar() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Left side - Software Developer Icon */}
                    <IconButton
                        component="a"
                        href="/"
                        sx={{ color: 'inherit', mr: 2 }}
                    >
                        <FaLaptopCode /> {/* Software developer icon */}
                    </IconButton>

                    {/* Right side - Social Media and Email Icons */}
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        {/* LinkedIn */}
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/its-prajith/"
                            target="_blank"
                            sx={{ color: 'inherit', mr: 1 }}
                        >
                            <FaLinkedin />
                        </IconButton>

                        {/* GitHub */}
                        <IconButton
                            component="a"
                            href="https://github.com/its-prajith"
                            target="_blank"
                            sx={{ color: 'inherit', mr: 1 }}
                        >
                            <FaGithub />
                        </IconButton>

                        {/* Instagram
                        <IconButton
                            component="a"
                            href="https://www.instagram.com"
                            target="_blank"
                            sx={{ color: 'inherit', mr: 1 }}
                        >
                            <FaInstagram />
                        </IconButton> */}

                        {/* WhatsApp */}
                        <IconButton
                            component="a"
                            href="https://wa.me/919789746808"
                            target="_blank"
                            sx={{ color: 'inherit', mr: 1 }}
                        >
                            <FaWhatsapp />
                        </IconButton>

                        {/* Email */}
                        <IconButton
                            component="a"
                            href="mailto:prajithcbe@gmail.com"
                            sx={{ color: 'inherit', mr: 1 }}
                        >
                            <FaEnvelope />
                        </IconButton>

                        {/* Linktree */}
                        <IconButton
                            component="a"
                            href="https://linktr.ee/itsprajith?utm_source=linktree_admin_share"
                            target="_blank"
                            sx={{ color: 'inherit' }}
                        >
                            <FaLink />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
