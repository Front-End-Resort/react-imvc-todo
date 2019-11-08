import React, { useState, useMemo, useCallback } from 'react'
import classNames from 'classnames'
import * as Model from '../Model'

const ENTER_KEY = 13
const ESCAPE_KEY = 27

interface Props {
  key: string
  todo: Model.Todo
  editing : string | null
  onSave: (title: string) => void
  onDestroy: () => void
  onEdit: ()  => void
  onCancel: () => void
  onToggle: () => void
}

export default function TodoItem({
  todo,
  editing,
  onSave,
  onDestroy,
  onEdit,
  onCancel,
  onToggle
}: Props) {
  const [editText, setEditText] = useState(todo.title)
  const isSelfEditing = useMemo(() => {
    return (
      editing !== null &&
      todo.id === editing
    )
  }, [todo, editing])

  const handleEdit = (): void => {
    onEdit()
    setEditText(todo.title)
  }

  const handleSubmit = (): void => {
    const title = editText.slice()

    if (title) {
      onSave(title)
      setEditText(title)
    } else {
      onDestroy()
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEditText(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.keyCode === ESCAPE_KEY) {
      setEditText(todo.title)
      onCancel()
    } else if (event.keyCode === ENTER_KEY) {
      this.handleSubmit(event);
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
          onChange={onToggle}
        />
        <label onDoubleClick={handleEdit}>
          {todo.title}
        </label>
        <button className="destroy" onClick={onDestroy} />
      </div>
      <input
        ref="editField"
        className="edit"
        value={editText}
        onBlur={handleSubmit}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </li>
  )
}