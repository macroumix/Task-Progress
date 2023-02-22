import React from 'react';
import ProgressBar from './ProgressBar';

const TaskBar = (props) => {
    const TASKS = props.tasks
    const allTaskValues = [];
    const doneTaskValues = [];

    TASKS.map((task) => (
        task.tasks.map(t => (
            allTaskValues.push(t.value)
        ))
      ))

      TASKS.map((task) => (
        task.tasks.map(t => (
          t.checked === true ? doneTaskValues.push(t.value) : null
        ))
      ))

      const totalTasks = allTaskValues.reduce((sum,i) => sum + i, 0)
      const doneTasks = doneTaskValues.reduce((sum,i) => sum + i, 0)

      const percentDone = doneTasks/totalTasks * 100
      const bgcolor= "rgb(50,50,200)"

  return (
    <>
    <div>{percentDone.toFixed(2)}%</div>
    <div>Completed Tasks = {doneTasks}</div>
    <div>Total Tasks = {totalTasks}</div>
    <ProgressBar bgcolor={bgcolor} completed={percentDone}/>
    </>
  )
}

export default TaskBar;