// CSS Moduleのインポート
import classes from "./CssModules.module.scss";

export const CssModules = () => {
    return (
        // CSS ModulesのCSS適用 (インポート名.クラス名)
        <div className={classes.container}>
            <p className={classes.title}>CSS Moduleです</p>
            <button className={classes.button}>ボタン</button>
        </div>
    );
};