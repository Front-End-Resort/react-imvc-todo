import { BaseState, Action } from 'react-imvc'
import { Showing } from './constants'

export interface Todo {
  id: string,
  title: string,
  completed: boolean
}

export type State = BaseState & {
  todoList: Todo[]
  completedTodoIds: string[]
  currentShowing: Showing
  editing: string | null
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
  let todoList = state.todoList.slice()
  todoList.unshift(todo)
  
  return {
    ...state,
    todoList
  }
}

export const REMOVE_TODO: Action<State, string> = (state, todoId) => {
  const todoList = state.todoList
  let newTodoList: Todo[] = []

  todoList.forEach((todo) => {
    if (todo.id !== todoId) {
      newTodoList.push(todo)
    }
  })

  return {
    ...state,
    todoList: newTodoList
  }
}

export const REMOVE_COMPLETED_TODO: Action<State> = (state) => {
  const todoList = state.todoList
  let newTodoList: Todo[] = []

  todoList.forEach((todo) => {
    if (!todo.completed) {
      newTodoList.push(todo)
    }
  })

  return {
    ...state,
    todoList: newTodoList
  }
}

export const TOGGLE_ALL: Action<State, boolean> = (state, completed) => {
  let todoList = state.todoList

  todoList = todoList.map((todo) => {
    todo.completed = completed
    return todo
  })
  
  return {
    ...state,
    todoList
  }
}

export const TOGGLE_ONE: Action<State, string> = (state, todoId) => {
  let todoList = state.todoList

  todoList = todoList.map((t) => {
    if (t.id === todoId) {
      t.completed = !t.completed
    }
    return t
  })

  return {
    ...state,
    todoList
  }
}

export const TOGGLE_SHOWING: Action<State, Showing> = (state, showing) => {
  return {
    ...state,
    currentShowing: showing
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
  let todoList = state.todoList
  
  todoList = todoList.map((t) => {
    if (t.id === state.editing) {
      t.title = title
    }

    return t
  })

  return {
    ...state
  }
}