import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import PageContext from '../../context/context';
import ClientForm from '../ClientForm';
import './ClientModal.css'

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '30%',
  height: '85%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '30px',
  p: 2
};

export default function ClientModal() {
  const { openModalClient, setOpenModalClient } = useContext(PageContext)
  const handleClose = () => setOpenModalClient(false);

  return (
    <div>
      <Modal
        className='client-modal-box'
        open={openModalClient}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={style} >
          <ClientForm />
        </Box>
      </Modal>
    </div>
  );
}