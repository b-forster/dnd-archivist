import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

function Header() {
    const theme = useTheme();

    return (
        <Box component="header" sx={{
            position: 'relative',
            top: 0,
            width: '100%',
            backgroundColor: 'background.default',
            zIndex: 10,
            padding: '2rem 0'
        }}>
            <Box component="figure" sx={{
                display: 'inline-block',
                margin: 0
            }}>
                <Box
                    component="img"
                    src="logo192.png"
                    alt="Parchment icon with a drawing of an Egyptian-style eye"
                    sx={{
                        display: 'inline-block',
                        width: '10em',
                        margin: 0
                    }}
                />
            </Box>

            <Typography
                variant="h1"
                sx={{
                    color: 'primary.main',
                    fontFamily: '"Lugrasimo", cursive',
                    fontSize: '6em',
                    fontStyle: 'normal',
                    margin: 0
                }}
            >
                Archivist
            </Typography>

            <Typography
                variant="h2"
                sx={{
                    fontFamily: '"Macondo", serif',
                    fontWeight: 'normal',
                    fontStyle: 'italic',
                    margin: 0
                }}
            >
                A Character Creation & Leveling Companion App<br />
                for Dungeons & Dragons 5th Edition
            </Typography>
        </Box>
    );
}

export default Header;
