import React from 'react'
import MoviesPage from './component/MoviesPage';
import New from './component/New'
import { Switch, Route, Redirect, Router, BrowserRouter } from "react-router-dom";

function Main() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/new" component={New} />
                    <Route path="/" exact component={MoviesPage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Main
