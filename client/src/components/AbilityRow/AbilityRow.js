import React, { useEffect, useState } from 'react';
import './AbilityRow.css';
import { ABILITIES } from 'constants';
import {
    Input, InputLabel, Slider,
} from '@mui/material';


function AbilityRow({ name, modifier, value = 0, onValueChange }) {
    const [inputVal, setInputVal] = useState(value);
    const [modifiedVal, setModifiedVal] = useState(value + modifier);
    const [isShaking, setShaking] = useState(false);

    // Update when props change
    useEffect(() => {
        setInputVal(value);
        setModifiedVal(value + modifier);
    }, [value, modifier]);

    let abilityName = name;
    if (!ABILITIES[abilityName]) return;

    let abbr = ABILITIES[abilityName].abbr;

    const formatModifierString = () => {
        return (modifier > 0) ? `+${modifier}` : '';
    };

    const handleChangeInputVal = (e) => {
        const newValue = parseInt(e.target.value) || 0;
        setInputVal(newValue);
        setModifiedVal(newValue + modifier);
        if (onValueChange) {
            onValueChange(newValue);
        }
    };

    const handleChangeSliderVal = (e) => {
        const sliderVal = parseInt(e.target.value) || 0;
        setModifiedVal(sliderVal);
        const newInputVal = sliderVal - modifier;
        setInputVal(newInputVal);
        if (onValueChange) {
            onValueChange(newInputVal);
        }
    };

    const handleDiceClick = () => {
        // Trigger animation
        setShaking(true);
        setTimeout(() => setShaking(false), 300);
        // Roll for stat: 
        // 1. Roll 4 x 6-sided dice
        // 2. Drop lowest number
        // 3. Add remaining total
        const NUM_DIE_SIDES = 6;
        const NUM_ROLLS = 4;
        let dieRolls = [];

        while (dieRolls.length < NUM_ROLLS) {
            let dieRoll = Math.ceil(Math.random() * NUM_DIE_SIDES);
            dieRolls.push(dieRoll);
        }

        let dieRollsDropLowest = dieRolls.sort().slice(1, NUM_ROLLS);

        let dieRollsTotal = dieRollsDropLowest.reduce((total, current) => {
            return total + current;
        }, 0);

        const newValue = dieRollsTotal;
        setInputVal(newValue);
        setModifiedVal(newValue + modifier);
        if (onValueChange) {
            onValueChange(newValue);
        }
    };


    return (
        <div className="abilities-input-row">
            <InputLabel
                id={`${abbr}-input-label`}
                htmlFor={`${abbr}-input`}
            >
                {abilityName}:
            </InputLabel>

            <a className="d20-img-link" onClick={handleDiceClick}>
                <img src="images/d20.png" className={isShaking ? 'shake' : ''} alt={`click dice to roll for${abilityName}`} />
            </a>

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
            />
        </div>
    );
}

// TODO: Convert project to ts?
// AbilityRow.propTypes = {
//     name: React.PropTypes.string.isRequired,
//     modifier: React.PropTypes.number,
// };

export default AbilityRow;
