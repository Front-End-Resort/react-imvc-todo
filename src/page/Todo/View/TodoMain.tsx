import React, { useMemo } from 'react'
import { useModel } from 'react-imvc/hook'
import { Showing, State, Actions } from 'Todo'

import TodoItem from './TodoItem'

export default function TodoList() {
  const [state, actions] = useModel<State, Actions>();

  const hasActiveTodo = state.todoList.some((todo) => {
    return todo.completed === false
  })

  const items = useMemo(() => {
    let tl = state.todoList.slice()

    if (state.currentShowing === Showing.ACTIVE) {
      tl = tl.filter((todo) => {
        return !todo.completed
      })
    }

    if (state.currentShowing === Showing.COMPLETED) {
      tl = tl.filter((todo) => {
        return todo.completed
      })
    }

    return tl.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          editing={state.editing}
          onSave={onSave}
          onDestroy={onDestory}
          onEdit={onEdit}
          onCancel={onChange}
          onToggle={onToggle}
        />
      )
    })
  }, [state.todoList, state.currentShowing, state.editing])

  // item
  const onSave = (todoId: string, title: string) => {
    if (state.editing === todoId) {
      const { UPDATE_EDITING_TITLE, STOP_EDITING } = actions
      UPDATE_EDITING_TITLE(title)
      STOP_EDITING()
    }
  }

  const onDestory = (todoId: string) => {
    const { REMOVE_TODO, STOP_EDITING } = actions
    REMOVE_TODO(todoId)
    STOP_EDITING()
  }

  const onEdit = (todoId: string) => {
    if (state.editing === null) {
      const { START_EDITING } = actions
      START_EDITING(todoId)
    }
  }

  const onChange = (todoId: string) => {
    if (state.editing === todoId) {
      const { STOP_EDITING } = actions
      STOP_EDITING()
    }
  }

  const onToggle = (todoId: string) => {
    const { TOGGLE_ONE } = actions
    TOGGLE_ONE(todoId)
  }

  // all
  const toggleAll = () => {
    const { TOGGLE_ALL } = actions
    const completed = !state.todoList.every((todo) => {
      return todo.completed
    })
    TOGGLE_ALL(completed)
  }

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={toggleAll}
        checked={hasActiveTodo}
      />
      <label
        htmlFor="toggle-all"
      >
        Mark all as complete
      </label>
      <ul className="todo-list">
        {items}
      </ul>
    </section>
  )
}