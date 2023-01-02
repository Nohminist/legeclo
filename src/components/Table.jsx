export default function Table() {
  let items = [
    { Turn: 11, 行動: '通常攻撃' },
    { Turn: 21, 行動: '通常攻撃' },
  ]

  return (

    <table className='table table-striped'>
      <tbody>
        <tr>
          <td>ターン</td>
          <td>行動</td>
        </tr>
        {items.map((value) => (
          <tr>
            <td>{value.Turn}</td>
            <td>{value.行動}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
