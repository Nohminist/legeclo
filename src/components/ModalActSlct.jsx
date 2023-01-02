import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Unstable_Grid2';
import TableActSt from './TableActSt'
import DataGridActSlct from './DataGridActSlct'

import Table from './Table';
import { TableBody, TableCell, TableRow } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalActSlct(props) {//行動パターンのアイコン押下で行動選択画面
  // console.log(props)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose2 = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} >
        <img src={`${process.env.PUBLIC_URL}/${props.ActNam}i.png`} style={{ width: 35 }} alt={''} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <TableActSt
                Main={props.Main}
                SlctMain={props.SlctMain}
                index={props.index}
              />
            </Grid>
            <Grid xs={4}>
              <DataGridActSlct
                SlctMain={props.SlctMain}
                index={props.index}
                ActList={props.ActList}
                ActSlctOn={props.ActSlctOn}
                handleClose2={handleClose2}
                handleClose={props.handleClose}
              />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}