import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import * as CollapsibleTable_Main from './CollapsibleTable_Main'
import TableMain from './TableMain'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 2,
  pb: 2,
};


export default function ModalMain(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => { setOpen(true) };
  const handleClose = () => { setOpen(false) };


  return (
    <div>
      <Button onClick={handleOpen}>
        <img src={`${process.env.PUBLIC_URL}/${props.SlctMain}i.png`}
          style={{ width: 80 }}
          alt={''}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <TableMain
            SlctMain={props.SlctMain}
            Main={props.Main}
            SklData={props.SklData}
          />
        </Box>
      </Modal>
    </div>
  );
}






