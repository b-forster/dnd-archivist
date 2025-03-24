import React, { useEffect } from 'react';
import {
    Box, FormGroup, Button,
} from '@mui/material';
import { ABILITIES_LIST, ABILITIES } from 'constants';
import AbilityRow from '../../AbilityRow/AbilityRow';


function RollStep({ charData, handleChange, abilityModifiers = {} }) {
    // Function to update a specific ability score in the parent component
    const updateAbilityScore = (abilityName, score) => {
        const newAbilities = { ...charData.abilities, [abilityName]: score };
        handleChange({ abilities: newAbilities });
    };

    // Roll for all abilities at once
    const rollAllAbilities = () => {
        const newAbilities = {};

        ABILITIES_LIST.forEach(abilityName => {
            // Roll 4d6, drop lowest, sum the rest
            const rolls = Array(4).fill(0).map(() => Math.ceil(Math.random() * 6));
            rolls.sort((a, b) => a - b);
            const sum = rolls.slice(1).reduce((total, roll) => total + roll, 0);
            newAbilities[abilityName] = sum;
        });

        handleChange({ abilities: newAbilities });
    };

    // Initialize abilities object if it doesn't exist
    useEffect(() => {
        if (!charData.abilities || Object.keys(charData.abilities).length === 0) {
            const initialAbilities = {};
            ABILITIES_LIST.forEach(ability => {
                initialAbilities[ability] = 0;
            });
            handleChange({ abilities: initialAbilities });
        }
    }, []);

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <Button
                variant="contained"
                color="primary"
                onClick={rollAllAbilities}
                sx={{ mb: 2 }}
            >
                Roll All Abilities
            </Button>

            <FormGroup
                sx={{ marginTop: '0.5em' }}
            >
                {ABILITIES_LIST.map((abilityName) => (
                    <AbilityRow
                        name={abilityName}
                        key={abilityName}
                        modifier={abilityModifiers[abilityName] || 0}
                        value={charData.abilities?.[abilityName] || 0}
                        onValueChange={(newValue) => updateAbilityScore(abilityName, newValue)}
                    />
                ))}
            </FormGroup>
        </Box>
    );

}

export default RollStep;
