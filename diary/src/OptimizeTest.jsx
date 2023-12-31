import React, {useState} from "react";

export const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  return (
    <div style={{padding: 50}}>
      <div>
        <h2>count</h2>
        <CountView count={count}/>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text}/>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
    </div>
  );
}

const CountView = React.memo(({count}) => {
  console.log("count", count)
  return <div>{count}</div>
});

const TextView = React.memo(({text}) => {
  console.log("text", text)
  return <div>{text}</div>
});