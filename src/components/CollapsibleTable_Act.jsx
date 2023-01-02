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
import { TableFooter } from '@mui/material';

function createData(turn, name, Main,Sprt) {


  return {
    turn,
    name,
    detail: [
      {//行

        
      }, 
    ],
    Main,
    Sprt,
  };
}

function Row(props) {
  const { row } = props;

  const [open, setOpen] = React.useState(false);


  let t = 0
  switch (row.turn) {
    case 11: t = '1-1'; break
    case 12: t = '1-2'; break
    case 13: t = '1-3'; break
    case 21: t = '2-1'; break
    case 22: t = '2-2'; break
    case 23: t = '2-3'; break
    case 31: t = '3-1'; break
    case 32: t = '3-2'; break
    case 33: t = '3-3'; break
    case 41: t = '4-1'; break
    case 42: t = '4-2'; break
    case 43: t = '4-3'; break
    case 51: t = '5-1'; break
    case 52: t = '5-2'; break
    case 53: t = '5-3'; break
    default: break
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell rowSpan={2} component="th" scope="row" align="center" >
          {t}
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <Img.Act ActI={row.name} />
        </TableCell>
        <TableCell colSpan={3}>{row.name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="right">{row.Main.UnitDmg}</TableCell>
        <TableCell align="right">{row.Main.UnitDmgEx}</TableCell>
        <TableCell align="right">{row.Main.UnitDmgCr}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="center">メイン</TableCell>
                    <TableCell align="center">サポート</TableCell>
                    <TableCell align="center">敵</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">CT</TableCell>
                    <TableCell align="right">{row.Main.CT}</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">範囲</TableCell>
                    <TableCell align="right">{row.Main.Ara}</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">射程</TableCell>
                    <TableCell align="right">{row.Main.Rng}</TableCell>
                    <TableCell align="right">{row.Sprt.Rng}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">威力</TableCell>
                    <TableCell align="right">{row.Main.Mag}</TableCell>
                    <TableCell align="right">{row.Sprt.Mag}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">攻撃回数</TableCell>
                    <TableCell align="right">{row.Main.Num}</TableCell>
                    <TableCell align="right">{row.Sprt.Num}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">HP</TableCell>
                    <TableCell align="right">{row.Main.Btl.Mlt.H}%{row.Main.Btl.Add.H ? '+'+row.Main.Btl.Add.H : ''}<br />{row.Main.Btl.H}</TableCell>
                    <TableCell align="right">{row.Sprt.Btl.Mlt.H}%{row.Sprt.Btl.Add.H ? '+'+row.Sprt.Btl.Add.H : ''}<br />{row.Sprt.Btl.H}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">アタック</TableCell>
                    <TableCell align="right">{row.Main.Btl.Mlt.A}%{row.Main.Btl.Add.A ? '+'+row.Main.Btl.Add.A : ''}<br />{row.Main.Btl.A}</TableCell>
                    <TableCell align="right">{row.Sprt.Btl.Mlt.A}%{row.Sprt.Btl.Add.A ? '+'+row.Sprt.Btl.Add.A : ''}<br />{row.Sprt.Btl.A}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">ディフェンス</TableCell>
                    <TableCell align="right">{row.Main.Btl.Mlt.D}%{row.Main.Btl.Add.D ? '+'+row.Main.Btl.Add.D : ''}<br />{row.Main.Btl.D}</TableCell>
                    <TableCell align="right">{row.Sprt.Btl.Mlt.D}%{row.Sprt.Btl.Add.D ? '+'+row.Sprt.Btl.Add.D : ''}<br />{row.Sprt.Btl.D}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">マジック</TableCell>
                    <TableCell align="right">{row.Main.Btl.Mlt.M}%{row.Main.Btl.Add.M ? '+'+row.Main.Btl.Add.M : ''}<br />{row.Main.Btl.M}</TableCell>
                    <TableCell align="right">{row.Sprt.Btl.Mlt.M}%{row.Sprt.Btl.Add.M ? '+'+row.Sprt.Btl.Add.M : ''}<br />{row.Sprt.Btl.M}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">レジスト</TableCell>
                    <TableCell align="right">{row.Main.Btl.Mlt.R}%{row.Main.Btl.Add.R ? '+'+row.Main.Btl.Add.R : ''}<br />{row.Main.Btl.R}</TableCell>
                    <TableCell align="right">{row.Sprt.Btl.Mlt.R}%{row.Sprt.Btl.Add.R ? '+'+row.Sprt.Btl.Add.R : ''}<br />{row.Sprt.Btl.R}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">テクニック</TableCell>
                    <TableCell align="right">{row.Main.Btl.Mlt.T}%{row.Main.Btl.Add.T ? '+'+row.Main.Btl.Add.T : ''}<br />{row.Main.Btl.T}</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">クリティカル率</TableCell>
                    <TableCell align="right">{row.Main.Btl.Mlt.Crr}%</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">クリティカルダメージ倍率</TableCell>
                    <TableCell align="right">{row.Main.Btl.Mlt.Crd}%</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">与ダメージ</TableCell>
                    <TableCell align="right">{row.Main.Btl.Mlt.Damp}%</TableCell>
                    <TableCell align="right">{row.Sprt.Btl.Mlt.Damp}%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">物理ダメージ耐性</TableCell>
                    <TableCell align="right">{row.Main.Btl.Mlt.DresA}%</TableCell>
                    <TableCell align="right">{row.Sprt.Btl.Mlt.DresA}%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">魔法ダメージ耐性</TableCell>
                    <TableCell align="right">{row.Main.Btl.Mlt.DresM}%</TableCell>
                    <TableCell align="right">{row.Sprt.Btl.Mlt.DresM}%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">ディフェンス,レジスト無視</TableCell>
                    <TableCell align="right">{row.Main.Btl.Mlt.Pnt}%</TableCell>
                    <TableCell align="right">{row.Sprt.Btl.Mlt.Pnt}%</TableCell>
                  </TableRow>
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
    turn: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};


export function Act(props) {

  


  const rows = []
  for (let t of props.TurnVl) { //turn,name,Main,Sprt
    t = Number(t)
    rows.push(createData(t, props.Main.Act[t].Nam, props.Main.Act[t], props.Sprt.Act[t]))
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" size="small" >
        <TableHead>
          <TableRow>
            <TableCell align="right">ダメージ合計</TableCell>
            <TableCell align="right">{props.Main.Act.UnitDmg}</TableCell>
            <TableCell align="right">{props.Main.Act.UnitDmgEx}</TableCell>
            <TableCell align="right">{props.Main.Act.UnitDmgCr}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">ターン・行動</TableCell>
            <TableCell align="right">非CR</TableCell>
            <TableCell align="right">期待値</TableCell>
            <TableCell align="right">CR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.turn} row={row} Main={props.Main} Sprt={props.Sprt} TurnVl={props.TurnVl} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

