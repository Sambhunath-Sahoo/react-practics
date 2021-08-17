import React from 'react'
import MoviesPage from './component/MoviesPage';
import New from './component/New'
import { Switch, Route, Redirect, Router } from "react-router-dom";

function Main() {
    return (
        <div>
            <Switch>
                <Route path="/new" component={New} />
                <Route path="/" exact component={MoviesPage} />
            </Switch>
            
        </div>
    )
}

export default Main
