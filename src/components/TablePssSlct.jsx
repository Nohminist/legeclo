import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Checkbox from '@mui/material/Checkbox';


export default function TablePssSlct(props) {
  let PssList = props.PssList
  let SklData = props.SklData


  let PssNam = []
  Object.keys(PssList).forEach(P => {
    PssNam.push(P)
  })



  //チェック


  const [C0, setC0] = React.useState(PssList[PssNam[0]]);
  const handleChange0 = (event) => {
    PssList[PssNam[0]] = event.target.checked
    setC0(event.target.checked);
  };
  const [C1, setC1] = React.useState(PssList[PssNam[1]]);
  const handleChange1 = (event) => {
    PssList[PssNam[1]] = event.target.checked
    setC1(event.target.checked);
  };
  const [C2, setC2] = React.useState(PssList[PssNam[2]]);
  const handleChange2 = (event) => {
    PssList[PssNam[2]] = event.target.checked
    setC2(event.target.checked);
  };



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableBody>
          {PssNam[0] ?
            <TableRow key={PssNam[0]} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <Checkbox
                  checked={C0}
                  onChange={handleChange0}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </TableCell>
              <TableCell><img src={`${process.env.PUBLIC_URL}/${PssNam[0]}i.png`} style={{ width: 60 }} alt={''} /></TableCell>
              <TableCell component="th" scope="row">{PssNam[0]}</TableCell>
              <TableCell>{SklData[PssNam[0]].Txt}</TableCell>
            </TableRow> : ''
          }
          {PssNam[1] ?
            <TableRow key={PssNam[1]} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <Checkbox
                  checked={C1}
                  onChange={handleChange1}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </TableCell>
              <TableCell><img src={`${process.env.PUBLIC_URL}/${PssNam[1]}i.png`} style={{ width: 60 }} alt={''} /></TableCell>
              <TableCell component="th" scope="row">{PssNam[1]}</TableCell>
              <TableCell>{SklData[PssNam[1]].Txt}</TableCell>
            </TableRow> : ''
          }
          {PssNam[2] ?
            <TableRow key={PssNam[2]} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <Checkbox
                  checked={C2}
                  onChange={handleChange2}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </TableCell>
              <TableCell><img src={`${process.env.PUBLIC_URL}/${PssNam[2]}i.png`} style={{ width: 60 }} alt={''} /></TableCell>
              <TableCell component="th" scope="row">{PssNam[2]}</TableCell>
              <TableCell>{SklData[PssNam[2]].Txt}</TableCell>
            </TableRow> : ''
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}