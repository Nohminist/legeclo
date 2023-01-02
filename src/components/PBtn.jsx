export default function PBtn(props) {
  return (
    <button onClick={()=> props.onClick()}>
      公開状態:{props.isP ? 'true':'close'}
    </button>
  )
}


//公開状態:{props.isP.toString()}

