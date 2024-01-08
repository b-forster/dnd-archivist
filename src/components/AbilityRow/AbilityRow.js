import './AbilityRow.css';
import { ABILITIES } from 'constants';
import {
    Input, InputLabel, Slider,
} from '@mui/material';

function AbilityRow(props) {
    let abilityName = props.name;
    if (!ABILITIES[abilityName]) return;

    let abbr = ABILITIES[abilityName].abbr;

    const formatModifierString = () => {
        let modifier = props.modifier;
        return (modifier && modifier > 0) ? `+${modifier}` : '';
    }

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
                // value={}
                min={0}
                max={20}
                onChange={() => { }}
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
                aria-label={abilityName}
                defaultValue={0}
                // getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                min={1}
                max={20}
                sx={{ width: '10em', marginLeft: '1em' }}
            />
        </div>
    )
}

export default AbilityRow;
