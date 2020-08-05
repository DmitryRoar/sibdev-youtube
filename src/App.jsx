import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Auth} from './components/Auth/Auth'

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Switch>
        <Route path='/' component={Auth} />
      </Switch>
    </>
  )
}

export default App
