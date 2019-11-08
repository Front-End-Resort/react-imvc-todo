import React, { useMemo } from 'react'
import classNames from 'classnames'
import { Showing } from '../constants'
import { useModel } from 'react-imvc/hook'

import * as Model from '../Model'

type Actions = Omit<typeof Model, 'initialState'>

export default function TodoFooter() {
  const [state, actions] = useModel<Model.State, Actions>()
  const count = useMemo(() => {
    let count = 0
    state.todoList.forEach((todo) => {
      if (!todo.completed) {
        count++
      }
    })
    return count
  }, [state.todo])
  const completedCount = useMemo(() => {
    let count = 0
    state.todoList.forEach((todo) => {
      if (todo.completed) {
        count++
      }
    })
    return count
  }, [state.todo])
  const activeTodoWord = useMemo(() => {
    return count > 1 ? 'items' : 'item'
  }, [count])
  const clearButton = useMemo(() => {
    const handleClick = () => {
      const { REMOVE_COMPLETED_TODO } = actions
      REMOVE_COMPLETED_TODO()
    }
    return completedCount > 0 ?
    <button
      className="clear-completed"
      onClick={handleClick}>
      Clear completed
    </button> :
    null
  }, [completedCount])

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong> {activeTodoWord} left
      </span>
      <ul className="filters">
        <li>
          <a
            className={classNames({selected: state.currentShowing === Showing.ALL})}>
              All
          </a>
        </li>
        {' '}
        <li>
          <a
            className={classNames({selected: state.currentShowing === Showing.ACTIVE})}>
              Active
          </a>
        </li>
        {' '}
        <li>
          <a

            className={classNames({selected: state.currentShowing === Showing.COMPLETED})}>
              Completed
          </a>
        </li>
      </ul>
      {clearButton}
    </footer>
  )
}