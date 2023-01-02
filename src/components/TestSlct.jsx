import { useState } from "react";
import Select from 'react-select';

const TestList = [
  { value: '選択した項目を表示1', label: '選択した項目を表示1' },
  { value: '選択した項目を表示2', label: '選択した項目を表示2' }
]

export default function TestSlct(props) {

  const [testText, setTestText] = useState('')

  const test = (e) => {
    console.log(e.value)
    setTestText(e.value)
  }

  return (
    <>
      <Select options={TestList} onChange={(e) => test(e)} />
      {testText}
    </>

  )
}
