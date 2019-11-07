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
}