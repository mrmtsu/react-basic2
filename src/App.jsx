/*eslint react-hooks/exhaustive-deps: off */
import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const onClickSwitchShowFlag = () => setFaceShowFlag(!faceShowFlag);

  useEffect(() => {
    if (num <= 0) {
      return;
    }
    if (num % 3 === 0) {
      // faceShowFlagがfalseの時だけset関数を呼び出しtrueに変更する
      faceShowFlag || setFaceShowFlag(true);
    } else {
      // faceShowFlagがtrueの時だけset関数を呼び出しfalseに変更する
      faceShowFlag && setFaceShowFlag(false);
    }
    // eslint-disable-next-lint react-hooks/exhaustive-deps
  }, [num]);

  return (
    <div>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^ ^)</p>}
    </div>
  );
};
