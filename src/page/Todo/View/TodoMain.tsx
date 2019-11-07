import React from 'react'
import { useModelState } from 'react-imvc/hook'
import { State } from '../Model'

import TodoItem from './TodoItem'

export default function TodoList() {
  const state = useModelState<State>();
  const hasActiveTodo = state.todoList.some((todo) => {
    return todo.completed === false
  })

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={ e => this.toggleAll(e) }
        checked={hasActiveTodo}
      />
      <label
        htmlFor="toggle-all"
      >
        Mark all as complete
      </label>
      <ul className="todo-list">
        {state.todoList.map((todo) => {
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        })}
      </ul>
    </section>
  )
}