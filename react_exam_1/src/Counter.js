import React, {useState} from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.initValue);
  // useState는 배열을 반환하는데, 0번째는 상태값이고 1번째는 상태를 변화시키는 상태변화 함수이다.
  // 건네준 0은 초기값이다.

  const plus = () => setCount(count + props.plusValue);
  const minus = () => setCount(count - props.minusValue);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  )
}

export default Counter;