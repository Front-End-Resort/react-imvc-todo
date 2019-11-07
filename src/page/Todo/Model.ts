import { BaseState, Action } from 'react-imvc'

interface Todo {
  id: string,
  title: string,
  completed: boolean
}

export type State = BaseState & {
  todoList: Todo[]
}

export const ADD_TODO: Action<State, Todo> = (state, todo) => {
  let todoList = state.todoList
  todoList.push(todo)
  
  return {
    ...state,
    todoList
  }
}

export const TOGGLE_ALL: Action<State, boolean> = (state, completed) => {
  let todoList = state.todoList

  todoList.forEach((todo) => {
    todo.completed = completed
  })
  
  return {
    ...state,
    todoList
  }
}

export const TOGGLE_ONE: Action<State, Todo> = (state, todo) => {
  let todoList = state.todoList

  todoList.forEach((t) => {
    if (t.id === todo.id) {
      t.completed = todo.completed
    }
  })

  return {
    ...state,
    todoList
  }
}