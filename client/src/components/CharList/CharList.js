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
            width: '30vw',
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
                    backgroundColor: 'background.paper',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 1
                }}
            >
                {!characters.length ? (
                    <Box sx={{
                        p: 2,
                        textAlign: 'center',
                        fontStyle: 'italic',
                    }}>
                        <Typography variant="body1" fontStyle="italic">
                            No characters found. Create one to get started!
                        </Typography>
                    </Box>
                ) : (
                    <List sx={{
                        maxHeight: '20vh',
                        overflow: 'auto',
                        padding: 0
                    }}>
                        {characters.map((char, index) => (
                            <React.Fragment key={char._id || index}>
                                <ListItem
                                    sx={{
                                        textAlign: 'left',
                                        // color: 'text.primary',
                                        '&:hover': {
                                            color: 'error.main',
                                            // backgroundColor: 'rgba(255, 48, 131, 0.08)'
                                        }
                                    }}
                                >
                                    <ListItemText
                                        primary={
                                            <Typography component="span">
                                                <Box component="span" fontWeight="bold">{char.name}</Box> - {char.race} {char.class}
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
