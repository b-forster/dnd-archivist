import React, { useState } from 'react';
import {
    Box, InputLabel, MenuItem, Select,
} from '@mui/material';
import { CLASSES_LIST } from 'constants';


function ClassStep() {
    const [charClass, setCharClass] = useState('');

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
        </Box>
    );

}

export default ClassStep;
