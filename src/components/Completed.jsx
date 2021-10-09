import { tasks } from '../store'

const Completed = () => {
  const completedTasks = tasks.filter(task => task.completed)

  const removeTask = task => {
    const taskIndex = tasks.indexOf(task)
    tasks.splice(taskIndex, 1)
  }

  return (
    <div>
      <h4 className="text-muted mb-4">Completed</h4>
      {completedTasks.map((task, index) => (
        <div className="row row-cols-2 mb-3" key={index}>
          <div className="bg-light ms-2 text-muted lead p-2 text-decoration-line-through">{task.text}</div>
          <button
            className="btn btn-danger btn-sm w-auto ms-3 px-3"
            onClick={() => removeTask(task)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  )
}

export default Completed
