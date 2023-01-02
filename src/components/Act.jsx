import Select from 'react-select';
import * as Img from "./Img";
import * as Stts from "./Stts";



export function Act(props) {

  //console.log(props.Turn)　ここまでは01
  

  let Op = []
  // Op[0] = props.Op
  // Op[1] = props.Op
  
  // console.log(props.Op)

  //Op[props.Turn] = props.Turn

  // for (let i = 0; i < props.Op.length; i++) {
  //   Op[props.Turn][i].value[0] = props.Turn
  // }

  





  return (
    <div>
      <table style={{ backgroundColor: "#f6f0e4", width: "100%" }} >
        <tbody>
          <tr>
            <td></td>
            <td colSpan={5}>行動</td>
            <td>非CR</td>
            <td>期待値</td>
            <td>CR</td>
          </tr>
          <tr>
            <td style={{ width: "1px" }}><Img.Act p={props.ActI} /></td>
            <td colSpan={5}><Select options={Op[props.Turn]} onChange={(e) => props.onChange(e)} defaultValue={{ label: '通常攻撃', value: '通常攻撃' }} /></td>
            <td style={{ width: "60px" }}>{props.Dmg[props.Turn].Ally.Dmg}</td>
            <td style={{ width: "60px" }}>{props.Dmg[props.Turn].Ally.DmgEx}</td>
            <td style={{ width: "60px" }}>{props.Dmg[props.Turn].Ally.DmgCr}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td><Stts.ActSt p={props.ActSt} /></td>
          </tr>
        </tbody>
      </table>


    </div>
  )
}