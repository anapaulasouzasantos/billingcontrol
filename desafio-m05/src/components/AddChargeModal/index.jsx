import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PageContext from '../../context/context';
import AddChargeFormModal from '../AddChargeFormModal';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 491,
    height: 623,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '30px',
    p: 4,
};

export default function AddChargeModal() {
    const { openChargeModal, setOpenChargeModal } = React.useContext(PageContext);
    const handleClose = () => setOpenChargeModal(false);

    return (
        <div>
            <Modal
                open={openChargeModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box sx={style}>
                    <AddChargeFormModal />
                </Box>
            </Modal>
        </div>
    );
}