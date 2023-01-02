import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

import * as DataGridSprt from './DataGridSprt'




import TableSprt from './TableSprt'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 2,
  pb: 2,
};



export default function ModalSprt(props) {
  // console.log(props.U[props.SlctMain].Sprt)
  // console.log(props.Sprt)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const test = (e) => {

  //   props.U[props.SlctMain].Sprt = e
  //   console.log(props.SlctMain)
  //   console.log(props.U[props.SlctMain].Sprt)
  //   // props.Main.Sprt.Nam = e
  //   handleClose()
  //   props.SprtSkCelc()
  //   //props.SprtSlctOn(props.SlctMain, e)
  // }
  // <Button onClick={() => test('アルテミス')}>アルテミス</Button>

  return (
    <div>
      <Button onClick={handleOpen}>
        <img src={`${process.env.PUBLIC_URL}/${props.U[props.SlctMain].Sprt}i.png`} style={{ width: 80 }} alt={''} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <TableSprt
                SlctMain={props.SlctMain}
                Main={props.Main}
                Sprt={props.Sprt}
                SprtData={props.SprtData}
                SprtSkCelc={props.SprtSkCelc}
                handleClose={handleClose}
              />
            </Grid>
            <Grid xs={6}>
              <DataGridSprt.Sprt
                SlctMain={props.SlctMain}
                Main={props.Main}
                Sprt={props.Sprt}
                SprtData={props.SprtData}
                SprtSkCelc={props.SprtSkCelc}
                handleClose={handleClose}
                Calc={props.Calc}
              />
            </Grid>

          </Grid>



        </Box>
      </Modal>
    </div>
  );
}





