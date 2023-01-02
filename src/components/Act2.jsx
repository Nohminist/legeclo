import Select from 'react-select';
import { useState } from "react";
import * as Img from "./Img";
import * as Stts from "./Stts";
import * as Sw from './Sw'

export function Act2(props) {

  const [St11, setSt11] = useState(false)
  const St11DispSw = () => {
    setSt11(prevSt11 => !prevSt11)
  }
  const [St21, setSt21] = useState(false)
  const St21DispSw = () => {
    setSt21(prevSt11 => !prevSt11)
  }




  //let test = false

  return (
    <>
      <table style={{ width: "100%" }} >
        <tbody>
          <tr style={{ backgroundColor: "#f6f0e4" }}>
            <td style={{ width: "100px" }}>ターン</td>
            <td colSpan={2}>行動</td>
            <td>非CR</td>
            <td>期待値</td>
            <td>CR</td>
          </tr>
          <tr style={{ backgroundColor: "#f6f0e4" }}>
            <td>1-1<button onClick={() => St11DispSw()}>{St11 ? '×' : '+'}</button></td>
            <td style={{ width: "1px" }}><Img.Act p={props.ActI11} /></td>
            <td><Select options={props.Op[11]} onChange={(e) => props.onChange(e)} /></td>
            <td>{props.ActSt[0][11].UnitDmg}</td>
            <td>{props.ActSt[0][11].UnitDmgEx}</td>
            <td>{props.ActSt[0][11].UnitDmgCr}</td>
          </tr>
          {St11 &&
            <tr>
              <td colSpan={6}><Stts.ActSt ActSt={props.ActSt} t={11} /></td>
            </tr>
          }


          <tr style={{ backgroundColor: "#f6f0e4" }}>
            <td>2-1<button onClick={() => St21DispSw()}>{St21 ? '×' : '+'}</button></td>
            <td style={{ width: "1px" }}><Img.Act p={props.ActI21} /></td>
            <td><Select options={props.Op[21]} onChange={(e) => props.onChange(e)} /></td>
            <td>{props.ActSt[0][21].UnitDmg}</td>
            <td>{props.ActSt[0][21].UnitDmgEx}</td>
            <td>{props.ActSt[0][21].UnitDmgCr}</td>
          </tr>
          {St21 &&

            <tr>
              <td colSpan={6}><Stts.ActSt ActSt={props.ActSt} t={21} /></td>
            </tr>
          }
          <tr style={{ backgroundColor: "#f6f0e4" }}>
            <td style={{ width: "50px" }}>合計</td>
            <td colSpan={2}></td>
            <td>{props.ActSt[0].UnitDmg}</td>
            <td>{props.ActSt[0].UnitDmgEx}</td>
            <td>{props.ActSt[0].UnitDmgCr}</td>
          </tr>
        </tbody>
      </table>




    </>
  )
}