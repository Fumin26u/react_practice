// propsの受け渡し
export const ColoredMessage = (props) => {
    // console.log(props) // {color: "blue", message:"お元気ですか？"}
    // propsの分割代入 (props.が不要になる) (propsをdestructureするとも呼ぶ)
    const {color, children} = props;

    const contentStyle = {
        // colorがpropsで渡っているので変数にする
        color,
        fontSize: "20px"
    };

    // messageがpropsで渡っているので変数にする
    // return <p style={contentStyle}>{props.message}</p>;
    return <p style={contentStyle}>{children}</p>;
};