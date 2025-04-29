import { useState, useCallback, useEffect } from 'react';
import { rollAbilityScore } from '../utils/diceUtils';

/**
 * Custom hook for managing dice rolling functionality
 * 
 * @param {Object} options - Configuration options
 * @param {Object} options.abilities - Current abilities object
 * @param {Function} options.onRollComplete - Callback function when rolling is complete
 * @param {Array} options.abilitiesList - List of ability names to roll for
 * @returns {Object} Dice rolling state and functions
 */
export default function useDiceRoller({ abilities, onRollComplete, abilitiesList }) {
    const [isRolling, setIsRolling] = useState(false);

    // Initialize abilities if they don't exist
    useEffect(() => {
        if (!abilities || Object.keys(abilities).length === 0) {
            const initialAbilities = {};
            abilitiesList.forEach(ability => {
                initialAbilities[ability] = 0;
            });
            onRollComplete(initialAbilities);
        }
    }, [abilities, onRollComplete, abilitiesList]);

    // Roll all abilities at once
    const rollAll = useCallback(() => {
        // Prevent multiple clicks while rolling
        if (isRolling) return;

        // Set rolling state to true to trigger animations
        setIsRolling(true);

        // Generate new ability scores
        const newAbilities = { ...abilities };

        // Roll for each ability
        abilitiesList.forEach(abilityName => {
            // Roll the dice and get a new value
            newAbilities[abilityName] = rollAbilityScore();
        });

        // Update the parent component with all new scores at once
        onRollComplete(newAbilities);

        // Reset the rolling state after a delay
        const timerId = setTimeout(() => {
            setIsRolling(false);
        }, 1000);

        // Clean up the timeout if the component unmounts
        return () => clearTimeout(timerId);
    }, [isRolling, abilities, onRollComplete, abilitiesList]);

    // Roll a single ability
    const rollSingle = useCallback((abilityName) => {
        const newAbilities = {
            ...abilities,
            [abilityName]: rollAbilityScore()
        };
        onRollComplete(newAbilities);
    }, [abilities, onRollComplete]);

    return {
        isRolling,
        rollAll,
        rollSingle
    };
}
