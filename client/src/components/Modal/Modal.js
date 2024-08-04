import React, { useState } from 'react';
import './Modal.css';
import CreateCharWizard from 'components/CreateCharWizard/CreateCharWizard';
import {
    Button, Dialog, DialogContent, DialogContentText,
    DialogTitle,
} from '@mui/material';


function Modal({ title, summary, buttonLabel }) {
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
            <Button variant="outlined" onClick={handleClickOpen}>
                <a>{buttonLabel}</a>
            </Button>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                maxWidth='lg'
            >
                <DialogTitle class="modal-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {summary}
                    </DialogContentText>
                    <CreateCharWizard />
                </DialogContent>
                {/* <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save & Close</Button>
                </DialogActions> */}
            </Dialog>
        </React.Fragment >
    );
}

export default Modal;