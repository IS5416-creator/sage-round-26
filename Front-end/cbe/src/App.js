import Count from "./Components/Count";
import IfElse from "./Components/IfElse";
import List from "./Components/List";

function App() {
  let x=20
  return <div>
    <Count/>
    <IfElse/>
    {x===20 && <h1>and operation is true</h1>}
    {/* && means "if its not true just don't display it" */}
    {x===20 ? <h1>ternary operation is true</h1> : <h1>ternary operation is false</h1>}
    {/* ? means "if the operation is true display 'this' and if it's not true display 'that'" */}
    <List/>
  </div>
}

export default App;
