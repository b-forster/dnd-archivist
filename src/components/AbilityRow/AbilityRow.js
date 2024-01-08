// import './AbilityRow.css';
import { ABILITIES } from 'constants';
import {
    FormGroup, Input, InputLabel, Slider
} from '@mui/material';

function AbilityRow(props) {
    let abilityName = props.name;
    if (!ABILITIES[abilityName]) return;

    let abbr = ABILITIES[abilityName].abbr

    console.log(ABILITIES[abilityName], abbr)
    return (
        <FormGroup
            key={abilityName}
            className="abilities-input-row"
            row
            sx={{ marginTop: '0.5em' }}
        >

            <InputLabel
                id={`${abbr}-input-label`}
                htmlFor={`${abbr}-input`}
                sx={{ margin: 'auto 0' }}
            >
                {abilityName}:
            </InputLabel>
            <Input
                type="number"
                id={`${abbr}-input`}
                name={`stats[${abbr}]`}
                // value={}
                min='0'
                max='20'
                onChange={() => { }}
                sx={{
                    width: '3em', padding: '0', fontFamily: 'Caveat, cursive', fontSize:
                        '1.5em'
                }}
                required
            />
            {/* <span class="stat-modifier" id="strength"></span>
        <button type="button" class="die-img" disabled>20</button> */}
            <Slider
                aria-label={abilityName}
                defaultValue={0}
                // getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                min={1}
                max={20}
                sx={{ width: '10em', marginLeft: '3em' }}
            />
        </FormGroup>
    )
}

export default AbilityRow;
