import { useState } from "react";
//import Select from 'react-select';
import * as Img from "./Img";
import * as Stts from "./Stts";
import * as Slct from './Slct';
import * as Sw from './Sw'
import { Act } from './Act'







const MainSprt = ["Main", "Sprt"]
const AlwBtl = ["Alw", "Btl"]
const StList = ["H", "A", "D", "M", "R", "T"]
const StAll = ["H", "A", "D", "M", "R", "T", "Crr", "Crd", "Damp", "DresA", "DresM", "Pnt"]
const ClUp = {
  Main: { H: 800, A: 0, D: 0, M: 0, R: 0, T: 0 },
  Sprt: { H: 1200, A: 55, D: 28, M: 55, R: 28, T: 0 },
};
const KyB = {
  H: 30, A: 30, D: 30, M: 30, R: 30, T: 50
}
const Sho = {
  Cls: { H: 20, A: 30, D: 20, M: 30, R: 20, T: 0 },
  Main: { H: 40, A: 40, D: 40, M: 40, R: 40, T: 0 },
  Sprt: { H: 40, A: 40, D: 40, M: 40, R: 40, T: 0 },
}


const MainData = {
  アンドロメダ: {
    Cls: 'シューター', Sym: 'オリジン',
    H: 5262, A: 560, D: 215, M: 196, R: 196, T: 381, Mov: 3, Rng: 2,
    SklList: ['スーパーシュート', 'めんどいからドカーンで', 'アタックブースト', '一番痛いの撃っとくね', 'キラーエスケープ', 'イマドキの護身術'],
  },
  ベートーヴェン: {
    Cls: 'シューター', Sym: 'ナディア',
    H: 4930, A: 490, D: 216, M: 194, R: 215, T: 321, Mov: 3, Rng: 2,
    SklList: ['シャドーハント', 'シールライザー', 'グッドレスト', 'アクセルステップ', '英雄たちへの行進曲', 'ジェノサイダー'],
  },
  未選択: {
    Cls: '',
    H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Mov: 0, Rng: 0,
  },
};
const SprtData = {
  ソル: {
    Cls: 'シューター',
    H: 7600, A: 664, D: 251, M: 0, R: 224, T: 0, Mov: 0, Rng: 2,
  },
  未選択: {
    Cls: '',
    H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Mov: 0, Rng: 0,
  },
};
const MainList = [];
const SprtList = [];
Object.keys(MainData).forEach(V =>
  MainList.push({ value: V, label: V })
);
Object.keys(SprtData).forEach(V =>
  SprtList.push({ value: V, label: V })
);



