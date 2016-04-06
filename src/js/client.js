import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Profile from "./pages/Profile";


const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="login" component={Login}></Route>
            <Route path="profile" component={Profile}></Route>
        </Route>
    </Router>
,app);
