import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom'

//Components
import Login from './login'
import Register from './register'
import Todo from './todo'

//Private Route executes when there is Token in LocalStorage

const PrivateRoute = ({component: Component,...props}) => {
    const token = localStorage.getItem("token")
return(
    <Route 
    {...props}
    render={
        () => {
            if(token !== null) {
                return <Component {...props} />
            }
            else{
                return <Redirect to="/login" />
            }
        }
    }   
    />
)
}

//NonPrivate Routes

const NonPrivateRoute = ({component: Component,...props}) => {
    const token = localStorage.getItem("token")
    return(
        <Route
        {...props}
        
        render={() => {
            if(token === null || token === ""){
                return <Component {...props} />
            }
            else{
                return <Redirect to="/dashboard" />
            }
        }}
        />
    )
}

const AppRoutes = () => {
return(
    <Router>
        <Switch>
            <NonPrivateRoute exact path="/" component={Login} />
            <NonPrivateRoute exact path="/login" component={Login} />
            <NonPrivateRoute exact path="/register" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Todo} />
        </Switch>
    </Router>
)
}

export default AppRoutes;