import Count from "./Components/Count";
import Effect from "./Components/Effect";
import Form from "./Components/Form";
import IfElse from "./Components/IfElse";
import List from "./Components/List";
import {useState} from "react";

function App() {
  let x=20
  const [count1, setCount1] = useState(0)
    // "count" -> shows           "setCount"->assign
  return <div>
    <Count count1={count1} setCount1={setCount1} />
    <IfElse/>
    {x===20 && <h1>and operation is true</h1>}
    {/* && means "if its not true just don't display it" */}
    {x===20 ? <h1>ternary operation is true</h1> : <h1>ternary operation is false</h1>}
    {/* ? means "if the operation is true display 'this' and if it's not true display 'that'" */}
    <List count1={count1} setCount1={setCount1}/>
    <Effect/>
    <Form/>
  </div>
}

export default App;
