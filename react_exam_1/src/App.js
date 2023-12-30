import './App.css';

import MyHeader from "./MyHeader";

function App() {
  let name = "eora21";

  return (
    <div className="App">
      <MyHeader/>
      <h2> 안녕 리액트 {name}</h2>
    </div>
  );
}

export default App;
