import { useState } from "react";
import Select from 'react-select';
import * as Img from "./Img";
import * as Stts from "./Stts";
import * as Slct from './Slct';
import * as Slct2 from './Slct2';
import * as Sw from './Sw'
import { Act2 } from './Act2'
import * as Grid from './Grid'
import * as CollapsibleTable_Main from './CollapsibleTable_Main'
import * as CollapsibleTable_Eq from './CollapsibleTable_Eq'
import * as CollapsibleTable_Sprt from './CollapsibleTable_Sprt'
import * as CollapsibleTable_Amu from './CollapsibleTable_Amu'
import * as CollapsibleTable_Act from './CollapsibleTable_Act'
import { Slct4 } from "./index";

const MainSprt = ['Main', 'Sprt']
const AlwBtl = ['Alw', 'Btl']
const HADMRT = ['H', 'A', 'D', 'M', 'R', 'T']
const StAll = ['H', 'A', 'D', 'M', 'R', 'T', 'Crr', 'Crd', 'Damp', 'DresA', 'DresM', 'Pnt']
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
    Rr: 'SSR', Cls: 'シューター', Typ: '物理', Smb: 'オリジン',
    H: 5262, A: 560, D: 215, M: 196, R: 196, T: 381, Rng: 2, Mov: 3,
    SklList: ['スーパーシュート', 'めんどいからドカーンで', 'アタックブースト', '一番痛いの撃っとくね', 'キラーエスケープ', 'イマドキの護身術'],
    Sprt: 'ソル', Wepn: 'ダブルロングショット', Armr: '獅子の天装', Helm: '追跡の頭帯', Acce: 'オリジンのお守り', Ench: 'ノヴァ',
    ActList: {
      11: 'スーパーシュート',
      21: 'めんどいからドカーンで',
      31: '一番痛いの撃っとくね',
      41: 'イマドキの護身術',
      51: '通常攻撃',
    },

  },
  ベートーヴェン: {
    Rr: 'SSR', Cls: 'シューター', Typ: '物理', Smb: 'ナディア',
    H: 4930, A: 490, D: 216, M: 194, R: 215, T: 321, Rng: 2, Mov: 3,
    SklList: ['シャドーハント', 'シールライザー', 'グッドレスト', 'アクセルステップ', '英雄たちへの行進曲', 'ジェノサイダー'],
    Sprt: 'ソル', Wepn: 'ライトマキシマスカ', Armr: '獅子の天装', Helm: '追跡の頭帯', Acce: 'ナディアのお守り', Ench: 'ストライク',
    ActList: {
      11: 'アクセルステップ',
      12: 'シャドーハント',
      21: 'シールライザー',
      31: 'ジェノサイダー',
      41: '通常攻撃',
      51: '通常攻撃',
    },
  },
  偽ドミトリー: {
    Rr: 'SSR', Cls: 'シューター', Typ: '物理', Smb: 'ゼニス',
    H: 4976, A: 532, D: 211, M: 196, R: 208, T: 335, Rng: 2, Mov: 3,
    SklList: ['アームブレイク', '狂騒と混乱の革命劇', 'ディフェンスブースト', '詐術砲撃', 'グランド・セフト・カイザー', '灰詰めの炸裂弾'],
    Sprt: 'ソル', Wepn: 'ライトマキシマスカ', Armr: '獅子の天装', Helm: '追跡の頭帯', Acce: 'ゼニスのお守り', Ench: 'ストライク',
    ActList: {
      11: 'アームブレイク',
      21: '詐術砲撃',
      31: '通常攻撃',
      41: 'アームブレイク',
      51: '通常攻撃',
    },
  },

};
const SprtData = {
  ソル: {
    Cls: 'シューター',
    H: 7600, A: 664, D: 251, M: 0, R: 224, T: 0, Mov: 0, Rng: 2,
  },
};
const SklData = {
  通常攻撃: { Knd: 'N', CT: 0, Ara: 0, Rng: 0, Mag: 1, Txt: 'テキスト' },
  アームブレイク: { Knd: 'A', CT: 2, Ara: 0, Rng: 2, Mag: 1.3, Txt: '敵のアタック-10%1T' },
  詐術砲撃: { Knd: 'A', CT: 5, Ara: '単', Rng: 5, Mag: 1.7, Txt: '戦闘前、敵のダメージ耐性-10%1T' },
  狂騒と混乱の革命劇: { Knd: 'A', CT: 3, Ara: '直線6', Rng: '自', Mag: 0.5, Txt: '50%でアクティブスキル使用不可2T' },
  スーパーシュート: { Knd: 'A', CT: 5, Ara: 0, Rng: 2, Mag: 1.3, Txt: 'テキスト' },
  めんどいからドカーンで: { Knd: 'A', CT: 3, Ara: 3, Rng: 3, Mag: 0.45, Txt: 'テキスト' },
  アタックブースト: { Knd: 'P', CT: 0, Ara: 0, Rng: 0, Mag: 0, Txt: 'テキスト' },
  ディフェンスブースト: { Knd: 'P', CT: 0, Ara: 0, Rng: 0, Mag: 0, Txt: '味方ターン戦闘時D+15%' },
  一番痛いの撃っとくね: { Knd: 'A', CT: 3, Ara: 0, Rng: 2, Mag: 1.7, Txt: 'テキスト' },
  キラーエスケープ: { Knd: 'P', CT: 0, Ara: 0, Rng: 0, Mag: 0, Txt: 'テキスト' },
  イマドキの護身術: { Knd: 'A', CT: 5, Ara: 5, Rng: 0, Mag: 0.55, Txt: 'テキスト' },
  シャドーハント: { Knd: 'A', CT: 2, Ara: 0, Rng: 2, Mag: 1.5, Txt: 'テキスト' },
  シールライザー: { Knd: 'A', CT: 3, Ara: 3, Rng: 3, Mag: 0.45, Txt: 'テキスト' },
  灰詰めの炸裂弾: { Knd: 'A', CT: 3, Ara: 3, Rng: 3, Mag: 0.45, Txt: '敵のD/R-20%2T' },
  グッドレスト: { Knd: 'P', CT: 0, Ara: 0, Rng: 0, Mag: 0, Txt: 'テキスト' },
  アクセルステップ: { Knd: 'A', CT: 2, Ara: 0, Rng: 0, Mag: 0, Txt: 'テキスト' },
  英雄たちへの行進曲: { Knd: 'A', CT: 3, Ara: 9, Rng: 0, Mag: 0, Txt: 'テキスト' },
  'グランド・セフト・カイザー': { Knd: 'A', CT: 3, Ara: 9, Rng: 0, Mag: 0, Txt: 'テキスト' },
  ジェノサイダー: { Knd: 'A', CT: 5, Ara: 5, Rng: 0, Mag: 0.5, Txt: 'テキスト' },


}

