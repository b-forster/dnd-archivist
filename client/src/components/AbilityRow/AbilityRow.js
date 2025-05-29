import React, { useEffect, useState, useCallback, useRef } from 'react';
import './AbilityRow.css';
import { ABILITIES } from 'constants';
import {
    rollAbilityScore,
    getRandomDelay,
    getAnimationDuration
} from '../../utils/diceUtils';
import {
    ButtonBase,
    Input, InputLabel, Slider,
} from '@mui/material';

/**
 * AbilityRow component for displaying and managing a single ability score
 * 
 * @param {Object} props - Component props
 * @param {string} props.name - The name of the ability
 * @param {number} props.index - The index of the ability in the list (used for alternating animations)
 * @param {number} props.modifier - The modifier to apply to the ability score
 * @param {number} props.value - The current value of the ability score
 * @param {Function} props.onValueChange - Callback function when the value changes
 * @param {boolean} props.triggerRoll - Whether to trigger a dice roll
 * @returns {JSX.Element|null} The AbilityRow component or null if ability doesn't exist
 */
const AbilityRow = ({
    name: abilityName,
    index,
    modifier,
    value = 0,
    onValueChange,
    triggerRoll = false
}) => {
    const abbr = ABILITIES[abilityName]?.abbr || abilityName;

    // Use lazy initialization to avoid re-initializing on every render
    const [inputVal, setInputVal] = useState(() => value);
    const [modifiedVal, setModifiedVal] = useState(() => value + modifier);
    const [isShaking, setIsShaking] = useState(false);

    // Determine which animation class to use
    const shakeClass = index % 2 === 1 ? 'shake-alt' : 'shake';

    /**
     * Trigger the dice shake animation
     */
    const triggerAnimation = useCallback(() => {
        // Trigger animation with random duration
        const animationDuration = getAnimationDuration();
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), animationDuration);
    }, []);

    /**
     * Roll the dice and update the ability score value
     * @param {number} delay - Delay in milliseconds before rolling
     */
    const rollDiceAndUpdate = useCallback((delay = 0) => {
        setTimeout(() => {
            triggerAnimation();

            const newValue = rollAbilityScore();

            setInputVal(newValue);
            setModifiedVal(newValue + modifier);

            // Notify the parent component of the new value
            onValueChange?.(newValue);
        }, delay);
    }, [triggerAnimation, modifier, onValueChange]);

    /**
     * Handle manual dice click event
     */
    const handleDiceClick = useCallback(() => {
        rollDiceAndUpdate(0); // No delay for manual clicks
    }, [rollDiceAndUpdate]);

    /**
     * Format the modifier string for display
     * @returns {string} Formatted modifier string
     */
    const formatModifierString = () => {
        if (!modifier) return null;
        // Format it with a + sign if positive
        return (modifier > 0) ? `+${modifier}` : modifier.toString();
    };

    /**
     * Handle input value change event
     * @param {Object} e - Event object
     */
    const handleChangeInputVal = (e) => {
        const newValue = parseInt(e.target.value) || 0;
        setInputVal(newValue);
        setModifiedVal(newValue + modifier);
        if (onValueChange) {
            onValueChange(newValue);
        }
    };

    /**
     * Handle slider value change event
     * @param {Object} e - Event object
     */
    const handleChangeSliderVal = (e) => {
        const sliderVal = parseInt(e.target.value) || 0;
        setModifiedVal(sliderVal);
        const newInputVal = sliderVal - modifier;
        setInputVal(newInputVal);
        if (onValueChange) {
            onValueChange(newInputVal);
        }
    };

    // Use ref to track when the last roll was triggered
    const lastRollTimeRef = useRef(0);

    /**
     * Effect to handle external roll triggers from parent component
     * Prevents rolling too frequently by enforcing a minimum time between rolls
     */
    useEffect(() => {
        if (triggerRoll) {
            const now = Date.now();
            // Only roll if it's been at least 1 second since the last roll
            // This prevents multiple rolls from happening too quickly
            if (now - lastRollTimeRef.current > 1000) {
                // Add a small random delay for visual variety
                const delay = getRandomDelay(0, 100);

                // Roll the dice with the calculated delay
                rollDiceAndUpdate(delay);

                // Update the last roll time
                lastRollTimeRef.current = now;
            }
        }
    }, [triggerRoll, rollDiceAndUpdate]);

    // Use ref to track previous props
    const prevPropsRef = useRef({ value, modifier });

    /**
     * Effect to synchronize component state with props
     * Only updates local state when props actually change to prevent unnecessary renders
     */
    useEffect(() => {
        const prevProps = prevPropsRef.current;

        // Only update if props have changed
        if (prevProps.value !== value || prevProps.modifier !== modifier) {
            setInputVal(value);
            setModifiedVal(value + modifier);

            // Update the ref with current props
            prevPropsRef.current = { value, modifier };
        }
    }, [value, modifier]);

    // Return null if ability doesn't exist
    if (!ABILITIES[abilityName]) {
        return null;
    }

    return (
        <div className="abilities-input-row">
            <InputLabel
                id={`${abbr}-input-label`}
                htmlFor={`${abbr}-input`}
            >
                {abilityName}:
            </InputLabel>

            <ButtonBase className="d20-img-link" onClick={handleDiceClick}>
                <img src="images/d20.png" className={isShaking ? shakeClass : ''} alt={`click dice to roll for${abilityName}`} />
            </ButtonBase>

            <Input
                type="number"
                id={`${abbr}-input`}
                name={`stats.${abbr}`}
                value={inputVal}
                min={0}
                max={20}
                onChange={handleChangeInputVal}
                sx={{
                    width: '2em', padding: '0', fontFamily: 'Caveat, cursive', fontSize:
                        '1.5em',
                }}
                size='small'
                required
            />

            <span className='ability-modifier-text'>
                {formatModifierString()}
            </span>

            <Slider
                defaultValue={0}
                value={modifiedVal}
                onChange={handleChangeSliderVal}
                valueLabelDisplay="auto"
                aria-label={abilityName}
                getAriaValueText={() => { return modifiedVal.toString(); }}
                min={1}
                max={20}
                sx={{ width: '10em', marginLeft: '1em' }}
                color='secondary'
            />
        </div>
    );
};

export default AbilityRow;
