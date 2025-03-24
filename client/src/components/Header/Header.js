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
            padding: '2rem 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
        }}>
            {/* Logo on the left */}
            <Box component="figure" sx={{
                margin: 0,
                marginRight: '2rem',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Box
                    component="img"
                    src="logo192.png"
                    alt="Parchment icon with a drawing of an Egyptian-style eye"
                    sx={{
                        width: '10em',
                        margin: 0
                    }}
                />
            </Box>

            {/* Text content on the right */}
            <Box sx={{ textAlign: 'left' }}>
                <Typography
                    variant="h1"
                    sx={{
                        color: 'primary.main',
                        fontFamily: '"Lugrasimo", cursive',
                        fontSize: '6em',
                        fontStyle: 'normal',
                        margin: 0,
                        lineHeight: 1
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
        </Box>
    );
}

export default Header;
