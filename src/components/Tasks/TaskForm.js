import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./TaskForm.module.css";

export default function TaskForm(props) {
  const [taskName, setTaskName] = useState("");
  const [date, SetDate] = useState("");
  const [note, setNote] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data={
      taskName:taskName,
      date:date,
      note:note
    }

    props.onSubmit(data);
    setTaskName('');
    SetDate('');
    setNote('');
    console.log(taskName + " " + date + " " + note);
  };

  const deleteHandler=(e)=>{
    const data={
      taskName:taskName,
      date:date,
      note:note
    }
    props.onDelete(data);
  }

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <div className={styles["task-form"]}>
        <div className={styles["task-form-name"]}>
          <label>Task Name</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
          />
        </div>
        <div className={styles["task-form-date"]}>
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              SetDate(e.target.value);
            }}
          />
        </div>
        <div className={styles["task-form-note"]}>
          <label>Note</label>
          <input
            type="text"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />
        </div>

        <div className={styles["task-form-button"]}>
          <Button name="Cancel" className="bg-[#FF6363] " />
          <Button type="submit" name="Add" onClick={deleteHandler} className="bg-[#66BFBF]" />
        </div>
      </div>
    </form>
  );
}
