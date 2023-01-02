import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import DataGridEq from './DataGridEq'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function ModalEq(props) {

  // console.log(props)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const test = (e) => {
  //   handleClose()
  //   props.EqSlctOn(props.SlctMain, e)



  // }


  return (
    <div>
      <Button onClick={handleOpen}>
        <img
          src={`${process.env.PUBLIC_URL}/${props.EqNam}i.png`}
          style={{ width: 35 }}
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
          <DataGridEq
            Main={props.Main}
            Eq={props.Eq}
            EqData={props.EqData}
            SlctMain={props.SlctMain}
            MainSkCelc={props.MainSkCelc}

            handleClose={handleClose}
          />

        </Box>
      </Modal>
    </div>
  );
}