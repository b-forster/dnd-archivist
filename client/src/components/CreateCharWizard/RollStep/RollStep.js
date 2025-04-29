import React from 'react';
import {
    Box, FormGroup, Button,
} from '@mui/material';
import { ABILITIES_LIST } from 'constants';
import AbilityRow from '../../AbilityRow/AbilityRow';
import useDiceRoller from '../../../hooks/useDiceRoller';

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
    /**
     * Update ability scores in the parent component
     * 
     * @param {Object} newAbilities - New abilities object
     */
    const updateAbilities = (newAbilities) => {
        handleChange({ abilities: newAbilities });
    };

    /**
     * Update a specific ability score
     * 
     * @param {string} abilityName - The name of the ability to update
     * @param {number} score - The new score value
     */
    const updateAbilityScore = (abilityName, score) => {
        const newAbilities = {
            ...charData.abilities,
            [abilityName]: score
        };
        updateAbilities(newAbilities);
    };

    // Use the dice roller hook
    const { isRolling, rollAll } = useDiceRoller({
        abilities: charData.abilities || {},
        onRollComplete: updateAbilities,
        abilitiesList: ABILITIES_LIST
    });

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <Button
                variant="contained"
                color="primary"
                onClick={rollAll}
                sx={{ mb: 2 }}
                disabled={isRolling}
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
                        triggerRoll={isRolling || false}
                    />
                ))}
            </FormGroup>
        </Box>
    );
}

export default RollStep;
