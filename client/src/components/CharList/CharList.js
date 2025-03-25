import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    Typography,
    Paper,
    Box,
    Divider,
    useTheme
} from '@mui/material';

const CharList = ({ characters = [] }) => {
    const theme = useTheme();

    return (
        <Box sx={{
            width: '20vw',
            minWidth: '400px',
            margin: '0 auto',
            padding: '1rem'
        }}>
            <Typography
                variant="h3"
                gutterBottom
            >
                Your Characters
            </Typography>

            <Paper
                elevation={3}
                sx={{
                    backgroundColor: 'background.default',
                }}
            >
                {!characters.length ? (
                    <Box sx={{
                        p: 2,
                        textAlign: 'center',
                    }}>
                        <Typography>
                            No characters found. Create one to get started!
                        </Typography>
                    </Box>
                ) : (
                    <List sx={{
                        maxHeight: '40vh',
                        overflow: 'auto',
                        padding: 0,
                        border: 'none',
                    }}>
                        {characters.map((char, index) => (
                            <React.Fragment key={char._id || index}>
                                <ListItem
                                    sx={{
                                        textAlign: 'center',
                                        '&:hover': {
                                            color: 'error.main',
                                        }
                                    }}
                                >
                                    <ListItemText
                                        primary={
                                            <Typography component="span">
                                                <Box component="span" fontWeight="bold">
                                                    {char.name}</Box>
                                                - {char.race} {char.class}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                {index < characters.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </List>
                )}
            </Paper>
        </Box>
    );
};

export default CharList;
