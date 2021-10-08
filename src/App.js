import NotCompleted from './components/NotCompleted'
import Completed from './components/Completed'
import { useState } from '@hookstate/core'
import store from './store'

const App = () => {
  const { tasks } = useState(store)
  const inputValue = useState('')

  const addTask = event => {
    event.preventDefault()
    tasks.merge([{text: inputValue.get(), completed: false}])
    inputValue.set('')
  }

  return (
    <div className="container mt-5">
    <h1 className="mb-4">Whattodo!</h1>

    <div className="container">

      <form className="mb-5" onSubmit={addTask}>
        <input
          type="text"
          className="p-1 w-25"
          value={inputValue.get()}
          onChange={event => inputValue.set(event.target.value)}
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
