import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import * as Img from "./Img";

function createData(name, St) {

  return {
    name,
    name,
    detail: [
      {
        K: 'HP',
        Gc: St.Gc.H,
        Ks: St.Ks.H,
        Kh: St.Kh.H,
        Sk: St.Sk.H,
      },{
        K: 'アタック',
        Gc: St.Gc.A,
        Ks: St.Ks.A,
        Kh: St.Kh.A,
        Sk: St.Sk.A,
      },{
        K: 'ディフェンス',
        Gc: St.Gc.D,
        Ks: St.Ks.D,
        Kh: St.Kh.D,
        Sk: St.Sk.D,
      },{
        K: 'マジック',
        Gc: St.Gc.M,
        Ks: St.Ks.M,
        Kh: St.Kh.M,
        Sk: St.Sk.M,
      },{
        K: 'レジスト',
        Gc: St.Gc.R,
        Ks: St.Ks.R,
        Kh: St.Kh.R,
        Sk: St.Sk.R,
      },{
        K: 'テクニック',
        Gc: St.Gc.T,
        Ks: St.Ks.T,
        Kh: St.Kh.T,
        Sk: St.Sk.T,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell align="left"><Img.Sprt SprtI={row.name} /></TableCell>
        <TableCell component="th" scope="row" align="left">{row.name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>ステータス</TableCell>
                    <TableCell align="right">ガチャ</TableCell>
                    <TableCell align="right">基礎</TableCell>
                    <TableCell align="right">基本</TableCell>
                    <TableCell align="right">装備含</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.detail.map((detailRow) => (
                    <TableRow key={detailRow.K}>
                      <TableCell component="th" scope="row">{detailRow.K}</TableCell>
                      <TableCell align="right">{detailRow.Gc}</TableCell>
                      <TableCell align="right">{detailRow.Ks}</TableCell>
                      <TableCell align="right">{detailRow.Kh}</TableCell>
                      <TableCell align="right">{detailRow.Sk}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     detail: PropTypes.arrayOf(
//       PropTypes.shape({
//         Gc: PropTypes.number.isRequired,
//         K: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//   }).isRequired,
// };






export function Sprt(props) {

  console.log(props)

  


  const rows = [//name,St
    createData( props.Sprt.Nam, props.Sprt),
  ];

  return (
    <></>
  );
}

{/* <TableContainer component={Paper}>
<Table aria-label="collapsible table" size="small" >
  <TableHead>
    <TableRow>
      <TableCell align="center" colSpan={3}>サポートキャラ</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <Row key={row.name} row={row} Sprt={props.Sprt} SlctSprt={props.SlctSprt} />
    ))}
  </TableBody>
</Table>
</TableContainer> */}


