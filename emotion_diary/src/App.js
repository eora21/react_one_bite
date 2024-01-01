import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {New} from "./pages/New";
import {Edit} from "./pages/Edit";
import {Diary} from "./pages/Diary";
import {RouteTest} from "./components/RouteTest";
import React, {useReducer, useRef} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    case "REMOVE": {
      return state.filter(diary => diary.id !== action.targetId);
    }
    case "EDIT": {
      return state.map(diary => diary.id === action.data.id ? action.data : diary);
    }
    default:
      return state;
  }
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
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
              <Route path="/edit" element={<Edit/>}/>
              <Route path="/diary/:id" element={<Diary/>}/>
            </Routes>
            <RouteTest/>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
