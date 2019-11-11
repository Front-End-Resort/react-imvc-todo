import React, { useState } from 'react'
import { useModelActions } from 'react-imvc/hook'
import * as Model from '../Model'

type Actions = Omit<typeof Model, 'initialState'>

const ENTER_KEY = 13

function uuid() {
  let i: number, random: number
  let uuid = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
      .toString(16);
  }

  return uuid;
}

export default function TodoHeader() {
  const [title, setTitle] = useState('')
  const actions = useModelActions<Model.State, Actions>()

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const t = title

    if (event.keyCode === ENTER_KEY && title !== '') {
      event.preventDefault()
      const { ADD_TODO } = actions
      const todo: Model.Todo = {
        id: uuid(),
        title: t,
        completed: false
      }

      ADD_TODO(todo)
      setTitle('')
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        value={title}
        placeholder="What needs to be done?"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        autoFocus={true}
      />
    </header>
  )
}