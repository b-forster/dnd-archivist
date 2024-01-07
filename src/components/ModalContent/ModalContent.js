import * as React from 'react';
import './ModalContent.css';
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogContentText,
    DialogTitle, Divider, FormControl, FormGroup, Input, InputLabel, MenuItem,
    Select, Slider, TextField
} from '@mui/material';
import { RACES_LIST, ABILITIES_LIST } from 'constants';


function ModalContent() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                <a>+ Create a Character</a>
            </Button>
            <Dialog open={open} onClose={handleClose}>
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
                        <InputLabel id="race-dropdown-label">Race:</InputLabel>
                        <Select
                            labelId="race-dropdown-label"
                            id="race-dropdown"
                            label="Race"
                            fullWidth
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
                        <Divider />
                        {ABILITIES_LIST.map((abilityName) => (
                            <FormGroup row>
                                <InputLabel id={`${abilityName}-input-label`} sx={{ margin: ' auto 0' }}>
                                    {abilityName}:
                                </InputLabel>
                                <Input
                                    type="number" id={`${abilityName}-input`} labelId={`${abilityName}-input-label`} name={`stats[${abilityName}]`}
                                    sx={{ width: '3em' }}
                                />
                                {/* <span class="stat-bonus" id="strength"></span>
                        <button type="button" class="die-img" disabled>20</button> */}
                                <Slider
                                    aria-label={abilityName}
                                    defaultValue={0}
                                    // getAriaValueText={valuetext}
                                    valueLabelDisplay="auto"
                                    min={1}
                                    max={20}
                                    sx={{ width: '10em', verticalAlign: 'middle', marginLeft: '3em' }}
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
