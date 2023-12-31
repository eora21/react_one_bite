import {useEffect, useState} from "react";

export const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    console.log("update")
  });

  useEffect(() => {
    console.log(`countUpdate: ${count}`)
    if (5 < count) {
      alert("카운트 5 초과, 초기화")
      setCount(0);
    }
  }, [count]);

  useEffect(() => {
    console.log(`textUpdate: ${text}`)
  }, [text]);

  return (
    <div style={{padding: 20}}>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={e => setText(e.target.value)}/>
      </div>
    </div>
  )
}