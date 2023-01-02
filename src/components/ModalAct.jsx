import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import DataGridAct from './DataGridAct';
import TableAct from './TableActSt';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};




export default function ModalAct(props) {
  // console.log(props.Act)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const ActIcon = Object.keys(props.Act).map((t, index) => {
    return (
      <img
        src={`${process.env.PUBLIC_URL}/${props.Act[t].Nam}i.png`}
        style={{ width: 35 }}
        alt={''}
        key={index}
      />
    );
  });

  return (
    <>
      <Button onClick={handleOpen}>{ActIcon}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <DataGridAct
            SlctMain={props.SlctMain}
            Main={props.Main}
            Act={props.Act}
            ActList={props.ActList}
            ActSlctOn={props.ActSlctOn}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
}