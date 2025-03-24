import React, { useState, useEffect } from 'react';
import './App.css';
import { Header, Modal } from './components';
import CharList from 'components/CharList/CharList';

function App() {
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
        <div className="App">
            <Header />

            <div className="content-area">
                {error && <div className="error-message">{error}</div>}
                {loading ? (
                    <div className="loading">Loading characters...</div>
                ) : (
                    <CharList characters={characters} />
                )}

                <Modal
                    buttonLabel="+ Create a Character"
                    title="Create a New Character"
                    onCharacterCreated={onCharacterCreated}
                />
            </div>

            <footer>
                Parchment icon by <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/YcQqArFgdVcn/parchment">Icons8</a> ＊ D20 icons by <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/free-icons/d20" title="d20 icons">Freepik - Flaticon</a>
            </footer>
        </div>
    );
}

export default App;
