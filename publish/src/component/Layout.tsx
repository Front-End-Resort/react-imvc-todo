import React from 'react'
import { Style } from 'react-imvc/component'
import ErrorBoundary from 'react-imvc/component/ErrorBoundary'

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <React.Fragment>
      <div className="todoapp" style={{ height: "100%", background: "#fff" }}>
        <Style name="index" />
        <Style name="base" />
        { children }
      </div>
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="http://github.com/remojansen/">Remo H. Jansen</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </React.Fragment>
  )
}