import NotCompleted from './components/NotCompleted'
import Completed from './components/Completed'
import { tasks } from './store'

const App = () => {
  let inputValue = ''

  const addTask = event => {
    event.preventDefault()
    tasks.push({text: inputValue, completed: false})
    inputValue = ''
  }

  return (
    <div className="container mt-5">
    <h1 className="mb-4">Whattodo!</h1>

    <div className="container">

      <form className="mb-5" onSubmit={addTask}>
        <input
          type="text"
          className="p-1 w-25"
          value={inputValue}
          onChange={event => inputValue = event.target.value}
          placeholder="Add task here..."
          required
        />

        <button className="btn btn-primary ms-3" type="submit">
          Add task
        </button>
      </form>
    </div>

    <div className="row row-cols-2">
      <NotCompleted/>
      <Completed/>
    </div>
  </div>
)}

export default App
