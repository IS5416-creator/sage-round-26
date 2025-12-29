import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("");
  const [firstNum, setFirstNum] = useState();
  const [operator, setOperator] = useState();

  const number = (num) => {
    setDisplay(display + num);
  };

  const operation = (op) => {
    setFirstNum(Number(display));
    setOperator(op);
    setDisplay("");
  };

  const calculate = () => {
    const secondNum = Number(display);
    let result;

    if (operator === "+") result = firstNum + secondNum;
    if (operator === "-") result = firstNum - secondNum;
    if (operator === "*") result = firstNum * secondNum;
    if (operator === "/") result = firstNum / secondNum;

    setDisplay(result.toString());
    setFirstNum(null);
    setOperator(null);
  };

  const clear = () => {
    setDisplay("");
    setFirstNum(null);
    setOperator(null);
  };

  return (
    <div>
      <h2>Calculator</h2>

      <div>{display || "0"}</div>
      <div style={{padding: 10, display:"flex",  flexDirection:"column"}}>
      <div style={{display:"flex",justifyContent:"space-between", width:80 }} >
        <button  onClick={() => number("1")}>1</button>
        <button onClick={() => number("2")}>2</button>
        <button onClick={() => number("3")}>3</button>
      </div>
      <div style={{display:"flex",justifyContent:"space-between", width:80 }}>
        <button onClick={() => number("4")}>4</button>
        <button onClick={() => number("5")}>5</button>
        <button onClick={() => number("6")}>6</button>
      </div>
      <div style={{display:"flex",justifyContent:"space-between", width:80 }}>
        <button onClick={() => number("7")}>7</button>
        <button onClick={() => number("8")}>8</button>
        <button onClick={() => number("9")}>9</button>
      </div>
      <div style={{display:"flex",justifyContent:"space-between", width:80 }}>
        <button onClick={() => number("0")}>0</button>
        <button onClick={() => operation("+")}>+</button>
        <button onClick={() => operation("-")}>-</button>
      </div>
      <div style={{display:"flex",justifyContent:"space-between", width:80 }}>
        <button onClick={() => operation("/")}>/</button>
        <button onClick={() => operation("*")}>*</button>
        <button onClick={calculate}>=</button>
      </div>
      </div>

      <button onClick={clear}>Clear</button>
    </div>
  );
}
