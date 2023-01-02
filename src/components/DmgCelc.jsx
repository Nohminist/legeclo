import { useState } from "react";
import DataGridUnitDmg from './DataGridUnitDmg'

const AlwBtl = ['Alw', 'Btl']//[AB]
const MltAdd = ['Mlt', 'Add']//[MA]
const HADMRT = ['H', 'A', 'D', 'M', 'R', 'T']//[K]
const StAll = ['H', 'A', 'D', 'M', 'R', 'T', 'Crr', 'Crd', 'Damp', 'DresA', 'DresM', 'Pnt']//[K]

const ClUp = {//クラスアップ
  Main: { H: 800, A: 0, D: 0, M: 0, R: 0, T: 0 },
  Sprt: { H: 1200, A: 55, D: 28, M: 55, R: 28, T: 0 },
};
const KyB = {//強化ボード
  H: 30, A: 30, D: 30, M: 30, R: 30, T: 50
}
const Sho = {//記憶の書
  Cls: { H: 20, A: 30, D: 20, M: 30, R: 20, T: 0 },
  Main: { H: 40, A: 40, D: 40, M: 40, R: 40, T: 0 },
  Sprt: { H: 40, A: 40, D: 40, M: 40, R: 40, T: 0 },
}


const MainData = {
  アンドロメダ: {
    Rr: 'SSR', Cls: 'シューター', Typ: '物理', Smb: 'オリジン',
    H: 5262, A: 560, D: 215, M: 196, R: 196, T: 381, Rng: 2, Mov: 3,
    Tlnt: { Nam: '神に勝る美', Txt: '自ユニットのアタック+25%。\n自ユニットのHPが75％以上の時、味方メインのスキル使用時の射程+1/スキル使用時の範囲+1/移動+2。\n自ユニットのHPが75%以下の時、自ユニットのスキル与ダメージ+30%。' },
    SklList: ['スーパーシュート', 'めんどいからドカーンで', 'アタックブースト', '一番痛いの撃っとくね', 'キラーエスケープ', 'イマドキの護身術'],
    Sprt: 'ソル', Wepn: 'ダブルロングショット', Armr: '獅子の天装', Helm: '追跡の頭帯', Acce: 'オリジンのお守り', Ench: 'ノヴァ',
    ActPtt: [
      { t: 0, Nam: 'スーパーシュート' },
      { t: 1, Nam: 'めんどいからドカーンで' },
      { t: 2, Nam: '一番痛いの撃っとくね' },
      { t: 3, Nam: 'イマドキの護身術' },
      { t: 4, Nam: '通常攻撃' },
    ]
  },
  // ベートーヴェン: {
  //   Rr: 'SSR', Cls: 'シューター', Typ: '物理', Smb: 'ナディア',
  //   H: 4930, A: 490, D: 216, M: 194, R: 215, T: 321, Rng: 2, Mov: 3,
  //   Tlnt: { Nam: '「熱情」の調べ', Txt: '自ユニットの残りHPが多いほど、自ユニットのアタックが上がる(+5%～+20%)。\n味方ターンで敵ユニットに自身がダメージを与えた時、確率(100%)で全てのスキルのクールタイム-1。' },
  //   SklList: ['シャドーハント', 'シールライザー', 'グッドレスト', 'アクセルステップ', '英雄たちへの行進曲', 'ジェノサイダー'],
  //   Sprt: 'ソル', Wepn: 'ライトマキシマスカ', Armr: '獅子の天装', Helm: '追跡の頭帯', Acce: 'ナディアのお守り', Ench: 'ストライク',
  //   ActPtt: [
  //     { t: 0, Nam: 'アクセルステップ' },
  //     { t: 0, Nam: 'シャドーハント' },
  //     { t: 1, Nam: 'シールライザー' },
  //     { t: 2, Nam: 'ジェノサイダー' },
  //     { t: 3, Nam: '通常攻撃' },
  //     { t: 4, Nam: '通常攻撃' },
  //   ]
  // },
  // 偽ドミトリー: {
  //   Rr: 'SSR', Cls: 'シューター', Typ: '物理', Smb: 'ゼニス',
  //   H: 4976, A: 532, D: 211, M: 196, R: 208, T: 335, Rng: 2, Mov: 3,
  //   Tlnt: { Nam: '僭称皇帝の詭謀', Txt: '行動終了時、自身を中心とした範囲4マス以内の敵ユニット4隊のディフェンス/レジスト-10%(1ターン)、味方ユニット4隊のディフェンス/レジスト+10%(1ターン)。' },
  //   SklList: ['アームブレイク', '狂騒と混乱の革命劇', 'ディフェンスブースト', '詐術砲撃', 'グランド・セフト・カイザー', '灰詰めの炸裂弾'],
  //   Sprt: 'ソル', Wepn: 'ライトマキシマスカ', Armr: '獅子の天装', Helm: '追跡の頭帯', Acce: 'ゼニスのお守り', Ench: 'ストライク',
  //   ActPtt: [
  //     { t: 0, Nam: 'アームブレイク' },
  //     { t: 1, Nam: '詐術砲撃' },
  //     { t: 2, Nam: '通常攻撃' },
  //     { t: 3, Nam: 'アームブレイク' },
  //     { t: 4, Nam: '通常攻撃' },
  //   ]
  // },

};
const TrAll = { 11: '通常攻撃', 12: '通常攻撃', 13: '通常攻撃', 21: '通常攻撃', 22: '通常攻撃', 23: '通常攻撃', 31: '通常攻撃', 32: '通常攻撃', 33: '通常攻撃', 41: '通常攻撃', 42: '通常攻撃', 43: '通常攻撃', 51: '通常攻撃', 52: '通常攻撃', 53: '通常攻撃' }
const SprtData = {
  アルテミス: {
    Rr: 'SSR', Cls: 'シューター', Typ: '物理',
    H: 7389, A: 625, D: 238, M: 0, R: 238, T: 0, Mov: 0, Rng: 2,
    Skl: {
      Nam: 'ムーンライト・セレナーデ', Ara: 2, Rng: 2,
      Txt: '範囲内の全ての敵ユニットに1倍の範囲ダメージを与える。'
    },
    Pss: [
      { Nam: '集中', Txt: '自ユニットのクリティカル率+5%' },
      { Nam: '射抜くは銀影の矢', Txt: '味方ターンでの戦闘時、その戦闘前、メインのクリティカル率+15％/サポートのダメージ耐性+30％。' }
    ]
  },
  ソル: {
    Rr: 'SSR', Cls: 'シューター', Typ: '物理',
    H: 7600, A: 664, D: 251, M: 0, R: 224, T: 0, Mov: 0, Rng: 2,
    Skl: {
      Nam: '祝福のぬくもり', Ara: 2, Rng: 2,
      Txt: '範囲内の全ての味方ユニットのアタック＋30%、マジック＋30%(2ターン)。'
    },
    Pss: [
      { Nam: '奮迅', Txt: '自ユニットのスキル与ダメージ＋5%。' },
      { Nam: '陽光の恵み', Txt: '行動終了時、自身を中心とした範囲2マス以内の全ての味方ユニットのスキル与ダメージ＋20%(2ターン)。' }
    ]
  },
};
const SklData = {
  通常攻撃: { Knd: 'N', Cst: 0, CT: 0, Ara: 0, Rng: 0, Mag: 1, Ag: false, Txt: 'テキスト' },
  アームブレイク: { Knd: 'A', Cst: 2, CT: 2, Ara: 0, Rng: 2, Mag: 1.3, Ag: false, Txt: '敵単体に1.3倍のダメージを与える。戦闘後、敵ユニットのアタック-10%(1ターン)。' },
  詐術砲撃: { Knd: 'A', Cst: 2, CT: 5, Ara: 0, Rng: 5, Mag: 1.7, Ag: false, Txt: '戦闘前、敵ユニットのダメージ耐性-10%(1ターン)。敵単体に1.7倍のダメージを与える。対象が「ライダー」の時、威力が上がる。' },
  狂騒と混乱の革命劇: { Knd: 'A', Cst: 2, CT: 3, Ara: '直6', Rng: 0, Ag: false, Mag: 0.5, Txt: '自身から直線範囲6マス以内の全ての敵ユニットに0.5倍の範囲ダメージを与え、確率(50%)で「アクティブスキル使用不可」(2ターン)を付与する。' },
  スーパーシュート: { Knd: 'A', Cst: 2, CT: 5, Ara: 0, Rng: 2, Mag: 1.3, Ag: false, Txt: '戦闘前、自ユニットの与ダメージ+30%。敵単体に1.3倍のダメージを与える。対象が「エアリアル」の時、威力が上がる。戦闘後、「アクティブ強化不可(2ターン)」を付与する。' },
  めんどいからドカーンで: { Knd: 'A', Cst: 2, CT: 3, Ara: 3, Rng: 3, Mag: 0.45, Ag: false, Txt: '範囲内の敵ユニットに0.45倍の範囲ダメージを与え、「HP回復不可（2ターン）」を付与する。' },
  アタックブースト: { Knd: 'P', Cst: 1, CT: 0, Ara: 0, Rng: 0, Mag: 0, Ag: false, Txt: '味方ターンでの戦闘時、その戦闘前、自ユニットのアタック＋15％。' },
  ディフェンスブースト: { Knd: 'P', Cst: 2, CT: 0, Ara: 0, Rng: 0, Mag: 0, Ag: false, Txt: '味方ターンでの戦闘時、その戦闘前、ディフェンス+15%。' },
  一番痛いの撃っとくね: { Knd: 'A', Cst: 2, CT: 3, Ara: 0, Rng: 2, Mag: 1.7, Ag: false, Txt: '戦闘前、敵ユニットの強化効果を2個解除し、物理ダメージ耐性-15%（1ターン）。\n敵単体に1.7倍のダメージを与える。' },
  キラーエスケープ: { Knd: 'P', Cst: 1, CT: 0, Ara: 0, Rng: 0, Mag: 0, Ag: false, Txt: '自ユニットのクリティカル率＋10％。敵ユニットを倒したとき、3マス移動することができる。' },
  イマドキの護身術: { Knd: 'A', Cst: 2, CT: 5, Ara: 5, Rng: 0, Mag: 0.55, Ag: false, Txt: '自身を中心とした範囲5マス以内の全ての敵ユニットに0.55倍の範囲ダメージを与え、ダメージ耐性-10%（2ターン）。' },
  シャドーハント: { Knd: 'A', Cst: 2, CT: 2, Ara: 0, Rng: 2, Mag: 1.5, Ag: false, Txt: '敵単体に1.5倍のダメージを与える。対象が「アサシン」の時、威力が上がる。更に戦闘後、強化効果を2個解除する。' },
  シールライザー: { Knd: 'A', Cst: 2, CT: 3, Ara: 3, Rng: 3, Mag: 0.45, Ag: false, Txt: '範囲内の全ての敵ユニットに0.45倍の範囲ダメージを与え、確率(50%)で「アクティブスキル使用不可(2ターン)」を付与する。' },
  灰詰めの炸裂弾: { Knd: 'A', Cst: 2, CT: 3, Ara: 3, Rng: 3, Mag: 0.45, Ag: false, Txt: '範囲内の全ての敵ユニットに0.45倍の範囲ダメージを与え、ディフェンス-20%、レジスト-20%(2ターン)。' },
  グッドレスト: { Knd: 'P', Cst: 2, CT: 0, Ara: 0, Rng: 0, Mag: 0, Ag: false, Txt: '行動終了時、自ユニットのメイン、サポートそれぞれのHPが最大HPの20%分回復する。' },
  アクセルステップ: { Knd: 'A', Cst: 2, CT: 2, Ara: 0, Rng: 0, Mag: 0, Ag: true, Txt: '自ユニットの与ダメージ+10%（1ターン）。スキル使用後、再行動ができる。' },
  英雄たちへの行進曲: { Knd: 'A', Cst: 2, CT: 3, Ara: 9, Rng: 0, Mag: 0, Ag: false, Txt: '[シンボルスキル]＊加護の効果は同一シンボルにて最大1つまで適用される。\nシンボルが「ナディア」の全ての味方ユニットのアタック+20%、マジック+20％、ディフェンス+20％、レジスト+30%（4ターン）。更に[ナディアの加護]を付与する。\n[ナディアの加護]「味方ターン時、自ユニットの物理ダメージ+15%」の効果（4ターン）を付与する。' },
  'グランド・セフト・カイザー': { Knd: 'A', Cst: 2, CT: 3, Ara: 9, Rng: 0, Ag: false, Mag: 0, Txt: '【シンボルスキル】※加護の効果は同一シンボルにて最大1つまで適用される。\nシンボルが「ゼニス」の全ての味方ユニットのアタック+20%、マジック+20%、ディフェンス+20％、レジスト+30％（4ターン）。更に【ゼニスの加護】を付与する。\n【ゼニスの加護】「味方ターン時、自ユニットの物理与ダメージ+15%」の効果(4ターン)を付与する。' },
  ジェノサイダー: { Knd: 'A', Cst: 2, CT: 5, Ara: 5, Rng: 0, Mag: 0.5, Ag: false, Txt: '攻撃前、自ユニットのクリティカル率+50%。自身を中心とした範囲5マス以内の敵ユニットに0.5倍の範囲ダメージを与える。対象が「ソーサラー」の時、威力が上がる。' },


}

