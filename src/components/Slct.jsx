import Select from 'react-select';






export function Main(props) {
  return (
    <Select options={props.Op} onChange={(e) => props.onChange(e)}
      defaultValue={{ label: 'アンドロメダ', value: 'アンドロメダ' }} />
  )
}
export function Sprt(props) {
  return (
    <Select options={props.Op} onChange={(e) => props.onChange(e)}
      defaultValue={{ label: 'ソル', value: 'ソル' }} />
  )
}
export function Wepn(props) {
  console.log(props.WepnI)
  return (
    <Select options={props.Op} onChange={(e) => props.onChange(e)} 
      defaultValue={{ label: props.WepnI, value: props.WepnI }} />
  )
} export function Armr(props) {
  return (
    <Select options={props.Op} onChange={(e) => props.onChange(e)}
      defaultValue={{ label: '鎧を選択するんだよ！', value: '鎧' }} />
  )
} export function Helm(props) {
  return (
    <Select options={props.Op} onChange={(e) => props.onChange(e)}
      defaultValue={{ label: '兜を選択するんだよ！', value: '兜' }} />
  )
} export function Acce(props) {
  return (
    <Select options={props.Op} onChange={(e) => props.onChange(e)}
      defaultValue={{ label: 'アクセサリーを選択するんだよ！', value: 'アクセサリー' }} />
  )
} export function Ench(props) {
  return (
    <Select options={props.Op} onChange={(e) => props.onChange(e)}
      defaultValue={{ label: 'エンチャントを選択するんだよ！', value: '未選択' }} />
  )
}