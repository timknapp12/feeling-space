import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

export default (
    <Switch>
        <Route component={Login} path='/' exact/>
        <Route component={Home} path='/home'/>
    </Switch>
)