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

function createData(name, Sk) {
  return {
    name,
    detail: [
      {
        K: 'HP',
        Sk: Sk.H,
      },
      {
        K: 'アタック',
        Sk: Sk.A,
      },
      {
        K: 'ディフェンス',
        Sk: Sk.D,
      },
      {
        K: 'マジック',
        Sk: Sk.M,
      },
      {
        K: 'レジスト',
        Sk: Sk.R,
      },
      {
        K: 'テクニック',
        Sk: Sk.T,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell align="right"><Img.Wepn WepnI={row.name} /></TableCell>
        <TableCell component="th" scope="row">{row.name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>ステータス</TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.detail.map((detailRow) => (
                    <TableRow key={detailRow.K}>
                      <TableCell component="th" scope="row">{detailRow.K}</TableCell>
                      <TableCell>{detailRow.Sk}</TableCell>
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

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    detail: PropTypes.arrayOf(
      PropTypes.shape({
        K: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};


export function Amu(props) {


  const rows = [//name,Sk
    createData(props.Sprt.AmTk, props.AmTkData[props.Sprt.AmTk]),
    createData(props.Sprt.AmTy, props.AmTyData[props.Sprt.AmTy]),
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" size="small" >
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={6}>装備</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} Sprt={props.Sprt} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

