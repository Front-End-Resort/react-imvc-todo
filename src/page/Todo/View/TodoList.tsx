import React from 'react'
import { useModelState } from 'react-imvc/hook'
import { State } from '../Model'

import TodoItem from './TodoItem'

export default function TodoList() {
  const state = useModelState<State>();
  return (
    <section>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label
        htmlFor="toggle-all"
      >
      </label>
      <ul className="todo-list">
        {
          state.todoList.map((todo) => {
            return (
              <TodoItem key={todo.id} {...todo} />
            )
          })
        }
      </ul>
    </section>
  )
}