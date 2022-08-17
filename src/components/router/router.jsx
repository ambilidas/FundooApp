import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Signin from '../../pages/signIn/signin'
import Signup from '../../pages/signUp/signup'
import Dashboard from '../../pages/Dashboard/Dashboard'
function Router() {
  return (
    <div>
        <BrowserRouter >
                <Switch>
                    <Route exact path="/" component={Signin} />
                    <Route path="/SignUp" component={Signup} />
                    <Route path="/Dashboard" component={Dashboard} />
                </Switch>
        </BrowserRouter>
    </div>
  )
}

export default Router