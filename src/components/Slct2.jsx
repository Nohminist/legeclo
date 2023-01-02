import Select from 'react-select';
import { useState } from "react";
import * as Img from "./Img";
import * as Stts from "./Stts";
import * as Slct from './Slct';
import * as Sw from './Sw'
// import { Act } from './Act'

export function Main2(props) {

  const [MainStDisp, setMainStDisp] = useState(true)
  const MainStDispSw = () => {
    setMainStDisp(prevMainStDisp => !prevMainStDisp)
  }





  return (
    <>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td rowSpan={2} style={{ width: "1px" }}><Img.Main p={props.Main} /></td>
            <td><Slct.Main Op={props.MainList} onChange={props.onChange} /></td>
          </tr>
          <tr>
            <td>★6　Lv100　<Sw.MainSt p={MainStDisp} onClick={MainStDispSw} /></td>
          </tr>
        </tbody>
      </table>
      {MainStDisp &&
        <table>
          <tbody>
            <tr>
              <td><Stts.MainKh p={props.MainKh} /></td>
              <td><Stts.MainSk p={props.MainSk} /></td>
            </tr>
          </tbody>
        </table>
      }
    </>
  )
}

export function Sprt2(props) {
  const [SprtStDisp, setSprtStDisp] = useState(true)
  const SprtStDispSw = () => {
    setSprtStDisp(prevSprtStDisp => !prevSprtStDisp)
  }

  return (
    <>
          <div>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td rowSpan={2} style={{ width: "1px" }}><Img.Sprt p={props.Sprt} /></td>
                  <td><Slct.Sprt Op={props.SprtList} onChange={props.onChange} /></td>
                </tr>
                <tr>
                  <td>★6　Lv100　<Sw.SprtSt p={SprtStDisp} onClick={SprtStDispSw} /></td>
                </tr>
              </tbody>
            </table>
          </div>
          {SprtStDisp &&
            <div>
              <table>
                <tbody>
                  <tr>
                    <td><Stts.SprtKh p={props.SprtKh} /></td>
                    <td><Stts.SprtSk p={props.SprtSk} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
    
    </>
  
  
  
  
  
    )
  }
export function Eq(props) {
  console.log(props.On)
  return (
    <div>
    <table style={{ backgroundColor: "#f6f0e4", width: "100%" }} >
      <tbody>
        <tr>
          <td style={{ width: "1px" }}><Img.Wepn WepnI={props.WepnI} /></td>
          <td style={{ width: "301px" }}><Slct.Wepn Op={props.WepnList} onChange={props.onChange[0]} WepnI={props.WepnI}/></td>
          <td></td>
        </tr>
        <tr>
          <td><Img.Armr p={props.Armr} /></td>
          <td><Slct.Armr Op={props.ArmrList} onChange={props.onChange[1]} /></td>
        </tr>
        <tr>
          <td><Img.Helm p={props.Helm} /></td>
          <td><Slct.Helm Op={props.HelmList} onChange={props.onChange[2]} /></td>
        </tr>
        <tr>
          <td><Img.Acce p={props.Acce} /></td>
          <td><Slct.Acce Op={props.AcceList} onChange={props.onChange[3]} /></td>
        </tr>
        <tr>
          <td><Img.Ench p={props.Ench} /></td>
          <td><Slct.Ench Op={props.EnchList} onChange={props.onChange[4]} /></td>
        </tr>
      </tbody>
    </table>
  </div>
)


}