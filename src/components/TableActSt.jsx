import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function TableActSt(props) {
  let Main = props.Main
  let SlctMain = props.SlctMain
  // console.log(props)
  let C = {
    Main: props.Main,
    Sprt: props.Main[props.Main.Sprt],
    Enmy: props.Main.Enmy
  }



  let i = props.index
  const HADMRT = ['H', 'A', 'D', 'M', 'R', 'T']
  const MainSprtEnmy = ['Main', 'Sprt', 'Enmy']


  function createData(name, main, sprt, enmy) {
    return { name, main, sprt, enmy };
  }

  let Ara = {}
  if (C.Main.Act[i].Ara === 0) Ara.Main = '単'
  else Ara.Main = C.Main.Act[i].Ara

  let Rng = {}
  if (C.Main.Act[i].Rng === 0) Rng.Main = '自'
  else Rng.Main = C.Main.Act[i].Rng

  let Mag = {}
  let Num = {}








  let St = {}
  for (let MSE of MainSprtEnmy) {
    St[MSE] = { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 }
    for (let K of HADMRT) {
      // St[MSE] = {[K]:0}
      // console.log(St[MSE][K])
      if (!C[MSE].Act[i].Btl.Add[K]) {//加算が無いなら
        if (C[MSE].Act[i].Btl.Mlt[K] >= 0) {//%が+なら
          St[MSE][K] = `+${C[MSE].Act[i].Btl.Mlt[K]}%　${C[MSE].Act[i].Btl[K]}`
        } else {
          St[MSE][K] = `${C[MSE].Act[i].Btl.Mlt[K]}%　${C[MSE].Act[i].Btl[K]}`
        }
      } else {//加算があるなら
        if (C[MSE].Act[i].Btl.Mlt[K] >= 0) {//%が+なら
          St[MSE][K] = `+${C[MSE].Act[i].Btl.Mlt[K]}%+${C[MSE].Act[i].Btl.Add[K]}　${C[MSE].Act[i].Btl[K]}`
        } else {
          St[MSE][K] = `${C[MSE].Act[i].Btl.Mlt[K]}%+${C[MSE].Act[i].Btl.Add[K]}　${C[MSE].Act[i].Btl[K]}`
        }
      }
    }





  }
  if (C.Sprt.Gc.A > C.Sprt.Gc.M) St.Sprt.M = ''
  else C.St.Sprt.A = ''

  let Damp = {}
  let Dres = {}
  let Pnt = {}

  if (C.Main.Act[i].Ara > 0) {//範囲攻撃なら
    St.Sprt.H = ''
    St.Sprt.A = ''
    St.Sprt.D = ''
    St.Sprt.M = ''
    St.Sprt.R = ''

    Ara.Sprt = ''
    Rng.Sprt = ''
    Mag.Sprt = ''
    Num.Sprt = ''

    Damp.Sprt = ''
    Dres.Sprt = ''
    Pnt.Sprt = ''
  }
  else {
    Ara.Sprt = '単'
    Rng.Sprt = '単'
    Mag.Sprt = 1
    Num.Sprt = 1

    Damp.Sprt = C.Sprt.Act[i].Btl.Mlt.Damp + '%'
    Dres.Sprt = C.Sprt.Act[i].Btl.Mlt.DresA + '%／' + C.Sprt.Act[i].Btl.Mlt.DresA + '%'
    Pnt.Sprt = C.Sprt.Act[i].Btl.Mlt.Pnt + '%'
  }













  const rows = [
    createData('CT', C.Main.Act[i].CT, '', ''),
    createData('範囲', Ara.Main, Ara.Sprt, ''),
    createData('射程', Rng.Main, '', ''),
    createData('威力', C.Main.Act[i].Mag, Mag.Sprt, ''),
    createData('攻撃回数', C.Main.Act[i].Num, Num.Sprt, ''),
    createData('HP', St.Main.H, St.Sprt.H, St.Enmy.H),
    createData('アタック', St.Main.A, St.Sprt.A, St.Enmy.A),
    createData('ディフェンス', St.Main.D, St.Sprt.D, St.Enmy.D),
    createData('マジック', St.Main.M, St.Sprt.M, St.Enmy.M),
    createData('レジスト', St.Main.R, St.Sprt.R, St.Enmy.R),
    createData('テクニック',
      St.Main.T,
      '',
      St.Enmy.T),
    createData('クリティカル率',
      C.Main.Act[i].Btl.Mlt.Crr + '%',
      '',
      ''),
    createData('クリティカルダメージ倍率',
      C.Main.Act[i].Btl.Mlt.Crd + '%',
      '',
      ''),
    createData('与ダメージ',
      C.Main.Act[i].Btl.Mlt.Damp + '%',
      Damp.Sprt,
      ''),
    createData('物理／魔法ダメージ耐性',
      C.Main.Act[i].Btl.Mlt.DresA + '%／' + C.Main.Act[i].Btl.Mlt.DresM + '%',
      Dres.Sprt,
      C.Enmy.Act[i].Btl.Mlt.DresA + '%／' + C.Enmy.Act[i].Btl.Mlt.DresM + '%'),
    createData('ディフェンス/レジスト無視',
      C.Main.Act[i].Btl.Mlt.Pnt + '%',
      Pnt.Sprt,
      ''),
  ];


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <img src={`${process.env.PUBLIC_URL}/${C.Main.Act[i].Nam}i.png`} style={{ width: 50 }} alt={''} />
              {C.Main.Act[i].Nam}
            </TableCell>
            <TableCell align="right"><img src={`${process.env.PUBLIC_URL}/${SlctMain}i.png`} style={{ width: 50 }} alt={''} /></TableCell>
            <TableCell align="right"><img src={`${process.env.PUBLIC_URL}/${Main.Sprt}i.png`} style={{ width: 50 }} alt={''} /></TableCell>
            <TableCell align="right">敵</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.main}</TableCell>
              <TableCell align="right">{row.sprt}</TableCell>
              <TableCell align="right">{row.enmy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}