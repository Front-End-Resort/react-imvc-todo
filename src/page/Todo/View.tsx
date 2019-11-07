import React from 'react'
import Ctrl from './Controller'
import * as Model from './Model'

interface ViewProps {
  state: Model.State,
  ctrl: Ctrl
}
export default function View({}: ViewProps) {
  return (
    <div>Hello World!</div>
  )
}