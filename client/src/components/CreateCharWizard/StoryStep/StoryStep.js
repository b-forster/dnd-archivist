import React, { useState } from 'react';
import {
    Box, FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField,
} from '@mui/material';
import { pink, blue, green } from '@mui/material/colors';

function StoryStep() {
    const [charName, setCharName] = useState('');
    const [gender, setGender] = useState('');

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        // onSubmit={handleSave}
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
            {/* <FormControl> */}
            <FormLabel id="demo-row-radio-buttons-group-label">Gender:</FormLabel>
            <RadioGroup
                row
                name="row-radio-buttons-group"
                onChange={setGender}
            >
                <FormControlLabel
                    name="female"
                    value={gender}
                    control={<Radio />}
                    label="Female"
                />
                <FormControlLabel
                    name="male"
                    value={gender}
                    control={<Radio />}
                    label="Male"
                />
                <FormControlLabel
                    name="other"
                    value={gender}
                    control={<Radio />}
                    label="Non-binary / Other"
                />
            </RadioGroup>
            {/* </FormControl> */}
        </Box>
    );

}

export default StoryStep;
