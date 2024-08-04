import React from 'react';
import {
    Box, FormGroup,
} from '@mui/material';
import { ABILITIES_LIST } from 'constants';
import AbilityRow from '../../AbilityRow/AbilityRow';


function RollStep(abilityModifiers) {
    /*** SETS RACE/SUBRACE AND ASSOCIATED ABILITY MODIFIERS ***/

    // let initialAbilityModifiers = Object.fromEntries(ABILITIES_LIST.map(abilityName => [abilityName, 0]));
    // const [abilityModifiers, setAbilityModifiers] = useState(initialAbilityModifiers);

    // const updateAbilityModifiers = (modifiersArr) => {
    //     let newModifiersObj = { ...initialAbilityModifiers };
    //     for (let modifierObj of modifiersArr) {
    //         let abilityName = modifierObj?.['attr'];
    //         if (ABILITIES[abilityName]) {
    //             newModifiersObj[abilityName] = newModifiersObj[abilityName] + modifierObj['value'];
    //         } else {
    //             // TODO: Handle case where user can select which ability to modify (abilityName = 'Any')
    //         }
    //     }
    //     setAbilityModifiers(newModifiersObj);
    // };

    // Update combined race+subrace ability modifiers when either state changes
    // useEffect(() => {
    //     let raceModifiers = RACES[race]?.['modifiers'] || [];
    //     let subraceModifiers = RACES[race]?.['subraces']?.[subrace]?.['modifiers'] || [];

    //     updateAbilityModifiers([...raceModifiers, ...subraceModifiers]);
    // }, [race, subrace]);


    /****** RETURN JSX ******/

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        // onSubmit={handleSave}
        >
            <FormGroup
                sx={{ marginTop: '0.5em' }}
            >
                {ABILITIES_LIST.map((abilityName) => (
                    <AbilityRow
                        name={abilityName}
                        key={abilityName}
                        modifier={abilityModifiers[abilityName] || 0}
                    />
                ))}
            </FormGroup>
        </Box>
    );

}

export default RollStep;
