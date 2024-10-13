import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaLink, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

function NavBar() {
    return (
        <AppBar position="fixed" className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"> {/* Change to 'fixed' */}
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Left side - Software Developer Icon */}
                    <IconButton
                        component="a"
                        href="/"
                        className="text-white mr-2"
                    >
                        <FaLaptopCode className="text-3xl text-white" />
                    </IconButton>

                    {/* Right side - Social Media and Email Icons */}
                    <Box className="flex-grow flex justify-end items-center space-x-6">
                        {/* LinkedIn */}
                        <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <IconButton
                                component="a"
                                href="https://www.linkedin.com/in/its-prajith/"
                                target="_blank"
                                className="text-white transition duration-300"
                            >
                                <FaLinkedin className="text-3xl" />
                            </IconButton>
                        </motion.div>

                        {/* GitHub */}
                        <motion.div whileHover={{ scale: 1.2, rotate: -10 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <IconButton
                                component="a"
                                href="https://github.com/its-prajith"
                                target="_blank"
                                className="text-white transition duration-300"
                            >
                                <FaGithub className="text-3xl" />
                            </IconButton>
                        </motion.div>

                        {/* WhatsApp */}
                        <motion.div whileHover={{ scale: 1.2, y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <IconButton
                                component="a"
                                href="https://wa.me/919789746808"
                                target="_blank"
                                className="text-white transition duration-300"
                            >
                                <FaWhatsapp className="text-3xl" />
                            </IconButton>
                        </motion.div>

                        {/* Email */}
                        <motion.div whileHover={{ scale: 1.2, y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <IconButton
                                component="a"
                                href="mailto:prajithcbe@gmail.com"
                                className="text-white transition duration-300"
                            >
                                <FaEnvelope className="text-3xl" />
                            </IconButton>
                        </motion.div>

                        {/* Linktree */}
                        <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <IconButton
                                component="a"
                                href="https://linktr.ee/itsprajith?utm_source=linktree_admin_share"
                                target="_blank"
                                className="text-white transition duration-300"
                            >
                                <FaLink className="text-3xl" />
                            </IconButton>
                        </motion.div>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