const SklData = {
  通常攻撃: { Knd: 'N', CT: 0, Ara: 0, Rng: 0, Mag: 1, Txt: 'テキスト' },
  スーパーシュート: { Knd: 'A', CT: 5, Ara: 0, Rng: 2, Mag: 1.3, Txt: 'テキスト' },
  めんどいからドカーンで: { Knd: 'A', CT: 3, Ara: 3, Rng: 3, Mag: 0.45, Txt: 'テキスト' },
  アタックブースト: { Knd: 'P', CT: 0, Ara: 0, Rng: 0, Mag: 0, Txt: 'テキスト' },
  一番痛いの撃っとくね: { Knd: 'A', CT: 3, Ara: 0, Rng: 2, Mag: 1.7, Txt: 'テキスト' },
  キラーエスケープ: { Knd: 'P', CT: 0, Ara: 0, Rng: 0, Mag: 0, Txt: 'テキスト' },
  イマドキの護身術: { Knd: 'A', CT: 5, Ara: 5, Rng: 0, Mag: 0.55, Txt: 'テキスト' },
  シャドーハント: { Knd: 'A', CT: 2, Ara: 0, Rng: 2, Mag: 1.5, Txt: 'テキスト' },
  シールライザー: { Knd: 'A', CT: 3, Ara: 3, Rng: 3, Mag: 0.45, Txt: 'テキスト' },
  グッドレスト: { Knd: 'P', CT: 0, Ara: 0, Rng: 0, Mag: 0, Txt: 'テキスト' },
  アクセルステップ: { Knd: 'A', CT: 2, Ara: 0, Rng: 0, Mag: 0, Txt: 'テキスト' },
  英雄たちへの行進曲: { Knd: 'A', CT: 3, Ara: 9, Rng: 0, Mag: 0, Txt: 'テキスト' },
  ジェノサイダー: { Knd: 'A', CT: 5, Ara: 5, Rng: 0, Mag: 0.5, Txt: 'テキスト' },

}
const WepnData = {
  ライトマキシマスカ: { H: 0, A: 141, D: 0, M: 0, R: 0, T: 60 },
  ダブルロングショット: { H: 0, A: 141, D: 0, M: 0, R: 0, T: 60 },
};
const WepnList = [];
Object.keys(WepnData).forEach(V =>
  WepnList.push({ value: V, label: V })
)
const ArmrData = {
  アサシンベスト: { H: 383, A: 0, D: 45, M: 0, R: 0, T: 0 },
  獅子の天装: { H: 516, A: 0, D: 67, M: 0, R: 0, T: 0 },
};
const ArmrList = [];
Object.keys(ArmrData).forEach(function (V) {
  ArmrList.push({ value: V, label: V })
})
const HelmData = {
  追跡の頭帯: { H: 443, A: 0, D: 0, M: 0, R: 69, T: 0 },
};
const HelmList = [];
Object.keys(HelmData).forEach(V =>
  HelmList.push({ value: V, label: V })
)
const AcceData = {
  ゼニスのお守り: { H: 0, A: 100, D: 0, M: 100, R: 0, T: 0 },
  オリジンのお守り: { H: 0, A: 100, D: 0, M: 100, R: 0, T: 0 },
  ナディアのお守り: { H: 0, A: 100, D: 0, M: 100, R: 0, T: 0 },
};
const AcceList = [];
Object.keys(AcceData).forEach(V =>
  AcceList.push({ value: V, label: V })
)
const EnchData = {
  バスター: { Set2: 'R', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  チャージ: { Set2: 'R', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  フェザー: { Set2: 'R', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  クイック: { Set2: 'R', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  ノヴァ: { Set2: 'R', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  アイアン: { Set2: 'G', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  リフレクト: { Set2: 'G', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  バックアップ: { Set2: 'G', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  アイス: { Set2: 'B', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  ブライト: { Set2: 'B', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  クリスタル: { Set2: 'B', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  ストライク: { Set2: 'Y', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  ブレイク: { Set2: 'Y', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  未選択: { Set2: '', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
};
const EnchList = [];
Object.keys(EnchData).forEach(V =>
  EnchList.push({ value: V, label: V })
)

let C = {
  Main: {
    Nam: '未選択', Cls: '',
    Gc: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Ks: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Kh: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Sk: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Wepn: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Nam: '' },
    Armr: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Nam: '' },
    Helm: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Nam: '' },
    Acce: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Nam: '' },
    Ench: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Nam: '' },
    SklList: [],
    ActList: [{ value: [0,'通常攻撃'], label: '通常攻撃' }],
    Act: [
      {
        Nam: [0,'通常攻撃'], CT: 0, Ara: 0, Rng: 0, Mag: 1, Num: 1, Att: false,
        Alw: {
          H: 0, A: 0, D: 0, M: 0, R: 0, T: 0,
          Mlt: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
          MltMAct: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
          Add: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
          Dmg: 0, DmgCr: 0, DmgEx: 0
        },
        Btl: {
          H: 0, A: 0, D: 0, M: 0, R: 0, T: 0,
          Mlt: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
          MltMAct: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
          Add: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
          Dmg: 0, DmgCr: 0, DmgEx: 0
        }
      }
    ],
  },
  Sprt: {
    Nam: '未選択', Cls: '',
    Gc: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Ks: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Kh: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Sk: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Wepn: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Armr: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Helm: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Acce: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Ench: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    SklList: [],
    Act: [
      {
        Nam: [0,'通常攻撃'], CT: 0, Ara: 0, Rng: 0, Mag: 1, Num: 1, Att: false,
        Alw: {
          H: 0, A: 0, D: 0, M: 0, R: 0, T: 0,
          Mlt: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
          MltMAct: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
          Add: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
          Dmg: 0, DmgCr: 0, DmgEx: 0
        },
        Btl: {
          H: 0, A: 0, D: 0, M: 0, R: 0, T: 0,
          Mlt: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
          MltMAct: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
          Add: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
          Dmg: 0, DmgCr: 0, DmgEx: 0
        }
      }
    ],
  },
  Wepn: { Nam: '未選択', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  Armr: { Nam: '未選択', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  Helm: { Nam: '未選択', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  Acce: { Nam: '未選択', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
  Ench: { Nam: '未選択', H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },



  Ally: {
    Act: [{ Btl: { Dmg: 0, DmgCr: 0, DmgEx: 0 } }],
  },
  Enmy: {
    Nam: '', Cls: 'ヴォイド',
    Act: [
      {
        Btl: { Dmg: 0, DmgCr: 0, DmgEx: 0 }
      }
    ],


  },


};

C.Main.Act[1] = C.Main.Act[0]
C.Sprt.Act[1] = C.Sprt.Act[0]
C.Ally.Act[1] = C.Ally.Act[0]




export default function DamSim() {

  const [MainKh, setMainKh] = useState(
    [
      { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
      { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
      { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 }
    ]
  );
  const [SprtKh, setSprtKh] = useState(
    [
      { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
      { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
      { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 }
    ]
  );
  const [MainSk, setMainSk] = useState(
    [
      { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    ]
  );
  const [SprtSk, setSprtSk] = useState(
    [
      { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    ]
  );
  const [ActSt, setActSt] = useState(
    [
      { H: '', A: '', D: '', M: '', R: '', T: '', Crr: '', Crd: '', Damp: '', DresA: '', DresM: '', Pnt: '' },
      { H: '', A: '', D: '', M: '', R: '', T: '' },
      { H: '', A: '', D: '', M: '', R: '', T: '' },
      { CT: '', Ara: '', Rng: '', Mag: 1, Num: 1, Att: false },
      { H: '', A: '', D: '', M: '', R: '', T: '', Crr: '', Crd: '', Damp: '', DresA: '', DresM: '', Pnt: '' },
      { H: '', A: '', D: '', M: '', R: '', T: '' },
      { H: '', A: '', D: '', M: '', R: '', T: '' },
      { CT: '', Ara: '', Rng: '', Mag: 1, Num: 1, Att: false },

    ]
  );




  const [Dmg, setDmg] = useState(
    {
      0: { Ally: { Dmg: 0, DmgCr: 0, DmgEx: 0 } },
      1: { Ally: { Dmg: 0, DmgCr: 0, DmgEx: 0 } },
    }



  );


  const [MainI, setMainI] = useState('リトリー')
  const [SprtI, setSprtI] = useState('リトリー')
  const [WepnI, setWepnI] = useState('武器')
  const [ArmrI, setArmrI] = useState('鎧')
  const [HelmI, setHelmI] = useState('兜')
  const [AcceI, setAcceI] = useState('アクセサリー')
  const [EnchI, setEnchI] = useState('エンチャント')
  const [ActI, setActI] = useState('通常攻撃')



  const MainSlctOn = (e) => {//メインが選択された時
    C.Main.Nam = e.value
    setMainI(e.value)

    for (const St of StList) {//基礎ステータス//基本ステータス
      C.Main.Gc[St] = MainData[e.value][St]
      C.Main.Ks[St] = Math.round(C.Main.Gc[St] / (1 + KyB[St] / 100) + ClUp.Main[St])
      C.Main.Kh[St] = Math.round(C.Main.Ks[St] * (1 + KyB[St] / 100 + Sho.Cls[St] / 100 + Sho.Main[St] / 100))
    }
    setMainKh(() => ([C.Main.Gc, C.Main.Ks, C.Main.Kh]))

    //スキル
    C.Main.SklList = []

    C.Main.ActList = [{ value: [0, '通常攻撃'], label: '通常攻撃' }]//初期化
    for (let i = 0; i < MainData[e.value].SklList.length; i++) {
      C.Main.SklList.push({ value: MainData[e.value].SklList[i], label: MainData[e.value].SklList[i] })
      if (SklData[MainData[e.value].SklList[i]].Knd === 'A') {//アクティブスキルなら
        C.Main.ActList.push({ value: [0, MainData[e.value].SklList[i]], label: MainData[e.value].SklList[i] })
      }
    }

    console.log(C.Main.ActList)


    MainSkCelc()

  }

  const WepnSlctOn = (e) => {
    setWepnI(e.value)
    C.Wepn.Nam = e.value
    for (const St of StList) {
      C.Wepn[St] = WepnData[e.value][St]
    }
    MainSkCelc()
  }
  const ArmrSlctOn = (e) => {
    setArmrI(e.value)
    C.Armr.Nam = e.value
    for (const St of StList) {
      C.Armr[St] = ArmrData[e.value][St]
    }
    MainSkCelc()
  }
  const HelmSlctOn = (e) => {
    setHelmI(e.value)
    C.Helm.Nam = e.value
    for (const St of StList) {
      C.Helm[St] = HelmData[e.value][St]
    }
    MainSkCelc()
  }
  const AcceSlctOn = (e) => {
    setAcceI(e.value)
    C.Acce.Nam = e.value
    for (const St of StList) {
      C.Acce[St] = AcceData[e.value][St]
    }
    MainSkCelc()
  }
  const EnchSlctOn = (e) => {
    setEnchI(e.value)
    C.Ench.Nam = e.value
    for (const St of StList) {
      C.Ench[St] = EnchData[e.value][St]
    }
    MainSkCelc()
  }


  const MainSkCelc = () => {//メインの装備が選択された後

    let Mlt = {}
    let Add = {}
    for (const St of StList) {//初期化
      Mlt[St] = 0
      Add[St] = 0
    }

    switch (EnchData[C.Ench.Nam].Set2) {//エンチャント2セット効果
      case 'R':
        Mlt.A += 5
        Mlt.M += 5
        break
      case 'G':
        Mlt.H += 10
        break
      case 'B':
        Mlt.D += 5
        Mlt.R += 5
        break
      default:
        break
    }

    for (const St of StList) {//メインの装備を含む基本ステータス
      Add[St] = C.Wepn[St] + C.Armr[St] + C.Helm[St] + C.Acce[St] + C.Ench[St]
      C.Main.Sk[St] = Math.floor(C.Main.Kh[St] * (1 + Mlt[St] / 100)) + Add[St]
    }
    setMainSk(() => ([C.Main.Sk]))

    SprtSkCelc()
  }

  const SprtSlctOn = (e) => {//サポートが選択された時
    C.Sprt.Nam = e.value
    setSprtI(e.value)

    for (const St of StList) {//基礎ステータス//基本ステータス
      C.Sprt.Gc[St] = SprtData[e.value][St]
      C.Sprt.Ks[St] = Math.round(C.Sprt.Gc[St] / (1 + KyB[St] / 100) + ClUp.Sprt[St])
      C.Sprt.Kh[St] = Math.round(C.Sprt.Ks[St] * (1 + KyB[St] / 100 + Sho.Cls[St] / 100 + Sho.Sprt[St] / 100))
    }
    setSprtKh(() => ([C.Sprt.Gc, C.Sprt.Ks, C.Sprt.Kh]))


    setSprtSk(() => ([C.Sprt.Sk]))



    SprtSkCelc()

  }

  const SprtSkCelc = () => {//サポートが決まった後&メインの装備を含む基本ステータスが決まった後


    for (const St of StList) {//サポートの装備を含む基本ステータス
      C.Sprt.Sk[St] = C.Sprt.Kh[St]
    }
    setSprtSk(() => ([C.Sprt.Sk]))

    Celc()
  }







  const MainActSlctOn = (e) => {
    console.log(e)
    setActI(e.value)
    C.Main.Act[0].Nam = e.value
    Celc()
  }


  const Celc = () => {//計算

    let DmgKari = {}

    for (let i = 0; i < 2; i++) {

      for (const MS of MainSprt) {//効果初期化
        for (const AB of AlwBtl) {
          for (const St of StAll) {
            C[MS].Act[i][AB].Mlt[St] = 0
            C[MS].Act[i][AB].MltMAct[St] = 0
            C[MS].Act[i][AB].Add[St] = 0
          }
        }
        C[MS].Act[i].Num = 1
        C[MS].Act[i].Att = false
      }
      C.Main.Act[i].Alw.Mlt.Crd += 30


      C.Main.Act[i].CT = SklData[C.Main.Act[i].Nam[1]].CT
      C.Main.Act[i].Ara = SklData[C.Main.Act[i].Nam[1]].Ara
      C.Sprt.Act[i].Ara = 0
      C.Main.Act[i].Mag = SklData[C.Main.Act[i].Nam[1]].Mag

      if (C.Main.Act[i].Nam[1] === '通常攻撃') {
        C.Main.Act[i].Rng = MainData[C.Main.Nam].Rng
      } else {
        C.Main.Act[i].Rng = SklData[C.Main.Act[i].Nam[1]].Rng
      }
      C.Sprt.Act[i].Rng = SprtData[C.Sprt.Nam].Rng


      switch (C.Main.Nam) {//タレント
        case 'アンドロメダ':
          C.Main.Act[i].Alw.Mlt.A += 25
          C.Sprt.Act[i].Alw.Mlt.A += 25
          if (C.Main.Act[i].Nam[1] !== '通常攻撃') {//HP75%以上
            if (C.Main.Act[i].Rng >= 1) C.Main.Act[i].Rng += 1
            if (C.Main.Act[i].Ara >= 1) C.Main.Act[i].Ara += 1
            //移動+2
          }
          //HP75%以下、自ユニットのスキル与ダメージ+30%
          break
        case 'ベートーヴェン':
          C.Main.Act[i].Alw.Mlt.A += 20
          C.Sprt.Act[i].Alw.Mlt.A += 20
          break
        default:
          break
      }
      switch (C.Sprt.Nam) {//サポートのパッシブ
        case 'ソル':
          break
        default:
          break
      }
      switch (C.Wepn.Nam) {//武器の装備アビリティ
        case 'ライトマキシマスカ':
          C.Main.Act[i].Alw.Mlt.A += 10
          break
        case 'ダブルロングショット':
          C.Main.Act[i].Alw.Mlt.A += 10
          break
        default:
          break
      }
      switch (C.Armr.Nam) {//鎧の装備アビリティ
        case 'アサシンベスト':
          C.Main.Act[i].Alw.Mlt.A += 10
          break
        case '獅子の天装':
          break
        default:
          break
      }
      switch (C.Helm.Nam) {//兜の装備アビリティ
        case '追跡の頭帯':
          break
        default:
          break
      }
      switch (C.Acce.Nam) {//アクセサリーの装備アビリティ
        case 'ゼニスのお守り':
          break

        default:
          break
      }
      switch (C.Ench.Nam) {//エンチャント4セット効果&黄色の2セット
        case 'バスター':
          if (C.Main.Act[i].Nam[1] !== '通常攻撃/敵ターン') {
            C.Main.Act[i].Btl.Mlt.A += 15
            C.Main.Act[i].Btl.Mlt.DresA += 15
            C.Main.Act[i].Btl.Mlt.DresM += 15
          }
          break
        case 'チャージ':
          C.Main.Act[i].Alw.Mlt.A += 10//HP70%以上
          C.Main.Act[i].Alw.Mlt.D += 10//HP70%以上
          C.Main.Act[i].Alw.Mlt.M += 10//HP70%以上
          C.Main.Act[i].Alw.Mlt.R += 10//HP70%以上
          break
        case 'フェザー':
          C.Main.Act[i].Alw.Mlt.Damp += 10
          //行動終了時、40%で移動+1(1ターン)
          break
        case 'クイック':
          //スキルでダメージを与えた時、50%でそのスキルCT-1
          break
        case 'ノヴァ':
          if (C.Main.Act[i].Nam[1] !== '通常攻撃' && C.Main.Act[i].Nam[1] !== '通常攻撃/敵ターン') {
            C.Main.Act[i].Alw.Mlt.Damp += 10
            if (C.Main.Act[i].Ara >= 1) C.Main.Act[i].Alw.Mlt.Damp += 10
          }
          break
        case 'アイアン':
          C.Main.Act[i].Alw.Mlt.DresA += 15
          C.Main.Act[i].Alw.Mlt.DresM += 15
          break
        case 'リフレクト':
          break
        case 'バックアップ':
          C.Main.Act[i].Alw.Mlt.D += 5
          C.Main.Act[i].Alw.Mlt.R += 5
          break
        case 'アイス':
          break
        case 'ブライト':
          break
        case 'クリスタル':
          break
        case 'ストライク':
          C.Main.Act[i].Alw.Mlt.Crr += 7
          C.Main.Act[i].Alw.Mlt.Crd += 30
          break
        case 'ブレイク':
          C.Main.Act[i].Alw.Mlt.Crr += 7
          if (C.Main.Act[i].Nam[1] !== '通常攻撃/敵ターン') {
            C.Main.Act[i].Btl.Mlt.Damp += 20//敵HP50%以上
          }
          break
        default:
          break
      }
      switch (C.Main.Act[i].Nam[1]) {//行動=攻撃スキル
        case 'ジェノサイダー':
          C.Main.Act[i].Alw.Mlt.Crr += 50
          break
        case 'シャドーハント':
          if (C.Enmy.Cls === 'アサシン') C.Main.Act[i].Mag = 2
          break
        case 'スーパーシュート':
          C.Main.Act[i].Btl.MltMAct.Damp += 30
          C.Sprt.Act[i].Btl.MltMAct.Damp += 30
          break
        default:
          break
      }

      for (const MS of MainSprt) {//出撃後ステータス//戦闘時ステータス
        for (const St of StAll) {//乗算・加算集計
          C[MS].Act[i].Btl.Mlt[St] += C[MS].Act[i].Alw.Mlt[St]//乗算・戦闘後+=出撃後
          C[MS].Act[i].Btl.Add[St] += C[MS].Act[i].Alw.Add[St]//加算・戦闘後+=出撃後

          C[MS].Act[i].Alw.Mlt[St] += C[MS].Act[i].Alw.MltMAct[St]//出撃後+=出撃後メインアクティブ
          C[MS].Act[i].Btl.Mlt[St] += Math.max(C[MS].Act[i].Alw.MltMAct[St], C[MS].Act[i].Btl.MltMAct[St])//戦闘後+=max(出撃後メインアクティブ,戦闘後メインアクティブ)

        }
        for (const St of StList) {//ステータス計算
          C[MS].Act[i].Alw[St] = Math.floor(C[MS].Sk[St] * (1 + C[MS].Act[i].Alw.Mlt[St] / 100)) + C[MS].Act[i].Alw.Add[St]
          C[MS].Act[i].Btl[St] = Math.floor(C[MS].Sk[St] * (1 + C[MS].Act[i].Btl.Mlt[St] / 100)) + C[MS].Act[i].Btl.Add[St]
        }
        //クリティカル率にテクニック加算
        C[MS].Act[i].Alw.Mlt.Crr += C[MS].Act[i].Alw.T / 10
        C[MS].Act[i].Btl.Mlt.Crr += C[MS].Act[i].Btl.T / 10




        {//setState
          let AB = ''
          if (C.Main.Act[i].Mag < 1) AB = 'Alw'//範囲攻撃ならAlw
          else AB = 'Btl'
          setActSt(() => ([C.Main.Act[i][AB].Mlt, C.Main.Act[i][AB].Add, C.Main.Act[i][AB], C.Main.Act[i], C.Sprt.Act[i][AB].Mlt, C.Sprt.Act[i][AB].Add, C.Sprt.Act[i][AB], C.Sprt.Act[i]]))
        }
      }


      for (const MS of MainSprt) {//ダメージ計算
        C[MS].Act[i].Dmg = C[MS].Act[i].Btl.A * C[MS].Act[i].Mag
        C[MS].Act[i].DmgCr = C[MS].Act[i].Btl.A * C[MS].Act[i].Mag
        C[MS].Act[i].DmgEx = C[MS].Act[i].Btl.A * C[MS].Act[i].Mag

        C[MS].Act[i].Dmg = Math.floor(C[MS].Act[i].Dmg)
        C[MS].Act[i].DmgCr = Math.floor(C[MS].Act[i].DmgCr)
        C[MS].Act[i].DmgEx = Math.floor(C[MS].Act[i].DmgEx)

        C[MS].Act[i].Dmg *= 10
        C[MS].Act[i].DmgCr *= 10
        C[MS].Act[i].DmgEx *= 10


        if (C.Main.Act[i].Mag > 1) C.Sprt.Act[i].Dmg = 0//範囲攻撃ならサポートのダメージ0

        C.Ally.Act[i].Dmg = C.Main.Act[i].Dmg + C.Sprt.Act[i].Dmg
        C.Ally.Act[i].DmgCr = C.Main.Act[i].DmgCr + C.Sprt.Act[i].Dmg
        C.Ally.Act[i].DmgEx = C.Main.Act[i].DmgEx + C.Sprt.Act[i].Dmg

      }

      DmgKari[i] = { Ally: { Dmg: C.Ally.Act[i].Dmg, DmgCr: C.Ally.Act[i].DmgCr, DmgEx: C.Ally.Act[i].DmgEx } }

    }

    setDmg(DmgKari)
    //console.log(DmgKari)









  }


  const [MainStDisp, setMainStDisp] = useState(true)
  const MainStDispSw = () => {
    setMainStDisp(prevMainStDisp => !prevMainStDisp)
  }
  const [SprtStDisp, setSprtStDisp] = useState(true)
  const SprtStDispSw = () => {
    setSprtStDisp(prevSprtStDisp => !prevSprtStDisp)
  }


  return (
    <div className="container-fluid" style={{ fontSize: 16 }}>
      <div className="row">
        <div className="col-lg-6 col-xl-4">
          <div>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td rowSpan={2} style={{ width: "1px" }}><Img.Main p={MainI} /></td>
                  <td><Slct.Main Op={MainList} onChange={MainSlctOn} /></td>
                </tr>
                <tr>
                  <td>★6　Lv100　<Sw.MainSt p={MainStDisp} onClick={MainStDispSw} /></td>
                </tr>
              </tbody>
            </table>
          </div>
          {MainStDisp &&
            <div>
              <table>
                <tbody>
                  <tr>
                    <td><Stts.MainKh p={MainKh} /></td>
                    <td><Stts.MainSk p={MainSk} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
          <div>
            <table style={{ backgroundColor: "#f6f0e4", width: "100%" }} >
              <tbody>
                <tr>
                  <td style={{ width: "1px" }}><Img.Wepn p={WepnI} /></td>
                  <td style={{ width: "301px" }}><Slct.Wepn Op={WepnList} onChange={WepnSlctOn} /></td>
                  <td></td>
                </tr>
                <tr>
                  <td><Img.Armr p={ArmrI} /></td>
                  <td><Slct.Armr Op={ArmrList} onChange={ArmrSlctOn} /></td>
                </tr>
                <tr>
                  <td><Img.Helm p={HelmI} /></td>
                  <td><Slct.Helm Op={HelmList} onChange={HelmSlctOn} /></td>
                </tr>
                <tr>
                  <td><Img.Acce p={AcceI} /></td>
                  <td><Slct.Acce Op={AcceList} onChange={AcceSlctOn} /></td>
                </tr>
                <tr>
                  <td><Img.Ench p={EnchI} /></td>
                  <td><Slct.Ench Op={EnchList} onChange={EnchSlctOn} /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td rowSpan={2} style={{ width: "1px" }}><Img.Sprt p={SprtI} /></td>
                  <td><Slct.Sprt Op={SprtList} onChange={SprtSlctOn} /></td>
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
                    <td><Stts.SprtKh p={SprtKh} /></td>
                    <td><Stts.SprtSk p={SprtSk} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          }

        </div>
        <div className="col-lg-6 col-xl-4">
          <Act Turn={0} Op={C.Main.ActList} onChange={MainActSlctOn} ActI={ActI} Dmg={Dmg} ActSt={ActSt} />
          <Act Turn={1} Op={C.Main.ActList} onChange={MainActSlctOn} ActI={ActI} Dmg={Dmg} ActSt={ActSt} />

        </div>

        <div className="col-lg-6 col-xl-4">

        </div>

      </div>

    </div>

  )

}



