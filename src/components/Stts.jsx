export function MainKh(props) {
  return (
    <table>
      <tbody>
        <tr>
          <td></td>
          <td>ガチャ</td>
          <td>基礎</td>
          <td>基本</td>
        </tr>
        <tr>
          <td>HP</td>
          <td>{props.p[0].H}</td>
          <td>{props.p[1].H}</td>
          <td>{props.p[2].H}</td>
        </tr>
        <tr>
          <td>アタック</td>
          <td>{props.p[0].A}</td>
          <td>{props.p[1].A}</td>
          <td>{props.p[2].A}</td>
        </tr>
        <tr>
          <td>ディフェンス</td>
          <td>{props.p[0].D}</td>
          <td>{props.p[1].D}</td>
          <td>{props.p[2].D}</td>
        </tr>
        <tr>
          <td>マジック</td>
          <td>{props.p[0].M}</td>
          <td>{props.p[1].M}</td>
          <td>{props.p[2].M}</td>
        </tr>
        <tr>
          <td>レジスト</td>
          <td>{props.p[0].R}</td>
          <td>{props.p[1].R}</td>
          <td>{props.p[2].R}</td>
        </tr>
        <tr>
          <td>テクニック</td>
          <td>{props.p[0].T}</td>
          <td>{props.p[1].T}</td>
          <td>{props.p[2].T}</td>
        </tr>
      </tbody>
    </table>
  )
}
export function MainSk(props) {
  return (
    <table>
      <tbody>
        <tr>
          <td>装備</td>
        </tr>
        <tr>
          <td>{props.p[0].H}</td>
        </tr>
        <tr>
          <td>{props.p[0].A}</td>
        </tr>
        <tr>
          <td>{props.p[0].D}</td>
        </tr>
        <tr>
          <td>{props.p[0].M}</td>
        </tr>
        <tr>
          <td>{props.p[0].R}</td>
        </tr>
        <tr>
          <td>{props.p[0].T}</td>
        </tr>
      </tbody>
    </table>
  )
}
export function SprtKh(props) {
  return (
    <table>
      <tbody>
        <tr>
          <td></td>
          <td>ガチャ</td>
          <td>基礎</td>
          <td>基本</td>
        </tr>
        <tr>
          <td>HP</td>
          <td>{props.p[0].H}</td>
          <td>{props.p[1].H}</td>
          <td>{props.p[2].H}</td>
        </tr>
        <tr>
          <td>アタック</td>
          <td>{props.p[0].A}</td>
          <td>{props.p[1].A}</td>
          <td>{props.p[2].A}</td>
        </tr>
        <tr>
          <td>ディフェンス</td>
          <td>{props.p[0].D}</td>
          <td>{props.p[1].D}</td>
          <td>{props.p[2].D}</td>
        </tr>
        <tr>
          <td>マジック</td>
          <td>{props.p[0].M}</td>
          <td>{props.p[1].M}</td>
          <td>{props.p[2].M}</td>
        </tr>
        <tr>
          <td>レジスト</td>
          <td>{props.p[0].R}</td>
          <td>{props.p[1].R}</td>
          <td>{props.p[2].R}</td>
        </tr>
        <tr>
          <td>テクニック</td>
          <td>{props.p[0].T}</td>
          <td>{props.p[1].T}</td>
          <td>{props.p[2].T}</td>
        </tr>
      </tbody>
    </table>
  )
}
export function SprtSk(props) {
  return (
    <table>
      <tbody>
        <tr>
          <td>装備</td>
        </tr>
        <tr>
          <td>{props.p[0].H}</td>
        </tr>
        <tr>
          <td>{props.p[0].A}</td>
        </tr>
        <tr>
          <td>{props.p[0].D}</td>
        </tr>
        <tr>
          <td>{props.p[0].M}</td>
        </tr>
        <tr>
          <td>{props.p[0].R}</td>
        </tr>
        <tr>
          <td>{props.p[0].T}</td>
        </tr>
      </tbody>
    </table>
  )
}
export function ActSt(props) {


  // let Ara = { Main: 0, Sprt: 0 }
  // if (props.p[3].Ara === 0) Ara.Main = '単'
  // else if (props.p[3].Ara === 9) Ara.Main = '全'
  // else Ara.Main = props.p[3].Ara
  // if (props.p[7].Ara === 0) Ara.Sprt = '単'




  // let Rng = { Main: 0, Sprt: 0 }
  // if (props.p[3].Rng === 0) Rng.Main = '自'
  // else Rng.Main = props.p[3].Rng

  // let Mag = { Main: 0, Sprt: 0 }
  // if (props.p[3].Mag === 0) Mag.Main = '-'
  // else Mag.Main = props.p[3].Mag

  // let Num = { Main: 0, Sprt: 0 }
  // Num.Main = props.p[3].Num
  // Num.Sprt = props.p[7].Num



  // if (  !props.p[2].H) {//メイン不在
  //   Ara.Main = null
  //   Rng.Main = null
  //   Mag.Main = null
  //   Num.Main = null
  // }
  // if (  !props.p[6].H|| props.p[3].Mag < 1) {//サポート不在or範囲攻撃なら
  //   Ara.Sprt = null
  //   Rng.Sprt = null
  //   Mag.Sprt = null
  //   Num.Sprt = null
  // }



  return (
    <>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td colSpan={3}>メイン</td>
            <td colSpan={3}>サポート</td>
          </tr>
          <tr>
            <td>CT</td>
            <td colSpan={3}>{props.ActSt[0][props.t].CT}</td>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <td>範囲</td>
            <td colSpan={3}>{props.ActSt[0][props.t].Ara}</td>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <td>射程</td>
            <td colSpan={3}>{props.ActSt[0][props.t].Rng}</td>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <td>威力</td>
            <td colSpan={3}>{props.ActSt[0][props.t].Mag}</td>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <td>攻撃回数</td>
            <td colSpan={3}>{props.ActSt[0][props.t].Num}</td>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <td>HP</td>
            <td>{props.ActSt[0][props.t].Btl.Mlt.H}%</td>
            <td>{props.ActSt[0][props.t].Btl.Add.H}</td>
            <td>{props.ActSt[0][props.t].Btl.H}</td>
          </tr>
          <tr>
            <td>アタック</td>
            <td>{props.ActSt[0][props.t].Btl.Mlt.A}%</td>
            <td>{props.ActSt[0][props.t].Btl.Add.A}</td>
            <td>{props.ActSt[0][props.t].Btl.A}</td>
          </tr>
          <tr>
            <td>ディフェンス</td>
            <td>{props.ActSt[0][props.t].Btl.Mlt.D}%</td>
            <td>{props.ActSt[0][props.t].Btl.Add.D}</td>
            <td>{props.ActSt[0][props.t].Btl.D}</td>
          </tr>
          <tr>
            <td>マジック</td>
            <td>{props.ActSt[0][props.t].Btl.Mlt.M}%</td>
            <td>{props.ActSt[0][props.t].Btl.Add.M}</td>
            <td>{props.ActSt[0][props.t].Btl.M}</td>
          </tr>
          <tr>
            <td>レジスト</td>
            <td>{props.ActSt[0][props.t].Btl.Mlt.R}%</td>
            <td>{props.ActSt[0][props.t].Btl.Add.R}</td>
            <td>{props.ActSt[0][props.t].Btl.R}</td>
          </tr>
          <tr>
            <td>テクニック</td>
            <td>{props.ActSt[0][props.t].Btl.Mlt.T}%</td>
            <td>{props.ActSt[0][props.t].Btl.Add.T}</td>
            <td>{props.ActSt[0][props.t].Btl.T}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>クリティカル率</td>
            <td colSpan={3}>{props.ActSt[0][props.t].Btl.Mlt.Crr}%</td>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <td>クリダメ倍率</td>
            <td colSpan={3}>{props.ActSt[0][props.t].Btl.Mlt.Crd}%</td>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <td>与ダメージ</td>
            <td colSpan={3}>{props.ActSt[0][props.t].Btl.Mlt.Damp}%</td>
            <td colSpan={3}>%</td>
          </tr>
          <tr>
            <td>物理ダメージ耐性</td>
            <td colSpan={3}>{props.ActSt[0][props.t].Btl.Mlt.DresA}%</td>
            <td colSpan={3}>%</td>
          </tr>
          <tr>
            <td>魔法ダメージ耐性</td>
            <td colSpan={3}>{props.ActSt[0][props.t].Btl.Mlt.DresM}%</td>
            <td colSpan={3}>%</td>
          </tr>
          <tr>
            <td>D,R無視</td>
            <td colSpan={3}>{props.ActSt[0][props.t].Btl.Mlt.Pnt}%</td>
            <td colSpan={3}>%</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

