import React from 'react';
import {
    Box, InputLabel, MenuItem, Select,
} from '@mui/material';
import { CLASSES_LIST } from 'constants';


function ClassStep({ charData, handleChange }) {

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        // onSubmit={handleSave}
        >
            <InputLabel
                id="class-dropdown-label"
                htmlFor="class-dropdown"
                sx={{ marginTop: '1em' }}
            >
                Class:
            </InputLabel>
            <Select
                id="class-dropdown"
                value={charData.class}
                name="class"
                onChange={(e) => handleChange({ class: e.target.value })}
                displayEmpty
                fullWidth
                size='small'
                required
            >
                <MenuItem value="" divider>
                    <em>Select a class</em>
                </MenuItem>
                {CLASSES_LIST.map((className) => (
                    <MenuItem
                        key={className}
                        value={className}
                    >
                        {className}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );

}

export default ClassStep;
