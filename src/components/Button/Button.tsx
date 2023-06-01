import { ReactNode } from "react";
import classes from "./Button.module.css";

export default function Button(props: {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  className?: string;
  onClickEvent?: () => void;
}) {
  return (
    <div className={classes.buttons}>
      <button
        className={`${classes.button} ${props.className || ""}`}
        type={props.type || "button"}
      >
        {props.children}
      </button>

      <button
        className={`${classes.button} ${classes["btn--hover"]} ${
          props.className || ""
        }`}
        type={props.type || "button"}
        onClick={props.onClickEvent}
      >
        {props.children}
      </button>
    </div>
  );
}
