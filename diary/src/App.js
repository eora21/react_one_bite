import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import {useRef, useState} from "react";

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current++
    }

    setData([newItem, ...data,])
  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter(diary => diary.id !== targetId);
    setData(newDiaryList);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data} onRemove={onRemove}/>
    </div>
  );
}

export default App;
