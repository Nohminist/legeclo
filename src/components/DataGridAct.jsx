import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from "@material-ui/core/Button";
import ModalActSlct from "./ModalActSlct";



export default function DataGridAct(props) {
  // console.log(props)

  const test = (t, e) => {
    console.log(props.SlctMain, t, e)
    //props.handleClose()
    // props.SprtSlctOn(props.SlctMain, e)
  }



  const columns = [
    // {
    //   field: 'id',
    //   headerName: 'ターン',
    //   type: 'number',
    //   width: 60,
    // },
    {
      field: 'turn',
      headerName: 'ターン',
      type: 'number',
      width: 60,
      headerAlign: 'center',
    },
    {
      field: 'order',
      headerName: '順',
      type: 'number',
      width: 60,
      headerAlign: 'center',
    },
    
    {
      field: 'icon',
      headerName: '',
      width: 40,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <ModalActSlct
          SlctMain={props.SlctMain}
          Main={props.Main}
          index={params.row.id}
          ActNam={params.row.name}
          ActList={props.ActList}
          ActSlctOn={props.ActSlctOn}
          handleClose={props.handleClose}
        />
      )
    }, {
      field: 'name',
      headerName: '行動',
      width: 160,
    }, {
      field: 'Dmg',
      headerName: '非CR',
      type: 'number',
      width: 80,
      align: 'right',

    }, {
      field: 'DmgEx',
      headerName: '期待値',
      type: 'number',
      width: 80,
      align: 'right',
    }, {
      field: 'DmgCr',
      headerName: 'CR',
      type: 'number',

      width: 80,
      align: 'right',
    }, {
      field: 'chart',
      headerName: 'チャート',
      type: 'string',
      width: 240,
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



  for (let i = 0; i < props.Act.length; i++) {
    rows.push({
      id: i,
      order: i+1,
      turn: props.Act[i].t+1,
      icon: props.Act[i].Nam,
      name: props.Act[i].Nam,
      Dmg: props.Act[i].UnitDmg,
      DmgEx: props.Act[i].UnitDmgEx,
      DmgCr: props.Act[i].UnitDmgCr,
      chart: '',
    })
  }


  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        density='compact'//行の幅
        autoHeight//行に合わせた高さ
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        showColumnRightBorder // 列ヘッダセルの右側に線を引く
        showCellRightBorder   // セルの右側に線を引く
        hideFooter//フッター非表示
        hideFooterSelectedRowCount//フッターに表示されている選択中の行数を非表示
        hideFooterPagination//フッターに表示されているページ当たりの行数、ページングを非表示にする。（無料版のみ）

      />
    </Box>
  );
}