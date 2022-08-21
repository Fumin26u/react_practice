import { useState } from "react";
import { Emotion } from "./components/Emotion";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import { CssModules } from "./components/CssModules";
import { ColoredMessage } from "./ColoredMessage";

export const App = () => {
    // Stateの定義
    const [num, setNum] = useState(0);

    const onClickButton = () => {
        // setNum(num + 1);
        setNum((prev) => prev + 1);
    };

    // CSSオブジェクト
    // const contentPinkStyle = {
    //     color: "pink",
    //     fontSize: "20px"
    // }

    return (
        // return以降は「1つのタグ」で囲われている必要がある 
        // (またはFragmentというモジュールをインポートするか、空のタグで囲む必要がある)
        <div>
            {/* CSSの書き方 {{}} で囲み値は""で囲む */}
            <h1 style={{ color: "red" }}>Hello World</h1>
            {/* ↓タグで囲むと通常のHTMLのpタグのように使える。この際propsで受け取るには.childrenを使う。 */}
            <ColoredMessage /* propsとしてColoredMessage関数に渡される→ */ color="blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です！</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <CssModules />
            <StyledJsx />
            <StyledComponents />
            <Emotion />
        </div>
    );
};