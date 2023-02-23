import React from 'react'
import CardT from "../ui/CardT"

const LoadedTasks = ({ completed, total}) => {
  return (
    <CardT>
      Grouped Tasks
      <div>
        <p>Number of Completed Tasks are: {completed}</p>
        <p>Number of Total Tasks are: {total} </p>
      </div>
    </CardT>
  )
}

export default LoadedTasks