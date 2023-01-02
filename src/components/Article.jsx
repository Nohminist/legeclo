import {useState} from "react";
import {Title,PBtn} from "./index";

//名前付き関数のdefault export
export default function Article(props){
  const [ isP,setIsP] = useState(false)
  const pA = () => {
    setIsP( prevState => !prevState)
  }
  return(//pA()はpropsが渡されたときに発動して無限になるためNG
    <div>
      <Title title={props.title}/>
      <PBtn isP = {isP} onClick={pA}/>

    </div>
  )
}


//アロー関数のdefault export どちらでもOK
// const Article = (props) => {
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>{props.content}</p>
//     </div>
//   )

// };

// export default Article;