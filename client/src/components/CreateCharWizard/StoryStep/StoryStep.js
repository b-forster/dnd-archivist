import React from 'react';
import {
    Box, FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup, TextField,
} from '@mui/material';
import { pink, blue, green } from '@mui/material/colors';

function StoryStep({ charData, handleChange }) {


    return (
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
                name="name"
                value={charData.name}
                onChange={(e) => handleChange({ name: e.target.value })}
                fullWidth
                size='small'
                required
            />
            {/* <FormControl> */}
            <FormLabel id="demo-row-radio-buttons-group-label">Gender:</FormLabel>
            <RadioGroup
                row
                name="row-radio-buttons-group"
                value={charData.gender || ''}
                onChange={(e) => handleChange({ gender: e.target.value })}
            >
                <FormControlLabel
                    name="gender"
                    value="female"
                    control={<Radio />}
                    label="Female"
                />
                <FormControlLabel
                    name="gender"
                    value="male"
                    control={<Radio />}
                    label="Male"
                />
                <FormControlLabel
                    name="gender"
                    value="other"
                    control={<Radio />}
                    label="Non-binary / Other"
                />
            </RadioGroup>
            {/* </FormControl> */}
        </Box>
    );

}

export default StoryStep;
