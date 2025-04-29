import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
    Box, FormGroup, Button,
} from '@mui/material';
import { ABILITIES_LIST } from 'constants';
import { rollAbilityScore, getRandomDelay } from '../../../utils/diceUtils';
import AbilityRow from '../../AbilityRow/AbilityRow';

/**
 * RollStep component for rolling ability scores in character creation
 * 
 * @param {Object} props - Component props
 * @param {Object} props.charData - Character data object
 * @param {Function} props.handleChange - Function to update character data
 * @param {Object} props.abilityModifiers - Modifiers for each ability
 * @returns {JSX.Element} The RollStep component
 */
function RollStep({ charData, handleChange, abilityModifiers = {} }) {
    const [isRollingAll, setIsRollingAll] = useState(false);

    /**
     * Update a specific ability score in the parent component
     * 
     * @param {string} abilityName - The name of the ability to update
     * @param {number} score - The new score value
     */
    const updateAbilityScore = useCallback((abilityName, score) => {
        const newAbilities = { ...charData.abilities, [abilityName]: score };
        handleChange({ abilities: newAbilities });
    }, [charData.abilities, handleChange]);

    /**
     * Roll for all abilities at once
     */
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

    const rollAllAbilities = useCallback(() => {
        // Prevent multiple clicks while rolling
        if (isRollingAll) return;

        // Set rolling state to true to trigger animations
        setIsRollingAll(true);

        // Generate new ability scores
        const newAbilities = { ...charData.abilities };

        // Roll for each ability
        ABILITIES_LIST.forEach(abilityName => {
            // Roll the dice and get a new value
            newAbilities[abilityName] = rollAbilityScore();
        });

        // Update the parent component with all new scores at once
        handleChange({ abilities: newAbilities });

        // Reset the rolling state after a delay
        setTimeout(() => {
            setIsRollingAll(false);
        }, 1000);
    }, [isRollingAll, charData.abilities, handleChange]);

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
                {ABILITIES_LIST.map((abilityName, index) => (
                    <AbilityRow
                        name={abilityName}
                        key={index}
                        index={index}
                        modifier={abilityModifiers[abilityName] || 0}
                        value={charData.abilities?.[abilityName] || 0}
                        onValueChange={(newValue) => updateAbilityScore(abilityName, newValue)}
                        triggerRoll={isRollingAll || false}
                    />
                ))}
            </FormGroup>
        </Box>
    );

}

export default RollStep;
