import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./TaskList.module.css";

export default function TaskList(props) {
  return (
    <Card className="bg-[#EAF6F6]">
      <li className={styles.task} key={props.id}>
        <h3 className="font-bold text-xl">{props.taskName}</h3>
        <span>{props.date}</span>
        <span>{props.note}</span>
        <span className="justify-end flex gap-3 ">
          <Button name="Delete" className="bg-[#FF6363]" />
          <Button name="Done" className="bg-[#66BFBF]" />
        </span>
      </li>
    </Card>
  );
}
