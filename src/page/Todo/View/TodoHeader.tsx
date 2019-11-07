import React from 'react'

export default function TodoHeader() {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        ref="newField"
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={handleKeyDown}
        autoFocus={true}
      />
    </header>
  )
}