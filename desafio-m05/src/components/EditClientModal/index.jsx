import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import PageContext from '../../context/context';
import EditClientForm from '../EditClientForm';
import './EditClientModal.css'

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

export default function EditClientModal() {
  const { openModalEditClient, setOpenModalEditClient } = useContext(PageContext)
  const handleClose = () => setOpenModalEditClient(false);

  return (
    <div>
      <Modal
        className='client-modal-box'
        open={openModalEditClient}
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
          <EditClientForm />
        </Box>
      </Modal>
    </div>
  );
}