import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./TaskList.module.css";

export default function TaskList(props) {
  const [isDone, setIsDone] = useState(false);
  const [filterData, setFilterData] = useState(props.taskData);

  const doneHandler = (e) => {
    e.preventDefault();
    setIsDone(true);
  };

  const undoneHandler = (e) => {
    e.preventDefault();
    setIsDone(false);
  };

  // const deleteHandler = (e) => {
  //   e.preventDefault();
  //   const filteredData=props.taskData.filter((items)=>{return(items.id!==)})
  //   setFilterData(filteredData);

  // };
  return (
    <Card className="bg-[#EAF6F6]">
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
            value={props.taskData.id}
            className="bg-[#FF6363]"
          />
          <Button name="Done" onClick={doneHandler} className="bg-[#66BFBF]" />
          <Button
            name="Undone"
            onClick={undoneHandler}
            className="bg-[#66BFBF]"
          />
        </span>
      </li>
    </Card>
  );
}
