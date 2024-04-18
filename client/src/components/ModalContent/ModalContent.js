import React, { useState, useEffect } from 'react';
import './ModalContent.css';
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogContentText,
    DialogTitle, FormGroup, InputLabel, MenuItem, Select, TextField
} from '@mui/material';
import { RACES, RACES_LIST, ABILITIES, ABILITIES_LIST, CLASSES_LIST } from 'constants';
import AbilityRow from '../AbilityRow/AbilityRow';


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
    const [charName, setCharName] = useState('');
    const [race, setRace] = useState('');
    const [subrace, setSubrace] = useState('');
    const [charClass, setCharClass] = useState('');

    const handleSelectRace = (e) => {
        let raceName = e.target.value;
        setRace(raceName);
        setSubrace('');
    };

    const handleSelectSubrace = (e) => {
        let subraceName = e.target.value;
        setSubrace(subraceName);
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

    async function handleSave(e) {
        e.preventDefault();
        const data = { name: charName, race, subrace, class: charClass, }

        await fetch("http://localhost:4000/character/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .catch(error => {
                window.alert(error);
                return;
            });
    }

    // Update combined race+subrace ability modifiers when either state changes
    useEffect(() => {
        let raceModifiers = RACES[race]?.['modifiers'] || [];
        let subraceModifiers = RACES[race]?.['subraces']?.[subrace]?.['modifiers'] || [];

        updateAbilityModifiers([...raceModifiers, ...subraceModifiers]);
    }, [race, subrace]);

    /*** HELPER FUNCTIONS ***/

    const getSubraces = () => {
        let subraces = RACES[race]?.['subraces'];
        return subraces ? Object.keys(subraces) : [];
    };

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
                        Enter your character&apos;s description and attributes below.
                    </DialogContentText>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSave}
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
                            name="name"
                            value={charName}
                            onChange={(e) => setCharName(e.target.value)}
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
                            value={race}
                            name="race"
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
                                    value={subrace}
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

                        <InputLabel
                            id="class-dropdown-label"
                            htmlFor="class-dropdown"
                            sx={{ marginTop: '1em' }}
                        >
                            Class:
                        </InputLabel>
                        <Select
                            id="class-dropdown"
                            value={charClass}
                            name="char-class"
                            onChange={(e) => setCharClass(e.target.value)}
                            fullWidth
                            size='small'
                            required
                        >
                            {CLASSES_LIST.map((className) => (
                                <MenuItem
                                    key={className}
                                    value={className}
                                >
                                    {className}
                                </MenuItem>
                            ))}
                        </Select>

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
                        <Button type="submit">Save & Close</Button>
                    </Box>
                </DialogContent>
                {/* <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save & Close</Button>
                </DialogActions> */}
            </Dialog>
        </React.Fragment >
    );
}

export default ModalContent;