const WepnData = {
  ライトマキシマスカ: {
    H: 0, A: 141, D: 0, M: 0, R: 0, T: 60,
    ソルジャー: false, ランサー: false, ライダー: false, エアリアル: false, シューター: true, アサシン: false, セイント: false, ソーサラー: false,
    Txt: 'テキスト ¥n テキスト',
  },
  ダブルロングショット: {
    H: 0, A: 141, D: 0, M: 0, R: 0, T: 60,
    ソルジャー: false, ランサー: false, ライダー: false, エアリアル: false, シューター: true, アサシン: false, セイント: false, ソーサラー: false,
    Txt: 'テキスト\nテキスト',
  },
  バスターカノン: {
    H: 0, A: 116, D: 0, M: 0, R: 0, T: 46,
    ソルジャー: false, ランサー: false, ライダー: false, エアリアル: false, シューター: true, アサシン: true, セイント: false, ソーサラー: false,
    Txt: 'テキスト\nテキスト',
  },
};
const WepnList = [];
Object.keys(WepnData).forEach(V =>
  WepnList.push({ value: V, label: V })
)
const ArmrData = {
  アサシンベスト: {
    H: 383, A: 0, D: 45, M: 0, R: 0, T: 0,
    ソルジャー: false, ランサー: false, ライダー: true, エアリアル: true, シューター: true, アサシン: true, セイント: false, ソーサラー: false,
  },
  獅子の天装: {
    H: 516, A: 0, D: 67, M: 0, R: 0, T: 0,
    ソルジャー: false, ランサー: false, ライダー: false, エアリアル: true, シューター: true, アサシン: true, セイント: false, ソーサラー: false,
  },
};
const ArmrList = [];
Object.keys(ArmrData).forEach(function (V) {
  ArmrList.push({ value: V, label: V })
})
const HelmData = {
  追跡の頭帯: {
    H: 443, A: 0, D: 0, M: 0, R: 69, T: 0,
    ソルジャー: false, ランサー: false, ライダー: true, エアリアル: true, シューター: true, アサシン: true, セイント: false, ソーサラー: false,
  },
};
const HelmList = [];
Object.keys(HelmData).forEach(V =>
  HelmList.push({ value: V, label: V })
)
const AcceData = {
  ゼニスのお守り: {
    H: 0, A: 100, D: 0, M: 100, R: 0, T: 0,
    ソルジャー: true, ランサー: true, ライダー: true, エアリアル: true, シューター: true, アサシン: true, セイント: true, ソーサラー: true,
  },
  オリジンのお守り: {
    H: 0, A: 100, D: 0, M: 100, R: 0, T: 0,
    ソルジャー: true, ランサー: true, ライダー: true, エアリアル: true, シューター: true, アサシン: true, セイント: true, ソーサラー: true,
  },
  ナディアのお守り: {
    H: 0, A: 100, D: 0, M: 100, R: 0, T: 0,
    ソルジャー: true, ランサー: true, ライダー: true, エアリアル: true, シューター: true, アサシン: true, セイント: true, ソーサラー: true,
  },
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

Object.keys(MainData).forEach(Main => {//メインの名前=Main
  MainList.push({ value: Main, label: Main })
  U[Main] = {//定義
    Rr: MainData[Main].Rr,
    Cls: MainData[Main].Cls,
    Typ: MainData[Main].Typ,
    Smb: MainData[Main].Smb,
    Rng: MainData[Main].Rng,
    Mov: MainData[Main].Mov,
    Gc: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Ks: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Kh: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Sk: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Sp: MainData[Main].Sp,
    Sprt: MainData[Main].Sprt,
    Wepn: MainData[Main].Wepn,
    Armr: MainData[Main].Armr,
    Helm: MainData[Main].Helm,
    Acce: MainData[Main].Acce,
    Ench: MainData[Main].Ench,
    Tlnt: { Nam: MainData[Main].Tlnt.Nam, Txt: MainData[Main].Tlnt.Txt, },
    SklList: MainData[Main].SklList,
    PssList: {},
    Dmg: 0, DmgCr: 0, DmgEx: 0, UnitDmg: 0, UnitDmgCr: 0, UnitDmgEx: 0, CrrMax: 0,
    // ActPtt: { 11: [], 12: [], 13: [], 21: [], 22: [], 23: [], 31: [], 32: [], 33: [], 41: [], 42: [], 43: [], 51: [], 52: [], 53: [] },
    ActList: [],
    Act: [],
    Enmy: { Act: [] },
  }

  for (let K of HADMRT) {//メイン基本ステータス
    U[Main].Gc[K] = MainData[Main][K]
    U[Main].Ks[K] = Math.round(U[Main].Gc[K] / (1 + KyB[K] / 100) + ClUp.Main[K])
    U[Main].Kh[K] = Math.round(U[Main].Ks[K] * (1 + KyB[K] / 100 + Sho.Cls[K] / 100 + Sho.Main[K] / 100))
  }

  for (const i of MainData[Main].ActPtt) {
    U[Main].Act.push({
      t: i.t,
      Nam: i.Nam,
      CT: 0,
      Ara: 0,
      Rng: 0,
      Mag: 1,
      Att: false,
      Num: 1,
      Eff: {},
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

    })


  }

  U[Main].ActList.push('通常攻撃')
  for (let i = 0; i < U[Main].SklList.length; i++) {//スキルリストから順番に行動リストに
    if (SklData[U[Main].SklList[i]].Knd === 'A') {//アクティブスキルなら
      U[Main].ActList.push(U[Main].SklList[i])
    } else {//パッシブスキルなら
      U[Main].PssList[U[Main].SklList[i]] = true
    }
  }

  Object.keys(SprtData).forEach(Sprt => {//サポートの名前=Sprt
    U[Main][Sprt] = {
      Rr: SprtData[Sprt].Rr,
      Cls: SprtData[Sprt].Cls,
      Typ: SprtData[Sprt].Typ,
      Rng: SprtData[Sprt].Rng,
      Gc: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
      Ks: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
      Kh: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
      Sk: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
      AmTk: '', AmTy: '', AmTkS1: '', AmTkS2: '', AmTyS1: '', AmTyS2: '',
      Skl: SprtData[Sprt].Skl,
      Pss: SprtData[Sprt].Pss,
      Act: [],
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

    for (const A of MainData[Main].ActPtt) {
      U[Main][Sprt].Act.push({
        Nam: '通常攻撃', CT: 0, Ara: 0, Rng: 0, Mag: 1, Att: false, Num: 1,
        Dmg: 0,
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

      })
    }


  })//メインの中のサポートforここまで

  U[Main].Enmy = {
    Rr: '',
    Cls: 'ヴォイド',
    Typ: 'アタック',
    Smb: '',
    Rng: '',
    Mov: '',
    Gc: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Ks: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Kh: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Sk: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Dmg: 0, DmgCr: 0, DmgEx: 0,
    Act: [],
  }

  for (let i of MainData[Main].ActPtt) {
    U[Main].Enmy.Act.push({
      t: i.t,
      Nam: '通常攻撃',
      CT: 0,
      Ara: 0,
      Rng: 0,
      Mag: 1,
      Att: false,
      Num: 1,
      Dmg: 0, DmgCr: 0, DmgEx: 0,
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
    })
  }





});//メインforここまで



// Object.keys(SprtData).forEach(Sprt => {//サポートの名前=Sprt
//   SprtList.push({ value: Sprt, label: Sprt })

//   U[Sprt] = {
//     Rr: SprtData[Sprt].Rr,
//     Cls: SprtData[Sprt].Cls,
//     Typ: SprtData[Sprt].Typ,
//     Rng: SprtData[Sprt].Rng,
//     Gc: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
//     Ks: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
//     Kh: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
//     Sk: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
//     AmTk: '', AmTy: '', AmTkS1: '', AmTkS2: '', AmTyS1: '', AmTyS2: '',
//     Skl: SprtData[Sprt].Skl,
//     Pss: SprtData[Sprt].Pss,
//     Act: [],
//   }
//   for (let K of HADMRT) {//サポート基本ステータス
//     U[Sprt].Gc[K] = SprtData[Sprt][K]
//     U[Sprt].Ks[K] = Math.round(U[Sprt].Gc[K] / (1 + KyB[K] / 100) + ClUp.Sprt[K])
//     U[Sprt].Kh[K] = Math.round(U[Sprt].Ks[K] * (1 + KyB[K] / 100 + Sho.Cls[K] / 100 + Sho.Sprt[K] / 100))
//   }
//   if (SprtData[Sprt].A > 0) {
//     U[Sprt].AmTk = '煌めく満月のアミュレット'
//     U[Sprt].AmTkS1 = 'AA'
//     U[Sprt].AmTkS2 = 'A'
//     U[Sprt].AmTy = '煌めく陽光のアミュレット'
//     U[Sprt].AmTyS1 = 'HH'
//     U[Sprt].AmTyS2 = 'A'
//   } else {
//     U[Sprt].AmTk = '煌めく新月のアミュレット'
//     U[Sprt].AmTkS1 = 'MM'
//     U[Sprt].AmTkS2 = 'M'
//     U[Sprt].AmTy = '煌めく日蝕のアミュレット'
//     U[Sprt].AmTyS1 = 'HH'
//     U[Sprt].AmTyS2 = 'M'
//   }

//   for (let i = 0; i < 15; i++) {
//     U[Sprt].Act.push({
//       t: i,
//       Nam: '通常攻撃', CT: 0, Ara: 0, Rng: 0, Mag: 1, Att: false, Num: 1,
//       Dmg: 0,
//       Alw: {
//         H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0,
//         Mlt: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
//         Add: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
//       },
//       Btl: {
//         H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0,
//         Mlt: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
//         Add: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
//       },


//     })
//   }







// });//サポートforここまで

// U.Enmy = {
//   Rr: '',
//   Cls: 'ヴォイド',
//   Typ: 'アタック',
//   Smb: '',
//   Rng: '',
//   Mov: '',
//   Gc: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
//   Ks: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
//   Kh: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
//   Sk: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
//   Dmg: 0, DmgCr: 0, DmgEx: 0,
//   Act: [],
// }

// for (let i = 0; i < 15; i++) {
//   U.Enmy.Act.push({
//     t: i,
//     Nam: '通常攻撃',
//     CT: 0,
//     Ara: 0,
//     Rng: 0,
//     Mag: 1,
//     Att: false,
//     Num: 1,
//     Dmg: 0, DmgCr: 0, DmgEx: 0,
//     Alw: {
//       H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0,
//       Mlt: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
//       Add: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
//     },
//     Btl: {
//       H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0,
//       Mlt: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
//       Add: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, Damp: 0, DresA: 0, DresM: 0, Pnt: 0 },
//     },
//   })
// }


// console.log(U)










let SlctMain = 'アンドロメダ'
let SlctSprt = 'ソル'
let Wepn = ''
let Armr = ''
let Helm = ''
let Acce = ''
let Ench = ''




export default function DmgCelc() {

  const [MainKh, setMainKh] = useState([{ H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 }, { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 }, { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 }]);
  const [SprtKh, setSprtKh] = useState([{ H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 }, { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 }, { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 }]);
  const [MainSk, setMainSk] = useState([{ H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },]);
  const [SprtSk, setSprtSk] = useState([{ H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },]);





  // const [MainI, setMainI] = useState('リトリー')
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

  const MainKhCelc = () => {//メインの装備サポート呼び出し

    // setMainI(SlctMain)

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

  // const EqSlctOn = (Main, Eq, EqNam) => {//装備が選択された時
  //   console.log(Main)
  //   console.log(Eq)
  //   console.log(EqNam)

  //   U[Main][Eq] = EqNam
  //   SlctMain = Main

  //   MainSkCelc()
  // }

  const EnchSlctOn = (Main, EnchNam) => {
    console.log(Main)
    console.log(EnchNam)
    U[Main].Ench = EnchNam
    SlctMain = Main

    MainSkCelc()
  }



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

      switch (U[Main].Ench) {
        case 'バスター':
        case 'チャージ':
        case 'フェザー':
        case 'クイック':
        case 'ノヴァ':
          Mlt.A += 5
          Mlt.M += 5
          break
        case 'アイアン':
        case 'リフレクト':
        case 'バックアップ':
          Mlt.H += 10
          break
        case 'アイス':
        case 'ブライト':
        case 'クリスタル':
          Mlt.D += 5
          Mlt.R += 5
          break
        default:
          break
      }

      if (U[Main].Gc.A > U[Main].Gc.M) Mlt.A += 35 //エンチャントランダムステータス
      else Mlt.M += 35

      for (const K of HADMRT) {//メインの装備を含む基本ステータス
        U[Main].Sk[K] = Math.round(U[Main].Kh[K] * (1 + Mlt[K] / 100)) + Add[K]
        // console.log(K + Add[K])
      }
      setMainSk(() => ([U[Main].Sk]))

    })




    SprtSkCelc()
  }//MainSkCelcここまで

  // const SprtSlctOn = (Main, Sprt) => {//サポートが選択された時

  //   console.log(Main)
  //   console.log(Sprt)
  //   console.log(U[Main])
  //   // U[Main].Sprt.Nam = Sprt
  //   console.log(U[Main].Sprt.Nam)
  //   console.log(U.ベートーヴェン.Sprt.Nam)
  //   console.log(U.偽ドミトリー.Sprt.Nam)


  //   // SlctMain = Main
  //   // SlctSprt = Sprt
  //   SprtSkCelc()
  // }


  const SprtSkCelc = () => {//サポート装備計算 //メインごと
    Celc()
  }//SprtSkCelcここまで

  const ActSlctOn = (Main, i, ActNam) => {
    U[Main].Act[i].Nam = ActNam
    SlctMain = Main

    MainSkCelc()
  }



  const Celc = () => {



    Object.keys(MainData).forEach(Main => {//メインごと //サポートも並列に扱いたい
      setMainSk(() => ([U[Main].Sk])) //あるとなぜかDataGridが更新される
      let Sprt = U[Main].Sprt//あくまでもサポートの名前
      // let Enmy = 'Enmy'
      // let MainSprt = [Main, Sprt]
      // let MainSprtEnmy = [Main, Sprt, Enmy]








      //サポートの装備を含む基本ステータス
      let Mlt = {}
      let Add = {}
      for (const K of HADMRT) {//初期化
        Mlt[K] = 0//エンチャントランダムステ、２せっと
        Add[K] = 0//装備ステータス//エンチャントランダムすて+
      }
      for (const K of HADMRT) {//アミュレットのステータス
        if (U[Main][Sprt].AmTk) Add[K] += AmTkData[U[Main][Sprt].AmTk][K]
        if (U[Main][Sprt].AmTy) Add[K] += AmTyData[U[Main][Sprt].AmTy][K]
      }
      //アミュレットのスキル2　ここでは端数処理しない
      switch (U[Main][Sprt].AmTkS2) {
        case 'A': {
          Add.A += U[Main][Sprt].Ks.A * 0.075
          // console.log(U[Main][Sprt].Ks.A * 0.075)
        }
      }
      switch (U[Main][Sprt].AmTyS2) {
        case 'A': {
          Add.A += U[Main][Sprt].Ks.A * 0.075
        }
      }

      for (const K of HADMRT) {//サポートの装備を含む基本ステータス
        //Mlt[K]
        //Add[K] = C.Wepn[St] + C.Armr[St] + C.Helm[St] + C.Acce[St] + C.Ench[St]
        U[Main][Sprt].Sk[K] = Math.floor(U[Main][Sprt].Kh[K] * (1 + Mlt[K] / 100))
        U[Main][Sprt].Sk[K] = Math.round(U[Main][Sprt].Sk[K] + Add[K])
        // console.log(K + Add[K])
      }
      //サポートの装備を含む基本ステータスここまで




      U[Main].Dmg = 0//全行動ダメージ//初期化
      U[Main].DmgCr = 0
      U[Main].DmgEx = 0
      U[Main].UnitDmg = 0
      U[Main].UnitDmgCr = 0
      U[Main].UnitDmgEx = 0
      U[Main][Sprt].Dmg = 0

      let MainPss = []//メインのtrueパッシブ取り出し
      Object.keys(U[Main].PssList).forEach(PssNam => {
        if (U[Main].PssList[PssNam]) MainPss.push(PssNam)
      })

      for (let i = 0; i < MainData[Main].ActPtt.length; i++) {
        U[Main].Act[i].Eff = {}//ターン跨ぎの効果や他キャラからの効果、敵デバフの初期化
      }

      for (let i = 0; i < MainData[Main].ActPtt.length; i++) {//行動index分for




        let ActNam = U[Main].Act[i].Nam

        //初期化ここから

        for (const AB of AlwBtl) {
          for (const K of StAll) {
            U[Main].Act[i][AB].Mlt[K] = 0
            U[Main].Act[i][AB].Add[K] = 0
            U[Main][Sprt].Act[i][AB].Mlt[K] = 0
            U[Main][Sprt].Act[i][AB].Add[K] = 0
            U[Main].Enmy.Act[i][AB].Mlt[K] = 0
            U[Main].Enmy.Act[i][AB].Add[K] = 0
          }
        }
        U[Main].Act[i].Num = 1
        U[Main].Act[i].Att = false
        U[Main][Sprt].Act[i].Att = false








        U[Main].Act[i].Alw.Mlt.Crd += 30
        U[Main].Act[i].CT = SklData[ActNam].CT
        U[Main].Act[i].Ara = SklData[ActNam].Ara
        U[Main][Sprt].Act[i].Ara = '単'
        U[Main].Act[i].Mag = SklData[ActNam].Mag

        if (ActNam === '通常攻撃') {//通常攻撃射程
          U[Main].Act[i].Rng = MainData[Main].Rng
        } else {//スキル射程
          U[Main].Act[i].Rng = SklData[ActNam].Rng
        }
        U[Main][Sprt].Act[i].Rng = SprtData[Sprt].Rng

        // let Mlt = {
        //   MAct: {
        //     [Main]: {
        //       Alw: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, DresA: 0, DresM: 0, Pnt: 0 },
        //       Btl: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, DresA: 0, DresM: 0, Pnt: 0 },
        //     },
        //     [Sprt]: {
        //       Alw: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, DresA: 0, DresM: 0, Pnt: 0 },
        //       Btl: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, DresA: 0, DresM: 0, Pnt: 0 },
        //     },
        //     Enmy: {
        //       Alw: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, DresA: 0, DresM: 0, Pnt: 0 },
        //       Btl: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0, Crr: 0, Crd: 0, DresA: 0, DresM: 0, Pnt: 0 },
        //     },
        //   }
        // }
        //初期化ここまで


        //出撃後ステータス//戦闘時ステータス反映
        switch (Main) {//タレント
          case 'ベートーヴェン':
            U[Main].Act[i].Alw.Mlt.A += 20
            U[Main][Sprt].Act[i].Alw.Mlt.A += 20
            break
          case '偽ドミトリー':

            // 行動終了時、自中心範囲4の敵4のディフェンス-10%/レジスト-10%(1ターン)、味方4のディフェンス+10%/レジスト+10%(1ターン)
            break
          case 'アンドロメダ':
            U[Main].Act[i].Alw.Mlt.A += 25
            U[Main][Sprt].Act[i].Alw.Mlt.A += 25
            if (ActNam != '通常攻撃' && U[Main].Act[i].Rng >= 1) U[Main].Act[i].Rng += 1//HP75%の時,スキル射程+1
            if (ActNam != '通常攻撃' && U[Main].Act[i].Ara >= 1) U[Main].Act[i].Ara += 1//HP75%の時,スキル範囲+1
            //移動+1//HP75%の時
            //自ユニットのスキル与ダメージ+30%//HP75%以下の時
            break
          default:
            break
        }//タレントここまで
        switch (Sprt) {//サポートパッシブ
          case 'ソル':
            if (U[Main].Act[i].Nam !== '通常攻撃') {//スキル与ダメージ
              U[Main].Act[i].Alw.Mlt.Damp += 5
              //U[Main][Sprt].Act[i].Alw.Mlt.Damp += 5　今は関係なし
            }
            let ii = i + 1
            if (U[Main].Act[ii]) U[Main].Act[ii].Eff['陽光の恵み'] = true
            break
          default:
            break
        }//サポートパッシブここまで
        switch (U[Main].Wepn) {//武器
          case 'ライトマキシマスカ':
            U[Main].Act[i].Alw.Mlt.A += 10
            break
          case 'ダブルロングショット':
            U[Main].Act[i].Alw.Mlt.A += 10
            break
          default:
            break
        }//武器ここまで
        switch (U[Main].Armr) {//鎧の装備アビリティ
          case 'アサシンベスト':
            U[Main].Act[i].Alw.Mlt.A += 10
            break
          case '獅子の天装':
            U[Main].Act[i].Alw.Mlt.Damp += 15
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
          case 'オリジンのお守り':
          case 'ナディアのお守り':
            if (
              (U[Main].Acce === 'ゼニスのお守り' && U[Main].Smb === 'ゼニス') ||
              (U[Main].Acce === 'オリジンのお守り' && U[Main].Smb === 'オリジン') ||
              (U[Main].Acce === 'ナディアのお守り' && U[Main].Smb === 'ナディア')
            ) {
              U[Main].Act[i].Alw.Mlt.H += 8
              U[Main].Act[i].Alw.Mlt.A += 8
              U[Main].Act[i].Alw.Mlt.D += 8
              U[Main].Act[i].Alw.Mlt.M += 8
              U[Main].Act[i].Alw.Mlt.R += 8
              U[Main].Act[i].Alw.Mlt.T += 8
              U[Main].Act[i].Alw.Mlt.Crd += 10
            }
            break


          default:
            break
        }
        switch (U[Main].Ench) {//エンチャント4セット効果&黄色の2セット
          case 'バスター':
            if (ActNam !== '通常攻撃/敵ターン') {
              U[Main].Act[i].Btl.Mlt.A += 15
              U[Main].Act[i].Btl.Mlt.DresA += 15
              U[Main].Act[i].Btl.Mlt.DresM += 15
            }
            break
          case 'チャージ':
            U[Main].Act[i].Alw.Mlt.A += 10//HP70%以上
            U[Main].Act[i].Alw.Mlt.D += 10//HP70%以上
            U[Main].Act[i].Alw.Mlt.M += 10//HP70%以上
            U[Main].Act[i].Alw.Mlt.R += 10//HP70%以上
            break
          case 'フェザー':
            U[Main].Act[i].Alw.Mlt.Damp += 10
            //行動終了時、40%で移動+1(1ターン)
            break
          case 'クイック':
            //スキルでダメージを与えた時、50%でそのスキルCT-1
            break
          case 'ノヴァ':
            if (ActNam[i] !== '通常攻撃' && ActNam[i] !== '通常攻撃/敵ターン') {
              U[Main].Act[i].Alw.Mlt.Damp += 10
              if (U[Main].Act[i].Ara >= 1) U[Main].Act[i].Alw.Mlt.Damp += 10
            }
            break
          case 'アイアン':
            U[Main].Act[i].Alw.Mlt.DresA += 15
            U[Main].Act[i].Alw.Mlt.DresM += 15
            break
          case 'リフレクト':
            break
          case 'バックアップ':
            U[Main].Act[i].Alw.Mlt.D += 5
            U[Main].Act[i].Alw.Mlt.R += 5
            break
          case 'アイス':
            break
          case 'ブライト':
            break
          case 'クリスタル':
            break
          case 'ストライク':
            U[Main].Act[i].Alw.Mlt.Crr += 7//2set効果
            U[Main].Act[i].Alw.Mlt.Crd += 30
            break
          case 'ブレイク':
            U[Main].Act[i].Alw.Mlt.Crr += 7//2set効果
            if (ActNam[i] !== '通常攻撃/敵ターン') {
              U[Main].Act[i].Btl.Mlt.Damp += 20//敵HP50%以上
            }
            break
          default:
            break
        }
        switch (ActNam) {//行動=攻撃スキル
          case 'アームブレイク':
            //敵のアタック-10%1T
            break
          case '一番痛いの撃っとくね':
            U[Main].Act[i].Eff['一番痛いの撃っとくね'] = true
            break
          case '詐術砲撃':
            //戦闘前、敵のダメージ耐性-10%1T
            break
          case 'ジェノサイダー':
            U[Main].Act[i].Alw.Mlt.Crr += 50
            break

          case 'シャドーハント':
            //if (C.Enmy.Cls === 'アサシン') U[Main].Act[i].Mag = 2
            break
          case 'スーパーシュート':
            U[Main].Act[i].Alw.Mlt.Damp += 30
            U[Main][Sprt].Act[i].Alw.Mlt.Damp += 30

            // Mlt.MAct[Main].Btl.Damp = Math.min(30, Mlt.MAct[Main].Btl.Damp)
            // Mlt.MAct[Sprt].Btl.Damp = Math.min(30, Mlt.MAct[Sprt].Btl.Damp)
            break
          case '灰詰めの炸裂弾':
            //攻撃後、敵のD/R-20%2T
            break

          default:
            break
        }


        if (MainPss.includes('アタックブースト')) {
          if (ActNam !== '通常攻撃/敵ターン') {
            U[Main].Act[i].Btl.Mlt.A += 15
            U[Main][Sprt].Act[i].Btl.Mlt.A += 15
          }
        }
        if (MainPss.includes('キラーエスケープ')) {
          U[Main].Act[i].Alw.Mlt.Crr += 10
        }

        switch (U[Main][Sprt].AmTkS1) {//アミュレットスキル1
          case 'AA':
            U[Main][Sprt].Act[i].Alw.Add.A += U[Main].Sk.A * 0.15

            break

        }

        //サポートのボードアビリティ
        if (U[Main][Sprt].Cls === 'ソルジャー') {
          if (U[Main].Enmy.Cls === 'ランサー') {
            U[Main][Sprt].Act[i].Btl.Mlt.A += 15
            U[Main][Sprt].Act[i].Btl.Mlt.M += 15
          }
        }
        if (U[Main][Sprt].Cls === 'シューター') {
          if (U[Main].Enmy.Cls === 'エアリアル') {
            U[Main][Sprt].Act[i].Btl.Mlt.A += 15
            U[Main][Sprt].Act[i].Btl.Mlt.A += 15
          }
          U[Main][Sprt].Act[i].Btl.Mlt.D += 15//偵察。DEF効果が無い地形での戦闘時、
          U[Main][Sprt].Act[i].Btl.Mlt.R += 15
          U[Main][Sprt].Act[i].Btl.Mlt.A += 15//強襲。HP100%の敵との戦闘時
          U[Main][Sprt].Act[i].Btl.Mlt.M += 15
        }

        ///U[Main].Act[i].Eff//ターン跨ぎの効果、他キャラからの効果

        if (U[Main].Act[i].Eff['一番痛いの撃っとくね']) {
          U[Main].Enmy.Act[i].Btl.Mlt.DresA += -15
        }
        if (U[Main].Act[i].Eff['陽光の恵み'] && U[Main].Act[i].Nam !== '通常攻撃') {//ソルP2
          U[Main].Act[i].Alw.Mlt.Damp += 20
          //サポート関係ない
        }



        //出撃後ステータス//戦闘時ステータス集計
        for (const MA of MltAdd) {
          for (const K of StAll) {
            U[Main].Act[i].Btl[MA][K] += U[Main].Act[i].Alw[MA][K]//戦闘後乗算+=出撃後乗算
            U[Main][Sprt].Act[i].Btl[MA][K] += U[Main][Sprt].Act[i].Alw[MA][K]
            U[Main].Enmy.Act[i].Btl[MA][K] += U[Main].Enmy.Act[i].Alw[MA][K]


            // console.log(t+'.'+MSE+'.'+K+'='+Mlt.MAct[MS].Btl[K])
            // U[MS].Act[i].Btl.Mlt[K] += Mlt.MAct[MS].Btl[K]
          }
        }

        for (const AB of AlwBtl) {
          for (const K of HADMRT) {//ステータス計算
            U[Main].Act[i][AB].Add[K] = Math.floor(U[Main].Act[i][AB].Add[K])//端数切捨て(カエサルなど)
            U[Main][Sprt].Act[i][AB].Add[K] = Math.floor(U[Main][Sprt].Act[i][AB].Add[K])//端数切捨て(アミュS1)

            U[Main].Act[i][AB][K] = Math.floor(U[Main].Sk[K] * (1 + U[Main].Act[i][AB].Mlt[K] / 100)) + U[Main].Act[i][AB].Add[K]
            U[Main][Sprt].Act[i][AB][K] = Math.floor(U[Main][Sprt].Sk[K] * (1 + U[Main][Sprt].Act[i][AB].Mlt[K] / 100)) + U[Main][Sprt].Act[i][AB].Add[K]
            U[Main].Enmy.Act[i][AB][K] = Math.floor(U[Main].Enmy.Sk[K] * (1 + U[Main].Enmy.Act[i][AB].Mlt[K] / 100)) + U[Main].Enmy.Act[i][AB].Add[K]
          }
        }
        U[Main].Act[i].Alw.Mlt.Crr += U[Main].Act[i].Alw.T / 10//クリティカル率にテクニック加算
        U[Main].Act[i].Btl.Mlt.Crr += U[Main].Act[i].Btl.T / 10

        //ダメージ計算
        let AB = ''
        if (U[Main].Act[i].Ara >= 1) AB = 'Alw'//範囲攻撃ならAlw
        else AB = 'Btl'

        if (MainData[Main].A > MainData[Main].M) {//物理タイプ
          U[Main].Act[i].Dmg = (U[Main].Act[i][AB].A - 0) * (1 - U[Main].Enmy.Act[i][AB].DresA / 100)
        } else {//魔法タイプ
          U[Main].Act[i].Dmg = (U[Main].Act[i][AB].M - 0)*(1 - U[Main].Enmy.Act[i][AB].DresM / 100)
        }
        if (SprtData[Sprt].A > SprtData[Sprt].M) {//物理タイプ
          U[Main][Sprt].Act[i].Dmg = (U[Main][Sprt].Act[i][AB].A - 0) *(1 - U[Main].Enmy.Act[i][AB].DresA / 100)
            U[Main][Sprt].Act[i].Alw.M = null
          U[Main][Sprt].Act[i].Btl.M = null
        } else {//魔法タイプ
          U[Main][Sprt].Act[i].Dmg = (U[Main][Sprt].Act[i][AB].M - 0)*(1 - U[Main].Enmy.Act[i][AB].DresM / 100)
          U[Main][Sprt].Act[i].Alw.A = null
          U[Main][Sprt].Act[i].Btl.A = null
        }




        U[Main].Act[i].Dmg *= U[Main].Act[i].Mag

        U[Main].Act[i].Dmg *= (1 + U[Main].Act[i][AB].Mlt.Damp / 100)
        U[Main][Sprt].Act[i].Dmg *= (1 + U[Main][Sprt].Act[i][AB].Mlt.Damp / 100)





        U[Main].Act[i].DmgCr = U[Main].Act[i].Dmg * (1 + U[Main].Act[i][AB].Mlt.Crd / 100)

        U[Main].Act[i].Dmg = Math.floor(U[Main].Act[i].Dmg) * 10
        U[Main].Act[i].DmgCr = Math.floor(U[Main].Act[i].DmgCr) * 10
        U[Main].Act[i].DmgEx = Math.floor((U[Main].Act[i].DmgCr * U[Main].Act[i][AB].Mlt.Crr / 100) + (U[Main].Act[i].Dmg * (1 - U[Main].Act[i][AB].Mlt.Crr / 100)))
        U[Main][Sprt].Act[i].Dmg = Math.floor(U[Main][Sprt].Act[i].Dmg) * 10



        if (U[Main].Act[i].Ara >= 1) U[Main][Sprt].Act[i].Dmg = null//範囲攻撃ならサポートダメージnull
        U[Main].Act[i].UnitDmg = U[Main].Act[i].Dmg + U[Main][Sprt].Act[i].Dmg //ユニット1行動当たりのダメージ
        U[Main].Act[i].UnitDmgCr = U[Main].Act[i].DmgCr + U[Main][Sprt].Act[i].Dmg
        U[Main].Act[i].UnitDmgEx = U[Main].Act[i].DmgEx + U[Main][Sprt].Act[i].Dmg

        U[Main].Dmg += U[Main].Act[i].Dmg//全行動ダメージ合計//メインサポート別
        U[Main].DmgCr += U[Main].Act[i].DmgCr
        U[Main].DmgEx += U[Main].Act[i].DmgEx
        U[Main].UnitDmg += U[Main].Act[i].UnitDmg//ユニット
        U[Main].UnitDmgCr += U[Main].Act[i].UnitDmgCr
        U[Main].UnitDmgEx += U[Main].Act[i].UnitDmgEx
        U[Main][Sprt].Dmg += U[Main].Act[i].Dmg





      }//indexここまで

      //全ターンの結果
      // U[Main][Sprt] = U[Sprt]
      // U[Main].Sprt = Sprt

    })//forメインここまで

    console.log('U')
    console.log(U)
    console.log(U.アンドロメダ.Act[0])


  }//Celcここまで



  window.onload = MainKhCelc



  return (
    <div style={{ fontSize: 16 }}>

      <DataGridUnitDmg
        U={U}
        MainList={MainList}
        MainSlctOn={MainSlctOn}

        SklData={SklData}


        WepnData={WepnData}
        ArmrData={ArmrData}
        HelmData={HelmData}
        AcceData={AcceData}
        MainSkCelc={MainSkCelc}

        EnchData={EnchData}
        EnchSlctOn={EnchSlctOn}

        SprtData={SprtData}
        SprtSkCelc={SprtSkCelc}


        ActSlctOn={ActSlctOn}

        Celc={Celc}


      />

    </div>

  )

}


