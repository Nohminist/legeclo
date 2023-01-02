import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as DataGrid_Ench from './DataGrid_Ench'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function Ench(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <img
          src={`${process.env.PUBLIC_URL}/${props.EnchNam}i.png`}
          style={{ width: 35 }}
          alt={''}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DataGrid_Ench.Ench
            EnchData={props.EnchData}
            SlctMain={props.SlctMain}
            EnchSlctOn={props.EnchSlctOn}
            handleClose={handleClose}

          />
        </Box>
      </Modal>
    </div>
  );
}