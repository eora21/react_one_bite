import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {MyHeader} from "./MyHeader";
import {MyButton} from "./MyButton";

const getStringDate = date => {
  return date.toISOString().slice(0, 10);
}

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + "/assets/emotion1.png",
    emotion_descript: "완전 좋음",
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + "/assets/emotion2.png",
    emotion_descript: "좋음",
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + "/assets/emotion3.png",
    emotion_descript: "그럭저럭",
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + "/assets/emotion4.png",
    emotion_descript: "나쁨",
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + "/assets/emotion5.png",
    emotion_descript: "끔찍함",
  },
]

export const DiaryEditor = () => {
  const navigate = useNavigate();

  const [date, setDate] = useState(getStringDate(new Date()));

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText="새 일기 쓰기"
        leftChild={
          <MyButton
            text="<뒤로 가기"
            onClick={() => navigate(-1)}/>}/>
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input
              className="input_date"
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}/>
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((emotion) => (
              <div key={emotion.emotion_id}>
                {emotion.emotion_descript}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}