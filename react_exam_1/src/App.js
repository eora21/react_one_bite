// import './App.css';

import MyHeader from "./MyHeader";
import Counter from "./Counter";

function App() {
  const counterProps = {
    initValue: 5,
  }

  return (
    <div>
      <MyHeader/>
      <Counter {...counterProps}/>
    </div>
  );
}

export default App;
