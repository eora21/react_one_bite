import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import {useRef, useState} from "react";
import {Lifecycle} from "./Lifecycle";

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

  const onEdit = (targetId, newContent) => {
    setData(
      data.map(
        diary => diary.id === targetId ?
          {...diary, content: newContent}
          :
          diary
      )
    )
  }

  return (
    <div className="App">
      <Lifecycle/>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
    </div>
  );
}

export default App;
