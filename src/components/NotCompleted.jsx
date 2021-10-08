import { useState } from '@hookstate/core'
import store from '../store'

const NotCompleted = () => {
  const { tasks } = useState(store)
  const notCompletedTasks = tasks.get().filter(task => !task.completed)

  const completeTask = task => {
    const taskIndex = tasks.get().indexOf(task)
    tasks.nested(taskIndex).completed.set(true)
  }

  return (
    <div>
      <h4 className="text-muted mb-4">Todo</h4>
      {notCompletedTasks.map((task, index) => (
        <div className="row row-cols-2 mb-3" key={index}>
          <div className="bg-light ms-2 lead p-2">{task.text}</div>
          <button
            className="btn btn-success btn-sm w-auto ms-3"
            onClick={() => completeTask(task)}
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  )
}

export default NotCompleted
