import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import Button from "@material-ui/core/Button";



export default function Sprt(props) {
  console.log(props)
  let Main = props.Main
  let Sprt = props.Sprt
  let SprtData = props.SprtData

  function createDataSt(name, Gc, Ks, Kh, Sk) {
    return { name, Gc, Ks, Kh, Sk };
  }

  let AM = ''
  let GcAM = 0
  let KsAM = 0
  let KhAM = 0
  let SkAM = 0
  if( Sprt.Gc.A > Sprt.Gc.M ){
    AM = 'アタック'
    GcAM = Sprt.Gc.A
    KsAM = Sprt.Ks.A
    KhAM = Sprt.Kh.A
    SkAM = Sprt.Sk.A
    }
  else{
    AM = 'マジック'
    GcAM = Sprt.Gc.M
    KsAM = Sprt.Ks.M
    KhAM = Sprt.Kh.M
    SkAM = Sprt.Sk.M
  }


  const rowsSt = [
    createDataSt('ステータス', 'ガチャ', '基礎', '基本', '装備含'),
    createDataSt('HP', Sprt.Gc.H, Sprt.Ks.H, Sprt.Kh.H, Sprt.Sk.H),
    createDataSt(AM, GcAM, KsAM, KhAM, SkAM),
    createDataSt('ディフェンス', Sprt.Gc.D, Sprt.Ks.D, Sprt.Kh.D, Sprt.Sk.D),
    createDataSt('レジスト', Sprt.Gc.R, Sprt.Ks.R, Sprt.Kh.R, Sprt.Sk.R),
  ];


  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];

  // const test = (e) => {
  //   console.log(props.Main.Sprt)
  //   props.Main.Sprt.Nam = e
  //   console.log(props.Main.Sprt)
  //   props.handleClose()
  //   props.SprtSkCelc()
  //   //props.SprtSlctOn(props.SlctMain, e)
  // }
  // <Button onClick={() => test('アルテミス')}>アルテミス</Button>


  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/support.png`} style={{ height: 25 }} alt={''} /> キャラクター情報

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell rowSpan={4}><img src={`${process.env.PUBLIC_URL}/${Main.Sprt}i.png`} style={{ width: 100 }} alt={''} /></TableCell>
              <TableCell colSpan={4}>{Main.Sprt}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}>Lv100&nbsp;&nbsp;&nbsp;★6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}>
                <img src={`${process.env.PUBLIC_URL}/${SprtData[Main.Sprt].Cls}.png`} style={{ width: 20 }} alt={''} />{Sprt.Cls}&nbsp;&nbsp;&nbsp;
                <img src={`${process.env.PUBLIC_URL}/${SprtData[Main.Sprt].Typ}.png`} style={{ width: 20 }} alt={''} />{Sprt.Typ}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}>射程{SprtData[Main.Sprt].Rng}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsSt.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.Gc}</TableCell>
                <TableCell align="right">{row.Ks}</TableCell>
                <TableCell align="right">{row.Kh}</TableCell>
                <TableCell align="right">{row.Sk}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableBody>
            <TableRow>
              <TableCell rowSpan={2} align="center" width={60}>
                <img src={`${process.env.PUBLIC_URL}/${Sprt.Skl.Nam}i.png`} style={{ width: 50 }} alt={''} />
              </TableCell>
              <TableCell colSpan={2}>{Sprt.Skl.Nam}</TableCell>
              <TableCell rowSpan={2}>{Sprt.Skl.Txt}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell width={80}><img src={`${process.env.PUBLIC_URL}/範囲.png`} style={{ width: 28 }} alt={''} />&nbsp;{Sprt.Skl.Ara}</TableCell>
              <TableCell width={80}><img src={`${process.env.PUBLIC_URL}/射程.png`} style={{ width: 28 }} alt={''} />&nbsp;{Sprt.Skl.Rng}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img src={`${process.env.PUBLIC_URL}/${Sprt.Pss[0].Nam}i.png`} style={{ width: 50 }} alt={''} />
              </TableCell>
              <TableCell colSpan={2}>{Sprt.Pss[0].Nam}</TableCell>
              <TableCell>{Sprt.Pss[0].Txt}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img src={`${process.env.PUBLIC_URL}/${Sprt.Pss[1].Nam}i.png`} style={{ width: 50 }} alt={''} />
              </TableCell>
              <TableCell colSpan={2}>{Sprt.Pss[1].Nam}</TableCell>
              <TableCell>{Sprt.Pss[1].Txt}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      
    </>

  );
}