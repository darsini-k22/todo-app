import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
   const classes=props.className+' '+styles.button;
  return (
    <button type={props.type} className={classes} onClick={props.onClick}>
      {props.name}
    </button>
  );
}
