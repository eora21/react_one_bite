import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {New} from "./pages/New";
import {Edit} from "./pages/Edit";
import {Diary} from "./pages/Diary";
import {RouteTest} from "./components/RouteTest";

function App() {
  // env.PUBLIC_URL이 작동하지 않을 경우
  // const env = process.env;
  // env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <BrowserRouter>
      <div className="App">
        <h1>감정 일기장</h1>

        <img src={process.env.PUBLIC_URL + "/assets/emotion1.png"}/>
        <img src={process.env.PUBLIC_URL + "/assets/emotion2.png"}/>
        <img src={process.env.PUBLIC_URL + "/assets/emotion3.png"}/>
        <img src={process.env.PUBLIC_URL + "/assets/emotion4.png"}/>
        <img src={process.env.PUBLIC_URL + "/assets/emotion5.png"}/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/new" element={<New/>}/>
          <Route path="/edit" element={<Edit/>}/>
          <Route path="/diary/:id" element={<Diary/>}/>
        </Routes>
        <RouteTest/>
      </div>
    </BrowserRouter>);
}

export default App;
