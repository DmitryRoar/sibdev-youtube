import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import {Home} from './pages/Home/Home'


function App() {
  return (
    <>
      <Switch>
        <Route path='/auth' component={Auth} />
        {localStorage.getItem('token') ?  <Route path='/' component={Home}/> : <Redirect to='/auth'/>}
      </Switch>
    </>
  )
}

export default App
