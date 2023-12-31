import {useState} from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
  });

  return (
    <div>
      <h2>오늘의 일기</h2>
      <div>
        <input value={state.author} onChange={(e) => {
          setState({
            author: e.target.value,
            content: state.content,
          });
        }}/>
      </div>
      <div>
        <textarea value={state.content} onChange={(e) => {
          setState({
            author: state.author,
            content: e.target.value,
          });
        }}/>
      </div>
    </div>
  );
}

export default DiaryEditor;