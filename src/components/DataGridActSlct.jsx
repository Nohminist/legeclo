import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

export default function DataGridActSlct(props) {//行動選択表

  // console.log(props)

  const ActSlctOn = (Main,i,ActNam) => {
    console.log(`${Main}のindex${i}を${ActNam}に変更`)

    props.handleClose2()
    props.handleClose()
    props.ActSlctOn(Main,i,ActNam)
  }

  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
  
    {
      field: 'icon',
      headerName: '',
      width: 40,
      type: 'string',
      headerAlign: 'center',
      align: 'center',
  
      renderCell: (params) => (
        <Button onClick={() => ActSlctOn(props.SlctMain,props.index, params.row.ActNam)}>
        <img src={`${process.env.PUBLIC_URL}/${params.row.ActNam}i.png`} style={{ width: 35 }} alt={''} />
        </Button>
  
      )
  
    }, {
      field: 'ActNam',
      headerName: '行動変更',
      width: 240,
      type: 'string',
  
    },
  ];

  const rows = []
  for (let i = 0; i < props.ActList.length; i++) {
    rows.push({
      id: i + 1,
      icon: props.ActList[i],
      ActNam: props.ActList[i],
    })
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
        density='compact'//行の幅
        autoHeight//行に合わせた高さ
        showColumnRightBorder // 列ヘッダセルの右側に線を引く
        showCellRightBorder   // セルの右側に線を引く
        hideFooter//フッター非表示
        hideFooterSelectedRowCount//フッターに表示されている選択中の行数を非表示
        hideFooterPagination//フッターに表示されているページ当たりの行数、ページングを非表示にする。（無料版のみ）
      />
    </div>
  );
}