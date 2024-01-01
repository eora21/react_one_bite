import {useSearchParams} from "react-router-dom";

export const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  console.log(id, mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 Edit입니다.</p>
      <button onClick={() => setSearchParams({who: "eora21"})}>QS</button>
    </div>
  )
}