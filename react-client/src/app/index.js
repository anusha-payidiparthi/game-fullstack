import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/games/signup" exact component={SignUp} />
                <Route path="/games/login" exact component={Login} />
            </Switch>
        </Router>
    )
}

export default App