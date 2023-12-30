// import './App.css';

import MyHeader from "./MyHeader";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <MyHeader/>
      <Counter initValue={5}/>
    </div>
  );
}

export default App;
