import { List, ListItem } from '@mui/material';
import React from 'react';
import './CharList.css';

const CharList = ({ characters = [] }) => {
    return (
        <div className="char-list">
            <h2>Your Characters</h2>
            {!characters.length ? (
                <div className="empty-message">
                    No characters found. Create one to get started!
                </div>
            ) : (
                <List>
                    {characters.map((char, index) => (
                        <ListItem key={char._id || index}>
                            <strong>{char.name}</strong> - {char.race} {char.class}
                        </ListItem>
                    ))}
                </List>
            )}
        </div>
    );
};

export default CharList;
