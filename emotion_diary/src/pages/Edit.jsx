import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App";
import {DiaryEditor} from "../components/DiaryEditor";

export const Edit = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [originData, setOriginData] = useState()

  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length < 1) {
      return;
    }

    const targetDiary = diaryList.find(diary => parseInt(diary.id) === parseInt(id));

    if (!targetDiary) {
      navigate("/", {replace: true});
    }

    setOriginData(targetDiary);

  }, [diaryList, id]);

  return (
    <div className="Edit">
      {originData && <DiaryEditor isEdit={true} originData={originData}/>}
    </div>
  )
}