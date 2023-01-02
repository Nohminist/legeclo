function App() {
  return (
    <Result />
  )
};


export const Selectbox = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      //ここでボックスの中身のスタイルをカスタマイズ
      // borderBottom: "1px dotted pink",
      // color: state.isSelected ? "red" : "blue",
      // padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      //ここでボックス自体のスタイルをカスタマイズ
      width: 300,
      display: "flex",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  return <Select options={options} styles={customStyles} />;
};



const MainList = [
  { value: 'アンドロメダ', label: 'アンドロメダ' },
  { value: 'ベートーヴェン', label: 'ベートーヴェン' },
];

const MainData = {
  アンドロメダ: { H: 5262, A: 560, D: 215, M: 196, R: 196, T: 381 },
  ベートーヴェン: { H: 4930, A: 490, D: 216, M: 194, R: 215, T: 321 }
};

const StList = ["H", "A", "D", "M", "R", "T"]

const ClUp = {
  Main: { H: 800, A: 0, D: 0, M: 0, R: 0, T: 0 },
  Sprt: { H: 1200, A: 0, D: 0, M: 0, R: 0, T: 0 },
};

const KyB = {
  H: 30, A: 30, D: 30, M: 30, R: 30, T: 50
}

const Sho = {
  Cls: { H: 20, A: 30, D: 20, M: 30, R: 20, T: 0 },
  Main: { H: 40, A: 40, D: 40, M: 40, R: 40, T: 0 },
  Sprt: { H: 40, A: 40, D: 40, M: 40, R: 40, T: 0 },
}


let C = {
  Main: {
    Gc: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Ks: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Kh: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
    Sk: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },


  },

};

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      C: {
        Main: {
          Gc: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
          Ks: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
          Kh: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
          Sk: { H: 0, A: 0, D: 0, M: 0, R: 0, T: 0 },
        }
      }
    }
    this.MainSlct = this.MainSlct.bind(this)
  }

  MainSlct = (e) => {

    for (const St of StList) {
      C.Main.Gc[St] = MainData[e.value][St]

      C.Main.Ks[St] = Math.round(C.Main.Gc[St] / (1 + KyB[St] / 100) + ClUp.Main[St])

      C.Main.Kh[St] = Math.round(C.Main.Ks[St] * (1 + KyB[St] / 100 + Sho.Cls[St] / 100 + Sho.Main[St] / 100))





    }



    this.setState(() => ({
      C: {
        Main: {
          Gc: {
            H: C.Main.Gc.H,
            A: C.Main.Gc.A,
            D: C.Main.Gc.D,
            M: C.Main.Gc.M,
            R: C.Main.Gc.R,
            T: C.Main.Gc.T,
          },
          Ks: {
            H: C.Main.Ks.H,
            A: C.Main.Ks.A,
            D: C.Main.Ks.D,
            M: C.Main.Ks.M,
            R: C.Main.Ks.R,
            T: C.Main.Ks.T,
          },
          Kh: {
            H: C.Main.Kh.H,
            A: C.Main.Kh.A,
            D: C.Main.Kh.D,
            M: C.Main.Kh.M,
            R: C.Main.Kh.R,
            T: C.Main.Kh.T,
          },
          Sk: {
            H: C.Main.Sk.H,
            A: C.Main.Sk.A,
            D: C.Main.Sk.D,
            M: C.Main.Sk.M,
            R: C.Main.Sk.R,
            T: C.Main.Sk.T,
          },
        }
      }



    }))


    //C.Main.Gc.H = MainData[e.value].H
    // switch (Main.value) {
    //   case 'アンドロメダ':
    //     C.Main.A.Gc = 500
    //     break
    //   case 'ベートーヴェン':
    //     C.Main.A.Gc = 400
    //     break

    //   default:
    //}
    this.Celc()

  }

  Celc = () => {

  }

  //, color: 'red'
  render() {
    return (
      
        
      <div style={{ fontSize: 13 }}>
        <Selectbox />
        <div><Select options={MainList} onChange={this.MainSlct} /></div>
        <div>
          <img src='http://nohminism.site/wp-content/uploads/アンドロメダi.png'></img>
          <table  className='table table-striped'>
            <tbody>
              <tr>
                <td></td>
                <td>ガチャ</td>
                <td>基礎</td>
                <td>基本</td>
                <td>装備</td>
              </tr>
              <tr>
                <td>HP</td>
                <td>{this.state.C.Main.Gc.H}</td>
                <td>{this.state.C.Main.Ks.H}</td>
                <td>{this.state.C.Main.Kh.H}</td>
                <td>{this.state.C.Main.Sk.H}</td>
              </tr>
              <tr>
                <td>アタック</td>
                <td>{this.state.C.Main.Gc.A}</td>
                <td>{this.state.C.Main.Ks.A}</td>
                <td>{this.state.C.Main.Kh.A}</td>
                <td>{this.state.C.Main.Sk.A}</td>
              </tr>
              <tr>
                <td>ディフェンス</td>
                <td>{this.state.C.Main.Gc.D}</td>
                <td>{this.state.C.Main.Ks.D}</td>
                <td>{this.state.C.Main.Kh.D}</td>
                <td>{this.state.C.Main.Sk.D}</td>
              </tr>
              <tr>
                <td>マジック</td>
                <td>{this.state.C.Main.Gc.M}</td>
                <td>{this.state.C.Main.Ks.M}</td>
                <td>{this.state.C.Main.Kh.M}</td>
                <td>{this.state.C.Main.Sk.M}</td>
              </tr>
              <tr>
                <td>レジスト</td>
                <td>{this.state.C.Main.Gc.R}</td>
                <td>{this.state.C.Main.Ks.R}</td>
                <td>{this.state.C.Main.Kh.R}</td>
                <td>{this.state.C.Main.Sk.R}</td>
              </tr>
              <tr>
                <td>テクニック</td>
                <td>{this.state.C.Main.Gc.T}</td>
                <td>{this.state.C.Main.Ks.T}</td>
                <td>{this.state.C.Main.Kh.T}</td>
                <td>{this.state.C.Main.Sk.T}</td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    )
  }
}

export default App;