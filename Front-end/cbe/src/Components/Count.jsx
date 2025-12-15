import {useState} from "react"; 

function Count() {
  const [count, setCount] = useState(0)
  // "count" -> shows           "setCount"->assign
  return <div>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1); console.log(count)}}>add 1</button>
    <button onClick={()=>{setCount(count-1)}}>subs 1</button>
    <button onClick={()=>{setCount(1)}}>reset</button>
  </div>
}

export default Count;
