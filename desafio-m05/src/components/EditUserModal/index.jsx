import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditUserForm from '../EditUserFormModal';
import PageContext from '../../context/context'
import { useContext } from 'react';

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

export default function EditUserModal() {
  const { open, setOpen, setModalProfile } = useContext(PageContext)
  const handleClose = () => {
    setOpen(false);
    setModalProfile(false);
  }

  return (
    <div>
      <Modal
        open={open}
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
          <EditUserForm setOpen={setOpen} />
        </Box>
      </Modal>
    </div>
  );
}