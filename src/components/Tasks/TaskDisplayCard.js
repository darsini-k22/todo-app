import React from "react";
import styles from './TaskDisplayCard.module.css';


import TaskList from "./TaskList";

export default function TaskDisplayCard(props) {
  
  
  return (
    <div className={styles['display-card']}>
     
        {props.data?.map((task) => {
          return (
            <TaskList key={task.id} id={task.id} taskName={task.taskName} date={task.date} note={task.note}/>
          );
        })}
   
    </div>
  );
}
