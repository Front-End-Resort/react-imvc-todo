import React, { useState, useMemo, useEffect, useRef } from 'react'
import classNames from 'classnames'
import type { Todo } from '../Model'

const ENTER_KEY = 13
const ESCAPE_KEY = 27

interface Props {
  key: string
  todo: Todo
  editing : string | null
  onSave: (todoId: string, title: string) => void
  onDestory: (todoId: string) => void
  onEdit: (todoId: string)  => void
  onCancel: (todoId: string) => void
  onToggle: (todoId: string) => void
}

export default function TodoItem({
  todo,
  editing,
  onSave,
  onDestory,
  onEdit,
  onCancel,
  onToggle
}: Props) {
  const inputEl = useRef<HTMLInputElement>(null)
  const [editText, setEditText] = useState('')
  const isSelfEditing = useMemo(() => {
    return (
      editing !== null &&
      todo.id === editing
    )
  }, [todo, editing])
  
  useEffect(() => {
    if (isSelfEditing && inputEl.current) {
      inputEl.current.focus()
    }
  }, [isSelfEditing])

  const handleToggle = () => {
    onToggle(todo.id)
  }

  const handleDelete = () => {
    onDestory(todo.id)
  }

  const handleEdit = (): void => {
    setEditText(todo.title)
    onEdit(todo.id)
  }

  const handleSubmit = (): void => {
    const title = editText

    if (title) {
      onSave(todo.id, title)
      setEditText(title)
    } else {
      onDestory(todo.id)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEditText(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.keyCode === ESCAPE_KEY) {
      setEditText(todo.title)
      onCancel(todo.id)
    } else if (event.keyCode === ENTER_KEY) {
      handleSubmit()
    }
  }

  return (
    <li className={classNames({
      completed: todo.completed,
      editing: isSelfEditing
    })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <label onDoubleClick={handleEdit}>
          {todo.title}
        </label>
        <button className="destroy" onClick={handleDelete} />
      </div>
      <input
        ref={inputEl}
        className="edit"
        value={editText}
        onBlur={handleSubmit}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </li>
  )
}