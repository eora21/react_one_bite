import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App";
import {MyHeader} from "../components/MyHeader";
import {getStringDate} from "../util/Date";
import {MyButton} from "../components/MyButton";
import {emotionList} from "../util/Emotion";

export const Diary = () => {
  const {id} = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState()

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기`;
  }, []);

  useEffect(() => {
    if (diaryList.length < 1) {
      return;
    }

    const targetDiary = diaryList.find(diary => parseInt(diary.id) === parseInt(id));

    if (!targetDiary) {
      alert("없는 일기입니다.")
      navigate("/", {replace: true});
      return;
    }

    setData(targetDiary);
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">로딩 중입니다..</div>
  }

  const curEmotionData = emotionList.find(item => parseInt(item.emotion_id) === parseInt(data.emotion));

  return (
    <div className="DiaryPage">
      <MyHeader
        headText={`${getStringDate(new Date(data.date))} 기록`}
        leftChild={
          <MyButton text="< 뒤로가기" onClick={() => navigate(-1)}/>
        }
        rightChild={
          <MyButton text="수정하기" onClick={() => navigate(`/edit/${data.id}`)}/>
        }
      />
      <article>
        <section>
          <h4>오늘의 감정</h4>
          <div className={["diary_img_wrapper", `diary_img_wrapper_${data.emotion}`].join(" ")}>
            <img src={curEmotionData.emotion_img}/>
            <div className="emotion_descript">
              {curEmotionData.emotion_descript}
            </div>
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="diary_content_wrapper">
            <p>{data.content}</p>
          </div>
        </section>
      </article>
    </div>
  );
}