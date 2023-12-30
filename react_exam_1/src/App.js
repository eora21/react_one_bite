import React from "react";
import './App.css';

import MyHeader from "./MyHeader";

function App() {
  let name = "eora21";

  return (
    <React.Fragment>
      <MyHeader/>
      <header className="App-header">
        <h2> 안녕 리액트 {name}</h2>
      </header>
    </React.Fragment>
  );
}

export default App;
