import {EditButton} from "./EditButton";
import classes from "./Card.module.scss";

export const Card = () => {
    console.log("Card");
    return (
        <div className={classes.container}>
            <p>山田太郎</p>
            <EditButton />
        </div>
    );
};