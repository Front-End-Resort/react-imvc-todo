import type { BaseState, Action } from 'react-imvc'
import { Showing } from './constant'

export type State = BaseState & {
  todoList: Todo[]
  completedTodoIds: string[]
  currentShowing: Showing
  editing: string | null
}

export interface Todo {
  id: string,
  title: string,
  completed: boolean
}
export const initialState = {
  todoList: [],
  completedTodoIds: [],
  currentShowing: Showing.ALL,
  editing: null
}

export const INITIAL_TODO_LIST: Action<State, Todo[]> = (state, todoList) => {
  return {
    ...state,
    todoList
  }
}

export const ADD_TODO: Action<State, Todo> = (state, todo) => {
  let todoList = [todo, ...state.todoList]

  return {
    ...state,
    todoList
  }
}

export const REMOVE_TODO: Action<State, string> = (state, todoId) => {
  const todoList = state.todoList.filter(todo => todo.id !== todoId)

  return {
    ...state,
    todoList
  }
}

export const REMOVE_COMPLETED_TODO: Action<State> = (state) => {
  const todoList = state.todoList.filter(todo => !todo.completed)

  return {
    ...state,
    todoList
  }
}

export const TOGGLE_ALL: Action<State, boolean> = (state, completed) => {
  let todoList = state.todoList.map(todo => {
    return {
      ...todo,
      completed
    }
  })

  return {
    ...state,
    todoList
  }
}

export const TOGGLE_ONE: Action<State, string> = (state, todoId) => {
  let todoList = state.todoList.map(todo => {
    if (todo.id !== todoId) return todo

    return {
      ...todo,
      completed: !todo.completed
    }
  })

  return {
    ...state,
    todoList
  }
}

export const TOGGLE_SHOWING: Action<State, Showing> = (state, currentShowing) => {
  return {
    ...state,
    currentShowing
  }
}

export const START_EDITING: Action<State, string> = (state, editing) => {
  return {
    ...state,
    editing
  }
}

export const STOP_EDITING: Action<State> = (state) => {
  return {
    ...state,
    editing: null
  }
}


export const UPDATE_EDITING_TITLE: Action<State, string> = (state, title) => {
  let todoList = state.todoList.map(todo => {
    if (todo.id !== state.editing) return todo

    return {
      ...todo,
      title
    }
  })

  return {
    ...state,
    todoList
  }
}