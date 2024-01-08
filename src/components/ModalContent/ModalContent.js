import React, { useState, useEffect } from 'react';
import './ModalContent.css';
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogContentText,
    DialogTitle, Divider, FormControl, FormGroup, Input, InputLabel, MenuItem,
    Select, Slider, TextField
} from '@mui/material';
import { RACES, RACES_LIST, ABILITIES, ABILITIES_LIST } from 'constants';


function ModalContent() {
    /*** OPENING/CLOSING MODAL ***/

    const [isOpen, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    /*** UPDATING RACE/SUBCLASS AND ASSOCIATED ABILITY MODIFIERS ***/

    let initialAbilityModifiers = Object.fromEntries(ABILITIES_LIST.map(abilityName => [abilityName, 0]));
    const [abilityModifiers, setAbilityModifiers] = useState(initialAbilityModifiers);
    const [race, setRace] = useState('');
    const [subrace, setSubrace] = useState('');

    const handleSelectRace = (e) => {
        let raceName = e.target.value;
        setRace(raceName);
    }

    const handleSelectSubrace = (e) => {
        let subraceName = e.target.value;
        setSubrace(subraceName);
    }

    const updateAbilityModifiers = (modifiersArr) => {
        console.log(modifiersArr)
        let newModifiersObj = { ...initialAbilityModifiers };
        for (let modifierObj of modifiersArr) {
            let abilityName = modifierObj?.['attr']
            if (ABILITIES[abilityName]) {
                newModifiersObj[abilityName] = newModifiersObj[abilityName] + modifierObj['value'];
            } else {
                // TODO: Handle case where user can select which ability to modify (abilityName = 'Any')
            }
        }
        console.log(newModifiersObj)
        setAbilityModifiers(newModifiersObj);
    }

    // Update combined race+subrace ability modifiers when either state changes
    useEffect(() => {
        let raceModifiers = RACES[race]?.['modifiers'] || [];
        let subraceModifiers = RACES[race]?.['subraces']?.[subrace]?.['modifiers'] || [];

        updateAbilityModifiers([...raceModifiers, ...subraceModifiers])
    }, [race, subrace])

    /*** HELPER FUNCTIONS ***/

    const getSubraces = () => {
        let subraces = RACES[race]?.['subraces']
        return subraces ? Object.keys(subraces) : [];
    }

    /****** RETURN JSX ******/


    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                <a>+ Create a Character</a>
            </Button>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                maxWidth='lg'
            >
                <DialogTitle>Roll a New Character</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter your character's description and attributes below.
                    </DialogContentText>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                    >
                        <InputLabel
                            id="name-input-label"
                            htmlFor="name-input"
                            sx={{ marginTop: '1em' }}
                        >
                            Name:
                        </InputLabel>
                        <TextField
                            id="name-input"
                            fullWidth
                            size='small'
                            required
                        />
                        <InputLabel
                            id="race-dropdown-label"
                            htmlFor="race-dropdown"
                            sx={{ marginTop: '1em' }}
                        >
                            Race:
                        </InputLabel>
                        <Select
                            id="race-dropdown"
                            label="Race"
                            value={race}
                            onChange={handleSelectRace}
                            fullWidth
                            size='small'
                            required
                        >
                            {RACES_LIST.map((raceName) => (
                                <MenuItem
                                    key={raceName}
                                    value={raceName}
                                >
                                    {raceName}
                                </MenuItem>
                            ))}
                        </Select>
                        {getSubraces().length ? (
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
                        ) : <></>}
                        {ABILITIES_LIST.map((abilityName) => (
                            <FormGroup
                                key={abilityName}
                                className="abilities-input-row"
                                row
                                sx={{ marginTop: '0.5em' }}
                            >

                                <InputLabel
                                    id={`${ABILITIES[abilityName]['abbr']}-input-label`}
                                    htmlFor={`${ABILITIES[abilityName]['abbr']}-input`}
                                    sx={{ margin: ' auto 0' }}
                                >
                                    {abilityName}:
                                </InputLabel>
                                <Input
                                    type="number"
                                    key={abilityName}
                                    id={`${ABILITIES[abilityName]['abbr']}-input`}
                                    name={`stats[${ABILITIES[abilityName]['abbr']}]`}
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
                                    aria-label={ABILITIES[abilityName]['abbr']}
                                    defaultValue={0}
                                    // getAriaValueText={valuetext}
                                    valueLabelDisplay="auto"
                                    min={1}
                                    max={20}
                                    sx={{ width: '10em', marginLeft: '3em' }}
                                />
                            </FormGroup>
                        ))}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save & Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default ModalContent;
