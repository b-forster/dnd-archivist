import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';

const Header = memo(() => {
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
                marginRight: '1rem',
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
                        lineHeight: 1
                    }}
                >
                    Archivist
                </Typography>

                <Typography variant="h2">
                    A Character Creation & Leveling Companion App<br />
                    for Dungeons & Dragons 5th Edition
                </Typography>
            </Box>
        </Box>
    );
});

export default Header;
