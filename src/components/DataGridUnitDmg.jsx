import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, } from '@mui/x-data-grid';
import Button from "@material-ui/core/Button";
import { SvgIcon } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';

import ModalMain from "./ModalMain";
import ModalSprt from "./ModalSprt";
import ModalEq from "./ModalEq";
import * as Modal_Ench from "./Modal_Ench";
import ModalPss from "./ModalPss";
import ModalAct from "./ModalAct";

export default function DataGridUnitDmg(props) {
  // let Unit = props.Unit
  // console.log(Unit)

  let U = props.U
  let MainList = props.MainList
  let SprtData = props.SprtData

  // console.log(props.U.アンドロメダ.ソル)
  // console.log(props.SprtData[props.U.アンドロメダ.Sprt].Cls)

  const columns = [
    //{ field: 'id', headerName: 'ID', width: 90 },
    // {
    //   field: 'Rr',
    //   headerName: '',
    //   width: 40,
    //   headerAlign: 'center',
    //   align: 'center',
    //   sortable: false,//ソート不可
    //   renderCell: (params) => (
    //     <Button onClick={(e) => test(params.row.MainName, e)}>
    //       <SvgIcon component={InfoIcon} />
    //     </Button>
    //   )
    // },
    {
      field: 'MainName',
      headerName: 'メインキャラ',
      width: 80,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <ModalMain
          SlctMain={params.row.MainName}
          Main={props.U[params.row.MainName]}
          SklData={props.SklData}
        />
      )
      //description: '説明',
      //align: 'right'// セルテキストの表示位置 
    },
    {
      field: 'SprtName',
      headerName: 'サポートキャラ',
      width: 80,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <ModalSprt
          U={props.U}
          Main={props.U[params.row.MainName]}
          SlctMain={params.row.MainName}
          Sprt={props.U[params.row.MainName][params.row.SprtName]}
          SprtData={props.SprtData}
          Calc={props.Celc}
          SprtSkCelc={props.SprtSkCelc}
        // SprtSlctOn={props.SprtSlctOn}
        />
      )//props.U[params.row.MainName].Sprt.Nam
      //description: '説明',
      //align: 'right'// セルテキストの表示位置 
    },
    {
      field: 'Cls',
      headerName: 'クラス',
      width: 40,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <>
          <img src={`${process.env.PUBLIC_URL}/${params.row.Cls}.png`} style={{ width: 24 }} alt={''} />
          <img src={`${process.env.PUBLIC_URL}/${SprtData[U[params.row.MainName].Sprt].Cls}.png`} style={{ width: 24 }} alt={''} />
        </>
      )
    }, {
      field: 'Typ',
      headerName: '攻撃タイプ',
      width: 40,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <>
          <img src={`${process.env.PUBLIC_URL}/${params.row.Typ}.png`} style={{ width: 24 }} alt={''} />
          <img src={`${process.env.PUBLIC_URL}/${SprtData[U[params.row.MainName].Sprt].Typ}.png`} style={{ width: 24 }} alt={''} />
        </>
      )
    }, {
      field: 'Smb',
      headerName: 'シンボル',
      width: 40,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <img src={`${process.env.PUBLIC_URL}/${params.row.Smb}.png`} style={{ width: 35 }} alt={''} />
      )
    }, {
      field: 'Wepn',
      headerName: '武器',
      width: 40,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <ModalEq
          Main={props.U[params.row.MainName]}
          SlctMain={params.row.MainName}
          Eq={'Wepn'}
          EqNam={props.U[params.row.MainName].Wepn}
          EqData={props.WepnData}
          MainSkCelc={props.MainSkCelc}
        />
      )
    }, {
      field: 'Armr',
      headerName: '鎧',
      width: 40,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <ModalEq
          Main={props.U[params.row.MainName]}
          SlctMain={params.row.MainName}
          Eq={'Armr'}
          EqNam={props.U[params.row.MainName].Armr}
          EqData={props.ArmrData}
          MainSkCelc={props.MainSkCelc}
        />
      )
    }, {
      field: 'Helm',
      headerName: '兜',
      width: 40,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <ModalEq
          Main={props.U[params.row.MainName]}
          SlctMain={params.row.MainName}
          Eq={'Helm'}
          EqNam={props.U[params.row.MainName].Helm}
          EqData={props.HelmData}
          MainSkCelc={props.MainSkCelc}
        />
      )
    }, {
      field: 'Acce',
      headerName: 'アクセサリー',
      width: 40,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <ModalEq
          Main={props.U[params.row.MainName]}
          SlctMain={params.row.MainName}
          Eq={'Acce'}
          EqNam={props.U[params.row.MainName].Acce}
          EqData={props.AcceData}
          MainSkCelc={props.MainSkCelc}
        />
      )
    }, {
      field: 'Ench',
      headerName: 'エンチャント',
      width: 40,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Modal_Ench.Ench
          SlctMain={params.row.MainName}
          EnchNam={props.U[params.row.MainName].Ench}
          EnchData={props.EnchData}
          EnchSlctOn={props.EnchSlctOn}
        />
      )
    }, {
      field: 'Pss',
      headerName: 'パッシブ',
      width: 105,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <ModalPss
          SlctMain={params.row.MainName}//選択行のメインキャラ名
          PssList={props.U[params.row.MainName].PssList}
          SklData={props.SklData}
          Celc={props.Celc}
        />
      )
    }, {
      field: 'ActPtt',
      headerName: '行動パターン',
      width: 300,
      headerAlign: 'center',
      align: 'left',
      renderCell: (params) => (
        <ModalAct
          SlctMain={params.row.MainName}//選択行のメインキャラ名
          Main={props.U[params.row.MainName]}
          Act={params.row.ActPtt}//選択行の行動パターン
          ActList={props.U[params.row.MainName].ActList}
          ActSlctOn={props.ActSlctOn}
        />
      )
    }, {
      field: 'Dmg',
      headerName: '非CR',
      type: 'number',
      width: 80,
      headerAlign: 'center',

    }, {
      field: 'DmgEx',
      headerName: '期待値',
      type: 'number',
      width: 80,
      headerAlign: 'center',
    }, {
      field: 'DmgCr',
      headerName: 'CR',
      type: 'number',
      width: 80,
      headerAlign: 'center',
    }, {
      field: 'chart',
      headerName: 'チャート',
      type: 'string',
      width: 300,
      headerAlign: 'left',
      renderCell: (params) => (
        <>
          <img src={`${process.env.PUBLIC_URL}/Dmg.png`} style={{ width: params.row.Dmg / 1000, height: 100 }} alt={''} />
          <img src={`${process.env.PUBLIC_URL}/DmgEx.png`} style={{ width: (params.row.DmgEx - params.row.Dmg) / 1000, height: 100 }} alt={''} />
          <img src={`${process.env.PUBLIC_URL}/DmgCr.png`} style={{ width: (params.row.DmgCr - params.row.DmgEx) / 1000, height: 100 }} alt={''} />
        </>
      )
    },
  ];

  const rows = []
  for (let i = 0; i < props.MainList.length; i++) {
    let PssNamAll = ''
    Object.keys(props.U[props.MainList[i].value].PssList).forEach(PssNam => {
      PssNamAll += PssNam
    })

    rows.push({
      id: i + 1,
      MainName: props.MainList[i].value,
      Rr: props.U[props.MainList[i].value].Rr,
      Cls: U[MainList[i].value].Cls,
      Typ: props.U[props.MainList[i].value].Typ,
      Smb: props.U[props.MainList[i].value].Smb,
      Wepn: props.U[props.MainList[i].value].Wepn,
      Armr: props.U[props.MainList[i].value].Armr,
      Helm: props.U[props.MainList[i].value].Helm,
      Acce: props.U[props.MainList[i].value].Acce,
      Ench: props.U[props.MainList[i].value].Ench,
      SprtName: U[MainList[i].value].Sprt,
      Pss: PssNamAll,
      ActPtt: props.U[props.MainList[i].value].Act,
      Dmg: props.U[props.MainList[i].value].UnitDmg,
      DmgEx: props.U[props.MainList[i].value].UnitDmgEx,
      DmgCr: props.U[props.MainList[i].value].UnitDmgCr,
      chart: '',
    })
  }

  // const test = (e) => {
  //   props.U.アンドロメダ.Sprt = e
  //   // console.log(props.U.アンドロメダ.Sprt.Nam)
  //   // props.Main.Sprt.Nam = e
  //   // handleClose()
  //   props.SprtSkCelc()
  //   //props.SprtSlctOn(props.SlctMain, e)
  // }
  // <Button onClick={() => test('アルテミス')}>アルテミス</Button>


  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        density='compact'//行の幅
        autoHeight//行に合わせた高さ
        components={{
          Toolbar: GridToolbar,　　// ツールバーを指定する
        }}
        showColumnRightBorder // 列ヘッダセルの右側に線を引く
        showCellRightBorder   // セルの右側に線を引く
        hideFooter//フッター非表示
        hideFooterSelectedRowCount//フッターに表示されている選択中の行数を非表示
        hideFooterPagination//フッターに表示されているページ当たりの行数、ページングを非表示にする。（無料版のみ）
      />
    </Box>
  );
}


