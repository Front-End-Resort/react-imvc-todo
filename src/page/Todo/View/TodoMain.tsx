import React, { useMemo } from 'react'
import { useModel } from 'react-imvc/hook'

import * as Model from '../Model'
import TodoItem from './TodoItem'

type Actions = Omit<typeof Model, 'initialState'>

export default function TodoList() {
  const [state, actions] = useModel<Model.State, Actions>();
  const hasActiveTodo = useMemo(() => state.todoList.some((todo) => {
    return todo.completed === false
  }), [state.todoList])
  const items = useMemo(() => {
    return state.todoList.map((todo) => {
      const onSave = (title: string) => {
        if (state.editing === todo.id) {
          const { UPDATE_EDITING_TITLE } = actions
          UPDATE_EDITING_TITLE(title)
        }
      }

      const onDestory = () => {
        const { REMOVE_TODO } = actions
        REMOVE_TODO(todo.id)
      }

      const onEdit = () => {
        if (state.editing === null) {
          const { START_EDITING } = actions
          START_EDITING(todo.id)
        }
      }

      const onChange = () => {
        if (state.editing === todo.id) {
          const { STOP_EDITING } = actions
          STOP_EDITING()
        }
      }

      const onToggle = () => {
        const { TOGGLE_ONE } = actions
        TOGGLE_ONE(todo.id)
      }

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
  }, [state.todoList])

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
        {items}
      </ul>
    </section>
  )
}