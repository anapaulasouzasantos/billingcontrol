import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddClientForm from '../AddClientForm';
import PageContext from '../../context/context'
import { useContext } from 'react';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '35%',
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '30px',
  p: 4,
};

export default function AddClientModal() {
  const { openModalClient, setOpenModalClient } = useContext(PageContext)
  const handleClose = () => setOpenModalClient(false);

  return (
    <div>
      <Modal
        open={openModalClient}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box sx={style} >
          <AddClientForm />
        </Box>
      </Modal>
    </div>
  );
}