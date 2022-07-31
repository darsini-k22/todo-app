import { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TaskDisplayCard from "./components/Tasks/TaskDisplayCard";
import TaskForm from "./components/Tasks/TaskForm";
import LoginPage from "./components/Login/LoginPage"
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

  const deleteHandler = (taskid) => {
    setTaskData((prevstate) => {
      const updatedData = prevstate.filter((i) => {
        return i.id !== taskid;
      });
      return updatedData;
    });
  };

  return (
    <Fragment>
      {/* <Navbar />
      <TaskForm onSubmit={submitHandler} />
      <TaskDisplayCard data={taskData} onDelete={deleteHandler} /> */}
      <LoginPage/>
      {/* <CalenderView/> */}
      {/* <Footbar /> */}
    </Fragment>
  );
}

export default App;