const WepnData = {
  ライトマキシマスカ: { H: 0, A: 141, D: 0, M: 0, R: 0, T: 60 },
  ダブルロングショット: { H: 0, A: 141, D: 0, M: 0, R: 0, T: 60 },
  バスターカノン: { H: 0, A: 116, D: 0, M: 0, R: 0, T: 46 },
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

const AmTkData = {
  煌めく満月のアミュレット: { H: 681, A: 107, D: 0, M: 0, R: 0, T: 0 },
  煌めく新月のアミュレット: { H: 681, A: 0, D: 0, M: 107, R: 0, T: 0 },
};
const AmTyData = {
  煌めく陽光のアミュレット: { H: 1228, A: 0, D: 32, M: 0, R: 0, T: 0 },
  煌めく日蝕のアミュレット: { H: 1228, A: 0, D: 0, M: 0, R: 32, T: 0 },
};
const AmTkList = [];
const AmTyList = [];
Object.keys(AmTkData).forEach(V =>
  AmTkList.push({ value: V, label: V })
)
Object.keys(AmTyData).forEach(V =>
  AmTyList.push({ value: V, label: V })
)




let U = {}
let MainList = [];
let SprtList = [];
Object.keys(SprtData).forEach(Sprt => {//サポートの名前=Sprt
  SprtList.push({ value: Sprt, label: Sprt })
});

Object.keys(MainData).forEach(Main => {//メインの名前=Main
  MainList.push({ value: Main, label: Main })
  U[Main] = {
    Rr: MainData[Main].Rr,
    Cls: MainData[Main].Cls,
    Typ: MainData[Main].Typ,
    Smb: MainData[Main].Smb,
    Gc: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Ks: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Kh: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Sk: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Sprt: MainData[Main].Sprt,
    Wepn: MainData[Main].Wepn,
    Armr: MainData[Main].Armr,
    Helm: MainData[Main].Helm,
    Acce: MainData[Main].Acce,
    Ench: MainData[Main].Ench,
    SklList: MainData[Main].SklList,
    ActList: { 11: [], 12: [], 13: [], 21: [], 22: [], 23: [], 31: [], 32: [], 33: [], 41: [], 42: [], 43: [], 51: [], 52: [], 53: [] },
    Act: { Dmg: 0, DmgCr: 0, DmgEx: 0, UnitDmg: 0, UnitDmgCr: 0, UnitDmgEx: 0, CrrMax: 0 },
  }

  for (let K of HADMRT) {//メイン基本ステータス
    U[Main].Gc[K] = MainData[Main][K]
    U[Main].Ks[K] = Math.round(U[Main].Gc[K] / (1 + KyB[K] / 100) + ClUp.Main[K])
    U[Main].Kh[K] = Math.round(U[Main].Ks[K] * (1 + KyB[K] / 100 + Sho.Cls[K] / 100 + Sho.Main[K] / 100))
  }

  Object.keys(SprtData).forEach(Sprt => {//サポートの名前=Sprt
    U[Main][Sprt] = {
      Cls: SprtData[Sprt].Cls,
      Gc: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
      Ks: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
      Kh: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
      Sk: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
      AmTk: '', AmTy: '', AmTkS1: '', AmTkS2: '', AmTyS1: '', AmTyS2: '',
      Act: { Dmg: 0, DmgCr: 0, DmgEx: 0 },
    }
    for (let K of HADMRT) {//サポート基本ステータス
      U[Main][Sprt].Gc[K] = SprtData[Sprt][K]
      U[Main][Sprt].Ks[K] = Math.round(U[Main][Sprt].Gc[K] / (1 + KyB[K] / 100) + ClUp.Sprt[K])
      U[Main][Sprt].Kh[K] = Math.round(U[Main][Sprt].Ks[K] * (1 + KyB[K] / 100 + Sho.Cls[K] / 100 + Sho.Sprt[K] / 100))
    }
    if (SprtData[Sprt].A > 0) {
      U[Main][Sprt].AmTk = '煌めく満月のアミュレット'
      U[Main][Sprt].AmTkS1 = 'AA'
      U[Main][Sprt].AmTkS2 = 'A'
      U[Main][Sprt].AmTy = '煌めく陽光のアミュレット'
      U[Main][Sprt].AmTyS1 = 'HH'
      U[Main][Sprt].AmTyS2 = 'A'
    } else {
      U[Main][Sprt].AmTk = '煌めく新月のアミュレット'
      U[Main][Sprt].AmTkS1 = 'MM'
      U[Main][Sprt].AmTkS2 = 'M'
      U[Main][Sprt].AmTy = '煌めく日蝕のアミュレット'
      U[Main][Sprt].AmTyS1 = 'HH'
      U[Main][Sprt].AmTyS2 = 'M'
    }
  });


  Object.keys(MainData[Main].ActList).forEach(Tr => {//行動初期設定
    U[Main].Act[Tr] = {
      Nam: MainData[Main].ActList[Tr], CT: 0, Ara: 0, Rng: 0, Mag: 1, Att: false, Num: 1,
      Dmg: 0, DmgCr: 0, DmgEx: 0, UnitDmg: 0, UnitDmgCr: 0, UnitDmgEx: 0,
      Alw: {
        H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0,
        Mlt: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
        Add: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
      },
      Btl: {
        H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0,
        Mlt: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
        Add: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
      },
    }

    Object.keys(SprtData).forEach(Sprt => {//サポートの名前=Sprt
      U[Main][Sprt].Act[Tr] = {
        Nam: '通常攻撃', CT: 0, Ara: 0, Rng: 0, Mag: 1, Att: false, Num: 1,
        Dmg: 0, DmgCr: 0, DmgEx: 0, UnitDmg: 0, UnitDmgCr: 0, UnitDmgEx: 0,
        Alw: {
          H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0,
          Mlt: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
          Add: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
        },
        Btl: {
          H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0,
          Mlt: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
          Add: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
        },
      }


    });




  })//行動初期設定ここまで




  Object.keys(U[Main].ActList).forEach(t => {
    U[Main].ActList[t].push({ value: [t, '通常攻撃'], label: '通常攻撃' })
    for (let i = 0; i < U[Main].SklList.length; i++) {//スキルリストから順番に行動リストに
      console.log(SklData[U[Main].SklList[i]])
      if (SklData[U[Main].SklList[i]].Knd === 'A') {//アクティブスキルなら
        U[Main].ActList[t].push({ value: [t, U[Main].SklList[i]], label: U[Main].SklList[i] })
      }
    }
  });

});//メインごとループここまで

let SlctMain = 'アンドロメダ'
let SlctSprt = 'ソル'
let Wepn = ''
let Armr = ''
let Helm = ''
let Acce = ''
let Ench = ''

//console.log(U)



export default function DmgCelc() {

  // const [Main,setMain] = useState('アンドロメダ')
  // const [Sprt, setSprt] = useState('ソル')
  // const [Wepn,setWepn] = useState(U[Main].Wepn)
  // const [Armr, setArmr] = useState(U[Main].Armr)
  // const [Helm, setHelm] = useState(U[Main].Helm)
  // const [Acce, setAcce] = useState(U[Main].Acce)
  // const [Ench, setEnch] = useState(U[Main].Ench)

  const [MainKh, setMainKh] = useState([{ H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 }, { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 }, { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 }]);
  const [SprtKh, setSprtKh] = useState([{ H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 }, { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 }, { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 }]);
  const [MainSk, setMainSk] = useState([{ H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },]);
  const [SprtSk, setSprtSk] = useState([{ H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },]);
  // const [ActSt, setActSt] = useState([U[Main].Act, U[Main].Act]);





  const [MainI, setMainI] = useState('リトリー')
  const [SprtI, setSprtI] = useState('リトリー')
  const [WepnI, setWepnI] = useState('ライトマキシマスカ')
  const [ArmrI, setArmrI] = useState('鎧')
  const [HelmI, setHelmI] = useState('兜')
  const [AcceI, setAcceI] = useState('アクセサリー')
  const [EnchI, setEnchI] = useState('エンチャント')





  const MainSlctOn = (e) => {//メインが選択された時
    SlctMain = e
    console.log(e)
    MainKhCelc()
  }

  const MainKhCelc = () => {

    setMainI(SlctMain)

    Wepn = U[SlctMain].Wepn
    setWepnI(Wepn)

    Armr = U[SlctMain].Armr
    setArmrI(Armr)

    Helm = U[SlctMain].Helm
    setHelmI(Helm)

    Acce = U[SlctMain].Acce
    setAcceI(Acce)

    Ench = U[SlctMain].Ench
    setEnchI(Ench)

    SlctSprt = U[SlctMain].Sprt
    setSprtI(SlctSprt)

    setMainKh(() => ([U[SlctMain].Gc, U[SlctMain].Ks, U[SlctMain].Kh]))






    MainSkCelc()
  }//MainKhCelcここまで



  const MainSkCelc = () => {//メインの装備が選択された後 ではなく全員


    Object.keys(MainData).forEach(Main => {//メインの名前=Main




      let Mlt = {}
      let Add = {}
      for (const K of HADMRT) {//初期化
        Mlt[K] = 0//エンチャントランダムステ、２せっと
        Add[K] = 0//装備ステータス//エンチャントランダムすて+
      }

      for (const K of HADMRT) {

        if (U[Main].Wepn) Add[K] += WepnData[U[Main].Wepn][K]
        if (U[Main].Armr) Add[K] += ArmrData[U[Main].Armr][K]
        if (U[Main].Helm) Add[K] += HelmData[U[Main].Helm][K]
        if (U[Main].Acce) Add[K] += AcceData[U[Main].Acce][K]
        if (U[Main].Ench) Add[K] += EnchData[U[Main].Ench][K]


      }


      //装備などの入力

      for (const K of HADMRT) {//メインの装備を含む基本ステータス
        //Mlt[K]
        //Add[K] = C.Wepn[St] + C.Armr[St] + C.Helm[St] + C.Acce[St] + C.Ench[St]
        U[Main].Sk[K] = Math.floor(U[Main].Kh[K] * (1 + Mlt[K] / 100)) + Add[K]
      }
      setMainSk(() => ([U[Main].Sk]))

    })




    SprtSkCelc()
  }//MainSkCelcここまで


  const SprtSkCelc = () => {//サポート装備計算

    Object.keys(MainData).forEach(Main => {//メインの名前=Main

      Object.keys(SprtData).forEach(Sprt => {

        let Mlt = {}
        let Add = {}
        for (const K of HADMRT) {//初期化
          Mlt[K] = 0//エンチャントランダムステ、２せっと
          Add[K] = 0//装備ステータス//エンチャントランダムすて+
        }

        for (const K of HADMRT) {
          if (U[Main][Sprt].AmTk) Add[K] += AmTkData[U[Main][Sprt].AmTk][K]
          if (U[Main][Sprt].AmTy) Add[K] += AmTyData[U[Main][Sprt].AmTy][K]
        }

        //装備などの入力

        for (const K of HADMRT) {//メインの装備を含む基本ステータス
          //Mlt[K]
          //Add[K] = C.Wepn[St] + C.Armr[St] + C.Helm[St] + C.Acce[St] + C.Ench[St]
          U[Main][Sprt].Sk[K] = Math.floor(U[Main][Sprt].Kh[K] * (1 + Mlt[K] / 100)) + Add[K]
        }

      })//サポートforここまで
    })//メインforここまで



    Celc()
  }



  const Celc = () => {


    Object.keys(MainData).forEach(Main => {//メインごと

      U[Main].Act.Dmg = 0//初期化
      U[Main].Act.DmgCr = 0
      U[Main].Act.DmgEx = 0
      U[Main].Act.UnitDmg = 0
      U[Main].Act.UnitDmgCr = 0
      U[Main].Act.UnitDmgEx = 0

      for (let t of Object.keys(MainData[Main].ActList)) {//有効ターンの分

        //初期化ここから
        for (const AB of AlwBtl) {
          for (const K of StAll) {
            U[Main].Act[t][AB].Mlt[K] = 0
            U[Main].Act[t][AB].Add[K] = 0
            // U[Main][Sprt].Act[t][AB].Mlt[K] = 0
            // U[Main][Sprt].Act[t][AB].Add[K] = 0
          }
        }
        U[Main].Act[t].Alw.Mlt.Crd += 30

        U[Main].Act[t].Num = 1
        U[Main].Act[t].Att = false
        // U[Main][Sprt].Act[t].Num = 1
        // U[Main][Sprt].Act[t].Att = false

        U[Main].Act[t].CT = SklData[U[Main].Act[t].Nam].CT
        U[Main].Act[t].Ara = SklData[U[Main].Act[t].Nam].Ara
        // U[Main][Sprt].Act[t].Ara = 0

        U[Main].Act[t].Mag = SklData[U[Main].Act[t].Nam].Mag

        if (U[Main].Act[t].Nam === '通常攻撃') {//通常攻撃射程
          U[Main].Act[t].Rng = MainData[Main].Rng
        } else {//スキル射程
          U[Main].Act[t].Rng = SklData[U[Main].Act[t].Nam].Rng
        }
        // U[Main][Sprt].Act[t].Rng = SprtData[Sprt].Rng
        //初期化ここまで


        //出撃後ステータス//戦闘時ステータス反映
        switch (Main) {//タレント
          case 'ベートーヴェン':
            U[Main].Act[t].Alw.Mlt.A += 20
            // U[Main][Sprt].Act[t].Alw.Mlt.A += 20
            break
            case '偽ドミトリー':
            // 行動終了時、自中心範囲4の敵4のディフェンス-10%/レジスト-10%(1ターン)、味方4のディフェンス+10%/レジスト+10%(1ターン)
            break
          case 'アンドロメダ':
            U[Main].Act[t].Alw.Mlt.A += 25
            // U[Main][Sprt].Act[t].Alw.Mlt.A += 25
            U[Main].Act[t].Rng += 1//HP75%の時
            U[Main].Act[t].Ara += 1//HP75%の時
            //移動+1//HP75%の時
            //自ユニットのスキル与ダメージ+30%//HP75%以下の時
            break
        }//タレントここまで
        // switch (Sprt) {//サポートパッシブ
        //   case 'ソル':
        //     break
        //   default:
        //     break
        // }//サポートパッシブここまで
        switch (U[Main].Wepn) {//武器
          case 'ライトマキシマスカ':
            U[Main].Act[t].Alw.Mlt.A += 10
            break
          case 'ダブルロングショット':
            U[Main].Act[t].Alw.Mlt.A += 10
            break
          default:
            break
        }//武器ここまで
        switch (U[Main].Armr) {//鎧の装備アビリティ
          case 'アサシンベスト':
            U[Main].Act[t].Alw.Mlt.A += 10
            break
          case '獅子の天装':
            break
          default:
            break
        }
        switch (U[Main].Helm) {//兜の装備アビリティ
          case '追跡の頭帯':
            break
          default:
            break
        }
        switch (U[Main].Acce) {//アクセサリーの装備アビリティ
          case 'ゼニスのお守り':
            break

          default:
            break
        }
        switch (U[Main].Ench) {//エンチャント4セット効果&黄色の2セット
          case 'バスター':
            if (U[Main].Act[t].Nam !== '通常攻撃/敵ターン') {
              U[Main].Act[t].Btl.Mlt.A += 15
              U[Main].Act[t].Btl.Mlt.DresA += 15
              U[Main].Act[t].Btl.Mlt.DresM += 15
            }
            break
          case 'チャージ':
            U[Main].Act[t].Alw.Mlt.A += 10//HP70%以上
            U[Main].Act[t].Alw.Mlt.D += 10//HP70%以上
            U[Main].Act[t].Alw.Mlt.M += 10//HP70%以上
            U[Main].Act[t].Alw.Mlt.R += 10//HP70%以上
            break
          case 'フェザー':
            U[Main].Act[t].Alw.Mlt.Damp += 10
            //行動終了時、40%で移動+1(1ターン)
            break
          case 'クイック':
            //スキルでダメージを与えた時、50%でそのスキルCT-1
            break
          case 'ノヴァ':
            if (U[Main].Act[t].Nam[1] !== '通常攻撃' && U[Main].Act[t].Nam[1] !== '通常攻撃/敵ターン') {
              U[Main].Act[t].Alw.Mlt.Damp += 10
              if (U[Main].Act[t].Ara >= 1) U[Main].Act[t].Alw.Mlt.Damp += 10
            }
            break
          case 'アイアン':
            U[Main].Act[t].Alw.Mlt.DresA += 15
            U[Main].Act[t].Alw.Mlt.DresM += 15
            break
          case 'リフレクト':
            break
          case 'バックアップ':
            U[Main].Act[t].Alw.Mlt.D += 5
            U[Main].Act[t].Alw.Mlt.R += 5
            break
          case 'アイス':
            break
          case 'ブライト':
            break
          case 'クリスタル':
            break
          case 'ストライク':
            U[Main].Act[t].Alw.Mlt.Crr += 7
            U[Main].Act[t].Alw.Mlt.Crd += 30
            break
          case 'ブレイク':
            U[Main].Act[t].Alw.Mlt.Crr += 7
            if (U[Main].Act[t].Nam[1] !== '通常攻撃/敵ターン') {
              U[Main].Act[t].Btl.Mlt.Damp += 20//敵HP50%以上
            }
            break
          default:
            break
        }
        switch (U[Main].Act[t].Nam) {//行動=攻撃スキル
          case 'アームブレイク':
            //敵のアタック-10%1T
            break
            case '詐術砲撃':
              //戦闘前、敵のダメージ耐性-10%1T
              break
            case 'ジェノサイダー':
            U[Main].Act[t].Alw.Mlt.Crr += 50
            break

          case 'シャドーハント':
            //if (C.Enmy.Cls === 'アサシン') U[Main].Act[t].Mag = 2
            break
          case 'スーパーシュート':
            //U[Main].Act[t].Btl.MltMAct.Damp += 30
            //U[Main][Sprt].Act[t].Btl.MltMAct.Damp += 30
            break
            case '灰詰めの炸裂弾':
              //攻撃後、敵のD/R-20%2T
              break
  
          default:
            break
        }





        //出撃後ステータス//戦闘時ステータス集計
        for (const K of StAll) {//乗算・加算集計
          U[Main].Act[t].Btl.Mlt[K] += U[Main].Act[t].Alw.Mlt[K]//戦闘後乗算+=出撃後乗算
          U[Main].Act[t].Btl.Add[K] += U[Main].Act[t].Alw.Add[K]//戦闘後加算+=出撃後乗算

          //U[Main].Act[t].Alw.Mlt[K] += U[Main].Act[t].Alw.MltMAct[St]//出撃後+=出撃後メインアクティブ 未
          //C[MS].Act[t].Btl.Mlt[St] += Math.max(C[MS].Act[t].Alw.MltMAct[St], C[MS].Act[t].Btl.MltMAct[St])//戦闘後+=max(出撃後メインアクティブ,戦闘後メインアクティブ)

        }
        for (const K of HADMRT) {//ステータス計算
          U[Main].Act[t].Alw[K] = Math.floor(U[Main].Sk[K] * (1 + U[Main].Act[t].Alw.Mlt[K] / 100)) + U[Main].Act[t].Alw.Add[K]
          U[Main].Act[t].Btl[K] = Math.floor(U[Main].Sk[K] * (1 + U[Main].Act[t].Btl.Mlt[K] / 100)) + U[Main].Act[t].Btl.Add[K]
        }
        //クリティカル率にテクニック加算
        U[Main].Act[t].Alw.Mlt.Crr += U[Main].Act[t].Alw.T / 10
        U[Main].Act[t].Btl.Mlt.Crr += U[Main].Act[t].Btl.T / 10

        //ダメージ計算
        let AB = ''
        if (U[Main].Act[t].Ara >= 1) AB = 'Alw'//範囲攻撃ならAlw
        else AB = 'Btl'

        U[Main].Act[t].Dmg = (U[Main].Act[t][AB].A - 0)
        U[Main].Act[t].Dmg *= U[Main].Act[t].Mag

        U[Main].Act[t].DmgCr = U[Main].Act[t].Dmg * (1 + U[Main].Act[t][AB].Mlt.Crd / 100)

        U[Main].Act[t].Dmg = Math.floor(U[Main].Act[t].Dmg) * 10
        U[Main].Act[t].DmgCr = Math.floor(U[Main].Act[t].DmgCr) * 10
        U[Main].Act[t].DmgEx = Math.floor((U[Main].Act[t].DmgCr * U[Main].Act[t][AB].Mlt.Crr / 100) + (U[Main].Act[t].Dmg * (1 - U[Main].Act[t][AB].Mlt.Crr / 100)))


        U[Main].Act[t].UnitDmg = U[Main].Act[t].Dmg //+ U[Main][Sprt].Act[t].Dmg //メイン+サポダメージ/1行動
        U[Main].Act[t].UnitDmgCr = U[Main].Act[t].DmgCr
        U[Main].Act[t].UnitDmgEx = U[Main].Act[t].DmgEx

        //全行動合計
        U[Main].Act.Dmg += U[Main].Act[t].Dmg
        U[Main].Act.DmgCr += U[Main].Act[t].DmgCr
        U[Main].Act.DmgEx += U[Main].Act[t].DmgEx

        U[Main].Act.UnitDmg += U[Main].Act[t].UnitDmg
        U[Main].Act.UnitDmgCr += U[Main].Act[t].UnitDmgCr
        U[Main].Act.UnitDmgEx += U[Main].Act[t].UnitDmgEx









      }//有効ターン分ここまで

      //全ターンの結果

      // setActSt(() => ([U[Main].Act, U[Main][Sprt].Act]))
      //console.log(U)

    })//forメインここまで

  }//Celcここまで



  //<Stts.MainSk p={MainSk} />
  window.onload = MainKhCelc


  return (
    <div className="container-fluid" style={{ fontSize: 16 }}>

      <div className="row">
        <div className="col-lg-6 col-xl-4">
          <Select options={WepnList} 
            defaultValue={{ label: WepnI, value: WepnI }} />
          <Slct.Main
            Op={MainList}
            onChange={MainSlctOn}
          />
          <CollapsibleTable_Main.Main
            SlctMain={U[SlctMain]}
            SlctMainName={SlctMain}
            WepnData={WepnData}
            MainList={MainList}
            onChange={MainSlctOn}
          />
          <CollapsibleTable_Eq.Eq
            SlctMain={U[SlctMain]}
            WepnData={WepnData}
            ArmrData={ArmrData}
            HelmData={HelmData}
            AcceData={AcceData}
            EnchData={EnchData}
          />
          <CollapsibleTable_Sprt.Sprt
            SlctMain={U[SlctMain]}
            SlctSprt={SlctSprt}
            WepnData={WepnData}
          />
          <CollapsibleTable_Amu.Amu
            SlctMain={U[SlctMain]}
            SlctSprt={SlctSprt}
            AmTkData={AmTkData}
            AmTyData={AmTyData}

            WepnData={WepnData}
            ArmrData={ArmrData}
            HelmData={HelmData}
            AcceData={AcceData}
            EnchData={EnchData}
          />
        </div>
        <div className="col-lg-6 col-xl-4">
          <CollapsibleTable_Act.Act
            SlctMain={U[SlctMain]}
            WepnData={WepnData}
            TurnVl={Object.keys(MainData[SlctMain].ActList)}
          />

        </div>
        <div className="col-lg-6 col-xl-4">

        </div>
      </div>
      <Grid.UnitDmg U={U} MainSlctOn={MainSlctOn}/>
    </div>

  )

}

{/* <Slct2.Eq
onChange={[WepnSlctOn, ArmrSlctOn, HelmSlctOn, AcceSlctOn, EnchSlctOn]} On={U[Main]}
WepnList={WepnList} WepnI={WepnI}
ArmrList={ArmrList} Armr={Armr}
HelmList={HelmList} Helm={Helm}
AcceList={AcceList} Acce={Acce}
EnchList={EnchList} Ench={Ench}
/>
<Slct2.Sprt2 SprtList={SprtList} onChange={SprtSlctOn} SprtKh={SprtKh} SprtSk={SprtSk} SprtI={SprtI} />

<Act2
Op={U[Main].ActList}
onChange={MainActSlctOn}
ActI11={ActI11}
ActI21={ActI21}
ActSt={ActSt}
/> */}





