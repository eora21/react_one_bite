import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {New} from "./pages/New";
import {Edit} from "./pages/Edit";
import {Diary} from "./pages/Diary";
import React, {useEffect, useReducer, useRef} from "react";

const reducer = (state, action) => {
  let newState = [];

  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter(diary => diary.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map(diary => diary.id === action.data.id ? action.data : diary);
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  useEffect(() => {
    const localData = localStorage.getItem("diary");

    if (!localData) {
      return;
    }

    const diaryList = JSON.parse(localData);

    if (!diaryList.length) {
      return;
    }

    const maxId = diaryList.map(diary => parseInt(diary.id))
      .reduce((previous, current) => Math.max(previous, current));

    dataId.current = maxId + 1;
    dispatch({type: "INIT", data: diaryList});
  }, []);

  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current++,
        date: new Date(date).getTime(),
        content,
        emotion,
      }
    });
  };

  const onRemove = (targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    })
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      }
    });
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate, onEdit, onRemove}}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/new" element={<New/>}/>
              <Route path="/edit/:id" element={<Edit/>}/>
              <Route path="/diary/:id" element={<Diary/>}/>
            </Routes>
          </div>
        </BrowserRouter>트
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
