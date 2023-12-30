// import './App.css';

import MyHeader from "./MyHeader";
import Counter from "./Counter";

function App() {
  const counterProps = {
    initValue: 5,
    plusValue: 2,
    minusValue: 1,
  }

  return (
    <div>
      <MyHeader/>
      <Counter {...counterProps}/>
    </div>
  );
}

export default App;
