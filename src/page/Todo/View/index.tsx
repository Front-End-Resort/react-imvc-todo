import React from 'react'

import Layout from '../../../component/Layout'

import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoFooter from './TodoFooter'

export default function View() {
  return (
    <Layout>
      <TodoHeader />
      <TodoMain />
      <TodoFooter />
    </Layout>
  )
}