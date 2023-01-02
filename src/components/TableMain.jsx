import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';




export default function TableMain(props) {
  let Main = props.Main
  let SklData = props.SklData


  function createDataSt(name, Gc, Ks, Kh, Sk) {
    return { name, Gc, Ks, Kh, Sk };
  }
  const rowsSt = [
    createDataSt('ステータス', 'ガチャ', '基礎', '基本', '装備含'),
    createDataSt('HP', Main.Gc.H, Main.Ks.H, Main.Kh.H, Main.Sk.H),
    createDataSt('アタック', Main.Gc.A, Main.Ks.A, Main.Kh.A, Main.Sk.A),
    createDataSt('ディフェンス', Main.Gc.D, Main.Ks.D, Main.Kh.D, Main.Sk.D),
    createDataSt('マジック', Main.Gc.M, Main.Ks.M, Main.Kh.M, Main.Sk.M),
    createDataSt('レジスト', Main.Gc.R, Main.Ks.R, Main.Kh.R, Main.Sk.R),
    createDataSt('テクニック', Main.Gc.T, Main.Ks.T, Main.Kh.T, Main.Sk.T),
  ];

  const TlntTxt = Main.Tlnt.Txt.split(/(\n)/).map((text, index) => {
    return (
      <React.Fragment key={index}>
        {text.match(/\n/) ? <br /> : text}
      </React.Fragment>
    );
  });

  let SklCst = []
  for (let i = 0; i < Main.SklList.length; i++) {
    switch (SklData[Main.SklList[i]].Cst) {
      case 1: SklCst.push('◆'); break
      case 2: SklCst.push('◆◆'); break
      case 3: SklCst.push('◆◆◆'); break
      default: break
    }
  }

  let SklCT = []
  for (let i = 0; i < Main.SklList.length; i++) {
    if (SklData[Main.SklList[i]].CT === 0) SklCT.push('-')
    else SklCT.push(SklData[Main.SklList[i]].CT)
  }

  let SklAra = []
  for (let i = 0; i < Main.SklList.length; i++) {
    if (SklData[Main.SklList[i]].Ara === 0) {
      if (SklData[Main.SklList[i]].Mag === 0) SklAra.push('-')
      else SklAra.push('単')
    } else {
      SklAra.push(SklData[Main.SklList[i]].Ara)
    }
  }

  let SklRng = []
  for (let i = 0; i < Main.SklList.length; i++) {
    if (SklData[Main.SklList[i]].Rng === 0) {
      if (SklData[Main.SklList[i]].Mag === 0) SklRng.push('-')
      else SklRng.push('自')
    } else {
      SklRng.push(SklData[Main.SklList[i]].Rng)
    }
  }

  const SklTxt0 = SklData[Main.SklList[0]].Txt.split(/(\n)/).map((text, index) => { return (<React.Fragment key={index}>{text.match(/\n/) ? <br /> : text}</React.Fragment>) });
  const SklTxt1 = SklData[Main.SklList[1]].Txt.split(/(\n)/).map((text, index) => { return (<React.Fragment key={index}>{text.match(/\n/) ? <br /> : text}</React.Fragment>) });
  const SklTxt2 = SklData[Main.SklList[2]].Txt.split(/(\n)/).map((text, index) => { return (<React.Fragment key={index}>{text.match(/\n/) ? <br /> : text}</React.Fragment>) });
  const SklTxt3 = SklData[Main.SklList[3]].Txt.split(/(\n)/).map((text, index) => { return (<React.Fragment key={index}>{text.match(/\n/) ? <br /> : text}</React.Fragment>) });
  const SklTxt4 = SklData[Main.SklList[4]].Txt.split(/(\n)/).map((text, index) => { return (<React.Fragment key={index}>{text.match(/\n/) ? <br /> : text}</React.Fragment>) });
  const SklTxt5 = SklData[Main.SklList[5]].Txt.split(/(\n)/).map((text, index) => { return (<React.Fragment key={index}>{text.match(/\n/) ? <br /> : text}</React.Fragment>) });


  function createDataSkl(name, Cst, CT, Ara, Rng, Txt) {
    return { name, Cst, CT, Ara, Rng, Txt };
  }
  const rowsSkl = [
    createDataSkl(Main.SklList[0], SklCst[0], SklCT[0], SklAra[0], SklRng[0], SklTxt0),
    createDataSkl(Main.SklList[1], SklCst[1], SklCT[1], SklAra[1], SklRng[1], SklTxt1),
    createDataSkl(Main.SklList[2], SklCst[2], SklCT[2], SklAra[2], SklRng[2], SklTxt2),
    createDataSkl(Main.SklList[3], SklCst[3], SklCT[3], SklAra[3], SklRng[3], SklTxt3),
    createDataSkl(Main.SklList[4], SklCst[4], SklCT[4], SklAra[4], SklRng[4], SklTxt4),
    createDataSkl(Main.SklList[5], SklCst[5], SklCT[5], SklAra[5], SklRng[5], SklTxt5),
  ];





  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img src={`${process.env.PUBLIC_URL}/main.png`} style={{ height: 25 }} alt={''} /> キャラクター情報
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 420 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell rowSpan={4}><img src={`${process.env.PUBLIC_URL}/${props.SlctMain}i.png`} style={{ width: 100 }} alt={''} /></TableCell>
                  <TableCell colSpan={4}>{props.SlctMain}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={4}>Lv100&nbsp;&nbsp;&nbsp;★6</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={4}>
                    <img src={`${process.env.PUBLIC_URL}/${Main.Cls}.png`} style={{ width: 20 }} alt={''} />{Main.Cls}&nbsp;&nbsp;&nbsp;
                    <img src={`${process.env.PUBLIC_URL}/${Main.Typ}.png`} style={{ width: 20 }} alt={''} />{Main.Typ}&nbsp;&nbsp;&nbsp;
                    <img src={`${process.env.PUBLIC_URL}/${Main.Smb}.png`} style={{ width: 25 }} alt={''} />{Main.Smb}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={4}>射程{Main.Rng}&nbsp;&nbsp;&nbsp;移動{Main.Mov}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsSt.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell align="right" width={80}>{row.Gc}</TableCell>
                    <TableCell align="right" width={80}>{row.Ks}</TableCell>
                    <TableCell align="right" width={80}>{row.Kh}</TableCell>
                    <TableCell align="right" width={80}>{row.Sk}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </Grid>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
              <TableBody>
                <TableRow>
                  <TableCell align="center" width={60}><img src={`${process.env.PUBLIC_URL}/${Main.Tlnt.Nam}i.png`} style={{ width: 60 }} alt={''} /></TableCell>
                  <TableCell colSpan={4}>{Main.Tlnt.Nam}</TableCell>
                  <TableCell colSpan={2}>{TlntTxt}</TableCell>
                </TableRow>
                {rowsSkl.map((row) => (
                  <React.Fragment key={row.name}>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="center" rowSpan={2}><img src={`${process.env.PUBLIC_URL}/${row.name}i.png`} style={{ width: 50 }} alt={''} /></TableCell>
                      <TableCell component="th" scope="row" colSpan={4}>{row.name}</TableCell>
                      <TableCell rowSpan={2} width={600}>{row.Txt}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell width={10}>{row.Cst}</TableCell>
                      <TableCell width={80} ><img src={`${process.env.PUBLIC_URL}/CT.png`} style={{ width: 28 }} alt={''} /> {row.CT}</TableCell>
                      <TableCell width={90}  ><img src={`${process.env.PUBLIC_URL}/範囲.png`} style={{ width: 28 }} alt={''} /> {row.Ara}</TableCell>
                      <TableCell width={80}  ><img src={`${process.env.PUBLIC_URL}/射程.png`} style={{ width: 28 }} alt={''} /> {row.Rng}</TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </Grid>
      </Grid>


    </>





  );
}