import React, { useState } from 'react';
import './Modal.css';
import CreateCharWizard from 'components/CreateCharWizard/CreateCharWizard';
import {
    Button, Dialog, DialogContent, DialogContentText,
    DialogTitle, Typography, useTheme, Box
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

    // Create the SVG for the jagged border using the theme color
    const primaryColor = theme.palette.primary.main;
    const primaryColorHex = primaryColor.replace('#', '%23'); // URL encode the # character
    const primaryColorTransparent = `${primaryColor}33`; // Add 33 for 20% opacity

    // SVG for the jagged border
    const svgUrl = `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' stroke='${primaryColorHex}' stroke-width='4' stroke-dasharray='6, 14, 11, 8' stroke-dashoffset='0' stroke-linecap='square'/%3E%3C/svg%3E")`;

    // CSS variables for the parchment border
    const parchmentBorderStyle = {
        '--primary-color': primaryColor,
        '--primary-color-transparent': primaryColorTransparent,
    };

    return (
        <React.Fragment>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
                sx={{
                    mb: 3,
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
                    className: 'parchment-border',
                    sx: {
                        backgroundColor: 'transparent',
                        borderRadius: '8px',
                        boxShadow: 'none',
                        overflow: 'visible',
                        ...parchmentBorderStyle,
                        padding: '1em',
                        '&::before': {
                            backgroundImage: svgUrl,
                        }
                    }
                }}
            >
                <Box className="parchment-background"></Box>
                <Box className="parchment-content">
                    <DialogTitle sx={{ padding: '0 0 16px 0' }}>
                        <Typography
                            variant='h1'
                            fontSize='1.5rem'
                            color="primary.main"
                            sx={{ fontWeight: 'bold' }}
                        >
                            {title}
                        </Typography>
                    </DialogTitle>
                    <DialogContent sx={{ padding: 0 }}>
                        <DialogContentText sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                            {summary}
                        </DialogContentText>
                        <CreateCharWizard onCharacterCreated={onCharacterCreated} onComplete={handleClose} />
                    </DialogContent>
                </Box>
            </Dialog>
        </React.Fragment>
    );
}

export default Modal;
