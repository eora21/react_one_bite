import React, {useState} from "react";

export const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({count: 1});

  return (
    <div style={{padding: 50}}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count}/>
        <button onClick={() => setCount(count)}>A Button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <CounterB obj={obj}/>
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B Button
        </button>
      </div>
    </div>
  );
}

const areEqual = (prevProps, nextProps) => prevProps.obj.count === nextProps.obj.count;

const CounterA = React.memo(({count}) => {
  console.log("counterA", count)
  return <div>{count}</div>
});

const CounterB = React.memo(({obj}) => {
  console.log("counterB", obj.count)
  return <div>{obj.count}</div>
}, areEqual);

const CountView = React.memo(({count}) => {
  console.log("count", count)
  return <div>{count}</div>
});

const TextView = React.memo(({text}) => {
  console.log("text", text)
  return <div>{text}</div>
});