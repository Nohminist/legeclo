import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from "@material-ui/core/Button";

export function Sprt(props) {
  let SlctMain = props.SlctMain
  // console.log(props.Sprt)
  // console.log(props.SprtData)

  const test = (e) => {
    props.Main.Sprt = e
    console.log (SlctMain+'のサポートを'+props.Main.Sprt+'に')
    props.handleClose()
    props.Calc()
    // props.SprtSkCelc()
    //props.SprtSlctOn(props.SlctMain, e)
  }

  const columns = [
    {
      field: 'id',
      headerName: '　',
      width: 80,
      renderCell: (params) => (
        <Button onClick={() => test(params.row.name)} >
          <img src={`${process.env.PUBLIC_URL}/${params.row.name}i.png`} style={{ width: 80 }} alt={''} />
        </Button>
      )
    },{
      field: 'name',
      headerName: 'キャラ名',
      width: 150,
    },
  ];
  





  const rows = []

  Object.keys(props.SprtData).forEach(Sprt => {

    rows.push({
      id: Sprt,
      name: Sprt,
    })
  })







  // <Button  onClick={() => test('アルテミス')}>アルテミス</Button>

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        density='compact'//行の幅
        // autoHeight//行に合わせた高さ
        pageSize={5}
        rowsPerPageOptions={[5]}
        // disableRowSelectionOnClick
      />
    </Box>
  );
}