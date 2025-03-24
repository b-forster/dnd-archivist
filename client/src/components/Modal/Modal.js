import React, { useState } from 'react';
import './Modal.css';
import CreateCharWizard from 'components/CreateCharWizard/CreateCharWizard';
import {
    Button, Dialog, DialogContent, DialogContentText,
    DialogTitle, Typography, useTheme
} from '@mui/material';


function Modal({ title, summary, buttonLabel, onCharacterCreated }) {
    const theme = useTheme();

    /*** OPENING/CLOSING MODAL ***/

    const [isOpen, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
                sx={{
                    mt: 2,
                    fontWeight: 'bold'
                }}
            >
                {buttonLabel}
            </Button>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                maxWidth='lg'
                PaperProps={{
                    sx: {
                        backgroundColor: '#ffffff',
                        border: `2px solid ${theme.palette.primary.main}`,
                        borderRadius: '8px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
                    }
                }}
            >
                <DialogTitle
                // sx={{
                //     color: theme.palette.primary.main,
                //     // borderBottom: `1px solid ${theme.palette.primary.main}`,
                //     fontWeight: 'bold',
                //     fontSize: '1.5rem'
                // }}
                ><Typography variant='h1' fontSize='1.5rem'>
                        {title}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ color: theme.palette.text.secondary }}>
                        {summary}
                    </DialogContentText>
                    <CreateCharWizard onCharacterCreated={onCharacterCreated} onComplete={handleClose} />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}

export default Modal;
