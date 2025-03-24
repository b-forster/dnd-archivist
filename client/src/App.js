import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, useTheme } from '@mui/material';
import { Header, Modal } from './components';
import CharList from 'components/CharList/CharList';

function App() {
    const theme = useTheme();
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    useEffect(() => {
        // Fetch characters when component mounts or refreshTrigger changes
        fetchCharacters();
        console.log("Fetching characters, refreshTrigger:", refreshTrigger);
    }, [refreshTrigger]);

    const fetchCharacters = async () => {
        setLoading(true);
        setError(null);
        try {
            console.log("Making API request to fetch characters");
            const response = await fetch("http://localhost:4000/characters");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Characters fetched successfully:", data);
            setCharacters(data);
        } catch (error) {
            console.error("Error fetching characters:", error);
            setError("Failed to load characters. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    // Function to pass to CreateCharWizard to trigger refresh
    const onCharacterCreated = () => {
        console.log("Character created! Triggering refresh...");
        setRefreshTrigger(prev => prev + 1);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '100vh',
            position: 'relative',
            padding: 0,
            bgcolor: 'background.default',
            color: 'text.primary'
        }}>
            <Header />

            <Box sx={{
                flex: 1,
                width: '100%',
                maxWidth: '800px',
                margin: '0 auto',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {error && (
                    <Typography
                        color="error"
                        sx={{
                            p: 2,
                            mb: 2,
                            width: '100%',
                            borderRadius: 1,
                            bgcolor: 'rgba(255, 0, 0, 0.1)'
                        }}
                    >
                        {error}
                    </Typography>
                )}

                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                        <CircularProgress color="secondary" />
                    </Box>
                ) : (
                    <CharList characters={characters} />
                )}

                <Modal
                    buttonLabel="+ Create a Character"
                    title="Create a New Character"
                    onCharacterCreated={onCharacterCreated}
                />
            </Box>

            <Box component="footer" sx={{
                fontSize: 'small',
                fontVariant: 'small-caps',
                width: '100%',
                padding: '1rem 0',
                bgcolor: 'background.default',
                position: 'relative',
                bottom: 0,
                zIndex: 10
            }}>
                Parchment icon by <Box component="a" sx={{ color: 'primary.main' }} target="_blank" rel="noreferrer" href="https://icons8.com/icon/YcQqArFgdVcn/parchment">Icons8</Box> ＊ D20 icons by <Box component="a" sx={{ color: 'primary.main' }} target="_blank" rel="noreferrer" href="https://www.flaticon.com/free-icons/d20" title="d20 icons">Freepik - Flaticon</Box>
            </Box>
        </Box>
    );
}

export default App;
