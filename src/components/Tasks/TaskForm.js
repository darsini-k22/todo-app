import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./TaskForm.module.css";



export default function TaskForm(props) {
  const [taskName, setTaskName] = useState("");
  const [date, SetDate] = useState("");
  const [note, setNote] = useState("");
  const [isTaskInput, setIsTaskInput] = useState(true);
  const [isDateInput, setIsDateInput] = useState(true);

  const cancelHandler = (e) => {
    e.preventDefault();
    setTaskName("");
    SetDate("");
    setNote("");
    setIsTaskInput(true);
    setIsDateInput(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      taskName: taskName,
      date: date,
      note: note,
    };
    // if (taskName.trim().length === 0 || date.trim().length === 0) {
    //   setIsTaskInput(false);
    //   setIsDateInput(false);
    //   return;
    // }

    if(taskName.trim().length === 0 && date.trim().length === 0 ){
      setIsTaskInput(false);
      setIsDateInput(false);
      return;
    }
    if (taskName.trim().length === 0) {
      setIsTaskInput(false);

      return;
    } else if (date.trim().length === 0) {
      setIsDateInput(false);
      return;
    }

    

    setIsTaskInput(true);
    setIsDateInput(true);
    props.onSubmit(data);
    setTaskName("");
    SetDate("");
    setNote("");

    console.log(taskName + " " + date + " " + note);
  };

  const deleteHandler = (e) => {
    const data = {
      taskName: taskName,
      date: date,
      note: note,
    };
    props.onDelete(data);
  };

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
            style={{ borderColor: !isTaskInput ? "red" : "black" }}
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
            style={{ borderColor: !isDateInput ? "red" : "black" }}
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
          <Button
            name="Cancel"
            onClick={cancelHandler}
            className="bg-[#FF6363] "
          />
          <Button
            type="submit"
            name="Add"
            onClick={deleteHandler}
            className="bg-[#66BFBF]"
          />
        </div>
      </div>
    </form>
  );
}
