import { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TaskDisplayCard from "./components/Tasks/TaskDisplayCard";
import TaskForm from "./components/Tasks/TaskForm";
const dummyData = [
  {
    id: 1,
    taskName: "Task 1",
    date: "2022-06-22",
    note: "Urgent",
  },
  {
    id: 2,
    taskName: "Task 2",
    date: "2022-4-9",
    note: "Finish it",
  },
];

function App() {
  const [taskData, setTaskData] = useState(dummyData);

  const submitHandler = (data) => {
    setTaskData((prevdata) => {
      return [data, ...prevdata];
    });
    console.log(taskData);
  };

  const deleteHandler = (data) => {
    let tdata = taskData.filter((item) => {
      return data.id !== item.id;
    });
    setTaskData(tdata);
  };
  return (
    <Fragment>
      <Header />
      <TaskForm onSubmit={submitHandler} />
      <TaskDisplayCard data={taskData} onDelete={deleteHandler} />
    </Fragment>
  );
}

export default App;
