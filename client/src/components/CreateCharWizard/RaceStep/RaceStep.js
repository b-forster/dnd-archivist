import React, { useState, useEffect } from 'react';
import {
    Box, InputLabel, MenuItem, Select,
} from '@mui/material';
import { RACES, RACES_LIST, ABILITIES, ABILITIES_LIST } from 'constants';


function RaceStep({ charData, handleChange }) {
    /*** SETS RACE/SUBRACE AND ASSOCIATED ABILITY MODIFIERS ***/

    let initialAbilityModifiers = Object.fromEntries(ABILITIES_LIST.map(abilityName => [abilityName, 0]));
    const [abilityModifiers, setAbilityModifiers] = useState(initialAbilityModifiers);

    const handleSelectRace = (e) => {
        let raceName = e.target.value;
        // Update both race and subrace in a single state update
        handleChange({
            race: raceName,
            subrace: ''
        });
    };

    const handleSelectSubrace = (e) => {
        let subraceName = e.target.value;
        handleChange({ subrace: subraceName });
    };

    const updateAbilityModifiers = (modifiersArr) => {
        let newModifiersObj = { ...initialAbilityModifiers };
        for (let modifierObj of modifiersArr) {
            let abilityName = modifierObj?.['attr'];
            if (ABILITIES[abilityName]) {
                newModifiersObj[abilityName] = newModifiersObj[abilityName] + modifierObj['value'];
            } else {
                // TODO: Handle case where user can select which ability to modify (abilityName = 'Any')
            }
        }
        setAbilityModifiers(newModifiersObj);
    };

    // Update combined race+subrace ability modifiers when either state changes
    useEffect(() => {
        let raceModifiers = RACES[charData.race]?.['modifiers'] || [];
        let subraceModifiers = RACES[charData.race]?.['subraces']?.[charData.subrace]?.['modifiers'] || [];

        updateAbilityModifiers([...raceModifiers, ...subraceModifiers]);
    }, [charData]);

    /*** HELPER FUNCTIONS ***/

    const getSubraces = () => {
        let subraces = RACES[charData.race]?.['subraces'];
        return subraces ? Object.keys(subraces) : [];
    };

    /****** RETURN JSX ******/

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        // onSubmit={handleSave}
        >
            <InputLabel
                id="race-dropdown-label"
                htmlFor="race-dropdown"
                sx={{ marginTop: '1em' }}
            >
                Race:
            </InputLabel>
            <Select
                id="race-dropdown"
                value={charData.race}
                name="race"
                onChange={handleSelectRace}
                displayEmpty
                fullWidth
                size='small'
                required
            >
                <MenuItem value="" divider>
                    <em>Select a race</em>
                </MenuItem>
                {RACES_LIST.map((raceName) => (
                    <MenuItem
                        key={raceName}
                        value={raceName}
                    >
                        {raceName}
                    </MenuItem>
                ))}
            </Select>
            {getSubraces().length > 0 && (
                <div id="subrace-form-group">
                    <InputLabel
                        id="subrace-dropdown-label"
                        htmlFor="subrace-dropdown"
                        sx={{ marginTop: '1em' }}
                    >
                        Subrace (optional):
                    </InputLabel>
                    <Select
                        id="subrace-dropdown"
                        label="Subrace"
                        value={charData.subrace}
                        name="subrace"
                        fullWidth
                        size='small'
                        onChange={(e) => handleSelectSubrace(e)}
                    >
                        <MenuItem value="" divider>
                            <em>None</em>
                        </MenuItem>
                        {getSubraces().map((raceName) => (
                            <MenuItem
                                key={raceName}
                                value={raceName}
                            >
                                {raceName}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            )}
        </Box>
    );

}

export default RaceStep;
