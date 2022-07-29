import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./TaskList.module.css";

export default function TaskList(props) {
  const [isDone, setIsDone] = useState(false);

  const doneHandler = (e) => {
    e.preventDefault();
    setIsDone(true);
  };

  const undoneHandler = (e) => {
    e.preventDefault();
    setIsDone(false);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    props.onDelete(props.taskData.id);
  };
  return (
    <Card className={isDone ? "bg-[#ffb5d1]" : "bg-[#cdecec]"}>
      {Object.keys(props.taskData).length === 0 && <h1>No data</h1>}
      <li className={styles.task} key={props.taskData.id}>
        <h3
          className="font-bold text-xl"
          style={{
            textDecorationLine: isDone ? "line-through" : null,
            textDecorationStyle: isDone ? "solid" : null,
          }}
        >
          {props.taskData.taskName}
        </h3>
        <span>{props.taskData.date}</span>
        <span>{props.taskData.note}</span>
        <span className="justify-end flex gap-3 ">
          <Button
            name="Delete"
            onClick={deleteHandler}
            className="bg-[#FF6363]"
          />
          <Button name="Done" onClick={doneHandler} className="bg-[#66BFBF]" />
          <Button
            name="Undone"
            onClick={undoneHandler}
            className="bg-[#66BFBF]"
          />
          {/* {!props.taskData.id && <h1>No data</h1>} */}
        </span>
      </li>
    </Card>
  );
}
