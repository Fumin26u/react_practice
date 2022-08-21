import { useCallback, useState, memo } from "react";
import {Child1} from "./components/Child1";
import {Child4} from "./components/Child4";

// memoを使いコンポーネントをメモ化
export const App = memo(() => {
    console.log("Appレンダリング");

    const [num, setNum] = useState(0);
    const onClickButton = () => {
        setNum((prev) => prev + 1);
    };
    
    // useCallbackを使い関数をメモ化
    const onClickReset = useCallback(() => {
        setNum(0);
    }, []);

    return (
        <>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <Child1 onClickReset={onClickReset} />
            <Child4 />
        </>
    );
});