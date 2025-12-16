import { useState, useEffect } from "react";

function Count(props) {
  

  const [count2, setCount2] = useState(0)
  useEffect(() => { console.log("use effect from count") }, [props.count1])
  return <div>
    <h1>count 1: {props.count1}</h1>
    <h1>count 2: {count2}</h1>
    <button onClick={() => { props.setCount1(props.count1 + 1); }}>add 1 to count1</button>
    <button onClick={() => { setCount2(count2 + 1); }}>add 1 to count 2</button>
    <button onClick={() => { props.setCount1(props.count1 - 1); }}>subs 1</button>
    <button onClick={() => { props.setCount1(0); setCount2(0) }}>reset</button>
  </div>
}

export default Count;
