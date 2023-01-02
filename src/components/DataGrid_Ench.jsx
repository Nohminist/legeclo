import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from "@material-ui/core/Button";



export function Ench(props) {

  const test = (EnchNam) => {
    props.handleClose()
    console.log(props.SlctMain)
    console.log(EnchNam)
    props.EnchSlctOn(props.SlctMain, EnchNam)
  }


  const columns = [
    { field: 'id',
     headerName: '',
      width: 40,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Button onClick={() => test(params.row.name)} >
          <img src={`${process.env.PUBLIC_URL}/${params.row.name}i.png`} style={{ width: 35 }} alt={''} />
        </Button>
      )
     },{
      field: 'name',
      headerName: 'エンチャント',
      width: 160,
    },
  ];
  

  const rows = []
  Object.keys(props.EnchData).forEach(EnchNam => {
      rows.push({
        id: EnchNam,
        name: EnchNam,
      })
  })



  return (
    <Box sx={{ height: 510, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        density='compact'//行の幅
        autoHeight//行に合わせた高さ
        showColumnRightBorder // 列ヘッダセルの右側に線を引く
        showCellRightBorder   // セルの右側に線を引く
        hideFooter//フッター非表示
        hideFooterSelectedRowCount//フッターに表示されている選択中の行数を非表示
        hideFooterPagination//フッターに表示されているページ当たりの行数、ページングを非表示にする。（無料版のみ）

      />
    </Box>
  );
}