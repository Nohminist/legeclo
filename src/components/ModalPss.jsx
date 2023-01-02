import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TablePssSlct from "./TablePssSlct";

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

export default function ModalPss(props) {
  // console.log(props)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    props.Celc()
    setOpen(false);
  }

  let PssNam = []
  Object.keys(props.PssList).forEach(P => {
    if (props.PssList[P]) PssNam.push(P) //パッシブスキルが有効なら
  })



  return (
    <>
      <Button onClick={handleOpen}>
        {PssNam[0] ? 
          <>
            {PssNam[0] && <img src={`${process.env.PUBLIC_URL}/${PssNam[0]}i.png`} style={{ width: 35 }} alt={''} />}
            {PssNam[1] && <img src={`${process.env.PUBLIC_URL}/${PssNam[1]}i.png`} style={{ width: 35 }} alt={''} />}
            {PssNam[2] && <img src={`${process.env.PUBLIC_URL}/${PssNam[2]}i.png`} style={{ width: 35 }} alt={''} />}
          </>
          : <>なし</>
        }
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TablePssSlct
            SlctMain={props.SlctMain}//選択行のメインキャラ名
            PssList={props.PssList}
            SklData={props.SklData}
          />
          <Button onClick={handleClose}>決定</Button>
        </Box>
      </Modal>
    </>
  );
}