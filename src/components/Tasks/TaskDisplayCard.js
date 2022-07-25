import React, { Fragment } from "react";
import styles from "./TaskDisplayCard.module.css";

import TaskList from "./TaskList";

export default function TaskDisplayCard(props) {
  return (
    <div className={styles["display-card"]}>
      {props.data?.map((task) => {
        return (
          <Fragment>
            <TaskList taskData={task} onDelete={props.onDelete} />
          </Fragment>
        );
      })}
      {Object.keys(props.data).length === 0 && (
        <h1 className={styles["empty-card"]}>No Tasks, Take Rest!</h1>
      )}
    </div>
  );
}
