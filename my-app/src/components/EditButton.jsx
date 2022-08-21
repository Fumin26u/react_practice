import classes from "./Card.module.scss";
import {useContext} from "react";
// Contextのインポート
import {AdminFlagContext} from "./providers/AdminFlagProvider";

export const EditButton = () => {
    // context内のisAdminを取得
    const {isAdmin} = useContext(AdminFlagContext);
    // const {isAdmin} = props;
    console.log("Editbutton");

    // useContextの引数に、参照するContextを指定
    // const contextValue = useContext(AdminFlagContext);
    // console.log(contextValue);

    // isAdmin = falseの時ボタンを非アクティブ化
    return (
        <button className={classes.button} disabled={!isAdmin}>
            編集
        </button>
    );
};