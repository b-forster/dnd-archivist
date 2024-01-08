import React, { useState } from 'react';
import './AbilityRow.css';
import { ABILITIES } from 'constants';
import {
    Input, InputLabel, Slider,
} from '@mui/material';


function AbilityRow({ name, modifier }) {
    const [inputVal, setInputVal] = useState(0);
    const [modifiedVal, setModifiedVal] = useState(0);

    let abilityName = name;
    if (!ABILITIES[abilityName]) return;

    let abbr = ABILITIES[abilityName].abbr;

    const formatModifierString = () => {
        return (modifier > 0) ? `+${modifier}` : '';
    };

    const handleChangeInputVal = (e) => {
        let inputVal = parseInt(e.target.value);
        setInputVal(inputVal);
        setModifiedVal(inputVal + modifier);
    };

    const handleChangeSliderVal = (e) => {
        let sliderVal = e.target.value;
        setModifiedVal(sliderVal);
        setInputVal(sliderVal - modifier);
    };

    return (
        <div className="abilities-input-row">
            <InputLabel
                id={`${abbr}-input-label`}
                htmlFor={`${abbr}-input`}
            >
                {abilityName}:
            </InputLabel>

            <Input
                type="number"
                id={`${abbr}-input`}
                name={`stats[${abbr}]`}
                value={inputVal}
                min={0}
                max={20}
                onChange={handleChangeInputVal}
                sx={{
                    width: '3em', padding: '0', fontFamily: 'Caveat, cursive', fontSize:
                        '1.5em',
                }}
                size='small'
                required
            />

            {/* <span class="stat-modifier" id="strength"></span>
        <button type="button" class="die-img" disabled>20</button> */}

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
