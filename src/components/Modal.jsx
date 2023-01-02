
import React, { useState } from "react";
import * as Modal1 from "./Modal1";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Modal(props) {

  const [showModal, setShowModal] = useState(false); // Modalコンポーネントの表示の状態を定義する
  const ShowModal = () => {
    setShowModal(true);
  };

  return (
    
    <div>
      <button variant="contained" onClick={ShowModal}><img src={`${process.env.PUBLIC_URL}/${props.Main}i.png`} style={{ width: 80 }} alt={''} /></button>
      <Button variant="text" onClick={ShowModal}><img src={`${process.env.PUBLIC_URL}/${props.Main}i.png`} style={{ width: 80 }} alt={''} /></Button>
      <Button variant="contained"><img src={`${process.env.PUBLIC_URL}/${props.Main}i.png`} style={{ width: 80 }} alt={''} /></Button>
      <Button variant="outlined"><img src={`${process.env.PUBLIC_URL}/${props.Main}i.png`} style={{ width: 80 }} alt={''} /></Button>



      <Modal1.Modal1 showFlag={showModal} setShowModal={setShowModal} content="親から渡された値です。" />

    </div>
  )
}