import {useEffect, useState} from "react";

export const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{padding: 20}}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest/>}
    </div>
  )
}

const UnmountTest = () => {
  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    }
  }, []);

  return (
    <>Unmount Testing Component</>
  )
}
