import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import {Favorite} from './pages/Favorite/Favorite'


function App() {

  const afterAuth = 
  <Switch>
    <Route path='/favorite' component={Favorite}/>
    <Route path='/' component={Home}/>
  </Switch>

  return (
    <>
      <Switch>
        <Route path='/auth' component={Auth} />
        {localStorage.getItem('token') ? afterAuth : <Redirect to='/auth'/>}
      </Switch>
    </>
  )
}

export default App
