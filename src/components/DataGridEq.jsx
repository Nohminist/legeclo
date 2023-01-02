import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from "@material-ui/core/Button";


export default function DataGridEq(props) {
  let Main = props.Main


  const EqSlctOn = (EqNam) => {
    console.log(props.SlctMain + 'の' + props.Eq + 'を' + EqNam + 'に')
    props.handleClose()
    props.Main[props.Eq] = EqNam
    props.MainSkCelc()
  }

  const columns = [
    {
      field: 'id',
      headerName: '',
      width: 40,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <Button onClick={() => EqSlctOn(params.row.name)} >
          <img
            src={`${process.env.PUBLIC_URL}/${params.row.name}i.png`}
            style={{ width: 35 }}
            alt={''}
          />
        </Button>
      )
    }, {
      field: 'name',
      headerName: '名称',
      width: 200,
    }, {
      field: 'H',
      headerName: 'HP',
      type: 'number',
      width: 40,
    }, {
      field: 'A',
      headerName: 'アタック',
      type: 'number',
      width: 40,
    }, {
      field: 'D',
      headerName: 'ディフェンス',
      type: 'number',
      width: 40,
    }, {
      field: 'M',
      headerName: 'マジック',
      type: 'number',
      width: 40,
    }, {
      field: 'R',
      headerName: 'レジスト',
      type: 'number',
      width: 40,
    }, {
      field: 'T',
      headerName: 'テクニック',
      type: 'number',
      width: 40,
    },
  ];

  const rows = []
  Object.keys(props.EqData).forEach(EqNam => {
    if (props.EqData[EqNam][Main.Cls]) {
      rows.push({
        id: EqNam,
        name: EqNam,
        H: props.EqData[EqNam].H,
        A: props.EqData[EqNam].A,
        D: props.EqData[EqNam].D,
        M: props.EqData[EqNam].M,
        R: props.EqData[EqNam].R,
        T: props.EqData[EqNam].T,
      })
    }
  })

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        experimentalFeatures={{ newEditingApi: true }}
        density='compact'//行の幅
        // autoHeight//行に合わせた高さ
        pageSize={5}
        rowsPerPageOptions={[5]}
        // disableRowSelectionOnClick
        showColumnRightBorder // 列ヘッダセルの右側に線を引く
        showCellRightBorder   // セルの右側に線を引く
      />
    </Box>
  );
}