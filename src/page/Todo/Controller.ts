import Controller from 'react-imvc/controller'
import * as Model from './Model'
import View from './View'

type Actions = Omit<typeof Model, 'initialState'>

export default class Todo extends Controller<Model.State, Actions> {
  View = View
  Model = Model

  preload = {
    index: "/css/index.css",
    base: "/css/base.css"
  }
  
  componentDidFirstMount() {
    let strList = localStorage.getItem('react-imvc-todo')
    let list = (strList && JSON.parse(strList)) || []
    this.store.actions.INITIAL_TODO_LIST(list)
    
    this.store.subscribe((data) => {
      localStorage.setItem('react-imvc-todo', JSON.stringify(data.currentState.todoList))
    })
  }
}