
import {useState} from "react"

export default function Calculater(){
const [num1, setNum1]=useState()
const [num2, setNum2]=useState()
const [num3, setNum3]=useState(0)


return <>
<div>
<label for="num1">number one:</label>
<input 
    type="number"
    value={num1}
    onChange={(e)=> setNum1(e.target.value)}/>
<br/>
    <label for="num2">number two:</label>
<input 
    type="number"
    value={num2}
    onChange={(e)=> setNum2(e.target.value)}
/>
<br/>
<button onClick={()=>{setNum3(Number(num1)+Number(num2))}}>ADD</button>
<h1>the sum is {num3}</h1>
</div>
</>
}