import React from 'react'

import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

export default function View() {
  return (
    <div>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </div>
  )
}