// import './App.css';

import MyHeader from "./MyHeader";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  const counterProps = {
    initValue: 5,
  }

  return (
    <Container>
      <div>
        <MyHeader/>
        <Counter {...counterProps}/>
      </div>
    </Container>
  );
}

export default App;
