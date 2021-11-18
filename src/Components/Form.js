import React, { useRef } from 'react'

const Form = ({ todoInput, setTodoInput, todos, setTodos, setStatus }) => {

  const inputRef = useRef()

  const todoInputHandler = e => {
    setTodoInput(e.target.value)
  }

  const submitTodoHandler = e => {
    e.preventDefault()
    setTodos([
      ...todos, {
        text: todoInput,
        completed: false,
        id: Math.floor(Math.random() * 1000)
      }
    ])
    setTodoInput('')
    inputRef.current.focus()
  }

  const statusTodoHandler = e => {
    setStatus(e.target.value)
  }

  return (
      <form>
      <input 
        ref={inputRef}
        value={todoInput} 
        onChange={todoInputHandler} 
        type="text" 
        className="todo-input" 
      />

      <button 
        onClick={submitTodoHandler} 
        className="todo-button" 
        type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select onChange={statusTodoHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form