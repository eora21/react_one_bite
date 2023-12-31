import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "김주호",
    content: "더미1",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "eora21",
    content: "더미2",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "김주호",
    content: "더미3",
    emotion: 2,
    created_date: new Date().getTime(),
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
