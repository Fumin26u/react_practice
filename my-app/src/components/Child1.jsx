import { memo } from "react";
import {Child2} from "./Child2";
import {Child3} from "./Child3";

const style = {
    hegiht: "200px",
    backgroundColor: "lightBlue",
    padding: "8px"
};

export const Child1 = memo((props) => {
    console.log("Child1 レンダリング");

    // propsから関数を分割代入
    const { onClickReset } = props; 

    return (
        <div style={style}>
            <p>Child1</p>
            {/* 渡された関数を実行 */}
            <button onClick={onClickReset}>リセット</button>
            <Child2 />
            <Child3 />
        </div>
    );
});