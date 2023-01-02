export function MainSt(props) {
  return (
    <button onClick={()=> props.onClick()}>{props.p ? 'ステータス｜×':'ステータス｜+'}</button>
  )
}
export function SprtSt(props) {
  return (
    <button onClick={()=> props.onClick()}>{props.p ? 'ステータス｜×':'ステータス｜+'}</button>
  )
}



