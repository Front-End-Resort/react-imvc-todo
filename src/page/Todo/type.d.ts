import { BaseState } from 'react-imvc'
import * as Model from './Model'

export type Actions = Omit<typeof Model, 'initialState'>

export { default as Ctrl } from './Controller'

export type State = BaseState & {
  todoList: Todo[]
  completedTodoIds: string[]
  currentShowing: Showing
  editing: string | null
}

export enum Showing {
  ALL,
  ACTIVE,
  COMPLETED
}

export interface Todo {
  id: string,
  title: string,
  completed: boolean
}