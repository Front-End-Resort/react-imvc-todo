import React from 'react'

export default function TodoFooter() {

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{''}</strong> {'todo'} left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={'todo'}>
              All
          </a>
        </li>
        {' '}
        <li>
          <a
            href="#/active"
            className={'todo'}>
              Active
          </a>
        </li>
        {' '}
        <li>
          <a
            href="#/completed"
            className={'todo'}>
              Completed
          </a>
        </li>
      </ul>
      {'todo'}
    </footer>
  )
}